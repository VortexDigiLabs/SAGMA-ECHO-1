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
    "cat.all": "All Machinery (2)",
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
    "upload.fieldPDF": "Attach Technical Specification Sheet (Optional .PDF)",
    "upload.cancel": "Cancel",
    "upload.submit": "Import to Library & Open Twin",
    "upload.saveBtn": "Process & Launch 3D Twin",
    "calc.title": "SAGMA Engineering Calculations",
    "calc.sub": "Interactive formulas for grain throughput, bucket elevator capacity & degermer extraction.",
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
    "cat.all": "Alle Masjinerie (2)",
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
    "upload.fieldPDF": "Heg Tegniese Spesifikasieblad Aan (Opsionele .PDF)",
    "upload.cancel": "Kanselleer",
    "upload.submit": "Voer In na Biblioteek & Maak Oop",
    "upload.saveBtn": "Verwerk & Begin 3D Tweeling",
    "calc.title": "SAGMA Ingenieursberekeninge",
    "calc.sub": "Interaktiewe formules vir graandeurset, emmerhyser-kapasiteit en ontkieming.",
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
    "cat.all": "Yonke Imishini (2)",
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
    "upload.fieldPDF": "Faka Ifayela Lemininingwane (.PDF)",
    "upload.cancel": "Khansela",
    "upload.submit": "Faka Kumtapo & Vula ku-3D",
    "upload.saveBtn": "Qala Umshini ku-3D",
    "calc.title": "Izibalo Zobunjiniyela be-SAGMA",
    "calc.sub": "Amafomula okubala amandla okugaya kanye nejubane lomshini.",
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
    "cat.all": "Mechini Yohle (2)",
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
    "upload.fieldPDF": "Kenya Tokomane ya Dintlha (.PDF)",
    "upload.cancel": "Hlakola",
    "upload.submit": "Kenya Laeboraring & Bula 3D",
    "upload.saveBtn": "Qala Mochini ho 3D",
    "calc.title": "Dipalo tsa Boenjiniere tsa SAGMA",
    "calc.sub": "Difomula tsa bokhoni ba mochini le lebelo la ho sila.",
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
    "cat.all": "Todo Maquinário (2)",
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
    "upload.fieldPDF": "Anexar Ficha de Especificação Técnica (.PDF Opcional)",
    "upload.cancel": "Cancelar",
    "upload.submit": "Importar para a Biblioteca e Abrir 3D",
    "upload.saveBtn": "Processar e Abrir no Espaço 3D",
    "calc.title": "Cálculos de Engenharia SAGMA",
    "calc.sub": "Fórmulas interativas para capacidade de moagem e elevadores de canecas.",
    "badge.cadReady": "CAD 3D Pronto",
    "badge.meshTwin": "Gêmeo em Malha",
    "badge.cadConverted": "CAD Convertido"
  }
};

// 4. FLEET CATALOG - AUTHORITATIVE VERIFIED 3D TRAINING UNITS (BUCKET ELEVATOR & SATAKE VBF)
const FLEET_CATALOG = [
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
    specPdf: "specs/Buhler_02_Maize_Degermer_Plansifter_Puromat.pdf",
    statusBadge: "3D CAD Ready",
    partsCount: 87,
    callouts: SATAKE_CALLOUTS,
    defaultCam: { pos: [2.2, 2.2, 2.8], target: [0, 1.2, 0] },
    defaultShader: "default"
  }
];

// 5. CLIENT INDEXEDDB PERSISTENCE (ECHO_STUDIO_DB)
const DB_NAME = 'ECHO_STUDIO_DB';
const DB_VERSION = 4;
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
        } else {
          // Clear legacy placeholder machines on upgrade to v4 so only verified units + user uploads remain
          const store = e.target.transaction.objectStore(STORE_NAME);
          store.clear();
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
      const allowedIds = new Set(FLEET_CATALOG.map(m => m.id));
      const writeTx = this.db.transaction([STORE_NAME], 'readwrite');
      const writeStore = writeTx.objectStore(STORE_NAME);

      // Remove any old procedural placeholder records while preserving custom user-uploaded CADs
      const allReq = writeStore.getAll();
      allReq.onsuccess = () => {
        const existing = allReq.result || [];
        for (const rec of existing) {
          if (!allowedIds.has(rec.id) && !rec.customBlob) {
            writeStore.delete(rec.id);
          }
        }
        for (const m of FLEET_CATALOG) {
          writeStore.put(m);
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
let isCutawayActive = true;
let isLiveMotionActive = true;
let driveSpeedMultiplier = 1.0;
let currentShaderPreset = 'default';
let originalMaterials = new Map();
let meshOriginalPositions = new Map();
let occtInstance = null;

// Live Kinematic & Particle References
let kinematicRotors = [];
let kinematicBuckets = [];
let currentExplodeFactor = 0;
let grainParticleSystem = null;
let grainParticlesData = [];
let cutawayGlassMeshes = [];

// Instanced 3D Grain Flow & Dual-Machine Process Line State
let GRAIN_TYPE = 'maize'; // 'maize' (golden-yellow larger kernels) | 'wheat' (amber-tan smaller kernels)
let grainInstancedMesh = null;
let activeGrainCount = 650;
let dustHazePoints = null;
let dummyMatrixObj = new THREE.Object3D();

// Deterministic Seeded PRNG (Mulberry32) so every 30s recording is 100% identical & repeatable
function createSeededRandom(seed = 20261020) {
  let a = seed >>> 0;
  return function () {
    let t = (a += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Lighting References
let dirLight, fillLight, rimLight, ambientLight, groundGrid, shadowPlane, studioEnvTexture;

// Performance Telemetry
let frameCount = 0;
let lastTime = performance.now();
let lastFpsUpdate = performance.now();
let measuredFPS = 60.0;

function generateStudioEnvironment(rendererInstance, isDark = true) {
  try {
    const pmremGenerator = new THREE.PMREMGenerator(rendererInstance);
    pmremGenerator.compileEquirectangularShader();

    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(isDark ? 0x0b1118 : 0xd4dfd8);

    // Overhead Softbox Strip
    const topStrip = new THREE.Mesh(
      new THREE.PlaneGeometry(22, 10),
      new THREE.MeshBasicMaterial({ color: isDark ? 0xffffff : 0xf8fafc, side: THREE.DoubleSide })
    );
    topStrip.position.set(0, 11, 0);
    topStrip.rotation.x = Math.PI / 2;
    envScene.add(topStrip);

    // Dark Contrast Horizon Band (crucial in Light Theme so metallic & chrome surfaces have rich dark reflections instead of washing out white!)
    const horizonBand = new THREE.Mesh(
      new THREE.CylinderGeometry(16, 16, 5, 36, 1, true),
      new THREE.MeshBasicMaterial({ color: isDark ? 0x070b10 : 0x1e293b, side: THREE.DoubleSide })
    );
    horizonBand.position.set(0, 0, 0);
    envScene.add(horizonBand);

    // Warm Key Studio Strip (Brass/Gold specular enhancer)
    const warmKey = new THREE.Mesh(
      new THREE.PlaneGeometry(14, 10),
      new THREE.MeshBasicMaterial({ color: 0xffd699, side: THREE.DoubleSide })
    );
    warmKey.position.set(12, 5, 10);
    warmKey.lookAt(0, 0, 0);
    envScene.add(warmKey);

    // Cool Cyan Rim Strip (Optical Glass & Chrome edge highlight)
    const coolRim = new THREE.Mesh(
      new THREE.PlaneGeometry(14, 10),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide })
    );
    coolRim.position.set(-12, 5, -10);
    coolRim.lookAt(0, 0, 0);
    envScene.add(coolRim);

    // SAGMA Emerald Floor Bounce
    const floorBounce = new THREE.Mesh(
      new THREE.PlaneGeometry(28, 28),
      new THREE.MeshBasicMaterial({ color: isDark ? 0x0d3b26 : 0x1e3a2f, side: THREE.DoubleSide })
    );
    floorBounce.position.set(0, -8, 0);
    floorBounce.rotation.x = -Math.PI / 2;
    envScene.add(floorBounce);

    const envRT = pmremGenerator.fromScene(envScene, 0.035);
    pmremGenerator.dispose();
    return envRT.texture;
  } catch (e) {
    console.warn('PMREM environment fallback:', e);
    return null;
  }
}

function applyViewportThemeLighting(isDark) {
  if (!scene || !renderer) return;
  const bgHex = isDark ? 0x090d12 : 0xD8E2DC;
  scene.background = new THREE.Color(bgHex);
  scene.fog = new THREE.FogExp2(bgHex, isDark ? 0.028 : 0.018);

  // Adjust exposure & studio light intensities so Light Theme has deep contrast and never washes out
  renderer.toneMappingExposure = isDark ? 1.22 : 0.96;
  if (ambientLight) ambientLight.intensity = isDark ? 0.55 : 0.42;
  if (dirLight) dirLight.intensity = isDark ? 2.3 : 1.85;
  if (fillLight) fillLight.intensity = isDark ? 1.35 : 1.05;
  if (rimLight) rimLight.intensity = isDark ? 0.85 : 0.65;
  if (shadowPlane && shadowPlane.material) {
    shadowPlane.material.opacity = isDark ? 0.48 : 0.35;
  }

  if (studioEnvTexture) studioEnvTexture.dispose();
  studioEnvTexture = generateStudioEnvironment(renderer, isDark);
  if (studioEnvTexture) {
    scene.environment = studioEnvTexture;
  }
}

function initThreeEngine() {
  const container = document.getElementById('viewport-container');
  const canvas = document.getElementById('three-canvas');

  const isDark = document.body.classList.contains('studio-dark-mode');
  const bgHex = isDark ? 0x090d12 : 0xEAF0EB;

  // Scene with Studio Dark Museum Background
  scene = new THREE.Scene();
  scene.background = new THREE.Color(bgHex);
  scene.fog = new THREE.FogExp2(bgHex, 0.032);

  // Perspective Camera
  camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.05, 500);
  camera.position.set(2.8, 2.2, 3.2);

  // WebGL Renderer with High-Precision Shadows, Tone Mapping & Video Capture Support
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    powerPreference: "high-performance",
    alpha: false,
    preserveDrawingBuffer: true
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  if ('outputColorSpace' in renderer) {
    renderer.outputColorSpace = THREE.SRGBColorSpace;
  } else {
    renderer.outputEncoding = THREE.sRGBEncoding;
  }
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // Bind Procedural Studio HDRI Environment for PBR Metal & Glass Reflections
  studioEnvTexture = generateStudioEnvironment(renderer);
  if (studioEnvTexture) {
    scene.environment = studioEnvTexture;
  }

  // OrbitControls with Smooth Damping
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = true;
  controls.minDistance = 0.4;
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
  ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.55);
  scene.add(ambientLight);

  // 2. Main Key Directional Light (Warm Studio Key)
  dirLight = new THREE.DirectionalLight(0xFFF6E8, 2.2);
  dirLight.position.set(7, 14, 9);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.width = 2048;
  dirLight.shadow.mapSize.height = 2048;
  dirLight.shadow.camera.near = 0.5;
  dirLight.shadow.camera.far = 35;
  dirLight.shadow.bias = -0.0002;
  dirLight.shadow.camera.left = -4.5;
  dirLight.shadow.camera.right = 4.5;
  dirLight.shadow.camera.top = 4.5;
  dirLight.shadow.camera.bottom = -4.5;
  scene.add(dirLight);

  // 3. Cool Teal/Cyan Rim / Edge Light (Strong architectural rim contour)
  fillLight = new THREE.DirectionalLight(0x2DD4BF, 1.55);
  fillLight.position.set(-9, 6, -7);
  scene.add(fillLight);

  // 4. Warm Brass Under-Fill Light
  rimLight = new THREE.DirectionalLight(0xF59E0B, 0.85);
  rimLight.position.set(0, -5, 6);
  scene.add(rimLight);

  // 5. Soft Ground Contact Shadow & Faint Reflective Studio Floor Plane
  const planeGeo = new THREE.PlaneGeometry(60, 60);
  const shadowMat = new THREE.ShadowMaterial({ opacity: 0.45 });
  shadowPlane = new THREE.Mesh(planeGeo, shadowMat);
  shadowPlane.rotation.x = -Math.PI / 2;
  shadowPlane.position.y = -0.005;
  shadowPlane.receiveShadow = true;
  scene.add(shadowPlane);

  const reflectFloor = new THREE.Mesh(
    new THREE.PlaneGeometry(36, 36),
    new THREE.MeshStandardMaterial({
      color: 0x0A1218,
      metalness: 0.78,
      roughness: 0.24,
      transparent: true,
      opacity: 0.36,
      envMapIntensity: 1.5
    })
  );
  reflectFloor.rotation.x = -Math.PI / 2;
  reflectFloor.position.y = -0.008;
  reflectFloor.receiveShadow = true;
  scene.add(reflectFloor);

  // 6. Precision Museum CAD Ground Grid
  const isDark = document.body.classList.contains('studio-dark-mode');
  groundGrid = new THREE.GridHelper(24, 48, 0x16A34A, isDark ? 0x182620 : 0xCBD8CE);
  groundGrid.position.y = 0;
  scene.add(groundGrid);
}

function onWindowResize() {
  if (cinematicState && cinematicState.active) return; // Lock fixed stage size during 30s recording
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
    if (child.isMesh || child.isPoints) {
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
  kinematicRotors = [];
  kinematicBuckets = [];
  grainParticleSystem = null;
  grainInstancedMesh = null;
  dustHazePoints = null;
  grainParticlesData = [];
  cutawayGlassMeshes = [];
  clearCallouts();
}

// ============================================================================
// 8. MUSEUM-GRADE PBR MATERIALS & PROCEDURAL CAD ASSEMBLIES
// ============================================================================
function createMuseumPalette() {
  return {
    sagmaGreen: new THREE.MeshStandardMaterial({
      color: 0x0D6E45,
      metalness: 0.45,
      roughness: 0.25,
      envMapIntensity: 1.55,
      side: THREE.DoubleSide
    }),
    gunmetal: new THREE.MeshStandardMaterial({
      color: 0x26313E,
      metalness: 0.78,
      roughness: 0.26,
      envMapIntensity: 1.65,
      side: THREE.DoubleSide
    }),
    darkCastIron: new THREE.MeshStandardMaterial({
      color: 0x161C22,
      metalness: 0.68,
      roughness: 0.42,
      envMapIntensity: 1.35,
      side: THREE.DoubleSide
    }),
    machinedSteel: new THREE.MeshStandardMaterial({
      color: 0x94A3B8,
      metalness: 0.85,
      roughness: 0.18,
      envMapIntensity: 1.85,
      side: THREE.DoubleSide
    }),
    brushedChrome: new THREE.MeshStandardMaterial({
      color: 0xCBD5E1,
      metalness: 0.90,
      roughness: 0.14,
      envMapIntensity: 2.0,
      side: THREE.DoubleSide
    }),
    anodizedBrass: new THREE.MeshStandardMaterial({
      color: 0xE5A024,
      metalness: 0.86,
      roughness: 0.20,
      envMapIntensity: 1.95,
      side: THREE.DoubleSide
    }),
    bronzeBushing: new THREE.MeshStandardMaterial({
      color: 0xB87333,
      metalness: 0.84,
      roughness: 0.24,
      envMapIntensity: 1.7,
      side: THREE.DoubleSide
    }),
    sensorCyan: new THREE.MeshStandardMaterial({
      color: 0x0EA5E9,
      emissive: 0x0284C7,
      emissiveIntensity: 0.65,
      metalness: 0.55,
      roughness: 0.2
    }),
    safetyRed: new THREE.MeshStandardMaterial({
      color: 0xDC2626,
      metalness: 0.55,
      roughness: 0.28
    }),
    opticalGlass: new THREE.MeshStandardMaterial({
      color: 0x38BDF8,
      opacity: 0.34,
      transparent: true,
      roughness: 0.08,
      metalness: 0.22,
      envMapIntensity: 2.2,
      depthWrite: false,
      side: THREE.DoubleSide
    }),
    slottedCageGlass: new THREE.MeshStandardMaterial({
      color: 0x34D399,
      opacity: 0.38,
      transparent: true,
      roughness: 0.15,
      metalness: 0.30,
      envMapIntensity: 1.9,
      depthWrite: false,
      side: THREE.DoubleSide
    })
  };
}

// Helper to add a bolt circle of hex bolts around a flange
function addBoltCircle(parent, radius, yPos, count, boltRadius, mat, explodeCategory) {
  const boltGeo = new THREE.CylinderGeometry(boltRadius, boltRadius, boltRadius * 1.4, 6);
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const bolt = new THREE.Mesh(boltGeo, mat);
    bolt.position.set(Math.cos(angle) * radius, yPos, Math.sin(angle) * radius);
    bolt.userData.explodeCategory = explodeCategory || 'flange';
    parent.add(bolt);
  }
}

// Helper to add a Museum Instrument Bench Plinth with Brass Trim & Scale Ticks
function createInstrumentBenchPlinth(width, depth, matPalette) {
  const plinthGroup = new THREE.Group();
  plinthGroup.name = 'Instrument_Bench_Plinth';

  // Heavy Cast Base Slab
  const slab = new THREE.Mesh(new THREE.BoxGeometry(width, 0.08, depth), matPalette.darkCastIron);
  slab.position.y = 0.04;
  slab.castShadow = true;
  slab.receiveShadow = true;
  slab.userData.noExplode = true;
  plinthGroup.add(slab);

  // Brass Bevel Perimeter Trim
  const trim = new THREE.Mesh(new THREE.BoxGeometry(width + 0.02, 0.016, depth + 0.02), matPalette.anodizedBrass);
  trim.position.y = 0.082;
  trim.userData.noExplode = true;
  plinthGroup.add(trim);

  // 4 Machined Leveling Feet
  const footOffsets = [
    [-width * 0.45, -depth * 0.45],
    [width * 0.45, -depth * 0.45],
    [-width * 0.45, depth * 0.45],
    [width * 0.45, depth * 0.45]
  ];
  footOffsets.forEach(([fx, fz]) => {
    const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.07, 0.03, 24), matPalette.anodizedBrass);
    foot.position.set(fx, 0.015, fz);
    foot.userData.noExplode = true;
    plinthGroup.add(foot);
  });

  // Front Precision Metric Ruler Strip & Ticks
  const rulerBar = new THREE.Mesh(new THREE.BoxGeometry(width * 0.85, 0.008, 0.035), matPalette.gunmetal);
  rulerBar.position.set(0, 0.085, depth * 0.46);
  rulerBar.userData.noExplode = true;
  plinthGroup.add(rulerBar);

  const tickCount = 31;
  const startX = -width * 0.4;
  const spanX = width * 0.8;
  for (let i = 0; i < tickCount; i++) {
    const isMajor = i % 5 === 0;
    const tick = new THREE.Mesh(
      new THREE.BoxGeometry(0.003, 0.004, isMajor ? 0.022 : 0.011),
      isMajor ? matPalette.anodizedBrass : matPalette.machinedSteel
    );
    tick.position.set(startX + (i / (tickCount - 1)) * spanX, 0.09, depth * 0.46);
    tick.userData.noExplode = true;
    plinthGroup.add(tick);
  }

  return plinthGroup;
}

// ============================================================================
// FLAGSHIP 1: MUSEUM-GRADE SATAKE VBF VERTICAL MAIZE DEGERMER (CUTAWAY RIG)
// ============================================================================
function buildMuseumSatakeVBF(options = {}) {
  const root = new THREE.Group();
  root.name = 'Satake_VBF_Museum_Twin';
  const P = createMuseumPalette();

  // 1. Instrument Plinth Base
  root.add(createInstrumentBenchPlinth(1.45, 1.25, P));

  // 2. Machine Base Frame & Thrust Bearing Pedestal (Tag 10)
  const baseGroup = new THREE.Group();
  baseGroup.name = 'Satake_Base_Frame_Stand';
  const mainPedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.44, 0.34, 48), P.gunmetal);
  mainPedestal.position.y = 0.25;
  baseGroup.add(mainPedestal);

  // Brass Thrust Bearing Collar Ring
  const bearingCollar = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.26, 0.07, 48), P.anodizedBrass);
  bearingCollar.position.y = 0.44;
  baseGroup.add(bearingCollar);
  addBoltCircle(baseGroup, 0.40, 0.09, 16, 0.012, P.anodizedBrass, 'base');

  // 4 Structural Cast Support Columns
  for (let i = 0; i < 4; i++) {
    const ang = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.045, 0.56, 24), P.darkCastIron);
    col.position.set(Math.cos(ang) * 0.34, 0.36, Math.sin(ang) * 0.34);
    baseGroup.add(col);
  }
  root.add(baseGroup);

  // 3. 75 kW Main Drive Motor & Multi-V-Belt Pulley Drive (Tag 10)
  const motorGroup = new THREE.Group();
  motorGroup.name = 'Satake_Drive_Motor_75kW';
  const motorBody = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.42, 36), P.sagmaGreen);
  motorBody.rotation.z = Math.PI / 2;
  motorBody.position.set(0.42, 0.28, -0.18);
  motorGroup.add(motorBody);

  // Cooling Fins on 75kW Motor
  for (let f = -0.16; f <= 0.16; f += 0.028) {
    const fin = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.008, 32), P.sagmaGreen);
    fin.rotation.z = Math.PI / 2;
    fin.position.set(0.42 + f, 0.28, -0.18);
    motorGroup.add(fin);
  }

  // Brass Drive Sheave & V-Belt Guard Cutaway
  const drivePulley = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.08, 36), P.anodizedBrass);
  drivePulley.position.set(0.48, 0.28, 0.04);
  drivePulley.rotation.x = Math.PI / 2;
  motorGroup.add(drivePulley);
  kinematicRotors.push({ mesh: drivePulley, axis: 'y', speed: -6.5 });
  root.add(motorGroup);

  // 4. Air Induction Fan & Central Hollow Rotor Duct (Tag 09)
  const fanGroup = new THREE.Group();
  fanGroup.name = 'Satake_Air_Induction_Fan';
  const voluteCasing = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.11, 36), P.sagmaGreen);
  voluteCasing.rotation.x = Math.PI / 2;
  voluteCasing.position.set(-0.22, 0.26, 0.26);
  fanGroup.add(voluteCasing);

  // Brass Impeller Hub visible inside intake
  const impellerHub = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.12, 24), P.anodizedBrass);
  impellerHub.rotation.x = Math.PI / 2;
  impellerHub.position.set(-0.22, 0.26, 0.27);
  fanGroup.add(impellerHub);
  kinematicRotors.push({ mesh: impellerHub, axis: 'y', speed: -9.0 });

  // Aspiration Air Manifold Pipe
  const airPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.32, 24), P.machinedSteel);
  airPipe.rotation.z = Math.PI / 2;
  airPipe.position.set(-0.1, 0.26, 0.12);
  fanGroup.add(airPipe);
  root.add(fanGroup);

  // 5. Vertical Distribution Scroll (Tag 03)
  const scrollGroup = new THREE.Group();
  scrollGroup.name = 'Satake_Distribution_Scroll';
  const scrollShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 0.36, 36), P.machinedSteel);
  scrollShaft.position.set(0, 0.56, 0);
  scrollGroup.add(scrollShaft);

  // Helical Auger Flights (6 precision brass-edged flights)
  for (let i = 0; i < 6; i++) {
    const flight = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.21, 0.018, 36), P.anodizedBrass);
    flight.position.set(0, 0.43 + i * 0.048, 0);
    flight.rotation.z = 0.18;
    flight.rotation.x = (i % 2 === 0) ? 0.12 : -0.12;
    scrollGroup.add(flight);
  }
  kinematicRotors.push({ mesh: scrollGroup, axis: 'y', speed: -4.8 });
  root.add(scrollGroup);

  // 6. Cylindrical Steel Rotor - Split Segment Design (Tag 04) & Beater Bars (Tag 05)
  const rotorGroup = new THREE.Group();
  rotorGroup.name = 'Satake_Vertical_Steel_Rotor';

  const centralShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 1.55, 36), P.brushedChrome);
  centralShaft.position.set(0, 1.05, 0);
  rotorGroup.add(centralShaft);

  const rotorCore = new THREE.Mesh(new THREE.CylinderGeometry(0.20, 0.18, 0.78, 48), P.machinedSteel);
  rotorCore.position.set(0, 1.12, 0);
  rotorGroup.add(rotorCore);

  // Knurled & Slotted Air Grooves on Rotor Drum
  for (let r = 0; r < 5; r++) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.202, 0.009, 16, 48), P.anodizedBrass);
    ring.rotation.x = Math.PI / 2;
    ring.position.set(0, 0.82 + r * 0.15, 0);
    rotorGroup.add(ring);
  }

  // Detachable Hardened Steel Beater Bars (Tag 05)
  const beaterGroup = new THREE.Group();
  beaterGroup.name = 'Satake_Beater_Bars';
  for (let b = 0; b < 4; b++) {
    const ang = (b / 4) * Math.PI * 2;
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.74, 0.045), P.anodizedBrass);
    bar.position.set(Math.cos(ang) * 0.215, 1.12, Math.sin(ang) * 0.215);
    bar.rotation.y = -ang;
    beaterGroup.add(bar);
  }
  rotorGroup.add(beaterGroup);
  kinematicRotors.push({ mesh: rotorGroup, axis: 'y', speed: -4.8 });
  root.add(rotorGroup);

  // 7. Multifaceted Slotted Screen Cartridge & Optical Cutaway Cage (Tag 06 & 07)
  const screenGroup = new THREE.Group();
  screenGroup.name = 'Satake_Slotted_Screens';

  // Lower & Upper Machined Brass Clamping Flanges (like camera lens rings in reference video!)
  const lowerFlange = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.045, 48), P.anodizedBrass);
  lowerFlange.position.set(0, 0.72, 0);
  screenGroup.add(lowerFlange);
  addBoltCircle(screenGroup, 0.32, 0.745, 16, 0.009, P.machinedSteel);

  const midFlange = new THREE.Mesh(new THREE.TorusGeometry(0.33, 0.016, 16, 48), P.anodizedBrass);
  midFlange.rotation.x = Math.PI / 2;
  midFlange.position.set(0, 1.12, 0);
  screenGroup.add(midFlange);

  const upperFlange = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.045, 48), P.anodizedBrass);
  upperFlange.position.set(0, 1.52, 0);
  screenGroup.add(upperFlange);
  addBoltCircle(screenGroup, 0.32, 1.545, 16, 0.009, P.machinedSteel);

  // Back Gunmetal Outer Jacket (180 deg cutaway so front reveals internal rotor & grain stream)
  const backJacket = new THREE.Mesh(
    new THREE.CylinderGeometry(0.335, 0.335, 0.78, 36, 1, true, Math.PI * 0.85, Math.PI * 1.3),
    P.gunmetal
  );
  backJacket.position.set(0, 1.12, 0);
  screenGroup.add(backJacket);

  // Front Optical Glass Cutaway Inspection Shield
  const frontGlass = new THREE.Mesh(
    new THREE.CylinderGeometry(0.31, 0.31, 0.76, 48, 1, true, -Math.PI * 0.15, Math.PI * 1.0),
    P.opticalGlass
  );
  frontGlass.position.set(0, 1.12, 0);
  cutawayGlassMeshes.push(frontGlass);
  screenGroup.add(frontGlass);

  // 8 Vertical Rib Cage Pillars & Adjustable Resistance Bars (Tag 07)
  for (let p = 0; p < 8; p++) {
    const ang = (p / 8) * Math.PI * 2;
    const rib = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.80, 0.024), P.sagmaGreen);
    rib.position.set(Math.cos(ang) * 0.315, 1.12, Math.sin(ang) * 0.315);
    rib.rotation.y = -ang;
    screenGroup.add(rib);

    // Knurled Brass Resistance Adjustment Bolts
    const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.04, 16), P.anodizedBrass);
    knob.rotation.z = Math.PI / 2;
    knob.position.set(Math.cos(ang) * 0.34, 1.25, Math.sin(ang) * 0.34);
    knob.rotation.y = -ang;
    screenGroup.add(knob);
  }
  root.add(screenGroup);

  // 8. Upper Offal Exhaust Hood & Motorized Inlet Screw Feeder (Tag 02)
  const feederGroup = new THREE.Group();
  feederGroup.name = 'Satake_Inlet_Screw_Feeder';
  const upperHood = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.24, 48), P.sagmaGreen);
  upperHood.position.set(0, 1.66, 0);
  feederGroup.add(upperHood);

  const screwBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.095, 0.42, 32), P.gunmetal);
  screwBarrel.rotation.z = Math.PI / 2;
  screwBarrel.position.set(0.28, 1.66, 0);
  feederGroup.add(screwBarrel);
  root.add(feederGroup);

  // 9. Grain Feed Inlet Hopper & Permanent Rare-Earth Magnet Trap (Tag 01)
  const magnetGroup = new THREE.Group();
  magnetGroup.name = 'Satake_Feed_Inlet_Magnet';
  const hopperCone = new THREE.Mesh(new THREE.CylinderGeometry(0.20, 0.09, 0.26, 36), P.brushedChrome);
  hopperCone.position.set(0.38, 1.92, 0);
  magnetGroup.add(hopperCone);

  const magnetCore = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.045, 32), P.anodizedBrass);
  magnetCore.position.set(0.38, 1.80, 0);
  magnetGroup.add(magnetCore);
  root.add(magnetGroup);

  // 10. Overtails Discharge Chute & Weighted Retention Flap + CCU Module (Tag 08)
  const flapGroup = new THREE.Group();
  flapGroup.name = 'Satake_Top_Outlet_Weighted_Flap';
  const outletBox = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.24, 0.24), P.sagmaGreen);
  outletBox.position.set(-0.32, 1.65, 0);
  flapGroup.add(outletBox);

  const dischargeSpout = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.065, 0.32, 28), P.brushedChrome);
  dischargeSpout.position.set(-0.38, 1.44, 0.04);
  dischargeSpout.rotation.z = 0.25;
  flapGroup.add(dischargeSpout);

  // Counter-Weight Lever & Brass Poise Weight
  const leverArm = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.34, 16), P.machinedSteel);
  leverArm.position.set(-0.42, 1.82, 0.08);
  leverArm.rotation.z = -0.45;
  flapGroup.add(leverArm);

  const poiseWeight = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.05, 24), P.anodizedBrass);
  poiseWeight.position.set(-0.50, 1.94, 0.08);
  flapGroup.add(poiseWeight);
  root.add(flapGroup);

  // 11. Live Swirling Golden Maize / Amber Wheat Kernel & Aspiration Stream
  if (!options || !options.skipInternalParticles) {
    createInstancedGrainFlow(root, 'satake_only', activeGrainCount);
  }

  return root;
}

function createSatakeParticleStream(root) {
  const count = 420;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  grainParticlesData = [];

  const colorMaize = new THREE.Color(0xFBBF24); // Golden Maize
  const colorAir = new THREE.Color(0x38BDF8);   // Cool Aspiration Air

  for (let i = 0; i < count; i++) {
    const isAir = i % 3 === 0;
    const h = Math.random(); // normalized height 0..1 inside chamber (y = 0.50 to 1.55)
    const angle = Math.random() * Math.PI * 2;
    const radius = isAir ? (0.22 + Math.random() * 0.08) : (0.18 + Math.random() * 0.11);

    const x = Math.cos(angle) * radius;
    const y = 0.50 + h * 1.05;
    const z = Math.sin(angle) * radius;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    const c = isAir ? colorAir : colorMaize;
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;

    grainParticlesData.push({
      mode: 'vortex',
      isAir,
      angle,
      radius,
      h,
      speed: -(2.8 + Math.random() * 2.2)
    });
  }

  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.024,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  grainParticleSystem = new THREE.Points(geo, mat);
  grainParticleSystem.name = 'Live_Grain_And_Air_Stream';
  grainParticleSystem.userData.noExplode = true;
  root.add(grainParticleSystem);
}

// ============================================================================
// FLAGSHIP 2: ENHANCE BUCKET ELEVATOR WITH MUSEUM PBR, BUCKET GRAIN MOUNDS & FLOW
// ============================================================================
function enhanceBucketElevatorRoot(gltfRoot, options = {}) {
  const P = createMuseumPalette();
  kinematicBuckets = [];

  // Add Museum Instrument Bench Plinth under Bucket Elevator Boot
  const bootPlinth = createInstrumentBenchPlinth(1.6, 1.3, P);
  bootPlinth.position.y = -0.06;
  gltfRoot.add(bootPlinth);

  const isWheat = GRAIN_TYPE === 'wheat';
  const bucketGrainMat = new THREE.MeshStandardMaterial({
    color: isWheat ? 0xD99B52 : 0xFBBF24,
    emissive: isWheat ? 0x78350F : 0xB45309,
    emissiveIntensity: 0.25,
    roughness: 0.35,
    metalness: 0.12
  });
  const bucketGrainGeo = new THREE.BoxGeometry(0.11, 0.055, 0.16);

  const bucketMeshes = [];

  gltfRoot.traverse(child => {
    if (!child.isMesh) return;
    if (child.userData && child.userData.isGrainFill) return;
    const n = (child.name || '').toLowerCase();

    if (n.includes('pulley') || n.includes('flange') || n.includes('takeup_screw')) {
      child.material = P.anodizedBrass.clone();
      if (n.includes('pulley')) {
        // Pulley Cylinder in GLTF has rotation.x = +90 deg so local Y axis is the true horizontal shaft axis!
        // Rotate around local 'y' with negative speed (-3.8) so top moves from UpLeg (-X) to Discharge (+X)
        kinematicRotors.push({ mesh: child, axis: 'y', speed: -3.8 });
      }
    } else if (n.includes('bucket_')) {
      child.material = P.brushedChrome.clone();
      child.userData.noExplode = true;
      bucketMeshes.push(child);
    } else if (n.includes('shaft') || n.includes('bearing')) {
      child.material = P.machinedSteel.clone();
      if (n.includes('shaft')) {
        kinematicRotors.push({ mesh: child, axis: 'y', speed: -3.8 });
      }
    } else if (n.includes('viewport') || n.includes('cutaway') || n.includes('grain_flow')) {
      child.material = P.opticalGlass.clone();
      cutawayGlassMeshes.push(child);
    } else if (n.includes('sensor') || n.includes('cleanout')) {
      child.material = P.safetyRed.clone();
    } else if (n.includes('belt_')) {
      child.material = P.darkCastIron.clone();
    } else if (n.includes('hood') || n.includes('spout') || n.includes('motor')) {
      child.material = P.sagmaGreen.clone();
    } else if (n.includes('trunking') || n.includes('casing')) {
      // Make up-leg trunking partially cutaway glass so internal buckets & grain stream shine through
      if (n.includes('upleg')) {
        child.material = P.opticalGlass.clone();
        cutawayGlassMeshes.push(child);
      } else {
        child.material = P.gunmetal.clone();
      }
    }
  });

  // Attach a visible grain fill mound inside each bucket AFTER traversal so child.add() never mutates an active traverse() walk!
  const totalBuckets = Math.max(1, bucketMeshes.length);
  bucketMeshes.forEach((bMesh, idx) => {
    const fillMesh = new THREE.Mesh(bucketGrainGeo, bucketGrainMat);
    fillMesh.name = 'Bucket_Grain_Fill_Mound';
    fillMesh.position.set(0, 0.032, 0);
    fillMesh.userData.noExplode = true;
    fillMesh.userData.isGrainFill = true;
    bMesh.add(fillMesh);

    kinematicBuckets.push({
      mesh: bMesh,
      grainFill: fillMesh,
      phase: idx / totalBuckets,
      baseZ: bMesh.position.z || 0
    });
  });

  if (!options.skipInternalParticles) {
    createInstancedGrainFlow(gltfRoot, 'elevator_only', activeGrainCount);
  }
}

// ============================================================================
// INSTANCED 3D GRAIN FLOW ENGINE (MAIZE / WHEAT) + DISCHARGE DUST HAZE & GLOW
// ============================================================================
function createInstancedGrainFlow(parentRoot, mode = 'elevator_only', maxCount = 650) {
  const isWheat = GRAIN_TYPE === 'wheat';
  const rng = createSeededRandom(20261020);

  // When attached inside the unscaled Bucket Elevator GLTF (9.6m tall, later scaled by ~0.25x to 2.4m),
  // scale the kernel geometry by 3.6x in local space so world-space kernel size matches the Satake VBF!
  const geoScale = mode === 'elevator_only' ? 3.6 : 1.0;

  // 1. Instanced 3D Kernel Geometry (Maize = larger plump golden dent kernel; Wheat = smaller elongated amber-tan berry)
  const kernelGeo = isWheat
    ? new THREE.CylinderGeometry(0.0085 * geoScale, 0.0085 * geoScale, 0.023 * geoScale, 7)
    : new THREE.DodecahedronGeometry(0.0155 * geoScale, 0);

  const baseHex = isWheat ? 0xD99B52 : 0xFBBF24;
  const emissiveHex = isWheat ? 0x92400E : 0xD97706;

  const kernelMat = new THREE.MeshStandardMaterial({
    color: baseHex,
    emissive: emissiveHex,
    emissiveIntensity: 0.34,
    roughness: 0.28,
    metalness: 0.12
  });

  const instMesh = new THREE.InstancedMesh(kernelGeo, kernelMat, maxCount);
  instMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  instMesh.name = 'Instanced_3D_Grain_Flow';
  instMesh.userData.noExplode = true;
  instMesh.castShadow = false;
  instMesh.receiveShadow = false;

  const cBase = new THREE.Color(baseHex);
  const cAlt = new THREE.Color(isWheat ? 0xB47B38 : 0xF59E0B);
  const cBright = new THREE.Color(isWheat ? 0xFDE68A : 0xFEF08A);
  const tempColor = new THREE.Color();

  grainParticlesData = [];

  for (let i = 0; i < maxCount; i++) {
    const t = i / maxCount; // Uniformly pre-filled 0..1 along the machine's flow path!
    const mixR = rng();
    if (mixR < 0.5) tempColor.copy(cBase).lerp(cAlt, rng() * 0.6);
    else tempColor.copy(cBase).lerp(cBright, rng() * 0.45);
    if (instMesh.setColorAt) {
      instMesh.setColorAt(i, tempColor);
    }

    grainParticlesData.push({
      mode,
      baseT: t,
      t,
      speed: 0.16 + rng() * 0.04,
      jitterX: (rng() - 0.5) * 0.036,
      jitterY: (rng() - 0.5) * 0.028,
      jitterZ: (rng() - 0.5) * 0.040,
      rotX: rng() * Math.PI * 2,
      rotY: rng() * Math.PI * 2,
      rotZ: rng() * Math.PI * 2,
      rotSpeedX: (rng() - 0.5) * 6.0,
      rotSpeedY: (rng() - 0.5) * 6.0,
      scaleX: isWheat ? (0.85 + rng() * 0.35) : (1.05 + rng() * 0.45),
      scaleY: isWheat ? (1.15 + rng() * 0.40) : (0.85 + rng() * 0.35),
      scaleZ: isWheat ? (0.85 + rng() * 0.35) : (0.75 + rng() * 0.30),
      vortexPhase: rng() * Math.PI * 2,
      vortexRadius: 0.19 + rng() * 0.095
    });
  }
  if (instMesh.instanceColor) instMesh.instanceColor.needsUpdate = true;

  parentRoot.add(instMesh);
  grainInstancedMesh = instMesh;
  grainParticleSystem = instMesh;

  // 2. Subtle Golden Dust / Chaff Haze & Soft Glow near Discharge Points
  const hazeCount = 70;
  const hazeGeo = new THREE.BufferGeometry();
  const hazePos = new Float32Array(hazeCount * 3);
  for (let i = 0; i < hazeCount; i++) {
    if (mode === 'elevator_only') {
      // Elevator local coords (9.6m tall): half near head discharge spout (Y ~ 9.0m), half near boot intake (Y ~ 0.75m)
      if (i < 42) {
        hazePos[i * 3] = 0.32 + (rng() - 0.5) * 0.55;
        hazePos[i * 3 + 1] = 8.95 + (rng() - 0.5) * 0.55;
        hazePos[i * 3 + 2] = (rng() - 0.5) * 0.45;
      } else {
        hazePos[i * 3] = -0.34 + (rng() - 0.5) * 0.45;
        hazePos[i * 3 + 1] = 0.78 + (rng() - 0.5) * 0.45;
        hazePos[i * 3 + 2] = (rng() - 0.5) * 0.45;
      }
    } else {
      // Satake VBF local coords (2.0m tall): top feed hopper (0.38, 1.90, 0) & overtails discharge spout (-0.38, 1.38, 0.04)
      if (i < 35) {
        hazePos[i * 3] = 0.38 + (rng() - 0.5) * 0.24;
        hazePos[i * 3 + 1] = 1.90 + (rng() - 0.5) * 0.22;
        hazePos[i * 3 + 2] = (rng() - 0.5) * 0.20;
      } else {
        hazePos[i * 3] = -0.40 + (rng() - 0.5) * 0.26;
        hazePos[i * 3 + 1] = 1.32 + (rng() - 0.5) * 0.26;
        hazePos[i * 3 + 2] = 0.04 + (rng() - 0.5) * 0.22;
      }
    }
  }
  hazeGeo.setAttribute('position', new THREE.BufferAttribute(hazePos, 3));
  const hazeMat = new THREE.PointsMaterial({
    color: isWheat ? 0xFCD34D : 0xFBBF24,
    size: mode === 'elevator_only' ? 0.16 : 0.065,
    transparent: true,
    opacity: 0.24,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  dustHazePoints = new THREE.Points(hazeGeo, hazeMat);
  dustHazePoints.name = 'Discharge_Dust_Haze_Glow';
  dustHazePoints.userData.noExplode = true;
  parentRoot.add(dustHazePoints);

  // Pre-warm particle transforms at t = 0 so flow is immediately visible on frame 0
  updateInstancedGrainSimulation(0, true);
}

// Guided Individual-Machine Grain Flow Paths (Never clips through casings, pulleys, or walls)
function evaluateGrainParticleTransform(p, u, outPos) {
  if (p.mode === 'elevator_only') {
    // Unit 01: Industrial Bucket Elevator (Local 0..9.6m GLTF coordinates)
    if (u < 0.14) {
      // Stage 1: Boot Inlet Hopper -> Scooped into Boot Sump
      const f = u / 0.14;
      outPos.set(
        THREE.MathUtils.lerp(-0.56, -0.245, f) + p.jitterX * 1.4,
        THREE.MathUtils.lerp(1.08, 0.58, Math.sin(f * Math.PI * 0.5)) + p.jitterY * 1.2,
        p.jitterZ * 2.2
      );
    } else if (u < 0.78) {
      // Stage 2: Rising inside Up-Leg Casing with full ascending buckets
      const f = (u - 0.14) / 0.64;
      outPos.set(
        -0.245 + p.jitterX * 1.2,
        0.62 + f * 8.44,
        p.jitterZ * 2.2
      );
    } else {
      // Stage 3: Centrifugal Discharge Arc over Crowned Head Pulley (Y ~ 9.08m) & Out the Head Spout
      const f = (u - 0.78) / 0.22;
      const theta = Math.PI * (1.0 - f * 0.88);
      outPos.set(
        Math.cos(theta) * 0.26 + f * 0.42 + p.jitterX * 1.5,
        9.06 + Math.sin(theta) * 0.27 - f * f * 0.85,
        p.jitterZ * 2.2
      );
    }
    return;
  }

  // Unit 02: Satake VBF Vertical Maize Degermer (Local 0..2.1m coordinates)
  if (u < 0.15) {
    // Stage 1: Grain enters Top Rare-Earth Magnet Feed Hopper (X = 0.38, Y = 2.08 -> 1.66)
    const f = u / 0.15;
    outPos.set(
      0.38 + p.jitterX * 0.7,
      THREE.MathUtils.lerp(2.08, 1.66, f),
      p.jitterZ * 0.7
    );
  } else if (u < 0.28) {
    // Stage 2: Horizontal Motorized Feed Screw conveys grain into Conditioning & Degerming Chamber
    const f = (u - 0.15) / 0.13;
    outPos.set(
      THREE.MathUtils.lerp(0.38, 0.12, f),
      THREE.MathUtils.lerp(1.66, 0.76, f) + p.jitterY * 0.4,
      p.jitterZ * 0.6
    );
  } else if (u < 0.82) {
    // Stage 3: Helical Scouring & Degerming Vortex inside Multifaceted Slotted Screen (Y = 0.72 .. 1.56)
    const f = (u - 0.28) / 0.54;
    const angle = p.vortexPhase - f * Math.PI * 6.5;
    const r = p.vortexRadius + Math.sin(f * Math.PI * 2) * 0.015;
    outPos.set(
      Math.cos(angle) * r,
      0.72 + f * 0.84,
      Math.sin(angle) * r
    );
  } else {
    // Stage 4: Overtails Discharge Spout Exit & Natural Spill Cascade (X = -0.32 -> -0.52, Y = 1.62 -> 0.88)
    const f = (u - 0.82) / 0.18;
    const spread = 1.0 + f * 1.8;
    outPos.set(
      THREE.MathUtils.lerp(-0.32, -0.52, f) + p.jitterX * spread,
      1.62 - f * f * 0.76 + p.jitterY * 0.4,
      0.04 + p.jitterZ * spread
    );
  }
}

function updateInstancedGrainSimulation(elapsedOrDelta, isAbsoluteTime = false) {
  if (!grainInstancedMesh || grainParticlesData.length === 0) return;

  const limit = Math.min(activeGrainCount, grainParticlesData.length);
  grainInstancedMesh.count = limit;
  const tempPos = new THREE.Vector3();
  const simSpeed = isAbsoluteTime ? 1.28 : driveSpeedMultiplier;

  for (let i = 0; i < limit; i++) {
    const p = grainParticlesData[i];
    if (isAbsoluteTime) {
      p.t = (p.baseT + p.speed * simSpeed * elapsedOrDelta) % 1.0;
    } else {
      p.t = (p.t + p.speed * simSpeed * elapsedOrDelta) % 1.0;
    }

    evaluateGrainParticleTransform(p, p.t, tempPos);

    dummyMatrixObj.position.copy(tempPos);
    const rotT = isAbsoluteTime ? elapsedOrDelta : (performance.now() * 0.001);
    dummyMatrixObj.rotation.set(
      p.rotX + rotT * p.rotSpeedX,
      p.rotY + rotT * p.rotSpeedY,
      p.rotZ
    );
    dummyMatrixObj.scale.set(p.scaleX, p.scaleY, p.scaleZ);
    dummyMatrixObj.updateMatrix();
    grainInstancedMesh.setMatrixAt(i, dummyMatrixObj.matrix);
  }

  grainInstancedMesh.instanceMatrix.needsUpdate = true;
}

function setGrainType(newType) {
  GRAIN_TYPE = newType === 'wheat' ? 'wheat' : 'maize';
  const sel = document.getElementById('grainTypeSelect');
  if (sel && sel.value !== GRAIN_TYPE) sel.value = GRAIN_TYPE;

  if (!currentLoadedRoot) return;

  // Update bucket grain fill mounds material color
  const isWheat = GRAIN_TYPE === 'wheat';
  currentLoadedRoot.traverse(child => {
    if (child.isMesh && child.userData && child.userData.isGrainFill && child.material) {
      child.material.color.setHex(isWheat ? 0xD99B52 : 0xFBBF24);
      child.material.emissive.setHex(isWheat ? 0x78350F : 0xB45309);
      child.material.needsUpdate = true;
    }
  });

  // Rebuild instanced grain mesh with updated kernel geometry & color palette
  if (grainInstancedMesh && grainInstancedMesh.parent) {
    const parent = grainInstancedMesh.parent;
    const currentMode = (grainParticlesData[0] && grainParticlesData[0].mode) || 'process_line';
    parent.remove(grainInstancedMesh);
    disposeHierarchy(grainInstancedMesh);
    if (dustHazePoints && dustHazePoints.parent) {
      dustHazePoints.parent.remove(dustHazePoints);
      disposeHierarchy(dustHazePoints);
    }
    createInstancedGrainFlow(parent, currentMode, activeGrainCount);
  }
}

// ============================================================================
// PROCEDURAL 3D TWIN GENERATOR (WITH MUSEUM PBR & PLINTH FOR ALL 24 MACHINES)
// ============================================================================
function generateProceduralTwin(type, colorHex) {
  const group = new THREE.Group();
  const P = createMuseumPalette();
  const matPaint = colorHex ? P.sagmaGreen : P.gunmetal;

  // Mount every procedural twin on the Museum Instrument Bench Plinth
  group.add(createInstrumentBenchPlinth(2.2, 1.6, P));

  if (type.includes('rollermill')) {
    // Cast Iron Base Frame
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.65, 1.15), P.gunmetal);
    base.position.y = 0.40;
    group.add(base);

    // Upper Grinding Roll Housing with Cutaway Glass Inspection Door
    const housing = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.85, 1.05), matPaint);
    housing.position.y = 1.15;
    group.add(housing);

    const glassDoor = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.55, 0.04), P.opticalGlass);
    glassDoor.position.set(0, 1.18, 0.54);
    cutawayGlassMeshes.push(glassDoor);
    group.add(glassDoor);

    // 4 Precision Corrugated Chilled Cast-Iron Grinding Rolls
    const rollGeo = new THREE.CylinderGeometry(0.16, 0.16, 1.15, 48);
    const positions = [[0, 1.05, 0.22], [0, 1.05, -0.22], [0, 1.38, 0.22], [0, 1.38, -0.22]];
    positions.forEach(([rx, ry, rz], idx) => {
      const roll = new THREE.Mesh(rollGeo, P.brushedChrome);
      roll.rotation.z = Math.PI / 2;
      roll.position.set(rx, ry, rz);
      group.add(roll);
      kinematicRotors.push({ mesh: roll, axis: 'x', speed: (idx % 2 === 0 ? 5.0 : -2.0) });

      // Brass Bearing End Caps
      const capL = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.05, 32), P.anodizedBrass);
      capL.rotation.z = Math.PI / 2;
      capL.position.set(-0.76, ry, rz);
      group.add(capL);

      const capR = capL.clone();
      capR.position.set(0.76, ry, rz);
      group.add(capR);
    });

    // Top Acrylic Feed Cylinder & Brass Roll Gap Handwheels
    const hopper = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.42, 0.55, 36), P.opticalGlass);
    hopper.position.y = 1.85;
    cutawayGlassMeshes.push(hopper);
    group.add(hopper);

  } else if (type.includes('plansifter')) {
    // Plansifter 4-Compartment Sieve Box with Brass Clamping Rods
    const boxGroup = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.35, 1.9), matPaint);
    boxGroup.position.y = 1.25;
    group.add(boxGroup);

    // Cane Suspension Rods & Brass Flanges
    const rodGeo = new THREE.CylinderGeometry(0.02, 0.02, 1.8, 16);
    const offsets = [[-0.88, -0.88], [0.88, -0.88], [-0.88, 0.88], [0.88, 0.88]];
    offsets.forEach(([x, z]) => {
      const rod = new THREE.Mesh(rodGeo, P.anodizedBrass);
      rod.position.set(x, 1.4, z);
      group.add(rod);
    });

    // Underslung Eccentric Counterweight Drive
    const fly = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.24, 36), P.anodizedBrass);
    fly.position.y = 0.35;
    group.add(fly);
    kinematicRotors.push({ mesh: fly, axis: 'y', speed: 4.2 });

  } else if (type.includes('purifier')) {
    const frame = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.95, 2.1), P.gunmetal);
    frame.position.y = 0.65;
    group.add(frame);

    const glassCanopy = new THREE.Mesh(new THREE.BoxGeometry(1.12, 0.45, 1.95), P.opticalGlass);
    glassCanopy.position.y = 1.35;
    cutawayGlassMeshes.push(glassCanopy);
    group.add(glassCanopy);

    const vibMotor = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.35, 24), P.anodizedBrass);
    vibMotor.rotation.z = Math.PI / 2;
    vibMotor.position.set(0, 0.65, 1.12);
    group.add(vibMotor);
    kinematicRotors.push({ mesh: vibMotor, axis: 'x', speed: 7.5 });

  } else {
    // High-Detail Horizontal Cylindrical Debranner / Conveyor with Cutaway Shell
    const barrelBack = new THREE.Mesh(
      new THREE.CylinderGeometry(0.42, 0.42, 1.9, 48, 1, true, 0, Math.PI * 1.2),
      P.gunmetal
    );
    barrelBack.rotation.z = Math.PI / 2;
    barrelBack.position.y = 0.85;
    group.add(barrelBack);

    const barrelGlass = new THREE.Mesh(
      new THREE.CylinderGeometry(0.41, 0.41, 1.86, 48, 1, true, Math.PI * 1.2, Math.PI * 0.8),
      P.opticalGlass
    );
    barrelGlass.rotation.z = Math.PI / 2;
    barrelGlass.position.y = 0.85;
    cutawayGlassMeshes.push(barrelGlass);
    group.add(barrelGlass);

    // Internal Rotating Screw / Rotor Shaft
    const rotor = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.85, 36), P.anodizedBrass);
    rotor.rotation.z = Math.PI / 2;
    rotor.position.y = 0.85;
    group.add(rotor);
    kinematicRotors.push({ mesh: rotor, axis: 'x', speed: 5.5 });

    // End Flanges
    [-0.95, 0.95].forEach(xPos => {
      const flange = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.05, 48), P.anodizedBrass);
      flange.rotation.z = Math.PI / 2;
      flange.position.set(xPos, 0.85, 0);
      group.add(flange);
    });
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
  
  const result = occt.ReadFile(format, uint8Arr, null);
  if (!result || !result.success || !result.meshes || result.meshes.length === 0) {
    throw new Error('OpenCascade could not tessellate CAD file: ' + (result?.error || 'Unknown format error'));
  }

  const cadGroup = new THREE.Group();
  cadGroup.name = fileName;

  const defaultCadMat = new THREE.MeshStandardMaterial({
    color: 0x005A36,
    metalness: 0.65,
    roughness: 0.25,
    envMapIntensity: 1.5,
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
        metalness: 0.6,
        roughness: 0.28,
        envMapIntensity: 1.5,
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
async function loadMachineTwin(machine, options = {}) {
  if (!options.silent) {
    showLoading('LOADING ' + machine.name.toUpperCase() + '...');
  }
  currentMachineMeta = machine;

  // Reset Explode Slider UI to 0% on machine load
  const explodeRange = document.getElementById('explodeRange');
  const explodeValText = document.getElementById('explodeValText');
  if (explodeRange) explodeRange.value = 0;
  if (explodeValText) explodeValText.textContent = '0%';

  // 1. Clear existing scene & WebGL resources
  clearCurrentScene();

  // 2. Update UI Telemetry & Drawer
  updateMachineTelemetryUI(machine);

  // 3. Load or Generate 3D Object
  try {
    let root = null;
    const src = machine.sourceFile;

    if (machine.customBlob) {
      const ext = (machine.fileExt || 'glb').toLowerCase();
      const buffer = await machine.customBlob.arrayBuffer();

      if (ext === 'step' || ext === 'stp' || ext === 'iges' || ext === 'igs') {
        root = await loadCadFileFromBuffer(buffer, ext, machine.name);
      } else if (ext === 'stl') {
        const loader = new THREE.STLLoader();
        const geo = loader.parse(buffer);
        const mat = new THREE.MeshStandardMaterial({ color: 0x005A36, metalness: 0.65, roughness: 0.25 });
        root = new THREE.Mesh(geo, mat);
      } else if (ext === 'obj') {
        const text = new TextDecoder().decode(buffer);
        const loader = new THREE.OBJLoader();
        root = loader.parse(text);
      } else {
        root = await new Promise((res, rej) => {
          const loader = new THREE.GLTFLoader();
          loader.parse(buffer, '', gltf => res(gltf.scene || gltf.scenes[0]), rej);
        });
      }
    } else if (machine.id === 'satake_vbf') {
      // Flagship Museum-Grade Cutaway & Live Kinematics Satake VBF Degermer (Individual Machine)
      root = buildMuseumSatakeVBF();
    } else if (src.startsWith('procedural:')) {
      const type = src.split(':')[1] || 'generic';
      root = generateProceduralTwin(type, (machine.id.includes('buhler') ? 0x0D6E45 : 0x005A36));
    } else if (src.endsWith('.glb') || src.endsWith('.gltf')) {
      root = await new Promise((res, rej) => {
        const loader = new THREE.GLTFLoader();
        loader.load(src, gltf => res(gltf.scene || gltf.scenes[0]), undefined, rej);
      });
      if (machine.id === 'elevator_69b' || machine.id === 'elevator_cad') {
        enhanceBucketElevatorRoot(root);
      }
    } else {
      root = generateProceduralTwin('generic', 0x005A36);
    }

    // Auto-Centre & Scale Bounding Box FIRST
    const box = new THREE.Box3().setFromObject(root);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0 && machine.id !== 'satake_vbf') {
      const scaleFactor = 2.4 / maxDim;
      root.scale.setScalar(scaleFactor);
      box.setFromObject(root);
      box.getCenter(center);
      root.position.sub(center);
      root.position.y += (box.max.y - box.min.y) / 2;
    }

    root.updateMatrixWorld(true);
    const rootWorldBox = new THREE.Box3().setFromObject(root);
    const rootWorldCenter = rootWorldBox.getCenter(new THREE.Vector3());

    // Setup Shadows, Material Cache & True Geometry-Centroid Explode Vectors
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

        // Compute true world-space bounding box center of this specific mesh
        const meshBox = new THREE.Box3().setFromObject(child);
        const meshCenter = meshBox.getCenter(new THREE.Vector3());

        // Compute outward radial + axial explode vector in parent local space
        const worldDelta = meshCenter.clone().sub(rootWorldCenter);
        // Emphasize horizontal radial separation (X/Z) and gentle vertical separation (Y)
        // Never allow parts below center to sink below the floor!
        const radialVec = new THREE.Vector3(worldDelta.x * 1.6, Math.max(0, worldDelta.y * 0.65), worldDelta.z * 1.6);
        if (radialVec.lengthSq() < 0.002) {
          // If concentric around center, fan out based on node index
          const angle = (nodeCount * 1.375) % (Math.PI * 2);
          radialVec.set(Math.cos(angle) * 0.45, 0.25, Math.sin(angle) * 0.45);
        }

        // Compensate for root scale so displacement is consistent
        const invScale = 1 / (root.scale.x || 1);
        radialVec.multiplyScalar(invScale);

        meshOriginalPositions.set(child, {
          pos: child.position.clone(),
          explodeVec: radialVec,
          noExplode: Boolean(child.userData && child.userData.noExplode)
        });
      }
    });

    currentLoadedRoot = root;
    scene.add(root);

    // Update HUD Stats
    document.getElementById('hudPolys').textContent = Math.round(polyCount).toLocaleString();
    document.getElementById('hudParts').textContent = (machine.partsCount || nodeCount) + ' parts';

    // Apply Default Material Shader Preset
    applyMaterialPreset(machine.defaultShader || 'default');

    // Camera Framing (Skip if in 30s Cinematic Showcase mode)
    if (!options.skipCameraReset) {
      if (machine.defaultCam) {
        smoothMoveCamera(machine.defaultCam.pos, machine.defaultCam.target);
      } else {
        resetCameraFraming();
      }
    }

    // Setup 3D Callout Hotspots
    currentCallouts = machine.callouts || [];
    initCalloutBadges(currentCallouts);

    // Update Location Hash without page jump
    if (!options.skipHashUpdate) {
      window.location.hash = 'machine/' + machine.id;
    }

  } catch (err) {
    console.error('Error loading machine twin:', err);
    if (!options.silent) {
      alert('Failed to load 3D machine model: ' + err.message);
    }
  } finally {
    if (!options.silent) {
      hideLoading();
    }
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
  let pdfPath = machine.specPdf || 'specs/Bucket_elevator.pdf';
  if (machine.customPdfBlob instanceof Blob) {
    if (window._activeCustomPdfUrl) {
      URL.revokeObjectURL(window._activeCustomPdfUrl);
    }
    window._activeCustomPdfUrl = URL.createObjectURL(machine.customPdfBlob);
    pdfPath = window._activeCustomPdfUrl;
  }
  const pdfFrame = document.getElementById('pdfFrame');
  const pdfFileName = document.getElementById('pdfFileName');
  const pdfOpenNewTab = document.getElementById('pdfOpenNewTab');

  if (pdfFrame) pdfFrame.src = pdfPath;
  if (pdfFileName) pdfFileName.textContent = machine.customPdfName || pdfPath.split('/').pop();
  if (pdfOpenNewTab) pdfOpenNewTab.href = pdfPath;

  // Reset Part Inspector
  document.getElementById('inspectorEmptyState').style.display = 'block';
  document.getElementById('inspectorDetailState').style.display = 'none';
}

// ============================================================================
// 11. NVIDIA CAD SHADER PRESETS, CUTAWAY & WIREFRAME
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
          roughness: 0.16,
          envMapIntensity: 1.8,
          side: THREE.DoubleSide
        });
      } else if (preset === 'castiron') {
        child.material = new THREE.MeshStandardMaterial({
          color: 0x262C32,
          metalness: 0.65,
          roughness: 0.48,
          envMapIntensity: 1.3,
          side: THREE.DoubleSide
        });
      } else if (preset === 'sagma_paint') {
        child.material = new THREE.MeshStandardMaterial({
          color: 0x005A36,
          metalness: 0.42,
          roughness: 0.28,
          envMapIntensity: 1.5,
          side: THREE.DoubleSide
        });
      } else if (preset === 'xray') {
        child.material = new THREE.MeshPhysicalMaterial({
          color: 0x38BDF8,
          transmission: 0.88,
          opacity: 0.35,
          transparent: true,
          roughness: 0.1,
          metalness: 0.1,
          depthWrite: false,
          side: THREE.DoubleSide
        });
      }

      child.material.wireframe = isWireframeActive;
      child.material.needsUpdate = true;
    }
  });
}

function setCutawayState(active) {
  isCutawayActive = Boolean(active);
  const btn = document.getElementById('btnToggleCutaway');
  if (btn) btn.classList.toggle('active', isCutawayActive);

  const P = createMuseumPalette();
  cutawayGlassMeshes.forEach(mesh => {
    if (!mesh) return;
    if (isCutawayActive) {
      mesh.material = P.opticalGlass.clone();
    } else {
      mesh.material = P.sagmaGreen.clone();
    }
    mesh.material.wireframe = isWireframeActive;
    mesh.material.needsUpdate = true;
  });
}

function toggleCutawayMode() {
  setCutawayState(!isCutawayActive);
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
// 12. EXPLODED ASSEMBLY SLIDER ENGINE (TRUE CENTROID RADIAL + AXIAL)
// ============================================================================
function updateExplodedView(factor) {
  currentExplodeFactor = Number(factor) || 0;
  if (!currentLoadedRoot || meshOriginalPositions.size === 0) return;

  meshOriginalPositions.forEach((saved, mesh) => {
    if (saved.noExplode) return;
    const originalPos = saved.pos;
    const displacement = saved.explodeVec.clone().multiplyScalar(factor * 1.35);
    mesh.position.copy(originalPos).add(displacement);
  });

  if (currentLoadedRoot) currentLoadedRoot.updateMatrixWorld(true);
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
    const tagNum = c.tag || ((idx + 1) < 10 ? '0' + (idx + 1) : '' + (idx + 1));
    // Strip parenthetical technical suffixes for a crisp on-model pill label, while keeping full title in tooltip/inspector
    const shortName = (c.shortLabel || (c.title ? c.title.replace(/\s*\([^)]*\)/g, '').trim() : 'Part'));
    badge.innerHTML = `<span class="callout-tag-num">${tagNum}</span><span class="callout-tag-label">${shortName}</span>`;
    badge.title = `${tagNum} — ${c.title}`;

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
  const placedPositions = [];

  calloutElements.forEach((item, idx) => {
    let resolved = false;
    // Prefer explicit 3D anchor if defined (prevents concentric meshes like rotor/beaters/screens from collapsing onto one point)
    if (item.data.anchor && Array.isArray(item.data.anchor) && item.data.anchor.length === 3) {
      tempV.set(item.data.anchor[0], item.data.anchor[1], item.data.anchor[2]);
      // If model is exploded, offset anchor slightly with the target mesh displacement
      if (currentLoadedRoot && item.data.meshTarget) {
        const targetObj = currentLoadedRoot.getObjectByName(item.data.meshTarget);
        if (targetObj) {
          const saved = meshOriginalPositions.get(targetObj);
          if (saved && targetObj.position) {
            tempV.add(targetObj.position.clone().sub(saved.pos));
          }
        }
      }
      resolved = true;
    } else if (currentLoadedRoot && item.data.meshTarget) {
      const targetObj = currentLoadedRoot.getObjectByName(item.data.meshTarget);
      if (targetObj) {
        const box = new THREE.Box3().setFromObject(targetObj);
        if (!box.isEmpty()) {
          box.getCenter(tempV);
          resolved = true;
        }
      }
    }
    if (!resolved) {
      const anchor = (item.data.camPreset && item.data.camPreset.look) || [0, 1.2, 0];
      tempV.set(anchor[0], anchor[1], anchor[2]);
    }

    // Save anchor screen projection before de-overlapping for leader lines in video export
    tempV.project(camera);
    const isBehind = tempV.z > 1.0;

    if (isBehind) {
      item.el.style.display = 'none';
      item.screenPos = null;
    } else {
      const anchorX = (tempV.x * 0.5 + 0.5) * width;
      const anchorY = (-(tempV.y * 0.5) + 0.5) * height;
      let x = anchorX;
      let y = anchorY;

      // Screen-space collision avoidance so neighboring part labels never stack on top of each other
      for (let pass = 0; pass < 3; pass++) {
        for (let j = 0; j < placedPositions.length; j++) {
          const other = placedPositions[j];
          const dx = x - other.x;
          const dy = y - other.y;
          if (Math.abs(dx) < 130 && Math.abs(dy) < 28) {
            const pushY = (dy >= 0 ? 1 : -1) * (29 - Math.abs(dy));
            y += pushY;
            x += (idx % 2 === 0 ? -12 : 12);
          }
        }
      }
      placedPositions.push({ x, y });

      const tagNum = item.data.tag || ((idx + 1) < 10 ? '0' + (idx + 1) : '' + (idx + 1));
      const shortName = item.data.shortLabel || (item.data.title ? item.data.title.replace(/\s*\([^)]*\)/g, '').trim() : 'Part');

      item.screenPos = {
        x,
        y,
        anchorX,
        anchorY,
        normX: x / Math.max(1, width),
        normY: y / Math.max(1, height),
        normAnchorX: anchorX / Math.max(1, width),
        normAnchorY: anchorY / Math.max(1, height),
        tagNum,
        shortName
      };

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

    const name = document.getElementById('upMachineName')?.value.trim() || 'Custom Machine';
    const oem = document.getElementById('upMachineOEM')?.value.trim() || 'Custom OEM';
    const category = document.getElementById('upMachineCategory')?.value || '06_conveying';
    const shader = document.getElementById('upMachineShader')?.value || 'sagma_paint';
    const model = document.getElementById('upMachineModel')?.value.trim() || 'Custom Twin';
    const throughput = document.getElementById('upMachineThroughput')?.value.trim() || 'Custom Spec';
    const pdfFile = document.getElementById('upSpecPDF')?.files?.[0] || null;

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
      customPdfBlob: pdfFile,
      customPdfName: pdfFile ? pdfFile.name : null,
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

  // LOTO Safety Lockout Toggle
  document.getElementById('lotoIndicator')?.addEventListener('click', () => {
    const lotoEl = document.getElementById('lotoIndicator');
    const lotoText = document.getElementById('lotoStatusText');
    if (!lotoEl || !lotoText) return;
    const isLocked = lotoEl.classList.toggle('locked');
    const i18nKey = isLocked ? 'loto.isolated' : 'loto.active';
    lotoText.setAttribute('data-i18n', i18nKey);
    const dict = TRANSLATIONS[currentLocale] || TRANSLATIONS['en-ZA'];
    lotoText.textContent = dict[i18nKey];

    // Reflect safety lockout state on HUD Status
    const hudStatus = document.getElementById('hudStatus');
    if (hudStatus) {
      hudStatus.textContent = isLocked ? 'LOTO ISOLATED (0 RPM)' : (dict['hud.statusVal'] || 'ONLINE');
      hudStatus.style.color = isLocked ? '#EF4444' : '#4ADE80';
    }
  });

  // Studio Dark / Light Viewport Toggle
  document.getElementById('btnToggleStudioMode')?.addEventListener('click', () => {
    document.body.classList.toggle('studio-dark-mode');
    const isDark = document.body.classList.contains('studio-dark-mode');
    applyViewportThemeLighting(isDark);
    if (groundGrid && groundGrid.material) {
      groundGrid.material.opacity = isDark ? 0.35 : 0.65;
    }
  });

  // 30s Cinematic Showcase & MP4 Video Exporter Triggers (1920x1080 Landscape & 1080x1350 Vertical)
  document.getElementById('btnCinematicShowcase')?.addEventListener('click', () => {
    if (cinematicState.active) {
      stopCinematicShowcase(true);
    } else {
      startCinematicShowcase('landscape');
    }
  });
  document.getElementById('btnCinematicPortrait')?.addEventListener('click', () => {
    if (cinematicState.active) {
      stopCinematicShowcase(true);
    } else {
      startCinematicShowcase('portrait');
    }
  });
  document.getElementById('btnCancelCinematic')?.addEventListener('click', () => {
    stopCinematicShowcase(true);
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
  document.getElementById('btnCancelUpload')?.addEventListener('click', closeUploaderModal);

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
  document.getElementById('btnToggleCutaway')?.addEventListener('click', toggleCutawayMode);

  // Live Mechanical Motion & Particle Flow Toggle
  document.getElementById('btnToggleMotion')?.addEventListener('click', () => {
    isLiveMotionActive = !isLiveMotionActive;
    const btn = document.getElementById('btnToggleMotion');
    if (btn) btn.classList.toggle('active', isLiveMotionActive);
    if (grainParticleSystem) {
      grainParticleSystem.visible = isLiveMotionActive;
    }
  });

  // Drive Speed Multiplier Slider
  const speedRange = document.getElementById('speedRange');
  const speedValText = document.getElementById('speedValText');
  speedRange?.addEventListener('input', (e) => {
    driveSpeedMultiplier = parseFloat(e.target.value) / 100;
    if (speedValText) speedValText.textContent = driveSpeedMultiplier.toFixed(1) + 'x';
  });

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

  // Grain Type Selector (Maize vs Wheat)
  document.getElementById('grainTypeSelect')?.addEventListener('change', (e) => {
    setGrainType(e.target.value);
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
      if (e.target === modal) {
        modal.classList.remove('active');
        modal.classList.remove('open');
      }
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
// 21B. 30-SECOND TWO-MACHINE SHOWCASE (15s BUCKET ELEVATOR + 15s SATAKE VBF, SILENT, SMOOTH FADES)
// ============================================================================
const CINEMATIC_TOTAL_DURATION = 30.0; // 0.0s - 15.0s: Unit 01 Bucket Elevator | 15.0s - 30.0s: Unit 02 Satake VBF Degermer

// Timed Callout Schedule for Each Individual Machine (Max 2-3 labels at once, zero crossing leader lines)
const INDIVIDUAL_UNITS_CALLOUT_SCHEDULE = [
  // --- PART 1: UNIT 01 INDUSTRIAL BUCKET ELEVATOR (0.0s - 15.0s) ---
  // Window 1A (1.2s - 4.8s): Boot Intake, Tensioner & Cleanout Doors
  { id: 'boot_feed',        unit: 1, start: 1.2,  end: 4.8,  side: 'left',  slot: 0 },
  { id: 'boot_takeup',      unit: 1, start: 1.5,  end: 4.8,  side: 'right', slot: 0 },
  { id: 'cleanout_doors',   unit: 1, start: 1.8,  end: 4.8,  side: 'right', slot: 1 },

  // Window 1B (5.2s - 9.2s): Vertical Twin-Leg Casing, Belt & Deep Buckets
  { id: 'trunking_legs',    unit: 1, start: 5.2,  end: 9.2,  side: 'left',  slot: 0 },
  { id: 'antistatic_belt',  unit: 1, start: 5.5,  end: 9.2,  side: 'left',  slot: 1 },
  { id: 'deep_buckets',     unit: 1, start: 5.8,  end: 9.2,  side: 'right', slot: 0 },

  // Window 1C (9.6s - 14.0s): Head Hood, Crowned Drive Pulley & Centrifugal Discharge
  { id: 'split_hood',       unit: 1, start: 9.6,  end: 14.0, side: 'left',  slot: 0 },
  { id: 'crowned_pulley',   unit: 1, start: 9.9,  end: 14.0, side: 'right', slot: 0 },
  { id: 'discharge_saddle', unit: 1, start: 10.2, end: 14.0, side: 'right', slot: 1 },

  // --- PART 2: UNIT 02 SATAKE VBF VERTICAL MAIZE DEGERMER (15.0s - 30.0s) ---
  // Window 2A (16.0s - 20.2s): Top Feed Hopper, Screw Feeder & Degerminator Rotor
  { id: 'inlet_hopper',       unit: 2, start: 16.0, end: 20.2, side: 'right', slot: 0 },
  { id: 'screw_feeder',       unit: 2, start: 16.3, end: 20.2, side: 'right', slot: 1 },
  { id: 'degerminator_rotor', unit: 2, start: 16.6, end: 20.2, side: 'left',  slot: 0 },

  // Window 2B (20.6s - 24.8s): Multifaceted Slotted Screen, Resistance Bars & Discharge Spout
  { id: 'hex_screen',         unit: 2, start: 20.6, end: 24.8, side: 'right', slot: 0 },
  { id: 'resistance_bars',    unit: 2, start: 20.9, end: 24.8, side: 'right', slot: 1 },
  { id: 'discharge_gate',     unit: 2, start: 21.2, end: 24.8, side: 'left',  slot: 0 },

  // Window 2C (25.2s - 28.8s): Hollow Aspiration Shaft, Drive Pulley & 4-Pole Motor
  { id: 'hollow_shaft',       unit: 2, start: 25.2, end: 28.8, side: 'left',  slot: 0 },
  { id: 'belt_drive',         unit: 2, start: 25.5, end: 28.8, side: 'left',  slot: 1 },
  { id: 'main_motor',         unit: 2, start: 25.8, end: 28.8, side: 'right', slot: 0 }
];

const cinematicState = {
  active: false,
  cancelled: false,
  format: 'landscape', // 'landscape' (1920x1080) or 'portrait' (1080x1350)
  stageWidth: 1920,
  stageHeight: 1080,
  startTime: 0,
  elapsed: 0,
  lastElapsed: 0,
  currentPhaseUnit: 1, // 1 = Bucket Elevator (0-15s), 2 = Satake VBF (15-30s)
  switchingUnit: false,
  slowFrameStreak: 0,
  particleReducedLogged: false,
  compositeCanvas: null,
  compositeCtx: null,
  mediaRecorder: null,
  recordedChunks: [],
  selectedMimeType: '',
  logoImg: null,
  savedMachineId: null,
  savedCutaway: true,
  savedMotion: true,
  savedSpeed: 1.0
};

// Preload SAGMA round emblem for composite video watermark & end card
(function preloadCinematicLogo() {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = 'assets/Gear_Logo-removebg-preview.png';
  cinematicState.logoImg = img;
})();

function cubicEaseInOut(t) {
  const x = Math.max(0, Math.min(1, t));
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

function formatMMSS(sec) {
  const s = Math.max(0, Math.min(30, Math.floor(sec)));
  return '00:' + (s < 10 ? '0' + s : '' + s);
}

// ----------------------------------------------------------------------------
// FIXED-STAGE 30-SECOND RECORDING PIPELINE (15s ELEVATOR + 15s SATAKE VBF, NO AUDIO)
// ----------------------------------------------------------------------------
async function startCinematicShowcase(format = 'landscape') {
  if (cinematicState.active || !renderer || !scene || !camera) return;

  const isPortrait = format === 'portrait';
  const stageW = isPortrait ? 1080 : 1920;
  const stageH = isPortrait ? 1350 : 1080;

  cinematicState.format = isPortrait ? 'portrait' : 'landscape';
  cinematicState.stageWidth = stageW;
  cinematicState.stageHeight = stageH;

  // Save user state to restore cleanly after showcase
  cinematicState.savedMachineId = currentMachineMeta ? currentMachineMeta.id : 'elevator_69b';
  cinematicState.savedCutaway = isCutawayActive;
  cinematicState.savedMotion = isLiveMotionActive;
  cinematicState.savedSpeed = driveSpeedMultiplier;

  // Ensure LOTO is unlocked and Live Motion is active
  const lotoEl = document.getElementById('lotoIndicator');
  if (lotoEl && lotoEl.classList.contains('locked')) {
    lotoEl.click();
  }
  isLiveMotionActive = true;
  driveSpeedMultiplier = 1.25;
  document.getElementById('btnToggleMotion')?.classList.add('active');

  // Close any open modals or drawers
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.classList.remove('active');
    m.classList.remove('open');
  });
  closeMachineDrawer();

  // Enter Cinematic UI Mode (Hides all UI chrome, cursors, and DOM overlays; shows floating status pill)
  document.body.classList.add('cinematic-mode');
  const pill = document.getElementById('cinematicStatusPill');
  const ctaBtn = document.getElementById(isPortrait ? 'btnCinematicPortrait' : 'btnCinematicShowcase');
  if (pill) pill.classList.add('active');
  if (ctaBtn) ctaBtn.classList.add('recording');

  // Disable manual OrbitControls during 30s sequence
  if (controls) controls.enabled = false;

  // Start Phase 1 (0.0s - 15.0s) with Unit 01: Industrial Bucket Elevator (Individual Machine)
  cinematicState.currentPhaseUnit = 1;
  cinematicState.switchingUnit = false;
  const elevatorMeta = await EchoDB.get('elevator_69b') || FLEET_CATALOG.find(m => m.id === 'elevator_69b') || FLEET_CATALOG[0];
  await loadMachineTwin(elevatorMeta, { silent: true, skipCameraReset: true, skipHashUpdate: true });
  if (grainParticleSystem) grainParticleSystem.visible = true;
  if (grainInstancedMesh) {
    grainInstancedMesh.visible = true;
    activeGrainCount = 650;
    grainInstancedMesh.count = activeGrainCount;
  }

  // Lock Three.js WebGLRenderer to exact Fixed Stage Size (1920x1080 or 1080x1350) with pixelRatio = 1
  renderer.setPixelRatio(1);
  renderer.setSize(stageW, stageH, false);
  camera.aspect = stageW / stageH;
  camera.fov = isPortrait ? 38 : 34;
  camera.updateProjectionMatrix();

  // Pre-warm shaders & geometry so there is ZERO stutter on Frame 1
  renderer.compile(scene, camera);

  // Create Fixed-Size Composite 2D Canvas (1920x1080 or 1080x1350)
  const compCanvas = document.createElement('canvas');
  compCanvas.width = stageW;
  compCanvas.height = stageH;
  const compCtx = compCanvas.getContext('2d');
  if (compCtx) {
    compCtx.imageSmoothingEnabled = true;
    compCtx.imageSmoothingQuality = 'high';
  }

  cinematicState.compositeCanvas = compCanvas;
  cinematicState.compositeCtx = compCtx;
  cinematicState.recordedChunks = [];
  cinematicState.cancelled = false;
  cinematicState.slowFrameStreak = 0;
  cinematicState.particleReducedLogged = false;
  cinematicState.startTime = performance.now();
  cinematicState.elapsed = 0;
  cinematicState.lastElapsed = 0;
  cinematicState.active = true;

  // Position camera & pre-populated grain flow at t = 0.0s and render first composite frame before starting recorder
  updateCinematicChoreography(cinematicState.startTime);
  renderer.render(scene, camera);
  renderCompositeVideoFrame(0);

  // Initialize Silent MediaRecorder at 60 FPS, 14 Mbps Video (No audio tracks as requested)
  try {
    const videoStream = compCanvas.captureStream(60);

    const mimeTypes = [
      'video/mp4;codecs=avc1.64002A',
      'video/mp4;codecs=avc1.42E01E',
      'video/mp4;codecs=avc1',
      'video/mp4',
      'video/webm;codecs=vp9',
      'video/webm;codecs=vp8',
      'video/webm'
    ];
    const selectedMimeType = mimeTypes.find(type => typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(type)) || '';
    cinematicState.selectedMimeType = selectedMimeType;

    const recOptions = {
      videoBitsPerSecond: 14000000 // 14 Mbps (~52 MB for 30s, crisp 1080p detail)
    };
    if (selectedMimeType) {
      recOptions.mimeType = selectedMimeType;
    }

    const recorder = new MediaRecorder(videoStream, recOptions);
    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        cinematicState.recordedChunks.push(e.data);
      }
    };
    recorder.onstop = () => {
      if (!cinematicState.cancelled && cinematicState.recordedChunks.length > 0) {
        exportRecordedShowcaseVideo();
      }
    };

    recorder.start(200);
    cinematicState.mediaRecorder = recorder;
  } catch (recErr) {
    console.warn('MediaRecorder initialization fallback:', recErr);
  }
}

// ----------------------------------------------------------------------------
// MASTER 30-SECOND TIMELINE: 0-15s BUCKET ELEVATOR | 15-30s SATAKE VBF DEGERMER
// ----------------------------------------------------------------------------
function updateCinematicChoreography(now) {
  if (!cinematicState.active) return;

  const elapsed = Math.max(0, (now - cinematicState.startTime) / 1000);
  const dt = Math.max(0, elapsed - cinematicState.lastElapsed);
  cinematicState.lastElapsed = elapsed;
  cinematicState.elapsed = elapsed;

  // Automatic Frame-Drop Guard: if frame delta exceeds 26ms (<38 FPS) for 8 consecutive frames,
  // dynamically reduce active instanced grain count and log to console so 60 FPS smoothness holds.
  if (dt > 0.026 && elapsed > 0.5) {
    cinematicState.slowFrameStreak++;
    if (cinematicState.slowFrameStreak >= 8 && !cinematicState.particleReducedLogged && grainInstancedMesh) {
      activeGrainCount = 360;
      grainInstancedMesh.count = activeGrainCount;
      cinematicState.particleReducedLogged = true;
      console.info('[SAGMA 60FPS Guard] Frame delta exceeded threshold during recording; reduced instanced grain count to 360 kernels to preserve smooth playback.');
    }
  } else {
    cinematicState.slowFrameStreak = Math.max(0, cinematicState.slowFrameStreak - 1);
  }

  const isPortrait = cinematicState.format === 'portrait';
  const fmtLabel = isPortrait ? '1080×1350' : '1920×1080';

  // Update Floating Status Pill Countdown
  const timerEl = document.getElementById('cinematicTimerText');
  if (timerEl) {
    timerEl.textContent = `REC ${fmtLabel} • ${formatMMSS(elapsed)} / 00:30`;
  }

  if (elapsed >= CINEMATIC_TOTAL_DURATION) {
    stopCinematicShowcase(false);
    return;
  }

  // At exactly 15.0s (while the midpoint smooth fade-out is at full black), switch from Unit 01 (Bucket Elevator)
  // to Unit 02 (Satake VBF Vertical Maize Degermer) as an individual standalone machine!
  if (elapsed >= 15.0 && cinematicState.currentPhaseUnit === 1 && !cinematicState.switchingUnit) {
    cinematicState.switchingUnit = true;
    cinematicState.currentPhaseUnit = 2;
    const satakeMeta = FLEET_CATALOG.find(m => m.id === 'satake_vbf') || FLEET_CATALOG[1];
    loadMachineTwin(satakeMeta, { silent: true, skipCameraReset: true, skipHashUpdate: true }).then(() => {
      if (grainParticleSystem) grainParticleSystem.visible = true;
      if (grainInstancedMesh) grainInstancedMesh.visible = true;
      if (renderer && scene && camera) {
        renderer.compile(scene, camera);
      }
      cinematicState.switchingUnit = false;
    });
  }

  // Drive ALL Mechanical & Instanced Grain Animation Deterministically from Master `elapsed` Time in Seconds
  const effectiveSimTime = elapsed * 1.25;

  for (let i = 0; i < kinematicRotors.length; i++) {
    const item = kinematicRotors[i];
    if (item && item.mesh) {
      const angle = item.speed * effectiveSimTime;
      if (item.axis === 'x') item.mesh.rotation.x = angle;
      else if (item.axis === 'y') item.mesh.rotation.y = angle;
      else if (item.axis === 'z') item.mesh.rotation.z = angle;
    }
  }

  if (kinematicBuckets.length > 0) {
    for (let i = 0; i < kinematicBuckets.length; i++) {
      const b = kinematicBuckets[i];
      if (!b || !b.mesh) continue;
      const initialPhase = i / kinematicBuckets.length;
      const p = (initialPhase + 0.14 * effectiveSimTime) % 1.0;

      if (p < 0.44) {
        // Ascending Up-Leg: Buckets are FULL of grain!
        const u = p / 0.44;
        b.mesh.position.set(-0.2605, 0.65 + u * 8.40, b.baseZ);
        b.mesh.rotation.set(0, 0, 0);
        if (b.grainFill) {
          b.grainFill.visible = true;
          b.grainFill.scale.set(1, 1, 1);
        }
      } else if (p < 0.50) {
        // Centrifugal Discharge Arc over Head Pulley: Grain tips out into spout!
        const u = (p - 0.44) / 0.06;
        const theta = Math.PI * (1.0 - u);
        b.mesh.position.set(Math.cos(theta) * 0.2605, 9.05 + Math.sin(theta) * 0.26, b.baseZ);
        b.mesh.rotation.set(0, 0, theta - Math.PI);
        if (b.grainFill) {
          b.grainFill.visible = u < 0.68;
          const shrink = Math.max(0.1, 1.0 - u * 1.35);
          b.grainFill.scale.set(shrink, shrink, shrink);
        }
      } else if (p < 0.94) {
        // Descending Down-Leg: Buckets return inverted and EMPTY!
        const u = (p - 0.50) / 0.44;
        b.mesh.position.set(0.2605, 9.05 - u * 8.40, b.baseZ);
        b.mesh.rotation.set(0, 0, Math.PI);
        if (b.grainFill) {
          b.grainFill.visible = false;
        }
      } else {
        // Boot Pulley Scoop Turn: Buckets scoop fresh grain at bottom of boot!
        const u = (p - 0.94) / 0.06;
        const theta = -Math.PI * u;
        b.mesh.position.set(Math.cos(theta) * 0.2605, 0.65 + Math.sin(theta) * 0.26, b.baseZ);
        b.mesh.rotation.set(0, 0, theta - Math.PI);
        if (b.grainFill) {
          b.grainFill.visible = u > 0.45;
          const fillUp = Math.min(1.0, Math.max(0.1, (u - 0.45) / 0.55));
          b.grainFill.scale.set(fillUp, fillUp, fillUp);
        }
      }
    }
  }

  // Advance Instanced 3D Grain Flow inside the active individual machine
  updateInstancedGrainSimulation(effectiveSimTime, true);

  // Eased 30-Second Camera Choreography (15.0s Bucket Elevator | 15.0s Satake VBF Degermer)
  const distScale = isPortrait ? 1.14 : 1.0;
  const phaseTag = document.getElementById('cinematicPhaseTag');

  if (elapsed < 15.0) {
    // ========================================================================
    // PART 1 (0.0s - 15.0s): UNIT 01 — INDUSTRIAL BUCKET ELEVATOR (Standalone)
    // ========================================================================
    if (!isCutawayActive) setCutawayState(true);
    updateExplodedView(0);

    if (elapsed < 5.0) {
      // 0.0s - 5.0s: Boot Intake, Tensioner & Lower Ascension
      if (phaseTag) phaseTag.textContent = 'UNIT 01 (00–15s) • BOOT INTAKE & TENSIONER';
      const u = cubicEaseInOut(elapsed / 5.0);
      const angle = THREE.MathUtils.lerp(-0.28, 0.16, u);
      const radius = THREE.MathUtils.lerp(0.88, 1.02, u) * distScale;
      const camY = THREE.MathUtils.lerp(0.32, 0.85, u);
      const lookY = THREE.MathUtils.lerp(0.30, 0.88, u);

      camera.position.set(Math.sin(angle) * radius, camY, Math.cos(angle) * radius);
      controls.target.set(0, lookY, 0);
    } else if (elapsed < 10.0) {
      // 5.0s - 10.0s: Vertical Twin-Leg Casing Climb following Full Ascending Buckets
      if (phaseTag) phaseTag.textContent = 'UNIT 01 (00–15s) • TWIN-LEG CASING & LOADED BUCKETS';
      const u = cubicEaseInOut((elapsed - 5.0) / 5.0);
      const angle = THREE.MathUtils.lerp(0.16, 0.36, u);
      const radius = THREE.MathUtils.lerp(1.02, 1.08, Math.sin(u * Math.PI)) * distScale;
      const camY = THREE.MathUtils.lerp(0.85, 2.02, u);
      const lookY = THREE.MathUtils.lerp(0.88, 2.06, u);

      camera.position.set(Math.sin(angle) * radius, camY, Math.cos(angle) * radius);
      controls.target.set(0, lookY, 0);
    } else {
      // 10.0s - 15.0s: Crowned Head Pulley Orbit & Centrifugal Discharge Spout
      if (phaseTag) phaseTag.textContent = 'UNIT 01 (00–15s) • HEAD PULLEY & CENTRIFUGAL DISCHARGE';
      const u = cubicEaseInOut((elapsed - 10.0) / 5.0);
      const angle = THREE.MathUtils.lerp(0.36, -0.45, u);
      const radius = THREE.MathUtils.lerp(1.02, 0.92, u) * distScale;
      const camY = THREE.MathUtils.lerp(2.02, 2.22, u);
      const lookY = THREE.MathUtils.lerp(2.06, 2.14, u);

      camera.position.set(Math.sin(angle) * radius, camY, Math.cos(angle) * radius);
      controls.target.set(0.02, lookY, 0);
    }
  } else {
    // ========================================================================
    // PART 2 (15.0s - 30.0s): UNIT 02 — SATAKE VBF VERTICAL MAIZE DEGERMER (Standalone)
    // ========================================================================
    const p2 = elapsed - 15.0; // 0.0s .. 15.0s local time for Unit 02
    if (!isCutawayActive) setCutawayState(true);
    updateExplodedView(0);

    if (p2 < 5.0) {
      // 15.0s - 20.0s: Top Feed Magnet Hopper, Screw Feeder & Degerming Rotor Entry
      if (phaseTag) phaseTag.textContent = 'UNIT 02 (15–30s) • SATAKE VBF INLET & SCREW FEEDER';
      const u = cubicEaseInOut(p2 / 5.0);
      const angle = THREE.MathUtils.lerp(0.55, 0.12, u);
      const radius = THREE.MathUtils.lerp(2.05, 1.65, u) * distScale;
      const camY = THREE.MathUtils.lerp(1.85, 1.48, u);
      const lookY = THREE.MathUtils.lerp(1.55, 1.32, u);

      camera.position.set(Math.sin(angle) * radius, camY, Math.cos(angle) * radius);
      controls.target.set(0, lookY, 0);
    } else if (p2 < 10.0) {
      // 20.0s - 25.0s: Close Cutaway Orbit around Multifaceted Slotted Screen & Swirling Maize Vortex
      if (phaseTag) phaseTag.textContent = 'UNIT 02 (15–30s) • SLOTTED SCREEN & SCOURING VORTEX';
      const u = cubicEaseInOut((p2 - 5.0) / 5.0);
      const angle = THREE.MathUtils.lerp(0.12, -0.52, u);
      const radius = THREE.MathUtils.lerp(1.65, 1.52, Math.sin(u * Math.PI)) * distScale;
      const camY = THREE.MathUtils.lerp(1.48, 1.10, u);
      const lookY = THREE.MathUtils.lerp(1.32, 1.08, u);

      camera.position.set(Math.sin(angle) * radius, camY, Math.cos(angle) * radius);
      controls.target.set(0, lookY, 0);
    } else {
      // 25.0s - 30.0s: Lower Aspiration Plinth, V-Belt Drive & Full Hero Pullback before Ending Fade-Out
      if (phaseTag) phaseTag.textContent = 'UNIT 02 (15–30s) • ASPIRATION DRIVE & FULL SYSTEM';
      const u = cubicEaseInOut((p2 - 10.0) / 5.0);
      const angle = THREE.MathUtils.lerp(-0.52, 0.38, u);
      const radius = THREE.MathUtils.lerp(1.52, 2.25, u) * distScale;
      const camY = THREE.MathUtils.lerp(1.10, 1.28, u);
      const lookY = THREE.MathUtils.lerp(1.08, 1.05, u);

      camera.position.set(Math.sin(angle) * radius, camY, Math.cos(angle) * radius);
      controls.target.set(0, lookY, 0);
    }
  }

  camera.lookAt(controls.target);
  camera.updateMatrixWorld(true);
}

// Helper to project a callout's 3D world position onto the fixed stage canvas (w x h)
function projectCalloutToStage(calloutData, stageW, stageH) {
  if (!currentLoadedRoot || !camera) return null;
  const tempV = new THREE.Vector3();
  let resolved = false;

  if (calloutData.meshTarget) {
    const targetObj = currentLoadedRoot.getObjectByName(calloutData.meshTarget);
    if (targetObj) {
      const box = new THREE.Box3().setFromObject(targetObj);
      if (!box.isEmpty()) {
        box.getCenter(tempV);
        resolved = true;
      }
    }
  }
  if (!resolved) {
    const look = (calloutData.camPreset && calloutData.camPreset.look) || [0, 1.2, 0];
    tempV.set(look[0], look[1], look[2]);
  }

  tempV.project(camera);
  if (tempV.z > 1.0) return null;

  return {
    ax: (tempV.x * 0.5 + 0.5) * stageW,
    ay: (-(tempV.y * 0.5) + 0.5) * stageH
  };
}

// ----------------------------------------------------------------------------
// COMPOSITE 2D STAGE RENDERER (TIMED CALLOUTS, LOWER-THIRD & SMOOTH FADE IN/OUTS)
// ----------------------------------------------------------------------------
function renderCompositeVideoFrame(elapsed) {
  if (!cinematicState.active || !cinematicState.compositeCtx || !cinematicState.compositeCanvas || !renderer) return;

  const ctx = cinematicState.compositeCtx;
  const webglCanvas = renderer.domElement;

  const w = cinematicState.stageWidth || 1920;
  const h = cinematicState.stageHeight || 1080;
  const isPortrait = cinematicState.format === 'portrait';
  const scale = isPortrait ? (w / 1150) : (w / 1920);
  const activeUnit = elapsed < 15.0 ? 1 : 2;

  // 1. Copy fixed-size Three.js WebGL frame onto 2D composite stage
  ctx.drawImage(webglCanvas, 0, 0, w, h);

  // 2. Subtle Top & Bottom Cinematic Gradient Vignettes for Broadcast Contrast
  const topGrad = ctx.createLinearGradient(0, 0, 0, h * 0.18);
  topGrad.addColorStop(0, 'rgba(7, 11, 16, 0.68)');
  topGrad.addColorStop(1, 'rgba(7, 11, 16, 0)');
  ctx.fillStyle = topGrad;
  ctx.fillRect(0, 0, w, h * 0.18);

  const botGrad = ctx.createLinearGradient(0, h * 0.72, 0, h);
  botGrad.addColorStop(0, 'rgba(7, 11, 16, 0)');
  botGrad.addColorStop(1, 'rgba(7, 11, 16, 0.88)');
  ctx.fillStyle = botGrad;
  ctx.fillRect(0, h * 0.72, w, h * 0.28);

  // 3. Timed Sequential Callout Labels for the Active Individual Machine (Max 2-3 at once, Zero-Crossing Elbow Lines)
  const activeItems = [];
  for (let i = 0; i < INDIVIDUAL_UNITS_CALLOUT_SCHEDULE.length; i++) {
    const sched = INDIVIDUAL_UNITS_CALLOUT_SCHEDULE[i];
    if (sched.unit === activeUnit && elapsed >= sched.start && elapsed <= sched.end) {
      const catalog = sched.unit === 2 ? SATAKE_CALLOUTS : DIAGRAM_69B_CALLOUTS;
      const calloutObj = catalog.find(c => c.id === sched.id);
      if (!calloutObj) continue;

      // Calculate smooth cubic ease-in (0.45s) and ease-out (0.45s)
      let alpha = 1.0;
      if (elapsed - sched.start < 0.45) {
        alpha = cubicEaseInOut((elapsed - sched.start) / 0.45);
      } else if (sched.end - elapsed < 0.45) {
        alpha = cubicEaseInOut((sched.end - elapsed) / 0.45);
      }

      const proj = projectCalloutToStage(calloutObj, w, h);
      if (proj) {
        activeItems.push({
          sched,
          callout: calloutObj,
          alpha,
          ax: proj.ax,
          ay: proj.ay
        });
      }
    }
  }

  if (activeItems.length > 0) {
    // Sort left and right items by anchor Y coordinate so leader lines NEVER cross each other!
    const leftGroup = activeItems.filter(it => it.sched.side === 'left').sort((a, b) => a.ay - b.ay);
    const rightGroup = activeItems.filter(it => it.sched.side === 'right').sort((a, b) => a.ay - b.ay);

    const drawCalloutGroup = (group, side) => {
      let prevPillY = -999;
      const minPillGap = Math.round(76 * scale);

      group.forEach((item) => {
        ctx.save();
        ctx.globalAlpha = Math.max(0.02, Math.min(1, item.alpha));

        const isUnit2 = item.sched.unit === 2;
        const accentColor = isUnit2 ? '#2DD4BF' : '#4ADE80';
        const accentBorder = isUnit2 ? 'rgba(45, 212, 191, 0.88)' : 'rgba(74, 222, 128, 0.88)';

        // Slide-in offset during reveal
        const slideOffset = (1 - item.alpha) * (side === 'left' ? -24 : 24) * scale;

        const fontTag = `700 ${Math.round(18 * scale)}px "DM Mono", monospace`;
        const fontTitle = `700 ${Math.round(19 * scale)}px "DM Sans", sans-serif`;
        const fontSub = `600 ${Math.round(13 * scale)}px "DM Mono", monospace`;

        const tagText = item.callout.tag || '01';
        const titleText = item.callout.title; // Keep original authoritative label text!
        const defaultSub = isUnit2 ? 'UNIT 02 • SATAKE VBF DEGERMER' : 'UNIT 01 • BUCKET ELEVATOR';
        const subText = (item.callout.section || defaultSub).toUpperCase();

        ctx.font = fontTag;
        const tagW = ctx.measureText(tagText).width;
        ctx.font = fontTitle;
        const titleW = ctx.measureText(titleText).width;
        ctx.font = fontSub;
        const subW = ctx.measureText(subText).width;

        const contentW = Math.max(titleW, subW);
        const padX = Math.round(16 * scale);
        const badgeBoxW = Math.round(tagW + 18 * scale);
        const pillW = Math.round(padX + badgeBoxW + 14 * scale + contentW + padX);
        const pillH = Math.round(62 * scale);

        // Place pill cleanly in outer left or right margin so it NEVER covers the machine
        const marginX = isPortrait ? Math.round(34 * scale) : Math.round(64 * scale);
        const pillX = Math.round((side === 'left' ? marginX : (w - marginX - pillW)) + slideOffset);

        // Clamp Y within safe stage zone and enforce vertical spacing so pills never overlap
        let targetCenterY = Math.max(Math.round(145 * scale), Math.min(h - Math.round(235 * scale), item.ay));
        if (targetCenterY - prevPillY < minPillGap) {
          targetCenterY = prevPillY + minPillGap;
        }
        prevPillY = targetCenterY;
        const pillY = Math.round(targetCenterY - pillH * 0.5);

        // Route 2-segment CAD elbow leader line from machine anchor (ax, ay) to outer margin pill edge
        const attachX = side === 'left' ? (pillX + pillW) : pillX;
        const attachY = Math.round(pillY + pillH * 0.5);
        const elbowX = side === 'left'
          ? Math.min(item.ax - Math.round(28 * scale), attachX + Math.round(42 * scale))
          : Math.max(item.ax + Math.round(28 * scale), attachX - Math.round(42 * scale));

        // Leader Line Subtle Bloom & Crisp Stroke
        ctx.save();
        ctx.shadowColor = accentColor;
        ctx.shadowBlur = Math.round(8 * scale);
        ctx.beginPath();
        ctx.moveTo(item.ax, item.ay);
        ctx.lineTo(elbowX, attachY);
        ctx.lineTo(attachX, attachY);
        ctx.strokeStyle = accentBorder;
        ctx.lineWidth = Math.max(2, 2.5 * scale);
        ctx.stroke();
        ctx.restore();

        // Glowing Anchor Target Ring + Dot on Machine Component
        ctx.beginPath();
        ctx.arc(item.ax, item.ay, Math.max(6, 8.5 * scale), 0, Math.PI * 2);
        ctx.fillStyle = isUnit2 ? 'rgba(45, 212, 191, 0.28)' : 'rgba(74, 222, 128, 0.28)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(item.ax, item.ay, Math.max(4, 4.8 * scale), 0, Math.PI * 2);
        ctx.fillStyle = accentColor;
        ctx.fill();
        ctx.lineWidth = Math.max(1.5, 2 * scale);
        ctx.strokeStyle = '#090D12';
        ctx.stroke();

        // High-Contrast Broadcast Callout Card Background
        ctx.fillStyle = 'rgba(9, 15, 22, 0.94)';
        ctx.strokeStyle = accentBorder;
        ctx.lineWidth = Math.max(1.8, 2.2 * scale);
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, pillW, pillH, Math.round(12 * scale));
        ctx.fill();
        ctx.stroke();

        // Tag Number Pill Box (e.g. 01..12)
        const tagBoxX = pillX + padX;
        const tagBoxY = pillY + Math.round(12 * scale);
        const tagBoxH = pillH - Math.round(24 * scale);
        ctx.fillStyle = isUnit2 ? 'rgba(20, 184, 166, 0.26)' : 'rgba(22, 163, 74, 0.28)';
        ctx.strokeStyle = accentColor;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(tagBoxX, tagBoxY, badgeBoxW, tagBoxH, Math.round(8 * scale));
        ctx.fill();
        ctx.stroke();

        ctx.font = fontTag;
        ctx.fillStyle = accentColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(tagText, tagBoxX + badgeBoxW * 0.5, tagBoxY + tagBoxH * 0.5);

        // Part Title & Section Subtitle
        const textStartX = tagBoxX + badgeBoxW + Math.round(14 * scale);
        ctx.textAlign = 'left';
        ctx.font = fontTitle;
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(titleText, textStartX, pillY + Math.round(24 * scale));

        ctx.font = fontSub;
        ctx.fillStyle = '#FBBF24';
        ctx.fillText(subText, textStartX, pillY + Math.round(45 * scale));

        ctx.restore();
      });
    };

    drawCalloutGroup(leftGroup, 'left');
    drawCalloutGroup(rightGroup, 'right');
  }

  // 4. Top-Left "SAGMA - 3D TRAINING TWIN" Badge (Smoothly visible at start of Unit 01 and start of Unit 02)
  const unitLocalTime = elapsed < 15.0 ? elapsed : (elapsed - 15.0);
  if (unitLocalTime < 4.5) {
    let badgeAlpha = 1.0;
    if (unitLocalTime < 0.6) badgeAlpha = cubicEaseInOut(unitLocalTime / 0.6);
    else if (unitLocalTime > 3.3) badgeAlpha = 1.0 - cubicEaseInOut((unitLocalTime - 3.3) / 1.2);

    const padX = Math.round(48 * scale);
    const padY = Math.round(38 * scale);
    ctx.save();
    ctx.globalAlpha = Math.max(0, Math.min(1, badgeAlpha));
    ctx.fillStyle = 'rgba(13, 21, 28, 0.90)';
    ctx.strokeStyle = 'rgba(22, 163, 74, 0.72)';
    ctx.lineWidth = Math.max(1.5, 2 * scale);
    const badgeW = Math.round(370 * scale);
    const badgeH = Math.round(58 * scale);
    ctx.beginPath();
    ctx.roundRect(padX, padY, badgeW, badgeH, Math.round(29 * scale));
    ctx.fill();
    ctx.stroke();

    if (cinematicState.logoImg && cinematicState.logoImg.complete && cinematicState.logoImg.naturalWidth > 0) {
      const logoSize = Math.round(40 * scale);
      ctx.drawImage(cinematicState.logoImg, padX + Math.round(12 * scale), padY + Math.round(9 * scale), logoSize, logoSize);
    }

    ctx.fillStyle = '#F1F7F3';
    ctx.font = `700 ${Math.round(17 * scale)}px "DM Sans", sans-serif`;
    ctx.fillText('SAGMA - 3D TRAINING TWIN', padX + Math.round(62 * scale), padY + Math.round(26 * scale));

    ctx.fillStyle = '#4ADE80';
    ctx.font = `600 ${Math.round(11.5 * scale)}px "DM Mono", monospace`;
    ctx.fillText('SOUTHERN AFRICAN GRAIN MILLING ACADEMY', padX + Math.round(62 * scale), padY + Math.round(44 * scale));
    ctx.restore();
  }

  // 5. Lower-Third Title Bar (0.0s - 15.0s: Unit 01 Bucket Elevator | 15.0s - 30.0s: Unit 02 Satake VBF Degermer)
  {
    const beats = [
      // Unit 01: Industrial Bucket Elevator (0.0s - 15.0s)
      {
        start: 0.0, end: 5.0,
        unitTitle: 'UNIT 01: INDUSTRIAL BUCKET ELEVATOR | Vertical Grain Conveying System',
        phaseText: 'PHASE 01 (00–05s) • BOOT INTAKE HOPPER, SCREW TENSIONER & CLEANOUT DOORS'
      },
      {
        start: 5.0, end: 10.0,
        unitTitle: 'UNIT 01: INDUSTRIAL BUCKET ELEVATOR | DIN 22104 / Diagram 69(b)',
        phaseText: 'PHASE 02 (05–10s) • TWIN-LEG TRUNKING, ANTISTATIC BELT & LOADED DEEP BUCKETS'
      },
      {
        start: 10.0, end: 15.0,
        unitTitle: 'UNIT 01: INDUSTRIAL BUCKET ELEVATOR | 35 – 120 t/h • 7.5 – 22 kW Drive',
        phaseText: 'PHASE 03 (10–15s) • CROWNED HEAD PULLEY, WEAR PLATES & CENTRIFUGAL DISCHARGE'
      },
      // Unit 02: Satake VBF Vertical Maize Degermer (15.0s - 30.0s)
      {
        start: 15.0, end: 20.0,
        unitTitle: 'UNIT 02: SATAKE VBF VERTICAL MAIZE DEGERMER | VBF 5A / 7B / 10A',
        phaseText: 'PHASE 01 (15–20s) • MAGNETIC INLET HOPPER, SCREW FEEDER & DEGERMINATOR ROTOR'
      },
      {
        start: 20.0, end: 25.0,
        unitTitle: 'UNIT 02: SATAKE VBF VERTICAL MAIZE DEGERMER | 4.5 – 12.0 t/h (Maize)',
        phaseText: 'PHASE 02 (20–25s) • MULTIFACETED SLOTTED SCREEN, RESISTANCE BARS & EXIT GATE'
      },
      {
        start: 25.0, end: 30.0,
        unitTitle: 'UNIT 02: SATAKE VBF VERTICAL MAIZE DEGERMER | 750–920 RPM • 37–75 kW',
        phaseText: 'PHASE 03 (25–30s) • HOLLOW ASPIRATION SHAFT, V-BELT DRIVE & 4-POLE MOTOR'
      }
    ];
    const currentBeat = beats.find(b => elapsed >= b.start && elapsed < b.end) || beats[beats.length - 1];
    const beatLocal = elapsed - currentBeat.start;
    const beatDur = currentBeat.end - currentBeat.start;

    // Smoothly animate lower-third in (0.45s) and out (0.45s) per phase
    let ltAlpha = 1.0;
    if (beatLocal < 0.45) ltAlpha = cubicEaseInOut(beatLocal / 0.45);
    else if (beatDur - beatLocal < 0.45) ltAlpha = cubicEaseInOut((beatDur - beatLocal) / 0.45);

    const slideY = Math.round((1.0 - ltAlpha) * 20 * scale);
    const padX = isPortrait ? Math.round(36 * scale) : Math.round(64 * scale);
    const cardH = Math.round(108 * scale);
    const cardX = padX;
    const cardY = h - cardH - Math.round(42 * scale) + slideY;
    const cardW = isPortrait ? (w - padX * 2) : Math.min(w - padX * 2, Math.round(1220 * scale));

    ctx.save();
    ctx.globalAlpha = Math.max(0.02, Math.min(1, ltAlpha));

    // Lower-third glass card background
    ctx.fillStyle = 'rgba(8, 13, 19, 0.92)';
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.68)';
    ctx.lineWidth = Math.max(1.8, 2.2 * scale);
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, cardH, Math.round(12 * scale));
    ctx.fill();
    ctx.stroke();

    // Left Amber/Teal Accent Bar
    ctx.fillStyle = activeUnit === 2 ? '#2DD4BF' : '#F59E0B';
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, Math.round(10 * scale), cardH, [Math.round(12 * scale), 0, 0, Math.round(12 * scale)]);
    ctx.fill();

    // Primary Unit Headline
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `700 ${Math.round((isPortrait ? 20 : 25) * scale)}px "DM Sans", sans-serif`;
    ctx.fillText(currentBeat.unitTitle, cardX + Math.round(28 * scale), cardY + Math.round(42 * scale));

    // Larger, High-Contrast Amber Phase Line (18.5px bold monospace for 1080p legibility)
    ctx.fillStyle = '#FBBF24';
    ctx.font = `700 ${Math.round((isPortrait ? 14.5 : 18.5) * scale)}px "DM Mono", monospace`;
    ctx.fillText(currentBeat.phaseText, cardX + Math.round(28 * scale), cardY + Math.round(78 * scale));

    // Master Timeline Progress Bar along bottom edge of lower-third card
    const progW = (cardW - Math.round(20 * scale)) * Math.min(1, elapsed / CINEMATIC_TOTAL_DURATION);
    ctx.fillStyle = activeUnit === 2 ? '#2DD4BF' : '#4ADE80';
    ctx.fillRect(cardX + Math.round(10 * scale), cardY + cardH - Math.round(5 * scale), progW, Math.round(5 * scale));

    ctx.restore();
  }

  // 6. SMOOTH STARTING FADE-IN, 15s MACHINE TRANSITION FADE-OUT/IN, AND 30s ENDING FADE-OUT
  let fadeOverlayAlpha = 0.0;
  if (elapsed < 1.2) {
    // Smooth starting fade-in from black (0.0s -> 1.2s)
    fadeOverlayAlpha = 1.0 - cubicEaseInOut(elapsed / 1.2);
  } else if (elapsed >= 14.1 && elapsed < 15.0) {
    // Smooth fade-out at the end of Unit 01 Bucket Elevator (14.1s -> 15.0s)
    fadeOverlayAlpha = cubicEaseInOut((elapsed - 14.1) / 0.9);
  } else if (elapsed >= 15.0 && elapsed < 15.9) {
    // Smooth fade-in at the start of Unit 02 Satake VBF Degermer (15.0s -> 15.9s)
    fadeOverlayAlpha = 1.0 - cubicEaseInOut((elapsed - 15.0) / 0.9);
  } else if (elapsed >= 28.8) {
    // Smooth ending fade-out to black at the end of the 30-second video (28.8s -> 30.0s)
    fadeOverlayAlpha = cubicEaseInOut((elapsed - 28.8) / 1.2);
  }

  if (fadeOverlayAlpha > 0.005) {
    ctx.save();
    ctx.fillStyle = `rgba(7, 11, 16, ${Math.min(1, fadeOverlayAlpha).toFixed(3)})`;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
  }
}

function exportRecordedShowcaseVideo() {
  const mime = cinematicState.selectedMimeType || 'video/mp4';
  const ext = mime.includes('webm') ? 'webm' : 'mp4';
  const blob = new Blob(cinematicState.recordedChunks, { type: mime });
  const url = URL.createObjectURL(blob);

  const suffix = cinematicState.format === 'portrait' ? '1080x1350-Vertical' : '1920x1080';
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = `SAGMA-30s-Showcase-BucketElevator-SatakeVBF-${suffix}.${ext}`;
  document.body.appendChild(a);
  a.click();

  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 5000);
}

async function stopCinematicShowcase(wasCancelled = false) {
  if (!cinematicState.active) return;

  cinematicState.active = false;
  cinematicState.cancelled = Boolean(wasCancelled);

  // Stop MediaRecorder (triggers onstop -> exportRecordedShowcaseVideo if not cancelled)
  if (cinematicState.mediaRecorder && cinematicState.mediaRecorder.state !== 'inactive') {
    try {
      cinematicState.mediaRecorder.stop();
    } catch (e) {
      console.warn('Recorder stop warning:', e);
    }
  }

  // Restore UI, Camera FOV, PixelRatio & OrbitControls immediately
  document.body.classList.remove('cinematic-mode');
  document.getElementById('cinematicStatusPill')?.classList.remove('active');
  document.getElementById('btnCinematicShowcase')?.classList.remove('recording');
  document.getElementById('btnCinematicPortrait')?.classList.remove('recording');

  if (camera) {
    camera.fov = 42;
    camera.updateProjectionMatrix();
  }
  if (renderer) {
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
  if (controls) {
    controls.enabled = true;
  }

  // Restore user's previously viewed individual machine & settings
  const restoreId = cinematicState.savedMachineId || 'elevator_69b';
  const restoreMeta = await EchoDB.get(restoreId) || FLEET_CATALOG.find(m => m.id === restoreId) || FLEET_CATALOG[0];
  await loadMachineTwin(restoreMeta, { silent: true, skipCameraReset: true, skipHashUpdate: true });

  isLiveMotionActive = cinematicState.savedMotion !== undefined ? cinematicState.savedMotion : true;
  driveSpeedMultiplier = cinematicState.savedSpeed || 1.0;
  const motionBtn = document.getElementById('btnToggleMotion');
  if (motionBtn) motionBtn.classList.toggle('active', isLiveMotionActive);
  if (grainParticleSystem) grainParticleSystem.visible = isLiveMotionActive;
  if (grainInstancedMesh) grainInstancedMesh.visible = isLiveMotionActive;

  setCutawayState(cinematicState.savedCutaway);
  updateExplodedView(0);
  onWindowResize();
  resetCameraFraming();
}

// ============================================================================
// 22. ANIMATION & RENDER LOOP (NVIDIA CAD 60 FPS + MUSEUM KINEMATICS)
// ============================================================================
function animate() {
  requestAnimationFrame(animate);

  const now = performance.now();
  const delta = Math.min((now - lastTime) / 1000, 0.1);
  lastTime = now;
  frameCount++;

  // Calculate FPS every 500ms
  if (now - lastFpsUpdate >= 500) {
    measuredFPS = (frameCount * 1000) / (now - lastFpsUpdate);
    frameCount = 0;
    lastFpsUpdate = now;
    const hudFPS = document.getElementById('hudFPS');
    if (hudFPS) hudFPS.textContent = measuredFPS.toFixed(1) + ' FPS';
  }

  // Advance Live Mechanical Kinematics & Particle Streams (if not LOTO locked and not driven by master cinematic timeline)
  const isLotoLocked = document.getElementById('lotoIndicator')?.classList.contains('locked');
  if (!cinematicState.active && isLiveMotionActive && !isLotoLocked && driveSpeedMultiplier > 0) {
    // 1. Rotate mechanical rotors, pulleys, screw flights, and rolls
    for (let i = 0; i < kinematicRotors.length; i++) {
      const item = kinematicRotors[i];
      if (item && item.mesh) {
        const step = item.speed * driveSpeedMultiplier * delta;
        if (item.axis === 'x') item.mesh.rotation.x += step;
        else if (item.axis === 'y') item.mesh.rotation.y += step;
        else if (item.axis === 'z') item.mesh.rotation.z += step;
      }
    }

    // 2. Advance closed-loop conveyor buckets (Up-Leg Full -> Head Pulley Tipping -> Down-Leg Empty -> Boot Pulley Scoop)
    if (kinematicBuckets.length > 0 && currentExplodeFactor < 0.02) {
      for (let i = 0; i < kinematicBuckets.length; i++) {
        const b = kinematicBuckets[i];
        if (!b || !b.mesh) continue;
        b.phase = (b.phase + 0.14 * driveSpeedMultiplier * delta) % 1.0;
        const p = b.phase;

        if (p < 0.44) {
          // Up-Leg ascending (carrying grain from boot to head)
          const u = p / 0.44;
          b.mesh.position.set(-0.2605, 0.65 + u * 8.40, b.baseZ);
          b.mesh.rotation.set(0, 0, 0);
          if (b.grainFill) {
            b.grainFill.visible = true;
            b.grainFill.scale.set(1, 1, 1);
          }
        } else if (p < 0.50) {
          // Centrifugal discharge arc over Head Pulley (turning clockwise from -X over top to +X)
          const u = (p - 0.44) / 0.06;
          const theta = Math.PI * (1.0 - u);
          b.mesh.position.set(Math.cos(theta) * 0.2605, 9.05 + Math.sin(theta) * 0.26, b.baseZ);
          b.mesh.rotation.set(0, 0, theta - Math.PI);
          if (b.grainFill) {
            b.grainFill.visible = u < 0.68;
            const shrink = Math.max(0.1, 1.0 - u * 1.35);
            b.grainFill.scale.set(shrink, shrink, shrink);
          }
        } else if (p < 0.94) {
          // Down-Leg descending (returning inverted and EMPTY from head to boot)
          const u = (p - 0.50) / 0.44;
          b.mesh.position.set(0.2605, 9.05 - u * 8.40, b.baseZ);
          b.mesh.rotation.set(0, 0, Math.PI);
          if (b.grainFill) {
            b.grainFill.visible = false;
          }
        } else {
          // Boot Take-Up Pulley scoop turn (bottom arc from +X under boot to -X)
          const u = (p - 0.94) / 0.06;
          const theta = -Math.PI * u;
          b.mesh.position.set(Math.cos(theta) * 0.2605, 0.65 + Math.sin(theta) * 0.26, b.baseZ);
          b.mesh.rotation.set(0, 0, theta - Math.PI);
          if (b.grainFill) {
            b.grainFill.visible = u > 0.45;
            const fillUp = Math.min(1.0, Math.max(0.1, (u - 0.45) / 0.55));
            b.grainFill.scale.set(fillUp, fillUp, fillUp);
          }
        }
      }
    }

    // 3. Advance Instanced 3D Grain Flow across Both Connected Machines in Interactive Mode
    updateInstancedGrainSimulation(delta, false);

    // 4. Update internal grain & aspiration airflow point streams
    if (grainParticleSystem && grainParticlesData.length > 0 && grainParticleSystem.geometry) {
      const posAttr = grainParticleSystem.geometry.attributes.position;
      const arr = posAttr.array;

      for (let i = 0; i < grainParticlesData.length; i++) {
        const p = grainParticlesData[i];
        if (p.mode === 'vortex') {
          p.angle += p.speed * driveSpeedMultiplier * delta;
          p.h += (p.isAir ? 0.55 : 0.34) * driveSpeedMultiplier * delta;
          if (p.h > 1.0) p.h -= 1.0;

          const r = p.radius + Math.sin(p.h * Math.PI * 2 + p.angle) * 0.018;
          arr[i * 3] = Math.cos(p.angle) * r;
          arr[i * 3 + 1] = 0.50 + p.h * 1.05;
          arr[i * 3 + 2] = Math.sin(p.angle) * r;
        } else if (p.mode === 'elevator') {
          p.t = (p.t + p.speed * driveSpeedMultiplier * delta) % 1.0;
          if (p.t < 0.84) {
            const legFrac = p.t / 0.84;
            arr[i * 3] = -0.195 + p.jitterX;
            arr[i * 3 + 1] = 0.45 + legFrac * 8.75;
            arr[i * 3 + 2] = p.jitterZ;
          } else {
            // Centrifugal discharge arc over head pulley into discharge spout
            const arcFrac = (p.t - 0.84) / 0.16;
            const theta = Math.PI - arcFrac * Math.PI * 0.88;
            arr[i * 3] = Math.cos(theta) * 0.24 + arcFrac * 0.28;
            arr[i * 3 + 1] = 9.15 + Math.sin(theta) * 0.26 - arcFrac * 0.45;
            arr[i * 3 + 2] = p.jitterZ;
          }
        }
      }
      posAttr.needsUpdate = true;
    }
  }

  // Advance 30-Second Cinematic Camera Choreography or Manual OrbitControls
  if (cinematicState.active) {
    updateCinematicChoreography(now);
  } else if (controls) {
    controls.update();
  }

  // Update DOM 3D Callout Positions when in interactive mode (during recording, callouts are rendered directly onto the fixed stage canvas)
  if (!cinematicState.active) {
    updateCalloutPositions();
  }

  // Render Scene
  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }

  // Draw Composite 2D Video Frame (WebGL + 3D Callout Badges + Lower-Third Title Cards) if Recording
  if (cinematicState.active) {
    renderCompositeVideoFrame(cinematicState.elapsed);
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

  // 5. Check URL Hash Route or Load Default Unified Process Line (Unit 01 Bucket Elevator + Unit 02 Satake VBF)
  const hash = window.location.hash;
  let initialMachine = null;
  if (hash.startsWith('#machine/')) {
    const id = hash.replace('#machine/', '');
    initialMachine = await EchoDB.get(id);
  }

  if (!initialMachine) {
    initialMachine = await EchoDB.get('elevator_69b') || await EchoDB.get('satake_vbf') || FLEET_CATALOG[0];
  }

  // 6. Launch Initial 3D Twin Workspace
  await loadMachineTwin(initialMachine);

  console.log('SAGMA ECHO Unified V2 Ready.');
});
