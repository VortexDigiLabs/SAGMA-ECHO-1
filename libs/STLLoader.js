( function () {
	class STLLoader extends THREE.Loader {
		constructor( manager ) {
			super( manager );
		}
		load( url, onLoad, onProgress, onError ) {
			const scope = this;
			const loader = new THREE.FileLoader( this.manager );
			loader.setPath( this.path );
			loader.setResponseType( 'arraybuffer' );
			loader.setRequestHeader( this.requestHeader );
			loader.setWithCredentials( this.withCredentials );
			loader.load( url, function ( text ) {
				try {
					onLoad( scope.parse( text ) );
				} catch ( e ) {
					if ( onError ) {
						onError( e );
					} else {
						console.error( e );
					}
					scope.manager.itemError( url );
				}
			}, onProgress, onError );
		}
		parse( data ) {
			function isBinary( data ) {
				const reader = new DataView( data );
				const face_size = ( 32 / 8 * 3 ) + ( ( 32 / 8 * 3 ) * 3 ) + ( 16 / 8 );
				const n_faces = reader.getUint32( 80, true );
				const expect = 80 + ( 32 / 8 ) + ( n_faces * face_size );
				if ( expect === data.byteLength ) {
					return true;
				}
				const solid = [ 115, 111, 108, 105, 100 ];
				for ( let i = 0; i < 5; i ++ ) {
					if ( solid[ i ] !== reader.getUint8( i ) ) return true;
				}
				let block = '';
				for ( let i = 0; i < Math.min( data.byteLength, 1000 ); i ++ ) {
					block += String.fromCharCode( reader.getUint8( i ) );
				}
				return block.indexOf( 'facet' ) === - 1;
			}
			function parseBinary( data ) {
				const reader = new DataView( data );
				const faces = reader.getUint32( 80, true );
				let r, g, b, hasColors = false, colors;
				let defaultR, defaultG, defaultB, alpha;
				for ( let index = 0; index < 80 - 10; index ++ ) {
					if ( reader.getUint32( index, false ) == 0x434F4C4F &&
						reader.getUint8( index + 4 ) == 0x52 &&
						reader.getUint8( index + 5 ) == 0x3D ) {
						hasColors = true;
						colors = new Float32Array( faces * 3 * 3 );
						defaultR = reader.getUint8( index + 6 ) / 255;
						defaultG = reader.getUint8( index + 7 ) / 255;
						defaultB = reader.getUint8( index + 8 ) / 255;
						alpha = reader.getUint8( index + 9 ) / 255;
					}
				}
				let dataOffset = 84;
				let faceLength = 12 * 4 + 2;
				const geometry = new THREE.BufferGeometry();
				const vertices = new Float32Array( faces * 3 * 3 );
				const normals = new Float32Array( faces * 3 * 3 );
				for ( let face = 0; face < faces; face ++ ) {
					const start = dataOffset + face * faceLength;
					const normalX = reader.getFloat32( start, true );
					const normalY = reader.getFloat32( start + 4, true );
					const normalZ = reader.getFloat32( start + 8, true );
					if ( hasColors ) {
						const packedColor = reader.getUint16( start + 48, true );
						if ( ( packedColor & 0x8000 ) === 0 ) {
							r = ( packedColor & 0x1F ) / 31;
							g = ( ( packedColor >> 5 ) & 0x1F ) / 31;
							b = ( ( packedColor >> 10 ) & 0x1F ) / 31;
						} else {
							r = defaultR;
							g = defaultG;
							b = defaultB;
						}
					}
					for ( let i = 1; i <= 3; i ++ ) {
						const vertexstart = start + i * 12;
						const componentIdx = ( face * 3 * 3 ) + ( ( i - 1 ) * 3 );
						vertices[ componentIdx ] = reader.getFloat32( vertexstart, true );
						vertices[ componentIdx + 1 ] = reader.getFloat32( vertexstart + 4, true );
						vertices[ componentIdx + 2 ] = reader.getFloat32( vertexstart + 8, true );
						normals[ componentIdx ] = normalX;
						normals[ componentIdx + 1 ] = normalY;
						normals[ componentIdx + 2 ] = normalZ;
						if ( hasColors ) {
							colors[ componentIdx ] = r;
							colors[ componentIdx + 1 ] = g;
							colors[ componentIdx + 2 ] = b;
						}
					}
				}
				geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
				geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
				if ( hasColors ) {
					geometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
				}
				return geometry;
			}
			function parseASCII( data ) {
				const geometry = new THREE.BufferGeometry();
				const patternSolid = /solid([\s\S]*?)endsolid/g;
				const patternFace = /facet([\s\S]*?)endfacet/g;
				let faceCounter = 0;
				const patternFloat = /[\s]+([+-]?(?:\d+.\d+|\d+.|\d+|.\d+)(?:[eE][+-]?\d+)?)/.source;
				const patternVertex = new RegExp( 'vertex' + patternFloat + patternFloat + patternFloat, 'g' );
				const patternNormal = new RegExp( 'normal' + patternFloat + patternFloat + patternFloat, 'g' );
				const vertices = [];
				const normals = [];
				let normal = [ 0, 0, 0 ];
				let result;
				while ( ( result = patternFace.exec( data ) ) !== null ) {
					let vertexCountPerFace = 0;
					let normalCountPerFace = 0;
					const text = result[ 0 ];
					while ( ( result = patternNormal.exec( text ) ) !== null ) {
						normal[ 0 ] = parseFloat( result[ 1 ] );
						normal[ 1 ] = parseFloat( result[ 2 ] );
						normal[ 2 ] = parseFloat( result[ 3 ] );
						normalCountPerFace ++;
					}
					while ( ( result = patternVertex.exec( text ) ) !== null ) {
						vertices.push( parseFloat( result[ 1 ] ), parseFloat( result[ 2 ] ), parseFloat( result[ 3 ] ) );
						normals.push( normal[ 0 ], normal[ 1 ], normal[ 2 ] );
						vertexCountPerFace ++;
						end:
					}
					if ( normalCountPerFace !== 1 ) {
						console.error( 'STLLoader: Something is wrong with normal count in facet ' + faceCounter );
					}
					if ( vertexCountPerFace !== 3 ) {
						console.error( 'STLLoader: Something is wrong with vertex count in facet ' + faceCounter );
					}
					faceCounter ++;
				}
				geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
				geometry.setAttribute( 'normal', new THREE.Float32BufferAttribute( normals, 3 ) );
				return geometry;
			}
			return isBinary( data ) ? parseBinary( data ) : parseASCII( new TextDecoder().decode( data ) );
		}
	}
	THREE.STLLoader = STLLoader;
} )();
