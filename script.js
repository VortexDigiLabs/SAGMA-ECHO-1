// ============================================================================
// SAGMA ECHO - UNIFIED V2 INDUSTRIAL 3D TWIN PLATFORM
// Southern African Grain Milling Academy
// Features: NVIDIA CAD Shaders, 6-Category Fleet, OpenCascade STEP/IGES WASM,
// 5-Language i18n, Strict WebGL Disposal, Embedded Spec PDFs & IndexedDB.
// ============================================================================

// 1. ABSOLUTE TOP PRIORITY: PREVENT BROWSER DEFAULT DRAG & DROP DOWNLOADING
['dragover', 'dragenter', 'dragleave', 'drop'].forEach(evt => {
  window.addEventListener(evt, e => { e.preventDefault(); e.stopPropagation(); }, false);
  document.addEventListener(evt, e => { e.preventDefault(); e.stopPropagation(); }, false);
});

// 2. EMBEDDED AUTHORITATIVE CALLOUT DATASETS
const DIAGRAM_69B_CALLOUTS = [{"tag": "01", "id": "split_hood", "meshTarget": "Casing_Head_SplitHood_Removable", "title": "Split Removable Upper Hood", "section": "Head Assembly", "source": "SAGMA Diagram 69(b) [Header]", "desc": "The entire upper housing is split longitudinally and can be removed for inspection, belt splicing, and pulley maintenance without disturbing the vertical casing legs.", "safety": "Ensure motor is locked out (LOTO) and mechanical belt clamp is locked before loosening hood clamps.", "color": "#ffaa00", "camPreset": {"cam": [0.85, 2.2, 1.35], "look": [0, 2.05, 0]}}, {"tag": "02", "id": "crowned_pulley", "meshTarget": "Pulley_Head_Drive_Crowned", "title": "Crowned Head Drive Pulley (391 mm)", "section": "Head Assembly", "source": "SAGMA Wheat/Maize Mod 2 Sec 1.1.1 & CAD", "desc": "Machined with a convex camber (crowned profile) to run true and naturally center the belt. 391 mm diameter derived directly from SolidWorks CAD geometry.", "safety": "Inspect lagging for wear; uneven wear causes severe tracking drift and casing friction.", "color": "#00d2ff", "camPreset": {"cam": [0.75, 2.1, 1.2], "look": [0, 2, 0]}}, {"tag": "03", "id": "discharge_saddle", "meshTarget": "Casing_Head_Lower_With_Saddle", "title": "Centrifugal Discharge Saddle (Grain)", "section": "Discharge & Flow", "source": "SAGMA Diagram 69(b) [Head Callout]", "desc": "Curved aerodynamic saddle positioned underneath the head pulley guiding tangential material release directly into the discharge spout without recirculation.", "safety": "Worn or warped saddles allow grain to fall back down the boot (backlegging), driving up power draw.", "color": "#ff8800", "camPreset": {"cam": [0.95, 1.95, 1.15], "look": [0.15, 1.9, 0]}}, {"tag": "04", "id": "wear_plates", "meshTarget": "Discharge_Spout_Centrifugal", "title": "Wear Plates & Rubber Deflector", "section": "Discharge & Flow", "source": "SAGMA Diagram 69(b) [Head Callout]", "desc": "Heavy-duty abrasion-resistant steel liner plates and a flexible yet highly durable rubber deflector prevent high-velocity grain impact damage at the head spout.", "safety": "Check deflector flexibility quarterly; hardened rubber cracks and permits grain kernel shatter.", "color": "#ff6600", "camPreset": {"cam": [1.1, 1.9, 1.2], "look": [0.35, 1.85, 0]}}, {"tag": "05", "id": "drive_motor", "meshTarget": "Drive_Electric_Motor_Gearbox", "title": "Gearmotor & Mounting Platform", "section": "Drive Kinematics", "source": "SAGMA Diagram 69(b) [Drive Callout]", "desc": "Shaft-mounted gearmotor with flexible coupling on head mounting bracket. For power ratings above 55 kW, an integrated starting clutch is prescribed.", "safety": "Confirm torque arm buffer condition and oil levels before full-load commissioning.", "color": "#00e676", "camPreset": {"cam": [-0.95, 2.1, 1.3], "look": [-0.2, 2.05, 0]}}, {"tag": "06", "id": "head_sensor", "meshTarget": "Sensor_Head_Thermal_Slip_Detector", "title": "Head Thermal & Belt Slip Sensor", "section": "Safety & Fire Protection", "source": "SAGMA Wheat/Maize Mod 2 & OSHA 1910.272", "desc": "Monitors rotational speed differential between drive pulley and belt to prevent frictional heating and hot-spot fire runaway in dust-laden atmospheres.", "safety": "Mandatory interlock: auto-shuts down elevator when belt slip exceeds 10% to prevent grain dust deflagration.", "color": "#ff3366", "camPreset": {"cam": [0.65, 2.1, 0.95], "look": [0, 2.05, 0]}}, {"tag": "07", "id": "trunking_legs", "meshTarget": "Casing_Trunking_UpLeg", "title": "Twin-Leg Trunking & Angle Flanges", "section": "Casing Legs", "source": "SAGMA Diagram 69(b) [Leg Callout]", "desc": "Airtight dual vertical casing ducts joined by angle flanges at modular 2.4m intervals, providing structural rigidity, chimney draft containment, and dust isolation.", "safety": "Maintain gasket integrity at all angle flange joints to prevent combustible dust release.", "color": "#00f2fe", "camPreset": {"cam": [1.5, 1.3, 1.9], "look": [0, 1.15, 0]}}, {"tag": "08", "id": "antistatic_belt", "meshTarget": "Belt_Strand_UpLeg", "title": "Antistatic Belt (DIN 22104)", "section": "Conveying Assembly", "source": "SAGMA Diagram 69(b) [Leg Callout]", "desc": "Multi-ply polyester/polyamide fabric core with conductive antistatic rubber covers conforming to DIN 22104 (< 3x10^8 ohms electrical resistance).", "safety": "Never replace with non-antistatic conveyor belting; static charge accumulation creates an immediate explosion hazard in dry dust environments.", "color": "#ffaa00", "camPreset": {"cam": [0.85, 1.1, 1.25], "look": [0, 1, 0]}}, {"tag": "09", "id": "deep_buckets", "meshTarget": "Bucket_UpLeg_01", "title": "Deep High-Capacity Buckets (300 mm Pitch)", "section": "Conveying Assembly", "source": "SAGMA Maize Mod 4 Ch 9 / Wheat Mod 5 Ch 8", "desc": "Deep buckets designed for whole wheat/maize allowing rapid centrifugal discharge. Spaced at verified 300 mm (0.30m) pitch along the 18.3m continuous loop (58 buckets total).", "safety": "Check elevator bolts torque with lock-nuts; detached buckets cause catastrophic boot chokes and sparks.", "color": "#ff9900", "camPreset": {"cam": [0.65, 1.05, 0.95], "look": [0.1, 0.95, 0]}}, {"tag": "10", "id": "rotation_frame", "meshTarget": "Rotation_Frame_Tie_Brace", "title": "Floor Rotation & Tie Frame", "section": "Structural Bracing", "source": "SAGMA Diagram 69(b) [Middle Callout]", "desc": "Structural steel tie frame securing the elevator casing to intermediate concrete floor slabs at Z ~ 5.0m elevation, preventing lateral buckling and sway.", "safety": "Ensure tie rods are torqued and allow thermal axial expansion while eliminating wind/vibration deflection.", "color": "#88aacc", "camPreset": {"cam": [1.2, 1.25, 1.5], "look": [0, 1.15, 0]}}, {"tag": "11", "id": "boot_takeup", "meshTarget": "Boot_TakeUp_Screw_L", "title": "Twin Screw Take-Up Tensioner", "section": "Boot & Tensioning", "source": "SAGMA Diagram 69(b) [Boot Callout]", "desc": "Internal crowned boot pulley mounted on sliding bearing blocks adjusted via twin vertical ACME threaded rods to eliminate belt slack and maintain true tracking.", "safety": "Equal tensioning on both left and right screws is critical; uneven turns cause belt to wander and rub against trunking.", "color": "#00d2ff", "camPreset": {"cam": [0.85, 0.45, 1.15], "look": [0, 0.35, 0]}}, {"tag": "12", "id": "boot_feed", "meshTarget": "Boot_Feed_Spout_Intake", "title": "Boot Feed Spout (Down-Leg Infeed)", "section": "Boot & Feeding", "source": "SAGMA Diagram 69(b) & Mod 2 Sec 1.1.1", "desc": "Infeed material enters on the down-leg side so descending/ascending buckets scoop grain upward smoothly without back-pressure stalling or dragging excess stock through boot sump.", "safety": "Never feed on the wrong side; up-leg infeed jams incoming grain against advancing bucket lips.", "color": "#ffaa00", "camPreset": {"cam": [-0.95, 0.45, 1.05], "look": [-0.2, 0.35, 0]}}, {"tag": "13", "id": "cleanout_doors", "meshTarget": "Boot_Cleanout_Door_Front", "title": "Tool-Operated Cleanout Doors", "section": "Safety & Maintenance", "source": "SAGMA Diagram 69(b) [Boot Callout]", "desc": "Removable cleanout panels secured with tool-operated fasteners for clearing chokes and inspecting boot pulley condition.", "safety": "OSHA 1910.147 / 1910.272 MANDATE: Never open cleanout doors before complete electrical LOTO and mechanical belt anti-runback clamping. Always use timber canes to poke grain chokes \u2014 NEVER hands!", "color": "#dc2626", "camPreset": {"cam": [0.75, 0.4, 0.95], "look": [0, 0.3, 0]}}];
const SATAKE_CALLOUTS = [{"tag": "01", "id": "2.1", "meshTarget": "Satake_Feed_Inlet_Magnet", "title": "Grain Feed Inlet & Permanent Magnet", "section": "INLET & FEED ASSEMBLY", "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)", "desc": "Conditioned whole maize enters the top inlet hopper. The permanent magnet catches tramp ferrous metal before entry, protecting internal slotted screens and high-speed rotor beaters from catastrophic impact damage.", "safety": "Inspect magnet face at every shift stop. Never use bare hands to remove metal splinters to prevent severe lacerations.", "specs": "Feed capacity 2.0\u20137.0 t/h (VBF 5A: 2\u20133 t/h; VBF 7B: 3\u20134 t/h; VBF 10A: 4\u20137 t/h); high-intensity permanent plate/drum magnet.", "tolerance": "Rare-earth magnetic trap rated >10,000 Gauss. Plate clearance 25 mm.", "anchor": [0.35, 1.8, 0.0], "color": "#005A36", "camPreset": {"cam": [1.5499999999999998, 2.2, 1.4], "look": [0.35, 1.8, 0.0]}}, {"tag": "02", "id": "2.2", "meshTarget": "Satake_Inlet_Screw_Feeder", "title": "Motorized Inlet Screw Feeder & Compact Clutch", "section": "INLET & FEED ASSEMBLY", "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)", "desc": "A horizontal motorized feed screw propels incoming maize into the lower housing, automatically regulating feed volume based on main motor ammeter load.", "safety": "Electrically interlocked with main motor ammeter load; automatically halts feed upon current overload spikes.", "specs": "Independent motorized variable-speed scroll drive; compact single-unit scroll design.", "tolerance": "Variable flight pitch 65 mm. Radial barrel flight clearance: 2.0 mm (+/- 0.5 mm).", "anchor": [0.3, 1.45, 0.0], "color": "#005A36", "camPreset": {"cam": [1.5, 1.85, 1.4], "look": [0.3, 1.45, 0.0]}}, {"tag": "03", "id": "2.3", "meshTarget": "Satake_Distribution_Scroll", "title": "Vertical Distribution Scroll", "section": "ROTOR & SCOURING CHAMBER", "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)", "desc": "Positioned at the base of the scouring chamber, this rotating spiral scroll catches incoming grain from the feed screw and forces it vertically upward into the narrow friction chamber against gravity.", "safety": "Lock-Out / Tag-Out (LOTO) mandatory before manual cleanout of lower scroll intake cavity.", "specs": "Heavy-duty cast-iron vertical spiral scroll attached to the lower rotor shaft.", "tolerance": "Spiral flight lead angle: 18 deg. Bottom throat radial clearance: 3.5 mm nominal.", "anchor": [0.0, 0.45, 0.0], "color": "#005A36", "camPreset": {"cam": [1.2, 0.8500000000000001, 1.4], "look": [0.0, 0.45, 0.0]}}, {"tag": "04", "id": "2.4", "meshTarget": "Satake_Vertical_Steel_Rotor", "title": "Cylindrical Steel Rotor (Split Segment Design)", "section": "ROTOR & DRIVE KINEMATICS", "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)", "desc": "Revolves vertically inside the screen cylinder to turn the bed of grain, creating intense kernel-to-kernel and kernel-to-screen friction to peel outer pericarp (bran) skins and detach the germ.", "safety": "Lock-Out / Tag-Out (LOTO) mandatory before opening access panels; contact with the revolving rotor causes severe injury.", "specs": "Smooth cylindrical steel rotor operating at 465 RPM; split segment design (dismantles into two halves for maintenance).", "tolerance": "Rotor dynamic balance tolerance: < 2.5 g mm/kg. Operating velocity: 465 RPM (+/- 5 RPM).", "anchor": [0.0, 1.05, 0.0], "color": "#005A36", "camPreset": {"cam": [1.2, 1.4500000000000002, 1.4], "look": [0.0, 1.05, 0.0]}}, {"tag": "05", "id": "2.5", "meshTarget": "Satake_Beater_Bars", "title": "Detachable Steel Beater Bars (Qty 2)", "section": "ROTOR & SCOURING CHAMBER", "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)", "desc": "Extends the full height of the rotor. As the rotor turns at 465 RPM, these beaters tumble rising maize kernels against the slotted screens, popping the germ free from its cavity with minimal endosperm flouring.", "safety": "Verify beater bar mounting bolt torque (85 Nm) and check for edge wear before closing screen housing.", "specs": "Two hardened-steel, rigid impact/agitator bars mounted on opposite sides of the rotor.", "tolerance": "Dual-opposed mounting at 180 deg. Radial tip-to-screen clearance: 11.0 mm (+/- 1.0 mm).", "anchor": [0.18, 1.1, 0.0], "color": "#005A36", "camPreset": {"cam": [1.38, 1.5, 1.4], "look": [0.18, 1.1, 0.0]}}, {"tag": "06", "id": "2.6", "meshTarget": "Satake_Slotted_Screens", "title": "Multifaceted Slotted Screen Cartridge & Rib Cage", "section": "SCREEN ASSEMBLY", "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)", "desc": "Encloses the scouring chamber. The slotted apertures allow scoured bran, light germ snips, and attrition dust to pass into the exhaust hood while retaining larger debranned endosperm kernels (samp) inside.", "safety": "Inspect screen apertures regularly for foreign object damage or wear. Use protective gloves to handle sharp edges.", "specs": "8 multifaceted vertical slotted screen panels enclosed in a heavy-gauge steel rib cage and outer clamping frames.", "tolerance": "8-segment polygonal cage. Slotted aperture width: 1.0 mm x 12.0 mm (calibrated for maize).", "anchor": [-0.27, 1.05, 0.0], "color": "#005A36", "camPreset": {"cam": [0.9299999999999999, 1.4500000000000002, 1.4], "look": [-0.27, 1.05, 0.0]}}, {"tag": "07", "id": "2.7", "meshTarget": "Satake_Slotted_Screens", "title": "Independently Adjustable Resistance Bars", "section": "RETARDATION & PRESSURE CONTROL", "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)", "desc": "Positioned along the vertical screen walls, these bars retard the swirling movement of grain, increasing internal friction severity to match specific maize hardness or moisture conditions.", "safety": "Adjust resistance bolts evenly across all quadrants to prevent uneven screen barrel pressure.", "specs": "Rigid alloy resistance bars mounted inside the screen jacket with external adjusting bolts.", "tolerance": "External adjusting screw travel: 0\u201315 mm protrusion into grain stream.", "anchor": [0.0, 1.25, 0.25], "color": "#005A36", "camPreset": {"cam": [1.2, 1.65, 1.65], "look": [0.0, 1.25, 0.25]}}, {"tag": "08", "id": "2.8", "meshTarget": "Satake_Top_Outlet_Weighted_Flap", "title": "Overtails Discharge Chute & Weighted Retention Flap", "section": "DISCHARGE CONTROL", "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)", "desc": "Located at the top outlet. Retards the exit of debranned maize to maintain the exact internal pressure required for complete degerming; the auto-weight module monitors motor amperage to adjust pressure dynamically.", "safety": "Keep hands clear of discharge flap mechanism during automatic CCU modulation.", "specs": "Counter-weighted hinged discharge gate with optional CCU Auto-Weight control module.", "tolerance": "Flap counterweight moment arm: 250 mm. Gate seal clearance: 1.5 mm neoprene cushion.", "anchor": [-0.35, 1.54, 0.03], "color": "#005A36", "camPreset": {"cam": [0.85, 1.94, 1.43], "look": [-0.35, 1.54, 0.03]}}, {"tag": "09", "id": "2.9", "meshTarget": "Satake_Air_Induction_Fan", "title": "Air Induction Fan & Central Hollow Rotor Duct", "section": "ASPIRATION & AIR SYSTEM", "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)", "desc": "The fan forces cool air down through the hollow drive shaft and out behind the beater bars, sweeping across the grain bed to cool stock and carry loose bran and germ through the slotted screens into the offal exhaust.", "safety": "Verify negative pressure airflow before starting feed to prevent dust accumulation and overheating.", "specs": "Central hollow drive shaft with air discharge slots located directly behind each beater bar; negative pressure pneumatic exhaust ducting.", "tolerance": "Air volume required: 30\u201345 m3/min @ 120\u2013150 mm WG static negative pressure.", "anchor": [0.0, 0.2, -0.28], "color": "#005A36", "camPreset": {"cam": [1.2, 0.6000000000000001, 1.1199999999999999], "look": [0.0, 0.2, -0.28]}}, {"tag": "10", "id": "2.10", "meshTarget": "Satake_Drive_Motor_75kW", "title": "Machine Base Frame & 75 kW Main Belt Drive", "section": "BASE & DRIVE KINEMATICS", "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)", "desc": "Cast-steel base frame housing bottom thrust bearings and drive pulleys, supplying rotational power to drive the vertical rotor shaft at 465 RPM under heavy friction loading.", "safety": "V-belt guards must remain securely bolted at all times during operation.", "specs": "Bottom-mounted 75 kW electric motor (3-Phase, 50 Hz); multi-V-belt drive with heavy protective guard enclosure.", "tolerance": "Motor: 75 kW, 1,480 RPM nominal. Multi V-belt reduction ratio: 3.18:1 (output 465 RPM).", "anchor": [0.35, 0.32, 0.0], "color": "#005A36", "camPreset": {"cam": [1.5499999999999998, 0.72, 1.4], "look": [0.35, 0.32, 0.0]}}];

// 3. MULTI-LANGUAGE DICTIONARY (i18n) - 5 OFFICIAL SOUTHERN AFRICAN & SADC LANGUAGES
const TRANSLATIONS = {
  "en-ZA": {
    "header.subtitle": "SOUTHERN AFRICAN GRAIN MILLING ACADEMY",
    "nav.library": "Equipment Library",
    "nav.upload": "Upload Machine / CAD",
    "nav.calculations": "Calculations",
    "nav.studioMode": "Studio Dark",
    "loto.active": "LOTO: ACTIVE (OPERATIONAL)",
    "loto.isolated": "LOTO: ZERO ENERGY ISOLATED",
    "hud.fps": "FPS / Render",
    "hud.triangles": "Triangles",
    "hud.parts": "Mesh Nodes",
    "hud.status": "3D State",
    "tools.reset": "Reset",
    "tools.wireframe": "Wireframe",
    "tools.hotspots": "Hotspots",
    "tools.explode": "Explode",
    "tools.shader": "Shader:",
    "tools.specs": "Specs & PDF",
    "shader.default": "Original Textures",
    "shader.stainless": "Brushed Stainless",
    "shader.castiron": "Cast Iron Industrial",
    "shader.sagma": "SAGMA Paint (#005A36)",
    "shader.xray": "X-Ray Diagnostic",
    "drawer.tabSpecs": "Specifications",
    "drawer.tabPDF": "OEM Spec PDF",
    "drawer.tabPart": "Part Inspector",
    "drawer.telemetryTitle": "Technical Specifications",
    "drawer.safetyTitle": "Safety & Compliance",
    "spec.category": "Category",
    "spec.manufacturer": "Manufacturer",
    "spec.model": "Model Series",
    "spec.throughput": "Nominal Throughput",
    "spec.speed": "Speed / Drive",
    "spec.power": "Installed Motor",
    "spec.syllabus": "Syllabus Reference",
    "pdf.open": "Open ↗",
    "pdf.hint": "Official engineering document served from local CAD from WEB directory.",
    "inspector.selectHint": "Click any part or 3D hotspot badge on the model to inspect its technical details, safety requirements, and maintenance tolerances.",
    "inspector.specs": "Component Specs & Tolerances",
    "inspector.safety": "Safety Requirements",
    "lib.title": "SAGMA Equipment Library",
    "lib.sub": "Browse 6 authoritative grain milling machinery categories with dedicated 3D twin workspaces.",
    "lib.searchPlaceholder": "Search machines, models, OEMs (e.g. Bühler, Satake, MDDK, plansifter)...",
    "cat.all": "All Machinery (24)",
    "cat.c1": "01 - Degerming & Debranning",
    "cat.c2": "02 - Roller Mills",
    "cat.c3": "03 - Plansifters & Sifting",
    "cat.c4": "04 - Purifiers & Finishing",
    "cat.c5": "05 - Screenroom & Cleaning",
    "cat.c6": "06 - Conveying & Dust",
    "upload.title": "Universal Machine & CAD Uploader",
    "upload.sub": "Add custom machinery models (.step, .stp, .iges, .glb, .gltf, .obj, .stl) and vendor spec PDFs.",
    "upload.dropTitle": "Drag & Drop 3D Model or CAD File Here",
    "upload.dropSub": "Supports .step, .stp, .iges, .glb, .gltf, .obj, .stl and optional .pdf spec sheet",
    "upload.browse": "Browse Files",
    "upload.fieldName": "Machine Name",
    "upload.fieldOEM": "Manufacturer / OEM",
    "upload.fieldCat": "Milling Category",
    "upload.fieldShader": "Default Material Shader",
    "upload.saveBtn": "Process & Launch 3D Twin",
    "badge.cadReady": "3D CAD Ready",
    "badge.meshTwin": "Mesh Twin",
    "badge.cadConverted": "CAD Converted"
  },
  "af-ZA": {
    "header.subtitle": "SUIDER-AFRIKAANSE GRAANMEULE AKADEMIE",
    "nav.library": "Toerusting Biblioteek",
    "nav.upload": "Laai Masjien / CAD Op",
    "nav.calculations": "Berekeninge",
    "nav.studioMode": "Donker Modus",
    "loto.active": "LOTO: AKTIEF (BEDRYF)",
    "loto.isolated": "LOTO: NUL-ENERGIE GEÏSOLEER",
    "hud.fps": "BPS / Weergawe",
    "hud.triangles": "Driehoeke",
    "hud.parts": "Gaas Nodisse",
    "hud.status": "3D Status",
    "tools.reset": "Herstel",
    "tools.wireframe": "Draadraam",
    "tools.hotspots": "Warmpunte",
    "tools.explode": "Ontplof",
    "tools.shader": "Materiaal:",
    "tools.specs": "Spesifikasies & PDF",
    "shader.default": "Oorspronklike Teksture",
    "shader.stainless": "Geborselde Vlekvrye Staal",
    "shader.castiron": "Gietyster Nywerheid",
    "shader.sagma": "SAGMA Verf (#005A36)",
    "shader.xray": "X-Straal Diagnosties",
    "drawer.tabSpecs": "Spesifikasies",
    "drawer.tabPDF": "OEM Spesifikasie PDF",
    "drawer.tabPart": "Komponent Inspekteur",
    "drawer.telemetryTitle": "Tegniese Spesifikasies",
    "drawer.safetyTitle": "Veiligheid & Voldoening",
    "spec.category": "Kategorie",
    "spec.manufacturer": "Vervaardiger",
    "spec.model": "Model Reeks",
    "spec.throughput": "Nominale Deurset",
    "spec.speed": "Spoed / Aandrywing",
    "spec.power": "Geïnstalleerde Motor",
    "spec.syllabus": "Leerplan Verwysing",
    "pdf.open": "Maak Oop ↗",
    "pdf.hint": "Amptelike ingenieursdokument bedien vanaf plaaslike CAD from WEB gids.",
    "inspector.selectHint": "Klik op enige onderdeel of 3D-kenteken om tegniese besonderhede en veiligheidsmaatreëls te sien.",
    "inspector.specs": "Komponent Spesifikasies",
    "inspector.safety": "Veiligheidsvereistes",
    "lib.title": "SAGMA Toerusting Biblioteek",
    "lib.sub": "Blaai deur 6 gesaghebbende graanmaalmasjinerie kategorieë met interaktiewe 3D-ruimtes.",
    "lib.searchPlaceholder": "Soek masjiene, modelle, vervaardigers...",
    "cat.all": "Alle Masjinerie (24)",
    "cat.c1": "01 - Ontkieming & Ontsemeling",
    "cat.c2": "02 - Walsmeule",
    "cat.c3": "03 - Plansifters & Sif",
    "cat.c4": "04 - Suiweraars & Afwerking",
    "cat.c5": "05 - Skoonmaak & Sifting",
    "cat.c6": "06 - Vervoer & Stofhantering",
    "upload.title": "Universele Masjien & CAD Oplaaier",
    "upload.sub": "Voeg pasgemaakte masjineriemodelle en OEM PDF-spesifikasies by.",
    "upload.dropTitle": "Sleep & Los 3D-model of CAD-lêer Hier",
    "upload.dropSub": "Ondersteun .step, .stp, .iges, .glb, .gltf, .obj, .stl en opsionele .pdf",
    "upload.browse": "Blaai Lêers",
    "upload.fieldName": "Masjiennaam",
    "upload.fieldOEM": "Vervaardiger / OEM",
    "upload.fieldCat": "Meulkategorie",
    "upload.fieldShader": "Standaard Materiaal",
    "upload.saveBtn": "Verwerk & Begin 3D Tweeling",
    "badge.cadReady": "3D CAD Gereed",
    "badge.meshTwin": "Gaas Tweeling",
    "badge.cadConverted": "CAD Omgeskakel"
  },
  "zu-ZA": {
    "header.subtitle": "ISIKHUNGO SOKUGAYA OKUSOZWENI LWASE-AFRIKA ESEZANSI",
    "nav.library": "Umtapo Wemishini",
    "nav.upload": "Layisha Umshini / CAD",
    "nav.calculations": "Izibalo Zomshini",
    "nav.studioMode": "Imodi Emnyama",
    "loto.active": "LOTO: IYASEBENZA (IYAHAMBA)",
    "loto.isolated": "LOTO: AMANDLA ACINSHIWE",
    "hud.fps": "FPS / Ukukhombisa",
    "hud.triangles": "Onxantathu",
    "hud.parts": "Izakhi Zomshini",
    "hud.status": "Isimo se-3D",
    "tools.reset": "Setha Kabusha",
    "tools.wireframe": "Uhlaka Lwentambo",
    "tools.hotspots": "Amaphuzu",
    "tools.explode": "Hlakaza",
    "tools.shader": "Impahla:",
    "tools.specs": "Imininingwane & PDF",
    "shader.default": "Imibala Yangempela",
    "shader.stainless": "Insimbi Engagqwali",
    "shader.castiron": "Insimbi Yokwenza Izinto",
    "shader.sagma": "Upende we-SAGMA (#005A36)",
    "shader.xray": "Ukubona Ngaphakathi (X-Ray)",
    "drawer.tabSpecs": "Imininingwane",
    "drawer.tabPDF": "I-PDF Yochwepheshe",
    "drawer.tabPart": "Umhloli Wengxenye",
    "drawer.telemetryTitle": "Imininingwane Yezobuchwepheshe",
    "drawer.safetyTitle": "Ukuphepha Nemigomo",
    "spec.category": "Umkhakha",
    "spec.manufacturer": "Umenzi Womshini",
    "spec.model": "Uhlobo Lomshini",
    "spec.throughput": "Amandla Okusebenza",
    "spec.speed": "Isivinini Sokujikeleza",
    "spec.power": "Amandla Enjini",
    "spec.syllabus": "Isifundo se-SAGMA",
    "pdf.open": "Vula ↗",
    "pdf.hint": "Idokhumenti yezobuchwepheshe esuka kufolda ye-CAD from WEB.",
    "inspector.selectHint": "Chofoza noma iyiphi ingxenye kuseyili ye-3D ukuze uhlole imininingwane nokuphepha.",
    "inspector.specs": "Imininingwane Yengxenye",
    "inspector.safety": "Imithetho Yokuphepha",
    "lib.title": "Umtapo Wemishini we-SAGMA",
    "lib.sub": "Bheka imikhakha engu-6 yemishini yokugaya okusanhlamvu enezindawo ze-3D.",
    "lib.searchPlaceholder": "Sesha imishini, amagama, abenzi...",
    "cat.all": "Yonke Imishini (24)",
    "cat.c1": "01 - Ukususa Inhliziyo Nesikhumba",
    "cat.c2": "02 - Imishini Yokugaya Yamarola",
    "cat.c3": "03 - Amapulensifta Nesihlungo",
    "cat.c4": "04 - Izihlanzi Zenyama Yembewu",
    "cat.c5": "05 - Igumbi Lokuhlanza Imbewu",
    "cat.c6": "06 - Ukuthutha Nothuli",
    "upload.title": "Ukulayisha Umshini ne-CAD",
    "upload.sub": "Faka imodeli ye-3D kanye nama-PDF ochwepheshe.",
    "upload.dropTitle": "Donsela Imodeli ye-3D Noma Ifayela le-CAD Lapha",
    "upload.dropSub": "Isekela i-.step, .stp, .iges, .glb, .obj, .stl ne-.pdf",
    "upload.browse": "Cinga Amafayela",
    "upload.fieldName": "Igama Lomshini",
    "upload.fieldOEM": "Umenzi / OEM",
    "upload.fieldCat": "Umkhakha Wokugaya",
    "upload.fieldShader": "Uhlobo Lwempahla",
    "upload.saveBtn": "Qala Umshini ku-3D",
    "badge.cadReady": "I-CAD ye-3D Ilungile",
    "badge.meshTwin": "Imodeli ye-Mesh",
    "badge.cadConverted": "I-CAD Ipendukisiwe"
  },
  "st-ZA": {
    "header.subtitle": "AKATEMI YA HO SILA DITHORO YA AFRIKA BORWA",
    "nav.library": "Laeborari ya Mechini",
    "nav.upload": "Kenya Mochini / CAD",
    "nav.calculations": "Dipalo tsa Mochini",
    "nav.studioMode": "Sebopeho sa Lefifi",
    "loto.active": "LOTO: E SEBETSA (E BULA)",
    "loto.isolated": "LOTO: MATLA A TIMILWE",
    "hud.fps": "FPS / Pono",
    "hud.triangles": "Dikhutlotharo",
    "hud.parts": "Dikarolo tsa Mochini",
    "hud.status": "Boemo ba 3D",
    "tools.reset": "Qala Hape",
    "tools.wireframe": "Moralo wa Mehala",
    "tools.hotspots": "Dintlha tsa Pono",
    "tools.explode": "Qhaqha Mochini",
    "tools.shader": "Thepa:",
    "tools.specs": "Dintlha le PDF",
    "shader.default": "Mmala wa Nnete",
    "shader.stainless": "Tshepe e sa Ruting",
    "shader.castiron": "Tshepe e Thata",
    "shader.sagma": "Pente ya SAGMA (#005A36)",
    "shader.xray": "Pono e Bonetsang (X-Ray)",
    "drawer.tabSpecs": "Dintlha tsa Mochini",
    "drawer.tabPDF": "PDF ya Mochini",
    "drawer.tabPart": "Mohlahlobi wa Karolo",
    "drawer.telemetryTitle": "Dintlha tsa Setegeniki",
    "drawer.safetyTitle": "Tshireletso le Melao",
    "spec.category": "Lekala",
    "spec.manufacturer": "Moetsi",
    "spec.model": "Mohuta wa Mochini",
    "spec.throughput": "Bokhoni ba ho Sila",
    "spec.speed": "Lebelo la ho Potoloha",
    "spec.power": "Matla a Motlakase",
    "spec.syllabus": "Thuto ya SAGMA",
    "pdf.open": "Bula ↗",
    "pdf.hint": "Tokomane ya setegeniki e tswang foldareng ya CAD from WEB.",
    "inspector.selectHint": "Kgetha karolo efe kapa efe setshwantshong sa 3D ho bona tlhahisoleseding le tshireletso.",
    "inspector.specs": "Dintlha tsa Karolo",
    "inspector.safety": "Melao ya Tshireletso",
    "lib.title": "Laeborari ya Mechini ya SAGMA",
    "lib.sub": "Sheba mekgahlelo e 6 ya mechini ya ho sila dithoro ka pono ya 3D.",
    "lib.searchPlaceholder": "Batla mechini, mabitso, baetsi...",
    "cat.all": "Mechini Yohle (24)",
    "cat.c1": "01 - Ho Tlosa Bokahare le Letlalo",
    "cat.c2": "02 - Mechini ya ho Sila ya Dithupa",
    "cat.c3": "03 - Dihloli tsa Mabele",
    "cat.c4": "04 - Dihwekisi tsa Phofo",
    "cat.c5": "05 - Kamore ya ho Hloekisa Dithoro",
    "cat.c6": "06 - Dipalangoang le Lerole",
    "upload.title": "Kenya Mochini o Mofsha le CAD",
    "upload.sub": "Kenya difaele tsa 3D CAD le tokomane ya PDF.",
    "upload.dropTitle": "Hulela Faele ya 3D kapa CAD Mona",
    "upload.dropSub": "E amohela .step, .stp, .iges, .glb, .obj, .stl le .pdf",
    "upload.browse": "Batla Difaele",
    "upload.fieldName": "Lebitso la Mochini",
    "upload.fieldOEM": "Moetsi / OEM",
    "upload.fieldCat": "Lekala la ho Sila",
    "upload.fieldShader": "Thepa ya Mmala",
    "upload.saveBtn": "Qala Mochini ho 3D",
    "badge.cadReady": "3D CAD e Lokile",
    "badge.meshTwin": "Pono ya Mesh",
    "badge.cadConverted": "CAD e Fetotsweng"
  },
  "pt-MZ": {
    "header.subtitle": "ACADEMIA DE MOAGEM DE GRÃOS DA ÁFRICA AUSTRAL",
    "nav.library": "Biblioteca de Equipamentos",
    "nav.upload": "Carregar Máquina / CAD",
    "nav.calculations": "Cálculos Técnicos",
    "nav.studioMode": "Modo Escuro",
    "loto.active": "LOTO: ATIVO (OPERACIONAL)",
    "loto.isolated": "LOTO: ENERGIA ZERO ISOLADA",
    "hud.fps": "FPS / Renderização",
    "hud.triangles": "Triângulos",
    "hud.parts": "Nós da Malha",
    "hud.status": "Estado 3D",
    "tools.reset": "Redefinir",
    "tools.wireframe": "Aramado",
    "tools.hotspots": "Pontos Ativos",
    "tools.explode": "Explodir",
    "tools.shader": "Sombreador:",
    "tools.specs": "Especificações & PDF",
    "shader.default": "Texturas Originais",
    "shader.stainless": "Aço Inox Escovado",
    "shader.castiron": "Ferro Fundido Industrial",
    "shader.sagma": "Tinta SAGMA (#005A36)",
    "shader.xray": "Raio-X Diagnóstico",
    "drawer.tabSpecs": "Especificações",
    "drawer.tabPDF": "PDF do Fabricante",
    "drawer.tabPart": "Inspetor de Peças",
    "drawer.telemetryTitle": "Especificações Técnicas",
    "drawer.safetyTitle": "Segurança e Conformidade",
    "spec.category": "Categoria",
    "spec.manufacturer": "Fabricante",
    "spec.model": "Série do Modelo",
    "spec.throughput": "Capacidade Nominal",
    "spec.speed": "Velocidade de Trabalho",
    "spec.power": "Motor Instalado",
    "spec.syllabus": "Referência Curricular",
    "pdf.open": "Abrir ↗",
    "pdf.hint": "Documento técnico oficial servido da pasta local CAD from WEB.",
    "inspector.selectHint": "Clique em qualquer peça ou marcador 3D para inspecionar tolerâncias e segurança.",
    "inspector.specs": "Especificações da Peça",
    "inspector.safety": "Normas de Segurança",
    "lib.title": "Biblioteca de Equipamentos SAGMA",
    "lib.sub": "Explore 6 categorias essenciais de moagem com espaços 3D interativos dedicados.",
    "lib.searchPlaceholder": "Pesquise máquinas, modelos, fabricantes...",
    "cat.all": "Todo Maquinário (24)",
    "cat.c1": "01 - Degerminação e Descasque",
    "cat.c2": "02 - Moinhos de Rolos",
    "cat.c3": "03 - Plansifters e Peneiramento",
    "cat.c4": "04 - Purificadores e Acabamento",
    "cat.c5": "05 - Limpeza e Classificação",
    "cat.c6": "06 - Transporte e Despoeiramento",
    "upload.title": "Carregador Universal de Máquinas e CAD",
    "upload.sub": "Adicione modelos 3D (.step, .stp, .iges, .glb, .obj, .stl) e manuais PDF.",
    "upload.dropTitle": "Arraste e Solte o Modelo 3D ou Arquivo CAD Aqui",
    "upload.dropSub": "Suporta .step, .stp, .iges, .glb, .gltf, .obj, .stl e ficha .pdf opcional",
    "upload.browse": "Procurar Arquivos",
    "upload.fieldName": "Nome da Máquina",
    "upload.fieldOEM": "Fabricante / OEM",
    "upload.fieldCat": "Categoria de Moagem",
    "upload.fieldShader": "Material Padrão",
    "upload.saveBtn": "Processar e Abrir no Espaço 3D",
    "badge.cadReady": "CAD 3D Pronto",
    "badge.meshTwin": "Gêmeo em Malha",
    "badge.cadConverted": "CAD Convertido"
  }
};

// 4. FLEET CATALOG - 24 AUTHORITATIVE MACHINES ACROSS 6 MILLING CATEGORIES
const FLEET_CATALOG = [
  // --------------------------------------------------------------------------
  // CATEGORY 01: Degerming, Debranning & Decortication
  // --------------------------------------------------------------------------
  {
    id: "satake_vbf",
    name: "Satake VBF Vertical Maize Degermer",
    sub: "Vertical Beater & Screen Cone Maize Degerminator",
    category: "01_degerming",
    categoryName: "01 - Degerming & Debranning",
    oem: "Satake Corporation",
    model: "VBF 5A / 7B / 10A",
    throughput: "4.5 - 12.0 t/h (Maize)",
    speed: "750 - 920 RPM",
    power: "37 - 75 kW 4-Pole",
    syllabus: "SAGMA Maize Milling Module 4 & 5",
    sourceFile: "assets/satake_vbf.glb",
    previewImg: "assets/satake_preview.png",
    specPdf: "specs/Grain_Cleaning_Equipment_Specs.pdf",
    statusBadge: "3D CAD Ready",
    partsCount: 87,
    callouts: SATAKE_CALLOUTS,
    defaultCam: { pos: [2.2, 2.2, 2.8], target: [0, 1.2, 0] },
    defaultShader: "default"
  },
  {
    id: "buhler_mhxl",
    name: "Bühler MHXL Flotation Debranner",
    sub: "Continuous Surface Decortication for Durum & Wheat",
    category: "01_degerming",
    categoryName: "01 - Degerming & Debranning",
    oem: "Bühler Group",
    model: "MHXL-30 / MHXL-60",
    throughput: "6.0 - 18.0 t/h",
    speed: "1150 RPM",
    power: "55 - 110 kW",
    syllabus: "SAGMA Advanced Wheat Debranning Mod 3",
    sourceFile: "procedural:debranner",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Grain_Cleaning_Equipment_Specs.pdf",
    statusBadge: "Mesh Twin",
    partsCount: 42,
    callouts: [],
    defaultCam: { pos: [2.8, 1.8, 2.4], target: [0, 1.0, 0] },
    defaultShader: "stainless"
  },
  {
    id: "buhler_mhxm",
    name: "Bühler MHXM Intensive Debranner",
    sub: "High-Shear Grain Hull Peeler and Bran Stripper",
    category: "01_degerming",
    categoryName: "01 - Degerming & Debranning",
    oem: "Bühler Group",
    model: "MHXM-100",
    throughput: "8.0 - 24.0 t/h",
    speed: "1200 RPM",
    power: "90 - 132 kW",
    syllabus: "SAGMA Cereal Processing Mod 4",
    sourceFile: "procedural:debranner_intensive",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Grain_Cleaning_Equipment_Specs.pdf",
    statusBadge: "Mesh Twin",
    partsCount: 48,
    callouts: [],
    defaultCam: { pos: [2.6, 2.0, 2.6], target: [0, 1.1, 0] },
    defaultShader: "sagma_paint"
  },

  // --------------------------------------------------------------------------
  // CATEGORY 02: Roller Mills
  // --------------------------------------------------------------------------
  {
    id: "buhler_mddk",
    name: "Bühler MDDK Four-Roller Mill",
    sub: "Industry Benchmark 4-Roller Grinding Machine",
    category: "02_roller_mills",
    categoryName: "02 - Roller Mills",
    oem: "Bühler Group",
    model: "MDDK 250/1000 & 250/1250",
    throughput: "15 - 35 t/h (Break / Reduction)",
    speed: "Roll Differential 1:2.5 / 1:1.5",
    power: "15 - 30 kW per Pair",
    syllabus: "SAGMA Wheat & Maize Rollermill Technology Ch 3-6",
    sourceFile: "procedural:rollermill_4",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Buhler_Roller_Mill_MDDK.pdf",
    statusBadge: "3D CAD Ready",
    partsCount: 64,
    callouts: [],
    defaultCam: { pos: [2.5, 1.8, 2.5], target: [0, 0.9, 0] },
    defaultShader: "castiron"
  },
  {
    id: "buhler_mddb",
    name: "Bühler MDDB Eight-Roller Mill",
    sub: "Two-Tier Double Break / Reduction Roller Mill",
    category: "02_roller_mills",
    categoryName: "02 - Roller Mills",
    oem: "Bühler Group",
    model: "MDDB 250/1000 Double Deck",
    throughput: "25 - 60 t/h",
    speed: "Differential 1:2.5",
    power: "2x 22 - 37 kW",
    syllabus: "SAGMA Commercial Milling Practice Mod 5",
    sourceFile: "procedural:rollermill_8",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Buhler_Roller_Mill_MDDK.pdf",
    statusBadge: "Mesh Twin",
    partsCount: 78,
    callouts: [],
    defaultCam: { pos: [3.0, 2.4, 3.0], target: [0, 1.2, 0] },
    defaultShader: "castiron"
  },
  {
    id: "buhler_antares",
    name: "Bühler Antares MDDR / MDDT",
    sub: "Sensored Intelligent Rollermill with Direct Drive",
    category: "02_roller_mills",
    categoryName: "02 - Roller Mills",
    oem: "Bühler Group",
    model: "MDDR / MDDT Antares",
    throughput: "20 - 45 t/h",
    speed: "Variable Servo Drive",
    power: "18.5 - 45 kW Direct",
    syllabus: "SAGMA Modern Milling Automation Mod 6",
    sourceFile: "procedural:rollermill_antares",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Antares_Buhler_MDDR_Roller_Mill.pdf",
    statusBadge: "3D CAD Ready",
    partsCount: 72,
    callouts: [],
    defaultCam: { pos: [2.6, 2.0, 2.6], target: [0, 1.0, 0] },
    defaultShader: "stainless"
  },
  {
    id: "simon_type_h",
    name: "Henry Simon Type H Rollermill",
    sub: "Heavy-Duty Heritage Precision Milling Machine",
    category: "02_roller_mills",
    categoryName: "02 - Roller Mills",
    oem: "Henry Simon (Satake Group)",
    model: "Type H 1000/1250",
    throughput: "12 - 30 t/h",
    speed: "Fluid Drive Differential",
    power: "18.5 - 30 kW",
    syllabus: "SAGMA Historical & Classical Mill Design",
    sourceFile: "procedural:rollermill_simon",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Henry_Simon_Rollermill.pdf",
    statusBadge: "3D CAD Ready",
    partsCount: 58,
    callouts: [],
    defaultCam: { pos: [2.4, 1.8, 2.4], target: [0, 0.9, 0] },
    defaultShader: "castiron"
  },

  // --------------------------------------------------------------------------
  // CATEGORY 03: Plansifters & Sifting
  // --------------------------------------------------------------------------
  {
    id: "buhler_mpag",
    name: "Bühler Quadrostar MPAG Plansifter",
    sub: "Square Plansifter with High Sifting Capacity",
    category: "03_plansifters",
    categoryName: "03 - Plansifters & Sifting",
    oem: "Bühler Group",
    model: "MPAG 418 / 622 / 828",
    throughput: "10 - 75 t/h",
    speed: "220 - 260 RPM (Circle 60-70mm)",
    power: "4.0 - 7.5 kW Underslung",
    syllabus: "SAGMA Sifting Dynamics & Sieve Flow Schemes",
    sourceFile: "procedural:plansifter_quadrostar",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Buhler_Plansifter_MPAG.pdf",
    statusBadge: "3D CAD Ready",
    partsCount: 68,
    callouts: [],
    defaultCam: { pos: [3.2, 2.4, 3.2], target: [0, 1.3, 0] },
    defaultShader: "sagma_paint"
  },
  {
    id: "buhler_mpaj",
    name: "Bühler NovaStar MPAJ Plansifter",
    sub: "Compact Composite-Frame Square Plansifter",
    category: "03_plansifters",
    categoryName: "03 - Plansifters & Sifting",
    oem: "Bühler Group",
    model: "NovaStar MPAJ-2 / MPAJ-4",
    throughput: "4 - 20 t/h",
    speed: "240 RPM",
    power: "2.2 - 4.0 kW",
    syllabus: "SAGMA Maize Mill Sifting & Degerming Screening",
    sourceFile: "procedural:plansifter_novastar",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Buhler_Plansifter_MPAG.pdf",
    statusBadge: "Mesh Twin",
    partsCount: 52,
    callouts: [],
    defaultCam: { pos: [2.6, 2.0, 2.6], target: [0, 1.1, 0] },
    defaultShader: "stainless"
  },
  {
    id: "sangati_gqt",
    name: "Sangati Berga GQT-GS Sifter",
    sub: "Suspended Dynamic Multi-Compartment Plansifter",
    category: "03_plansifters",
    categoryName: "03 - Plansifters & Sifting",
    oem: "Sangati Berga",
    model: "GQT-GS 4/6/8 Channels",
    throughput: "12 - 65 t/h",
    speed: "235 RPM",
    power: "5.5 kW Foot Mount",
    syllabus: "SAGMA Sifting Performance Analysis Mod 4",
    sourceFile: "procedural:plansifter_sangati",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Sangati_Berga_Sifter.pdf",
    statusBadge: "3D CAD Ready",
    partsCount: 60,
    callouts: [],
    defaultCam: { pos: [3.0, 2.2, 3.0], target: [0, 1.2, 0] },
    defaultShader: "castiron"
  },
  {
    id: "simon_flowmaster",
    name: "Henry Simon Flowmaster Plansifter",
    sub: "Sanitary Aluminum Sieve Deck Sifting System",
    category: "03_plansifters",
    categoryName: "03 - Plansifters & Sifting",
    oem: "Henry Simon",
    model: "Flowmaster MK III",
    throughput: "15 - 50 t/h",
    speed: "240 RPM",
    power: "5.5 kW",
    syllabus: "SAGMA Flour Dressing and Semolina Grading",
    sourceFile: "procedural:plansifter_flowmaster",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Henry_Simon_Rollermill.pdf",
    statusBadge: "Mesh Twin",
    partsCount: 56,
    callouts: [],
    defaultCam: { pos: [2.8, 2.2, 2.8], target: [0, 1.2, 0] },
    defaultShader: "sagma_paint"
  },

  // --------------------------------------------------------------------------
  // CATEGORY 04: Purifiers, Detachers & Finishing
  // --------------------------------------------------------------------------
  {
    id: "buhler_mqrf",
    name: "Bühler Puromat MQRF Purifier",
    sub: "High-Efficiency Aerodynamic Semolina Purifier",
    category: "04_purifiers",
    categoryName: "04 - Purifiers & Finishing",
    oem: "Bühler Group",
    model: "MQRF 46/200 & 50/200",
    throughput: "2.0 - 5.5 t/h (Semolina / Middlings)",
    speed: "450 - 520 Stroke/min Vibratory",
    power: "2x 0.35 kW Vibro-Motors",
    syllabus: "SAGMA Purifier Adjustment & Air Distribution",
    sourceFile: "procedural:purifier_mqrf",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Buhler_Purifier_MQRF.pdf",
    statusBadge: "3D CAD Ready",
    partsCount: 62,
    callouts: [],
    defaultCam: { pos: [2.5, 1.6, 2.5], target: [0, 0.8, 0] },
    defaultShader: "stainless"
  },
  {
    id: "simon_entoleter",
    name: "Simon Centrifugal Impact Detacher",
    sub: "High-Speed Pin Rotor Flour Flake Disrupter",
    category: "04_purifiers",
    categoryName: "04 - Purifiers & Finishing",
    oem: "Henry Simon",
    model: "Entoleter Infestation & Flake Buster",
    throughput: "5.0 - 25.0 t/h",
    speed: "2850 RPM Direct Drive",
    power: "11 - 22 kW",
    syllabus: "SAGMA Endosperm Detachment & Disruption",
    sourceFile: "procedural:entoleter",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Impact_Detacher_Milling.pdf",
    statusBadge: "3D CAD Ready",
    partsCount: 36,
    callouts: [],
    defaultCam: { pos: [1.8, 1.4, 1.8], target: [0, 0.7, 0] },
    defaultShader: "castiron"
  },
  {
    id: "buhler_mkzg",
    name: "Bühler Turbo Star MKZG Impact Machine",
    sub: "Intense Mechanical Destruction of Insect Life & Agglomerates",
    category: "04_purifiers",
    categoryName: "04 - Purifiers & Finishing",
    oem: "Bühler Group",
    model: "MKZG 40 / 60",
    throughput: "8.0 - 35.0 t/h",
    speed: "3000 RPM",
    power: "15 - 30 kW",
    syllabus: "SAGMA Sanitation and Food Safety Standards",
    sourceFile: "procedural:mkzg_turbo",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Impact_Detacher_Milling.pdf",
    statusBadge: "Mesh Twin",
    partsCount: 38,
    callouts: [],
    defaultCam: { pos: [2.0, 1.5, 2.0], target: [0, 0.8, 0] },
    defaultShader: "sagma_paint"
  },

  // --------------------------------------------------------------------------
  // CATEGORY 05: Screenroom & Cleaning
  // --------------------------------------------------------------------------
  {
    id: "buhler_combi",
    name: "Bühler Combi-Cleaner MTKB / MTKC",
    sub: "Combined Separator, Concentrator and Destoner",
    category: "05_screenroom",
    categoryName: "05 - Screenroom & Cleaning",
    oem: "Bühler Group",
    model: "MTKB 60/120 & MTKC 120/120",
    throughput: "6 - 24 t/h (Grain Intake)",
    speed: "Eccentric Counterweight Drive",
    power: "5.5 - 9.2 kW",
    syllabus: "SAGMA Grain Intake, Pre-Cleaning and Destoning",
    sourceFile: "procedural:combi_cleaner",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Buhler_Separator_Classifier.pdf",
    statusBadge: "3D CAD Ready",
    partsCount: 70,
    callouts: [],
    defaultCam: { pos: [2.8, 2.2, 2.8], target: [0, 1.1, 0] },
    defaultShader: "sagma_paint"
  },
  {
    id: "buhler_myfa",
    name: "Bühler MYFA Automatic Grain Dampener",
    sub: "Microwave Moisture Measurement & Water Proportioner",
    category: "05_screenroom",
    categoryName: "05 - Screenroom & Cleaning",
    oem: "Bühler Group",
    model: "MYFA / MYFC Intelligent Dampening",
    throughput: "10 - 50 t/h",
    speed: "Microprocessor Flow Controller",
    power: "1.5 kW Metering Unit",
    syllabus: "SAGMA Conditioning, Conditioning Times and Moisture Control",
    sourceFile: "procedural:water_meter",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Grain_Cleaning_Equipment_Specs.pdf",
    statusBadge: "Mesh Twin",
    partsCount: 34,
    callouts: [],
    defaultCam: { pos: [2.0, 1.6, 2.0], target: [0, 0.8, 0] },
    defaultShader: "stainless"
  },
  {
    id: "buhler_moxg",
    name: "Bühler Intensive Dampener MOXG",
    sub: "High-Speed Paddle Rotor for Rapid Water Penetration",
    category: "05_screenroom",
    categoryName: "05 - Screenroom & Cleaning",
    oem: "Bühler Group",
    model: "MOXG 30/150",
    throughput: "15 - 45 t/h",
    speed: "950 RPM Mixing Shaft",
    power: "15 - 22 kW",
    syllabus: "SAGMA Conditioning Physics & Water Penetration",
    sourceFile: "procedural:intensive_dampener",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Grain_Cleaning_Equipment_Specs.pdf",
    statusBadge: "3D CAD Ready",
    partsCount: 46,
    callouts: [],
    defaultCam: { pos: [2.6, 1.6, 2.6], target: [0, 0.8, 0] },
    defaultShader: "stainless"
  },
  {
    id: "buhler_tarara",
    name: "Bühler Tarara Air Separator MTRA",
    sub: "Recirculating Aspiration Channel for Dust & Chaff",
    category: "05_screenroom",
    categoryName: "05 - Screenroom & Cleaning",
    oem: "Bühler Group",
    model: "MTRA 100/150",
    throughput: "20 - 100 t/h",
    speed: "Integral Centrifugal Blower",
    power: "4.0 - 7.5 kW",
    syllabus: "SAGMA Terminal Velocity & Aerodynamic Grain Cleaning",
    sourceFile: "procedural:tarara_air",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Buhler_Separator_Classifier.pdf",
    statusBadge: "Mesh Twin",
    partsCount: 40,
    callouts: [],
    defaultCam: { pos: [2.4, 2.0, 2.4], target: [0, 1.0, 0] },
    defaultShader: "castiron"
  },

  // --------------------------------------------------------------------------
  // CATEGORY 06: Conveying, Dust Handling & Packing
  // --------------------------------------------------------------------------
  {
    id: "elevator_69b",
    name: "Industrial Bucket Elevator",
    sub: "SAGMA Diagram 69(b) Authoritative Twin",
    category: "06_conveying",
    categoryName: "06 - Conveying & Dust",
    oem: "DIN Standard / SAGMA",
    model: "DIN 22104 / Diagram 69(b)",
    throughput: "35 - 120 t/h (Grain / Flour)",
    speed: "1.8 - 2.8 m/s Belt Velocity",
    power: "7.5 - 22 kW IP65 Gearmotor",
    syllabus: "Maize Mod 4 Ch 9 / Wheat Mod 5 Ch 8",
    sourceFile: "assets/elevator_full_diagram69b.glb",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Bucket_elevator.pdf",
    statusBadge: "3D CAD Ready",
    partsCount: 99,
    callouts: DIAGRAM_69B_CALLOUTS,
    defaultCam: { pos: [2.5, 2.0, 3.2], target: [0, 1.2, 0] },
    defaultShader: "default",
    isDefault: true
  },
  {
    id: "elevator_cad",
    name: "SolidWorks CAD Bucket Elevator",
    sub: "High-Poly Parametric SolidWorks Mechanical Twin",
    category: "06_conveying",
    categoryName: "06 - Conveying & Dust",
    oem: "SolidWorks Assembly",
    model: "Heavy Industrial Grain Leg",
    throughput: "50 - 180 t/h",
    speed: "2.4 m/s",
    power: "18.5 - 37 kW",
    syllabus: "SolidWorks Mechanical Assembly Inspection",
    sourceFile: "assets/elevator_highpoly.glb",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Bucket_Elevator_Manual_and_Specs.pdf",
    statusBadge: "3D CAD Ready",
    partsCount: 511,
    callouts: DIAGRAM_69B_CALLOUTS,
    defaultCam: { pos: [3.5, 3.0, 4.5], target: [0, 1.5, 0] },
    defaultShader: "stainless"
  },
  {
    id: "screw_conveyor",
    name: "Trough Screw Conveyor DIN 15261",
    sub: "Continuous Helical Auger for Mill Stock Transfer",
    category: "06_conveying",
    categoryName: "06 - Conveying & Dust",
    oem: "Screw Conveyor Corp",
    model: "SC-250 / SC-315 Trough",
    throughput: "15 - 45 t/h",
    speed: "65 - 90 RPM",
    power: "3.0 - 7.5 kW Helical Gearmotor",
    syllabus: "SAGMA Horizontal Mechanical Conveying Mod 4",
    sourceFile: "procedural:screw_conveyor",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Screw-Conveyor-Corporation-Bucket-Elevators-597A.pdf",
    statusBadge: "3D CAD Ready",
    partsCount: 38,
    callouts: [],
    defaultCam: { pos: [3.2, 1.4, 2.2], target: [0, 0.4, 0] },
    defaultShader: "stainless"
  },
  {
    id: "pneumatic_airlock",
    name: "Rotary Airlock Feeder MPSN",
    sub: "Explosion-Proof Positive Pressure Rotary Valve",
    category: "06_conveying",
    categoryName: "06 - Conveying & Dust",
    oem: "Bühler Group",
    model: "MPSN-22 / MPSJ-28",
    throughput: "5 - 30 t/h",
    speed: "18 - 32 RPM Rotor",
    power: "0.75 - 1.5 kW Flameproof",
    syllabus: "SAGMA Pneumatic Conveying Systems & Airlocks",
    sourceFile: "procedural:rotary_airlock",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Airlock_Feeder_Milling.pdf",
    statusBadge: "3D CAD Ready",
    partsCount: 32,
    callouts: [],
    defaultCam: { pos: [1.8, 1.4, 1.8], target: [0, 0.6, 0] },
    defaultShader: "castiron"
  },
  {
    id: "mvrp_filter",
    name: "Bühler MVRP Low-Pressure Dust Filter",
    sub: "Reverse-Jet Compressed Air Fabric Bag Collector",
    category: "06_conveying",
    categoryName: "06 - Conveying & Dust",
    oem: "Bühler Group",
    model: "MVRP 48/24 & 78/30",
    throughput: "Aspiration 120 - 450 m³/min",
    speed: "Jet Cleaning Cycle 0.5 bar",
    power: "1.1 kW Rotary Valve Drive",
    syllabus: "SAGMA Dust Explosion Prevention & Aspiration",
    sourceFile: "procedural:filter_mvrp",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/Pneumatic_Conveying_Milling.pdf",
    statusBadge: "3D CAD Ready",
    partsCount: 54,
    callouts: [],
    defaultCam: { pos: [2.8, 2.6, 2.8], target: [0, 1.5, 0] },
    defaultShader: "sagma_paint"
  },
  {
    id: "lambton_elevator",
    name: "Lambton Heavy Grain Bucket Elevator",
    sub: "Commercial High-Capacity Grain Terminal Leg",
    category: "06_conveying",
    categoryName: "06 - Conveying & Dust",
    oem: "Lambton Conveyor",
    model: "LE-36 Series Industrial",
    throughput: "150 - 350 t/h (Maize / Soy)",
    speed: "3.2 m/s",
    power: "45 - 90 kW Right-Angle Drive",
    syllabus: "SAGMA Bulk Terminal Receiving & Elevation",
    sourceFile: "procedural:lambton_elevator",
    previewImg: "assets/preview_render.png",
    specPdf: "specs/LAMBTON-BUCKET-ELEVATOR-OWNERS-MANUAL-2020.pdf",
    statusBadge: "3D CAD Ready",
    partsCount: 88,
    callouts: [],
    defaultCam: { pos: [3.8, 3.2, 4.0], target: [0, 1.6, 0] },
    defaultShader: "castiron"
  }
];

// 5. CLIENT INDEXEDDB PERSISTENCE (ECHO_STUDIO_DB)
const DB_NAME = 'ECHO_STUDIO_DB';
const DB_VERSION = 2;
const STORE_NAME = 'machines';

const EchoDB = {
  db: null,

  init() {
    return new Promise((resolve) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = e => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
          store.createIndex('category', 'category', { unique: false });
        }
      };
      req.onsuccess = e => {
        this.db = e.target.result;
        this.seedInitialFleet().then(() => resolve(this.db));
      };
      req.onerror = e => {
        console.warn('IndexedDB unavailable or restricted, running memory fallback:', e);
        resolve(null);
      };
    });
  },

  async seedInitialFleet() {
    if (!this.db) return;
    try {
      const tx = this.db.transaction([STORE_NAME], 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAll();
      req.onsuccess = async () => {
        const existing = req.result || [];
        const existingMap = new Map(existing.map(m => [m.id, m]));
        const writeTx = this.db.transaction([STORE_NAME], 'readwrite');
        const writeStore = writeTx.objectStore(STORE_NAME);
        for (const m of FLEET_CATALOG) {
          if (!existingMap.has(m.id)) {
            writeStore.put(m);
          }
        }
      };
    } catch (err) {
      console.warn('Seeding check error:', err);
    }
  },

  getAll() {
    return new Promise(res => {
      if (!this.db) return res([...FLEET_CATALOG]);
      try {
        const tx = this.db.transaction([STORE_NAME], 'readonly');
        const req = tx.objectStore(STORE_NAME).getAll();
        req.onsuccess = () => {
          const items = req.result || [];
          res(items.length > 0 ? items : [...FLEET_CATALOG]);
        };
        req.onerror = () => res([...FLEET_CATALOG]);
      } catch (err) {
        res([...FLEET_CATALOG]);
      }
    });
  },

  get(id) {
    return new Promise(res => {
      if (!this.db) return res(FLEET_CATALOG.find(m => m.id === id) || null);
      try {
        const tx = this.db.transaction([STORE_NAME], 'readonly');
        const req = tx.objectStore(STORE_NAME).get(id);
        req.onsuccess = () => res(req.result || FLEET_CATALOG.find(m => m.id === id) || null);
        req.onerror = () => res(FLEET_CATALOG.find(m => m.id === id) || null);
      } catch (err) {
        res(FLEET_CATALOG.find(m => m.id === id) || null);
      }
    });
  },

  putMachine(record) {
    return new Promise((res, rej) => {
      if (!this.db) return res(record);
      try {
        const tx = this.db.transaction([STORE_NAME], 'readwrite');
        const req = tx.objectStore(STORE_NAME).put(record);
        req.onsuccess = () => res(record);
        req.onerror = e => rej(e.target.error);
      } catch (err) {
        rej(err);
      }
    });
  }
};

// ============================================================================
// 6. THREE.JS SPATIAL 3D ENGINE & NVIDIA CAD LIGHTING SETUP
// ============================================================================
let scene, camera, renderer, controls;
let currentLoadedRoot = null;
let currentMachineMeta = FLEET_CATALOG.find(m => m.isDefault) || FLEET_CATALOG[0];
let currentCallouts = [];
let calloutsVisible = true;
let calloutElements = [];
let activeInspectedCallout = null;
let isWireframeActive = false;
let currentShaderPreset = 'default';
let originalMaterials = new Map();
let meshOriginalPositions = new Map();
let occtInstance = null;

// Lighting References
let dirLight, fillLight, rimLight, ambientLight, groundGrid, shadowPlane;

// Performance Telemetry
let frameCount = 0;
let lastTime = performance.now();
let lastFpsUpdate = performance.now();
let measuredFPS = 60.0;

function initThreeEngine() {
  const container = document.getElementById('viewport-container');
  const canvas = document.getElementById('three-canvas');

  // Scene with SAGMA Light Sage Background
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xEAF0EB);
  scene.fog = new THREE.FogExp2(0xEAF0EB, 0.045);

  // Perspective Camera
  camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.05, 500);
  camera.position.set(2.8, 2.2, 3.2);

  // WebGL Renderer with High-Precision Shadows & Tone Mapping
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    powerPreference: "high-performance",
    alpha: false
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // OrbitControls with Smooth Damping
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = true;
  controls.minDistance = 0.3;
  controls.maxDistance = 60;
  controls.target.set(0, 1.2, 0);

  // Setup NVIDIA Studio 3-Point Lighting
  setupStudioLighting();

  // Resize Listener
  window.addEventListener('resize', onWindowResize);

  // Start Animation Loop
  animate();
}

function setupStudioLighting() {
  // 1. Ambient Light
  ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.85);
  scene.add(ambientLight);

  // 2. Main Key Directional Light (Sun/Key)
  dirLight = new THREE.DirectionalLight(0xFFF8F0, 1.85);
  dirLight.position.set(8, 16, 10);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.width = 2048;
  dirLight.shadow.mapSize.height = 2048;
  dirLight.shadow.camera.near = 0.5;
  dirLight.shadow.camera.far = 40;
  dirLight.shadow.bias = -0.0003;
  dirLight.shadow.camera.left = -6;
  dirLight.shadow.camera.right = 6;
  dirLight.shadow.camera.top = 6;
  dirLight.shadow.camera.bottom = -6;
  scene.add(dirLight);

  // 3. Cool Secondary Fill Light
  fillLight = new THREE.DirectionalLight(0xD8EAF8, 0.95);
  fillLight.position.set(-10, 8, -6);
  scene.add(fillLight);

  // 4. Warm Accent Rim Light
  rimLight = new THREE.DirectionalLight(0xE0F0D8, 1.1);
  rimLight.position.set(0, -6, -10);
  scene.add(rimLight);

  // 5. Soft Ground Contact Shadow Plane
  const planeGeo = new THREE.PlaneGeometry(60, 60);
  const shadowMat = new THREE.ShadowMaterial({ opacity: 0.18 });
  shadowPlane = new THREE.Mesh(planeGeo, shadowMat);
  shadowPlane.rotation.x = -Math.PI / 2;
  shadowPlane.position.y = -0.01;
  shadowPlane.receiveShadow = true;
  scene.add(shadowPlane);

  // 6. Engineering CAD Ground Grid
  groundGrid = new THREE.GridHelper(30, 60, 0x005A36, 0xCBD8CE);
  groundGrid.position.y = 0;
  scene.add(groundGrid);
}

function onWindowResize() {
  const container = document.getElementById('viewport-container');
  if (!container || !renderer || !camera) return;
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
  updateCalloutPositions();
}

// ============================================================================
// 7. STRICT WEBGL RESOURCE DISPOSAL (PREVENTS GPU MEMORY LEAKS)
// ============================================================================
function disposeHierarchy(node) {
  if (!node) return;
  node.traverse(child => {
    if (child.isMesh) {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(m => disposeMaterial(m));
        } else {
          disposeMaterial(child.material);
        }
      }
    }
  });
}

function disposeMaterial(mat) {
  if (!mat) return;
  Object.keys(mat).forEach(prop => {
    const val = mat[prop];
    if (val && typeof val === 'object' && val.isTexture) {
      val.dispose();
    }
  });
  mat.dispose();
}

function clearCurrentScene() {
  if (currentLoadedRoot) {
    scene.remove(currentLoadedRoot);
    disposeHierarchy(currentLoadedRoot);
    currentLoadedRoot = null;
  }
  originalMaterials.clear();
  meshOriginalPositions.clear();
  clearCallouts();
}

// ============================================================================
// 8. PROCEDURAL 3D TWIN GENERATOR (FOR SPEC-READY MACHINES)
// ============================================================================
function generateProceduralTwin(type, colorHex) {
  const group = new THREE.Group();
  const matPaint = new THREE.MeshStandardMaterial({
    color: colorHex || 0x005A36,
    metalness: 0.35,
    roughness: 0.38
  });
  const matSteel = new THREE.MeshStandardMaterial({
    color: 0xD8DCE0,
    metalness: 0.88,
    roughness: 0.25
  });
  const matDark = new THREE.MeshStandardMaterial({
    color: 0x2A3238,
    metalness: 0.6,
    roughness: 0.6
  });

  if (type.includes('rollermill')) {
    // Base Frame
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.7, 1.2), matPaint);
    base.position.y = 0.35;
    base.castShadow = true; base.receiveShadow = true;
    group.add(base);

    // Roll Housing Upper
    const housing = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.9, 1.1), matPaint);
    housing.position.y = 1.15;
    housing.castShadow = true;
    group.add(housing);

    // 2 Cylindrical Milling Rolls (Left & Right)
    const rollGeo = new THREE.CylinderGeometry(0.18, 0.18, 1.1, 32);
    const roll1 = new THREE.Mesh(rollGeo, matSteel);
    roll1.rotation.z = Math.PI / 2;
    roll1.position.set(0, 1.1, 0.24);
    group.add(roll1);

    const roll2 = new THREE.Mesh(rollGeo, matSteel);
    roll2.rotation.z = Math.PI / 2;
    roll2.position.set(0, 1.1, -0.24);
    group.add(roll2);

    // Feed Hopper & Glass Inspection Window
    const hopper = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.5, 0.6, 4), matDark);
    hopper.rotation.y = Math.PI / 4;
    hopper.position.y = 1.85;
    group.add(hopper);

  } else if (type.includes('plansifter')) {
    // Plansifter 4-Box Sieve Nest Structure
    const boxGroup = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.5, 2.0), matPaint);
    boxGroup.position.y = 1.3;
    boxGroup.castShadow = true;
    group.add(boxGroup);

    // Cane Suspension Rods
    const rodGeo = new THREE.CylinderGeometry(0.015, 0.015, 1.8, 16);
    const offsets = [[-0.9, -0.9], [0.9, -0.9], [-0.9, 0.9], [0.9, 0.9]];
    offsets.forEach(([x, z]) => {
      const rod = new THREE.Mesh(rodGeo, matSteel);
      rod.position.set(x, 2.4, z);
      group.add(rod);
    });

    // Underslung Counterweight Flywheel
    const fly = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.25, 32), matDark);
    fly.position.y = 0.3;
    group.add(fly);

  } else if (type.includes('purifier')) {
    // Sieve deck vibrating frame
    const frame = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.1, 2.2), matPaint);
    frame.position.y = 0.8;
    frame.castShadow = true;
    group.add(frame);

    // Aerodynamic Air Ducting Hoods
    const hood = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.5, 2.0), matSteel);
    hood.position.y = 1.5;
    group.add(hood);

  } else if (type.includes('cleaner') || type.includes('screenroom')) {
    // Separator Classifier Sieve Trunk
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.4, 1.4), matPaint);
    body.position.y = 1.2;
    body.rotation.z = 0.08; // 5 degree sieve slope
    body.castShadow = true;
    group.add(body);

    const asp = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.8, 0.8), matDark);
    asp.position.set(1.1, 1.3, 0);
    group.add(asp);

  } else {
    // Generic Industrial Cylinder/Conveyor Twin
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 2.4, 32), matSteel);
    barrel.rotation.z = Math.PI / 2;
    barrel.position.y = 0.6;
    barrel.castShadow = true;
    group.add(barrel);

    const drive = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 0.5), matPaint);
    drive.position.set(1.4, 0.6, 0);
    group.add(drive);
  }

  return group;
}

// ============================================================================
// 9. MULTI-FORMAT CAD & MESH LOADER WITH OpenCascade WASM
// ============================================================================
async function initOpenCascade() {
  if (occtInstance) return occtInstance;
  if (typeof occtimportjs === 'function') {
    try {
      console.log('Initializing occt-import-js WebAssembly engine...');
      occtInstance = await occtimportjs({
        locateFile: (path) => 'libs/' + path
      });
      console.log('OpenCascade WebAssembly initialized successfully.');
      return occtInstance;
    } catch (err) {
      console.error('Failed to initialize occt-import-js:', err);
      return null;
    }
  }
  return null;
}

async function loadCadFileFromBuffer(buffer, fileExt, fileName) {
  const occt = await initOpenCascade();
  if (!occt) throw new Error('OpenCascade WASM engine not loaded.');

  const uint8Arr = new Uint8Array(buffer);
  const format = (fileExt === 'step' || fileExt === 'stp') ? 'step' : 'iges';
  
  // occt.ReadFile(format, buffer, params)
  const result = occt.ReadFile(format, uint8Arr, null);
  if (!result || !result.success || !result.meshes || result.meshes.length === 0) {
    throw new Error('OpenCascade could not tessellate CAD file: ' + (result?.error || 'Unknown format error'));
  }

  const cadGroup = new THREE.Group();
  cadGroup.name = fileName;

  const defaultCadMat = new THREE.MeshStandardMaterial({
    color: 0x005A36,
    metalness: 0.45,
    roughness: 0.35,
    side: THREE.DoubleSide
  });

  result.meshes.forEach((m, idx) => {
    const geo = new THREE.BufferGeometry();
    if (m.attributes && m.attributes.position && m.attributes.position.array) {
      geo.setAttribute('position', new THREE.Float32BufferAttribute(m.attributes.position.array, 3));
    }
    if (m.attributes && m.attributes.normal && m.attributes.normal.array) {
      geo.setAttribute('normal', new THREE.Float32BufferAttribute(m.attributes.normal.array, 3));
    } else {
      geo.computeVertexNormals();
    }
    if (m.index && m.index.array) {
      geo.setIndex(new THREE.Uint32BufferAttribute(m.index.array, 1));
    }

    let mat = defaultCadMat;
    if (m.color) {
      mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(m.color[0], m.color[1], m.color[2]),
        metalness: 0.4,
        roughness: 0.4,
        side: THREE.DoubleSide
      });
    }

    const mesh = new THREE.Mesh(geo, mat);
    mesh.name = m.name || ('cad_part_' + (idx + 1));
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    cadGroup.add(mesh);
  });

  return cadGroup;
}

// ============================================================================
// 10. MACHINE TWIN LOADING & WORKSPACE ISOLATION
// ============================================================================
async function loadMachineTwin(machine) {
  showLoading('LOADING ' + machine.name.toUpperCase() + '...');
  currentMachineMeta = machine;

  // 1. Clear existing scene & WebGL resources
  clearCurrentScene();

  // 2. Update UI Telemetry & Drawer
  updateMachineTelemetryUI(machine);

  // 3. Load or Generate 3D Object
  try {
    let root = null;
    const src = machine.sourceFile;

    if (machine.customBlob) {
      // User-uploaded model from IndexedDB
      const ext = (machine.fileExt || 'glb').toLowerCase();
      const buffer = await machine.customBlob.arrayBuffer();

      if (ext === 'step' || ext === 'stp' || ext === 'iges' || ext === 'igs') {
        root = await loadCadFileFromBuffer(buffer, ext, machine.name);
      } else if (ext === 'stl') {
        const loader = new THREE.STLLoader();
        const geo = loader.parse(buffer);
        const mat = new THREE.MeshStandardMaterial({ color: 0x005A36, metalness: 0.5, roughness: 0.3 });
        root = new THREE.Mesh(geo, mat);
      } else if (ext === 'obj') {
        const text = new TextDecoder().decode(buffer);
        const loader = new THREE.OBJLoader();
        root = loader.parse(text);
      } else {
        // glb/gltf
        root = await new Promise((res, rej) => {
          const loader = new THREE.GLTFLoader();
          loader.parse(buffer, '', gltf => res(gltf.scene || gltf.scenes[0]), rej);
        });
      }
    } else if (src.startsWith('procedural:')) {
      const type = src.split(':')[1] || 'generic';
      root = generateProceduralTwin(type, (machine.id.includes('buhler') ? 0x0D6E45 : 0x005A36));
    } else if (src.endsWith('.glb') || src.endsWith('.gltf')) {
      root = await new Promise((res, rej) => {
        const loader = new THREE.GLTFLoader();
        loader.load(src, gltf => res(gltf.scene || gltf.scenes[0]), undefined, rej);
      });
    } else {
      root = generateProceduralTwin('generic', 0x005A36);
    }

    // Setup Shadows, Material Cache & Explode Transforms
    let polyCount = 0;
    let nodeCount = 0;

    root.traverse(child => {
      if (child.isMesh) {
        nodeCount++;
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.geometry) {
          if (child.geometry.index) {
            polyCount += child.geometry.index.count / 3;
          } else if (child.geometry.attributes.position) {
            polyCount += child.geometry.attributes.position.count / 3;
          }
        }

        // Save original material
        originalMaterials.set(child, child.material);

        // Save original position & rotation for explode view
        meshOriginalPositions.set(child, {
          pos: child.position.clone(),
          parentPos: child.parent ? child.parent.position.clone() : new THREE.Vector3()
        });
      }
    });

    // Auto-Centre & Scale Bounding Box
    const box = new THREE.Box3().setFromObject(root);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
      const scaleFactor = 2.4 / maxDim;
      root.scale.setScalar(scaleFactor);
      box.setFromObject(root);
      box.getCenter(center);
      root.position.sub(center);
      root.position.y += (box.max.y - box.min.y) / 2;
    }

    currentLoadedRoot = root;
    scene.add(root);

    // Update HUD Stats
    document.getElementById('hudPolys').textContent = Math.round(polyCount).toLocaleString();
    document.getElementById('hudParts').textContent = (machine.partsCount || nodeCount) + ' parts';

    // Apply Default Material Shader Preset
    applyMaterialPreset(machine.defaultShader || 'default');

    // Camera Framing
    if (machine.defaultCam) {
      smoothMoveCamera(machine.defaultCam.pos, machine.defaultCam.target);
    } else {
      resetCameraFraming();
    }

    // Setup 3D Callout Hotspots
    currentCallouts = machine.callouts || [];
    initCalloutBadges(currentCallouts);

    // Update Location Hash without page jump
    window.location.hash = 'machine/' + machine.id;

  } catch (err) {
    console.error('Error loading machine twin:', err);
    alert('Failed to load 3D machine model: ' + err.message);
  } finally {
    hideLoading();
  }
}

function updateMachineTelemetryUI(machine) {
  // Header / HUD
  document.getElementById('hudMachineName').textContent = machine.name;
  document.getElementById('hudMachineOEM').textContent = (machine.oem || 'SAGMA').toUpperCase();

  // Drawer Title
  document.getElementById('drawerMachineTitle').textContent = machine.name;
  document.getElementById('drawerMachineOEM').textContent = (machine.oem + ' - ' + (machine.model || '')).toUpperCase();

  // Drawer Specifications Table
  document.getElementById('specCategory').textContent = machine.categoryName || machine.category;
  document.getElementById('specOEM').textContent = machine.oem || 'Bühler / Satake';
  document.getElementById('specModel').textContent = machine.model || machine.sub;
  document.getElementById('specThroughput').textContent = machine.throughput || 'Variable';
  document.getElementById('specSpeed').textContent = machine.speed || 'Standard';
  document.getElementById('specPower').textContent = machine.power || '15 kW';
  document.getElementById('specSyllabus').textContent = machine.syllabus || 'SAGMA Grain Milling Curriculum';

  // Spec PDF Iframe & Link
  const pdfPath = machine.specPdf || 'specs/Bucket_elevator.pdf';
  const pdfFrame = document.getElementById('pdfFrame');
  const pdfFileName = document.getElementById('pdfFileName');
  const pdfOpenNewTab = document.getElementById('pdfOpenNewTab');

  if (pdfFrame) pdfFrame.src = pdfPath;
  if (pdfFileName) pdfFileName.textContent = pdfPath.split('/').pop();
  if (pdfOpenNewTab) pdfOpenNewTab.href = pdfPath;

  // Reset Part Inspector
  document.getElementById('inspectorEmptyState').style.display = 'block';
  document.getElementById('inspectorDetailState').style.display = 'none';
}

// ============================================================================
// 11. NVIDIA CAD SHADER PRESETS & WIREFRAME
// ============================================================================
function applyMaterialPreset(preset) {
  currentShaderPreset = preset;
  if (!currentLoadedRoot) return;

  const selector = document.getElementById('materialPresetSelect');
  if (selector && selector.value !== preset) selector.value = preset;

  currentLoadedRoot.traverse(child => {
    if (child.isMesh) {
      if (preset === 'default') {
        child.material = originalMaterials.get(child) || child.material;
      } else if (preset === 'stainless') {
        child.material = new THREE.MeshStandardMaterial({
          color: 0xDCE0E5,
          metalness: 0.94,
          roughness: 0.22,
          side: THREE.DoubleSide
        });
      } else if (preset === 'castiron') {
        child.material = new THREE.MeshStandardMaterial({
          color: 0x3C4248,
          metalness: 0.35,
          roughness: 0.76,
          side: THREE.DoubleSide
        });
      } else if (preset === 'sagma_paint') {
        child.material = new THREE.MeshStandardMaterial({
          color: 0x005A36,
          metalness: 0.28,
          roughness: 0.38,
          side: THREE.DoubleSide
        });
      } else if (preset === 'xray') {
        child.material = new THREE.MeshPhysicalMaterial({
          color: 0x7CD4FD,
          transmission: 0.88,
          opacity: 0.45,
          transparent: true,
          roughness: 0.15,
          metalness: 0.1,
          side: THREE.DoubleSide
        });
      }

      child.material.wireframe = isWireframeActive;
      child.material.needsUpdate = true;
    }
  });
}

function toggleWireframe() {
  isWireframeActive = !isWireframeActive;
  const btn = document.getElementById('btnToggleWireframe');
  if (btn) btn.classList.toggle('active', isWireframeActive);

  if (currentLoadedRoot) {
    currentLoadedRoot.traverse(child => {
      if (child.isMesh && child.material) {
        child.material.wireframe = isWireframeActive;
        child.material.needsUpdate = true;
      }
    });
  }
}

// ============================================================================
// 12. EXPLODED ASSEMBLY SLIDER ENGINE
// ============================================================================
function updateExplodedView(factor) {
  if (!currentLoadedRoot || meshOriginalPositions.size === 0) return;

  const rootCenter = new THREE.Vector3(0, 1.2, 0);

  meshOriginalPositions.forEach((saved, mesh) => {
    const originalPos = saved.pos;
    const dir = originalPos.clone().sub(rootCenter);
    if (dir.lengthSq() < 0.0001) dir.set(0, 1, 0);
    dir.normalize();

    // Scale displacement radially outwards
    const displacement = dir.multiplyScalar(factor * 1.8);
    mesh.position.copy(originalPos).add(displacement);
  });

  updateCalloutPositions();
}

// ============================================================================
// 13. 3D CALLOUT HOTSPOTS OVERLAY
// ============================================================================
function clearCallouts() {
  const root = document.getElementById('callout-overlay-root');
  if (root) root.innerHTML = '';
  calloutElements = [];
  activeInspectedCallout = null;
}

function initCalloutBadges(callouts) {
  clearCallouts();
  const root = document.getElementById('callout-overlay-root');
  if (!root || !callouts || callouts.length === 0) return;

  callouts.forEach((c, idx) => {
    const badge = document.createElement('div');
    badge.className = 'callout-badge';
    badge.textContent = c.tag || ((idx + 1) < 10 ? '0' + (idx + 1) : '' + (idx + 1));
    badge.title = c.title;

    badge.addEventListener('click', (e) => {
      e.stopPropagation();
      selectCallout(c, badge);
    });

    root.appendChild(badge);
    calloutElements.push({ data: c, el: badge });
  });

  updateCalloutPositions();
}

function updateCalloutPositions() {
  if (!calloutsVisible || calloutElements.length === 0 || !camera || !renderer) return;

  const container = document.getElementById('viewport-container');
  const width = container.clientWidth;
  const height = container.clientHeight;
  const tempV = new THREE.Vector3();

  calloutElements.forEach(item => {
    const anchor = item.data.anchor || [0, 1.2, 0];
    tempV.set(anchor[0], anchor[1], anchor[2]);

    // Check if behind camera
    tempV.project(camera);
    const isBehind = tempV.z > 1.0;

    if (isBehind) {
      item.el.style.display = 'none';
    } else {
      const x = (tempV.x * 0.5 + 0.5) * width;
      const y = (-(tempV.y * 0.5) + 0.5) * height;

      item.el.style.display = 'flex';
      item.el.style.left = x + 'px';
      item.el.style.top = y + 'px';
    }
  });
}

function selectCallout(c, badgeEl) {
  activeInspectedCallout = c;

  // Highlight badge
  calloutElements.forEach(it => it.el.classList.remove('active'));
  if (badgeEl) badgeEl.classList.add('active');

  // Open drawer to Inspector Tab
  openMachineDrawer('inspector');

  // Populate Inspector Details
  document.getElementById('inspectorEmptyState').style.display = 'none';
  document.getElementById('inspectorDetailState').style.display = 'block';

  document.getElementById('inspPartTitle').textContent = c.title;
  document.getElementById('inspPartTag').textContent = 'TAG ' + c.tag + ' • ' + (c.section || 'COMPONENT');
  document.getElementById('inspPartDesc').textContent = c.desc || 'Authoritative milling component documented in SAGMA curriculum.';
  document.getElementById('inspPartSpecs').textContent = c.specs || 'Refer to OEM manual tolerances and standard clearance settings.';
  document.getElementById('inspPartSafety').textContent = c.safety || 'Follow strict LOTO protocol before opening maintenance access doors.';

  // Camera Presets
  if (c.camPreset && c.camPreset.cam && c.camPreset.look) {
    smoothMoveCamera(c.camPreset.cam, c.camPreset.look);
  }
}

// ============================================================================
// 14. CAMERA INTERPOLATION & RESET
// ============================================================================
let camTween = null;

function smoothMoveCamera(posArr, targetArr) {
  if (!camera || !controls) return;

  const startPos = camera.position.clone();
  const endPos = new THREE.Vector3(posArr[0], posArr[1], posArr[2]);
  const startTarget = controls.target.clone();
  const endTarget = new THREE.Vector3(targetArr[0], targetArr[1], targetArr[2]);

  const startTime = performance.now();
  const duration = 650; // ms

  function updateTween() {
    const now = performance.now();
    const progress = Math.min((now - startTime) / duration, 1.0);
    // Smooth easeOutCubic
    const ease = 1 - Math.pow(1 - progress, 3);

    camera.position.lerpVectors(startPos, endPos, ease);
    controls.target.lerpVectors(startTarget, endTarget, ease);
    controls.update();

    if (progress < 1.0) {
      requestAnimationFrame(updateTween);
    }
  }

  updateTween();
}

function resetCameraFraming() {
  if (!currentLoadedRoot) return;
  const box = new THREE.Box3().setFromObject(currentLoadedRoot);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z);

  const fov = camera.fov * (Math.PI / 180);
  let camDist = Math.abs(maxDim / Math.sin(fov / 2)) * 0.95;
  camDist = Math.max(camDist, 2.0);

  smoothMoveCamera([center.x + camDist * 0.7, center.y + camDist * 0.4, center.z + camDist * 0.8], [center.x, center.y, center.z]);
}

// ============================================================================
// 15. EQUIPMENT LIBRARY MODAL & 6-CATEGORY FILTERING
// ============================================================================
let activeCategoryFilter = 'all';

async function openEquipmentLibrary() {
  const modal = document.getElementById('libraryModal');
  if (!modal) return;

  modal.classList.add('active');
  await renderEquipmentGrid();
}

async function renderEquipmentGrid() {
  const grid = document.getElementById('fleetGrid');
  const searchInput = document.getElementById('libSearchInput');
  const term = (searchInput ? searchInput.value : '').toLowerCase().trim();

  const allMachines = await EchoDB.getAll();

  const filtered = allMachines.filter(m => {
    const matchCat = (activeCategoryFilter === 'all') || (m.category === activeCategoryFilter);
    const matchSearch = !term ||
      m.name.toLowerCase().includes(term) ||
      (m.sub && m.sub.toLowerCase().includes(term)) ||
      (m.oem && m.oem.toLowerCase().includes(term)) ||
      (m.model && m.model.toLowerCase().includes(term));
    return matchCat && matchSearch;
  });

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column: span 3; text-align:center; padding: 40px; color:var(--text-muted); font-size:0.9rem;">No machinery found matching your filter criteria.</div>';
    return;
  }

  filtered.forEach(m => {
    const card = document.createElement('div');
    card.className = 'fleet-card' + (currentMachineMeta && currentMachineMeta.id === m.id ? ' active' : '');

    const badgeClass = m.statusBadge === '3D CAD Ready' ? 'badge-cad' : 'badge-mesh';

    card.innerHTML = `
      <div class="fleet-card-img-wrap">
        <img src="${m.previewImg || 'assets/preview_render.png'}" class="fleet-card-img" alt="${m.name}" onerror="this.src='assets/preview_render.png'">
        <span class="fleet-badge ${badgeClass}">${m.statusBadge || '3D CAD Ready'}</span>
      </div>
      <div class="fleet-card-body">
        <div class="fleet-card-title">${m.name}</div>
        <div class="fleet-card-oem">${m.oem || 'Bühler / Satake'} • ${m.model || m.categoryName}</div>
        <div class="fleet-card-stats">
          <span>⚡ ${m.power || '15 kW'}</span>
          <span>⚖ ${m.throughput || 'Throughput'}</span>
          <span>📄 ${m.specPdf ? 'Spec PDF' : 'Schematic'}</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      closeEquipmentLibrary();
      loadMachineTwin(m);
    });

    grid.appendChild(card);
  });
}

function closeEquipmentLibrary() {
  const modal = document.getElementById('libraryModal');
  if (modal) modal.classList.remove('active');
}

// ============================================================================
// 16. UNIVERSAL MACHINE & CAD UPLOADER WITH WASM TRANSLATION
// ============================================================================
let pendingUploadedFile = null;

function setupUploaderPipeline() {
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput3D');
  const btnBrowse = document.getElementById('btnBrowse3D');
  const form = document.getElementById('uploadMetadataForm');

  btnBrowse?.addEventListener('click', () => fileInput?.click());

  fileInput?.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleSelectedUploadFile(e.target.files[0]);
    }
  });

  dropZone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-active');
  });

  dropZone?.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-active');
  });

  dropZone?.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-active');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleSelectedUploadFile(e.dataTransfer.files[0]);
    }
  });

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!pendingUploadedFile) {
      alert('Please drag & drop or select a 3D model / CAD file first.');
      return;
    }

    const name = document.getElementById('upMachineName').value.trim();
    const oem = document.getElementById('upMachineOEM').value.trim();
    const category = document.getElementById('upMachineCategory').value;
    const shader = document.getElementById('upMachineShader').value;
    const model = document.getElementById('upMachineModel').value.trim() || 'Custom Twin';
    const throughput = document.getElementById('upMachineThroughput').value.trim() || 'Custom Spec';

    const ext = pendingUploadedFile.name.split('.').pop().toLowerCase();
    const machineId = 'custom_' + Date.now();

    const isCad = (ext === 'step' || ext === 'stp' || ext === 'iges' || ext === 'igs');

    const newMachine = {
      id: machineId,
      name: name,
      sub: model,
      category: category,
      categoryName: getCategoryName(category),
      oem: oem,
      model: model,
      throughput: throughput,
      speed: 'Variable Drive',
      power: 'Custom Motor',
      syllabus: 'User CAD Asset Import',
      sourceFile: 'custom:' + pendingUploadedFile.name,
      fileExt: ext,
      customBlob: pendingUploadedFile,
      previewImg: 'assets/preview_render.png',
      specPdf: 'specs/Bucket_elevator.pdf',
      statusBadge: isCad ? 'CAD Converted' : '3D CAD Ready',
      partsCount: 1,
      callouts: [],
      defaultCam: { pos: [2.5, 2.0, 3.2], target: [0, 1.2, 0] },
      defaultShader: shader
    };

    // Persist in IndexedDB
    await EchoDB.putMachine(newMachine);

    // Close Uploader
    closeUploaderModal();

    // Immediately open in dedicated 3D space
    loadMachineTwin(newMachine);
  });
}

function handleSelectedUploadFile(file) {
  pendingUploadedFile = file;
  const info = document.getElementById('selectedFileInfo');
  const nameEl = document.getElementById('selectedFileName');
  const sizeEl = document.getElementById('selectedFileSize');

  if (info && nameEl && sizeEl) {
    nameEl.textContent = file.name;
    sizeEl.textContent = (file.size / 1024).toFixed(1) + ' KB';
    info.style.display = 'block';
  }

  // Pre-fill Machine Name from file name
  const nameInput = document.getElementById('upMachineName');
  if (nameInput && !nameInput.value) {
    const baseName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
    nameInput.value = baseName;
  }
}

function getCategoryName(cat) {
  const map = {
    "01_degerming": "01 - Degerming & Debranning",
    "02_roller_mills": "02 - Roller Mills",
    "03_plansifters": "03 - Plansifters & Sifting",
    "04_purifiers": "04 - Purifiers & Finishing",
    "05_screenroom": "05 - Screenroom & Cleaning",
    "06_conveying": "06 - Conveying & Dust"
  };
  return map[cat] || "06 - Conveying & Dust";
}

function openUploaderModal() {
  const modal = document.getElementById('uploaderModal');
  if (modal) modal.classList.add('active');
}

function closeUploaderModal() {
  const modal = document.getElementById('uploaderModal');
  if (modal) modal.classList.remove('active');
}

// ============================================================================
// 17. SIDE DRAWER & TABS
// ============================================================================
function openMachineDrawer(targetTab) {
  const drawer = document.getElementById('machineDrawer');
  if (!drawer) return;
  drawer.classList.add('open');

  if (targetTab) {
    switchDrawerTab(targetTab);
  }
}

function closeMachineDrawer() {
  const drawer = document.getElementById('machineDrawer');
  if (drawer) drawer.classList.remove('open');
}

function switchDrawerTab(tabId) {
  document.querySelectorAll('.drawer-tab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-tab') === tabId);
  });

  document.getElementById('drawerTabSpecs').style.display = (tabId === 'specs') ? 'block' : 'none';
  document.getElementById('drawerTabPDF').style.display = (tabId === 'pdf') ? 'block' : 'none';
  document.getElementById('drawerTabInspector').style.display = (tabId === 'inspector') ? 'block' : 'none';
}

// ============================================================================
// 18. MULTI-LANGUAGE (i18n) ENGINE - DYNAMIC UI TRANSLATION
// ============================================================================
let currentLocale = localStorage.getItem('sagma_echo_lang') || 'en-ZA';

function setLanguage(langCode) {
  if (!TRANSLATIONS[langCode]) langCode = 'en-ZA';
  currentLocale = langCode;
  localStorage.setItem('sagma_echo_lang', langCode);

  const dict = TRANSLATIONS[langCode];

  // Update text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update placeholder inputs with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Keep dropdown selector aligned
  const selector = document.getElementById('langSelector');
  if (selector && selector.value !== langCode) {
    selector.value = langCode;
  }

  // Refresh Equipment Grid if Library is open
  const libModal = document.getElementById('libraryModal');
  if (libModal && libModal.classList.contains('active')) {
    renderEquipmentGrid();
  }
}

// ============================================================================
// 19. CALCULATIONS ENGINE
// ============================================================================
function updateCalculations() {
  const speed = parseFloat(document.getElementById('calcSpeed')?.value || 2.4);
  const spacing = parseFloat(document.getElementById('calcSpacing')?.value || 0.28);
  const volume = parseFloat(document.getElementById('calcVol')?.value || 4.2);
  const fill = parseFloat(document.getElementById('calcFill')?.value || 75) / 100;
  const density = parseFloat(document.getElementById('calcDensity')?.value || 750);

  // Buckets per second = speed / spacing
  const dischargeRate = speed / spacing;

  // Volume discharge m3/s = dischargeRate * (volume / 1000) * fill
  const volM3PerSec = dischargeRate * (volume / 1000) * fill;

  // Mass flow rate kg/s = volM3PerSec * density
  const kgPerSec = volM3PerSec * density;

  // Capacity t/h = kgPerSec * 3.6
  const throughputTpH = kgPerSec * 3.6;

  const resultEl = document.getElementById('calcResultThroughput');
  const bucketsEl = document.getElementById('calcResultBuckets');

  if (resultEl) resultEl.textContent = throughputTpH.toFixed(2) + ' t/h';
  if (bucketsEl) bucketsEl.textContent = dischargeRate.toFixed(1) + ' buckets/sec discharge rate';
}

// ============================================================================
// 20. LOADING OVERLAY
// ============================================================================
function showLoading(msg) {
  const overlay = document.getElementById('loading-overlay');
  const text = document.getElementById('loadingMsg');
  if (text) text.textContent = msg || 'INITIALIZING NVIDIA 3D STAGE...';
  if (overlay) {
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'auto';
  }
}

function hideLoading() {
  const overlay = document.getElementById('loading-overlay');
  if (overlay) {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
  }
}

// ============================================================================
// 21. EVENT LISTENERS & DOM HOOKS
// ============================================================================
function setupDOMListeners() {
  // Language Selector
  document.getElementById('langSelector')?.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });

  // Studio Dark / Light Viewport Toggle
  document.getElementById('btnToggleStudioMode')?.addEventListener('click', () => {
    document.body.classList.toggle('studio-dark-mode');
    const isDark = document.body.classList.contains('studio-dark-mode');
    if (scene) {
      scene.background = new THREE.Color(isDark ? 0x0D1319 : 0xEAF0EB);
      scene.fog.color = new THREE.Color(isDark ? 0x0D1319 : 0xEAF0EB);
    }
  });

  // Equipment Library Hub Triggers
  document.getElementById('btnOpenLibrary')?.addEventListener('click', openEquipmentLibrary);
  document.getElementById('btnCloseLibrary')?.addEventListener('click', closeEquipmentLibrary);

  // Category Pills in Equipment Library
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategoryFilter = pill.getAttribute('data-cat') || 'all';
      renderEquipmentGrid();
    });
  });

  // Search Input in Equipment Library
  document.getElementById('libSearchInput')?.addEventListener('input', () => {
    renderEquipmentGrid();
  });

  // Universal Uploader Triggers
  document.getElementById('btnOpenUploader')?.addEventListener('click', openUploaderModal);
  document.getElementById('btnCloseUploader')?.addEventListener('click', closeUploaderModal);

  // Calculations Engine Triggers
  document.getElementById('btnOpenCalculations')?.addEventListener('click', () => {
    document.getElementById('calcModal')?.classList.add('active');
    updateCalculations();
  });
  document.getElementById('btnCloseCalculations')?.addEventListener('click', () => {
    document.getElementById('calcModal')?.classList.remove('active');
  });

  ['calcSpeed', 'calcSpacing', 'calcVol', 'calcFill', 'calcDensity'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', updateCalculations);
  });

  // Viewport Toolbar Controls
  document.getElementById('btnResetCam')?.addEventListener('click', resetCameraFraming);
  document.getElementById('btnToggleWireframe')?.addEventListener('click', toggleWireframe);

  document.getElementById('btnToggleCallouts')?.addEventListener('click', () => {
    calloutsVisible = !calloutsVisible;
    const btn = document.getElementById('btnToggleCallouts');
    if (btn) btn.classList.toggle('active', calloutsVisible);
    const root = document.getElementById('callout-overlay-root');
    if (root) root.style.display = calloutsVisible ? 'block' : 'none';
  });

  // Explode Assembly Range
  const explodeRange = document.getElementById('explodeRange');
  const explodeValText = document.getElementById('explodeValText');
  explodeRange?.addEventListener('input', (e) => {
    const factor = parseFloat(e.target.value) / 100;
    if (explodeValText) explodeValText.textContent = Math.round(factor * 100) + '%';
    updateExplodedView(factor);
  });

  // Shader Preset Selector
  document.getElementById('materialPresetSelect')?.addEventListener('change', (e) => {
    applyMaterialPreset(e.target.value);
  });

  // Side Drawer Triggers
  document.getElementById('btnOpenDrawer')?.addEventListener('click', () => openMachineDrawer('specs'));
  document.getElementById('btnCloseDrawer')?.addEventListener('click', closeMachineDrawer);

  document.querySelectorAll('.drawer-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      switchDrawerTab(tabId);
    });
  });

  // Modal Backdrop Click to Close
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  });

  // Handle URL hash changes (Routing: #machine/:id)
  window.addEventListener('hashchange', async () => {
    const hash = window.location.hash;
    if (hash.startsWith('#machine/')) {
      const id = hash.replace('#machine/', '');
      if (currentMachineMeta && currentMachineMeta.id === id) return;
      const target = await EchoDB.get(id);
      if (target) loadMachineTwin(target);
    }
  });

  // Setup Drag & Drop and File Input Pipeline
  setupUploaderPipeline();
}

// ============================================================================
// 22. ANIMATION & RENDER LOOP (NVIDIA CAD 60 FPS)
// ============================================================================
function animate() {
  requestAnimationFrame(animate);

  const now = performance.now();
  frameCount++;

  // Calculate FPS every 500ms
  if (now - lastFpsUpdate >= 500) {
    measuredFPS = (frameCount * 1000) / (now - lastFpsUpdate);
    frameCount = 0;
    lastFpsUpdate = now;
    const hudFPS = document.getElementById('hudFPS');
    if (hudFPS) hudFPS.textContent = measuredFPS.toFixed(1) + ' FPS';
  }

  // Update OrbitControls
  if (controls) controls.update();

  // Update 3D Callout Positions in Viewport
  updateCalloutPositions();

  // Render Scene
  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

// ============================================================================
// 23. BOOTSTRAP INITIALIZATION
// ============================================================================
window.addEventListener('DOMContentLoaded', async () => {
  console.log('SAGMA ECHO Unified V2 Initializing...');

  // 1. Initialize Three.js Engine
  initThreeEngine();

  // 2. Setup DOM Event Listeners
  setupDOMListeners();

  // 3. Apply Stored Language
  setLanguage(currentLocale);

  // 4. Initialize Client IndexedDB
  await EchoDB.init();

  // 5. Check URL Hash Route or Load Default Machine Twin
  const hash = window.location.hash;
  let initialMachine = null;
  if (hash.startsWith('#machine/')) {
    const id = hash.replace('#machine/', '');
    initialMachine = await EchoDB.get(id);
  }

  if (!initialMachine) {
    initialMachine = await EchoDB.get('elevator_69b') || FLEET_CATALOG[0];
  }

  // 6. Launch Initial 3D Twin Workspace
  await loadMachineTwin(initialMachine);

  console.log('SAGMA ECHO Unified V2 Ready.');
});
