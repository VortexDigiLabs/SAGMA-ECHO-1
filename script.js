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
    createSatakeParticleStream(root);
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

  let bucketIndex = 0;

  gltfRoot.traverse(child => {
    if (!child.isMesh) return;
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

      // Attach a visible grain fill mound inside each bucket (visible when rising on Up-Leg, hidden when empty on return Down-Leg!)
      const fillMesh = new THREE.Mesh(bucketGrainGeo, bucketGrainMat);
      fillMesh.name = 'Bucket_Grain_Fill_Mound';
      fillMesh.position.set(0, 0.032, 0);
      fillMesh.userData.noExplode = true;
      fillMesh.userData.isGrainFill = true;
      child.add(fillMesh);

      // Register bucket for continuous loop animation along UpLeg -> Head Pulley -> DownLeg -> Boot Pulley
      kinematicBuckets.push({
        mesh: child,
        grainFill: fillMesh,
        phase: bucketIndex / 59,
        baseZ: child.position.z || 0
      });
      bucketIndex++;
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

  if (!options.skipInternalParticles) {
    createInstancedGrainFlow(gltfRoot, 'elevator_only', activeGrainCount);
  }
}

// ============================================================================
// INSTANCED 3D GRAIN FLOW ENGINE (MAIZE / WHEAT) + DISCHARGE DUST HAZE & GLOW
// ============================================================================
function createInstancedGrainFlow(parentRoot, mode = 'process_line', maxCount = 650) {
  const isWheat = GRAIN_TYPE === 'wheat';
  const rng = createSeededRandom(20261020);

  // 1. Instanced 3D Kernel Geometry (Maize = larger plump golden dent kernel; Wheat = smaller elongated amber-tan berry)
  const kernelGeo = isWheat
    ? new THREE.CylinderGeometry(0.0085, 0.0085, 0.023, 7)
    : new THREE.DodecahedronGeometry(0.0155, 0);

  const baseHex = isWheat ? 0xD99B52 : 0xFBBF24;
  const emissiveHex = isWheat ? 0x92400E : 0xD97706;

  const kernelMat = new THREE.MeshStandardMaterial({
    color: baseHex,
    emissive: emissiveHex,
    emissiveIntensity: 0.32,
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
    const t = i / maxCount; // Uniformly pre-filled 0..1 along entire process path!
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
      speed: 0.135 + rng() * 0.035,
      jitterX: (rng() - 0.5) * 0.032,
      jitterY: (rng() - 0.5) * 0.024,
      jitterZ: (rng() - 0.5) * 0.036,
      rotX: rng() * Math.PI * 2,
      rotY: rng() * Math.PI * 2,
      rotZ: rng() * Math.PI * 2,
      rotSpeedX: (rng() - 0.5) * 6.0,
      rotSpeedY: (rng() - 0.5) * 6.0,
      scaleX: isWheat ? (0.85 + rng() * 0.35) : (1.05 + rng() * 0.45),
      scaleY: isWheat ? (1.15 + rng() * 0.40) : (0.85 + rng() * 0.35),
      scaleZ: isWheat ? (0.85 + rng() * 0.35) : (0.75 + rng() * 0.30),
      vortexPhase: rng() * Math.PI * 2,
      vortexRadius: 0.18 + rng() * 0.095
    });
  }
  if (instMesh.instanceColor) instMesh.instanceColor.needsUpdate = true;

  parentRoot.add(instMesh);
  grainInstancedMesh = instMesh;
  grainParticleSystem = instMesh;

  // 2. Subtle Golden Dust / Chaff Haze & Soft Glow near Discharge Points
  const hazeCount = 90;
  const hazeGeo = new THREE.BufferGeometry();
  const hazePos = new Float32Array(hazeCount * 3);
  for (let i = 0; i < hazeCount; i++) {
    const isHeadZone = i < 55;
    if (isHeadZone) {
      // Head pulley centrifugal discharge & transfer chute inlet glow
      hazePos[i * 3] = 0.08 + (rng() - 0.5) * 0.24;
      hazePos[i * 3 + 1] = 2.22 + (rng() - 0.5) * 0.22;
      hazePos[i * 3 + 2] = (rng() - 0.5) * 0.18;
    } else {
      // Satake VBF outlet discharge & spill zone glow
      const ox = mode === 'process_line' ? 0.58 : -0.38;
      const oy = mode === 'process_line' ? 0.88 : 1.38;
      hazePos[i * 3] = ox + (rng() - 0.5) * 0.22;
      hazePos[i * 3 + 1] = oy + (rng() - 0.5) * 0.22;
      hazePos[i * 3 + 2] = (rng() - 0.5) * 0.18;
    }
  }
  hazeGeo.setAttribute('position', new THREE.BufferAttribute(hazePos, 3));
  const hazeMat = new THREE.PointsMaterial({
    color: isWheat ? 0xFCD34D : 0xFBBF24,
    size: 0.065,
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

// Guided 7-Stage Closed-Clearance Grain Flow Path (Never clips through casings, pulleys, or walls)
function evaluateGrainParticleTransform(p, u, outPos) {
  if (p.mode === 'elevator_only') {
    // Scale-normalized coordinates inside elevator gltfRoot (0..9.6m local)
    if (u < 0.12) {
      const f = u / 0.12;
      outPos.set(-0.42 + f * 0.18, 0.92 - f * 0.34, p.jitterZ);
    } else if (u < 0.78) {
      const f = (u - 0.12) / 0.66;
      outPos.set(-0.235 + p.jitterX * 0.5, 0.58 + f * 8.48, p.jitterZ);
    } else {
      const f = (u - 0.78) / 0.22;
      const theta = Math.PI * (1.0 - f * 0.85);
      outPos.set(Math.cos(theta) * 0.24 + f * 0.32, 9.08 + Math.sin(theta) * 0.25 - f * 0.55, p.jitterZ);
    }
    return;
  }

  // Combined Dual-Machine Process Line World Coordinates:
  // Unit 01 (Bucket Elevator at X = 0.0, Y = 0..2.4m) -> Gravity Chute -> Unit 02 (Satake VBF at X = 1.05, Y = 0..1.25m)
  if (u < 0.08) {
    // Stage 1: Boot Inlet Hopper -> Scooped into Boot Sump (down-leg infeed into up-leg scoop)
    const f = u / 0.08;
    outPos.set(
      THREE.MathUtils.lerp(-0.18, -0.064, f) + p.jitterX * 0.3,
      THREE.MathUtils.lerp(0.28, 0.14, Math.sin(f * Math.PI * 0.5)) + p.jitterY * 0.2,
      p.jitterZ * 0.4
    );
  } else if (u < 0.40) {
    // Stage 2: Riding Up inside Elevator Up-Leg Casing with the ascending buckets
    const f = (u - 0.08) / 0.32;
    outPos.set(
      -0.064 + p.jitterX * 0.28,
      0.16 + f * 2.08,
      p.jitterZ * 0.35
    );
  } else if (u < 0.50) {
    // Stage 3: Centrifugal Discharge Arc over Crowned Head Pulley (Y ~ 2.26m) into Head Spout
    const f = (u - 0.40) / 0.10;
    const theta = Math.PI * (1.0 - f * 0.78);
    outPos.set(
      Math.cos(theta) * 0.068 + f * 0.085,
      2.24 + Math.sin(theta) * 0.072 - f * 0.12,
      p.jitterZ * 0.35
    );
  } else if (u < 0.66) {
    // Stage 4: Gravity Transfer Chute Hand-Off from Elevator Spout (0.14, 2.12, 0) into Satake Top Magnet Hopper (1.30, 1.24, 0)
    const f = (u - 0.50) / 0.16;
    outPos.set(
      THREE.MathUtils.lerp(0.14, 1.30, f) + p.jitterX * 0.22,
      THREE.MathUtils.lerp(2.12, 1.24, f) - Math.sin(f * Math.PI) * 0.03,
      p.jitterZ * 0.25
    );
  } else if (u < 0.73) {
    // Stage 5: Satake Inlet Hopper & Motorized Horizontal Screw Feeder into Conditioning Chamber
    const f = (u - 0.66) / 0.07;
    outPos.set(
      THREE.MathUtils.lerp(1.30, 1.05, f),
      THREE.MathUtils.lerp(1.24, 0.42, f),
      p.jitterZ * 0.25
    );
  } else if (u < 0.90) {
    // Stage 6: Helical Scouring & Degerming Vortex inside Satake VBF Slotted Screen Cage (center X = 1.05)
    const f = (u - 0.73) / 0.17;
    const angle = p.vortexPhase - f * Math.PI * 6.0;
    const r = p.vortexRadius * 0.65;
    outPos.set(
      1.05 + Math.cos(angle) * r,
      0.38 + f * 0.68,
      Math.sin(angle) * r
    );
  } else {
    // Stage 7: Overtails Discharge Spout Exit & Gravity Spill into Receiving Collector Bin (X = 0.80 -> 0.54, Y = 0.96 -> 0.12)
    const f = (u - 0.90) / 0.10;
    // Parabolic cascade fall with subtle natural scatter at the bottom bin
    const spread = f * f * 1.6;
    outPos.set(
      THREE.MathUtils.lerp(0.80, 0.54, f) + p.jitterX * spread,
      0.96 - f * f * 0.84 + p.jitterY * 0.2,
      0.03 + p.jitterZ * spread
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
// UNIFIED DUAL-MACHINE PROCESS LINE BUILDER (UNIT 01 BUCKET ELEVATOR -> CHUTE -> UNIT 02 SATAKE VBF)
// ============================================================================
async function buildCombinedProcessLineScene() {
  const processGroup = new THREE.Group();
  processGroup.name = 'SAGMA_Combined_Milling_Process_Line';
  const P = createMuseumPalette();

  // 1. Load Unit 01: Industrial Bucket Elevator (Positioned at X = 0.0, Y = 0..2.4m)
  const elevatorRoot = await new Promise((res, rej) => {
    const loader = new THREE.GLTFLoader();
    loader.load('assets/elevator_full_diagram69b.glb', gltf => res(gltf.scene || gltf.scenes[0]), undefined, rej);
  });
  enhanceBucketElevatorRoot(elevatorRoot, { skipInternalParticles: true });

  const eBox = new THREE.Box3().setFromObject(elevatorRoot);
  const eSize = eBox.getSize(new THREE.Vector3());
  const eCenter = eBox.getCenter(new THREE.Vector3());
  const eMaxDim = Math.max(eSize.x, eSize.y, eSize.z);
  if (eMaxDim > 0) {
    const scaleFactor = 2.4 / eMaxDim;
    elevatorRoot.scale.setScalar(scaleFactor);
    eBox.setFromObject(elevatorRoot);
    eBox.getCenter(eCenter);
    elevatorRoot.position.sub(eCenter);
    elevatorRoot.position.y += (eBox.max.y - eBox.min.y) / 2;
  }
  elevatorRoot.name = 'Unit01_Bucket_Elevator_Group';
  processGroup.add(elevatorRoot);

  // 2. Build Unit 02: Satake VBF Vertical Maize Degermer (Positioned at X = +1.05m so Elevator feeds it directly!)
  const satakeRoot = buildMuseumSatakeVBF({ skipInternalParticles: true });
  satakeRoot.scale.setScalar(0.66);
  satakeRoot.position.set(1.05, 0, 0);
  satakeRoot.name = 'Unit02_Satake_VBF_Group';
  processGroup.add(satakeRoot);

  // 3. Build Connecting Gravity Transfer Spout, Sight-Glass Tube, Brass Flanges & Receiving Spill Bin
  const transferGroup = new THREE.Group();
  transferGroup.name = 'Process_Transfer_Spout_Assembly';

  const pStart = new THREE.Vector3(0.13, 2.13, 0); // Elevator Head Centrifugal Discharge Spout Exit
  const pEnd = new THREE.Vector3(1.30, 1.25, 0);   // Satake VBF Top Magnet Inlet Hopper
  const chuteVec = pEnd.clone().sub(pStart);
  const chuteLen = chuteVec.length();
  const chuteMid = pStart.clone().add(pEnd).multiplyScalar(0.5);

  // Upper & Lower Mint/Teal Collars + Optical Cutaway Sight-Glass Transfer Tube (so falling grain is clearly visible!)
  const sightTube = new THREE.Mesh(
    new THREE.CylinderGeometry(0.044, 0.044, chuteLen, 28, 1, true),
    P.opticalGlass.clone()
  );
  sightTube.position.copy(chuteMid);
  sightTube.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), chuteVec.clone().normalize());
  sightTube.userData.noExplode = true;
  cutawayGlassMeshes.push(sightTube);
  transferGroup.add(sightTube);

  // Structural Steel Runner Rails & Anodized Brass Flange Rings along Transfer Spout
  [0.08, 0.35, 0.65, 0.92].forEach(frac => {
    const ringPos = pStart.clone().lerp(pEnd, frac);
    const flangeRing = new THREE.Mesh(
      new THREE.CylinderGeometry(0.056, 0.056, 0.024, 24),
      P.anodizedBrass
    );
    flangeRing.position.copy(ringPos);
    flangeRing.quaternion.copy(sightTube.quaternion);
    flangeRing.userData.noExplode = true;
    transferGroup.add(flangeRing);
  });

  // Top Head Transition Hood Collar
  const topElbow = new THREE.Mesh(new THREE.CylinderGeometry(0.058, 0.052, 0.14, 24), P.sagmaGreen);
  topElbow.position.copy(pStart);
  topElbow.quaternion.copy(sightTube.quaternion);
  topElbow.userData.noExplode = true;
  transferGroup.add(topElbow);

  // Bottom Receiving Hopper Collar into Satake Magnet Trap
  const botElbow = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.068, 0.14, 24), P.sagmaGreen);
  botElbow.position.copy(pEnd);
  botElbow.quaternion.copy(sightTube.quaternion);
  botElbow.userData.noExplode = true;
  transferGroup.add(botElbow);

  // Receiving Product Collector Bin & Golden Grain Mound at Satake Overtails Exit (X = 0.54, Y = 0.08, Z = 0.03)
  const collectorBin = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.15, 0.18, 32), P.gunmetal);
  collectorBin.position.set(0.54, 0.09, 0.03);
  collectorBin.userData.noExplode = true;
  transferGroup.add(collectorBin);

  const binRim = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.012, 12, 32), P.anodizedBrass);
  binRim.rotation.x = Math.PI / 2;
  binRim.position.set(0.54, 0.18, 0.03);
  binRim.userData.noExplode = true;
  transferGroup.add(binRim);

  const isWheat = GRAIN_TYPE === 'wheat';
  const grainPile = new THREE.Mesh(
    new THREE.ConeGeometry(0.155, 0.09, 28),
    new THREE.MeshStandardMaterial({
      color: isWheat ? 0xD99B52 : 0xFBBF24,
      emissive: isWheat ? 0x78350F : 0xB45309,
      emissiveIntensity: 0.25,
      roughness: 0.35
    })
  );
  grainPile.position.set(0.54, 0.18, 0.03);
  grainPile.userData.noExplode = true;
  grainPile.userData.isGrainFill = true;
  transferGroup.add(grainPile);

  processGroup.add(transferGroup);

  // 4. Add Continuous Instanced 3D Grain Flow & Discharge Dust Haze across Both Machines
  createInstancedGrainFlow(processGroup, 'process_line', activeGrainCount);

  return processGroup;
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
      // Flagship Museum-Grade Cutaway & Live Kinematics Satake VBF Degermer
      root = buildMuseumSatakeVBF();
    } else if (machine.id === 'elevator_69b' || machine.id === 'elevator_cad' || machine.id === 'process_line') {
      // Unified Dual-Machine Process Line: Unit 01 Bucket Elevator feeding Unit 02 Satake VBF Degermer
      root = await buildCombinedProcessLineScene();
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
    if (maxDim > 0 && machine.id !== 'satake_vbf' && machine.id !== 'elevator_69b' && machine.id !== 'elevator_cad' && machine.id !== 'process_line') {
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
// 21B. 30-SECOND 6-BEAT DUAL-MACHINE PROCESS SHOWCASE, WEB AUDIO SYNTH & RECORDER
// ============================================================================
const CINEMATIC_TOTAL_DURATION = 30.0; // Master 30.0s timeline (6 Beats: 0-3s, 3-9s, 9-15s, 15-22s, 22-27s, 27-30s)

// Timed Callout Schedule across BOTH Connected Machines (Max 2-3 labels at once, zero crossing leader lines)
const PROCESS_LINE_TIMED_CALLOUT_SCHEDULE = [
  // Beat 2A (3.3s - 6.0s): Unit 01 Boot & Intake Section
  { id: 'boot_feed',       unit: 1, start: 3.3,  end: 6.0,  side: 'left',  slot: 0 },
  { id: 'boot_takeup',     unit: 1, start: 3.6,  end: 6.0,  side: 'right', slot: 0 },
  { id: 'cleanout_doors',  unit: 1, start: 3.9,  end: 6.0,  side: 'right', slot: 1 },

  // Beat 2B (6.2s - 8.9s): Unit 01 Vertical Twin-Leg Casing & Loaded Ascending Buckets
  { id: 'trunking_legs',   unit: 1, start: 6.2,  end: 8.9,  side: 'left',  slot: 0 },
  { id: 'antistatic_belt', unit: 1, start: 6.5,  end: 8.9,  side: 'left',  slot: 1 },
  { id: 'deep_buckets',    unit: 1, start: 6.8,  end: 8.9,  side: 'right', slot: 0 },

  // Beat 3A (9.2s - 12.0s): Unit 01 Head Pulley & Drive Assembly
  { id: 'split_hood',      unit: 1, start: 9.2,  end: 12.0, side: 'left',  slot: 0 },
  { id: 'crowned_pulley',  unit: 1, start: 9.5,  end: 12.0, side: 'right', slot: 0 },
  { id: 'drive_motor',     unit: 1, start: 9.8,  end: 12.0, side: 'left',  slot: 1 },

  // Beat 3B (12.2s - 14.9s): Unit 01 Centrifugal Discharge Arc & Wear Plates
  { id: 'discharge_saddle', unit: 1, start: 12.2, end: 14.9, side: 'right', slot: 0 },
  { id: 'wear_plates',      unit: 1, start: 12.5, end: 14.9, side: 'right', slot: 1 },
  { id: 'rotation_frame',   unit: 1, start: 12.8, end: 14.9, side: 'left',  slot: 0 },

  // Beat 4A (15.3s - 18.5s): Transfer Spout Hand-Off -> Unit 02 Satake VBF Intake & Rotor
  { id: 'inlet_hopper',     unit: 2, start: 15.3, end: 18.5, side: 'left',  slot: 0 },
  { id: 'screw_feeder',     unit: 2, start: 15.6, end: 18.5, side: 'left',  slot: 1 },
  { id: 'degerminator_rotor', unit: 2, start: 15.9, end: 18.5, side: 'right', slot: 0 },

  // Beat 4B (18.7s - 21.8s): Unit 02 Slotted Screen, Aspiration & Counterweight Discharge
  { id: 'hex_screen',       unit: 2, start: 18.7, end: 21.8, side: 'left',  slot: 0 },
  { id: 'discharge_gate',   unit: 2, start: 19.0, end: 21.8, side: 'left',  slot: 1 },
  { id: 'main_motor',       unit: 2, start: 19.3, end: 21.8, side: 'right', slot: 0 }
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
  slowFrameStreak: 0,
  particleReducedLogged: false,
  compositeCanvas: null,
  compositeCtx: null,
  mediaRecorder: null,
  recordedChunks: [],
  selectedMimeType: '',
  logoImg: null,
  audioCtx: null,
  audioDest: null,
  ambientNodes: [],
  grainFlowGainNode: null,
  grainFlowFilterNode: null,
  triggeredCues: new Set(),
  endLiftTriggered: false,
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
// WEB AUDIO API SOUND ENGINE (Ambient Bed + Mechanical Hum + Grain-Flow Texture + Ticks + End Lift)
// Procedural Web Audio synthesis — 100% royalty-free, zero external dependencies,
// triggered directly from user button click to satisfy browser autoplay rules.
// ----------------------------------------------------------------------------
function initShowcaseAudioEngine() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;

    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const dest = ctx.createMediaStreamDestination();

    // Master Dynamics Compressor & Limiter (-3 dB ceiling to prevent clipping)
    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.setValueAtTime(-14, ctx.currentTime);
    compressor.knee.setValueAtTime(12, ctx.currentTime);
    compressor.ratio.setValueAtTime(6, ctx.currentTime);
    compressor.attack.setValueAtTime(0.005, ctx.currentTime);
    compressor.release.setValueAtTime(0.18, ctx.currentTime);

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
    // Smooth fade-in of ambient bed over first 1.0s and fade-out at 29.8s
    masterGain.gain.linearRampToValueAtTime(0.80, ctx.currentTime + 1.0);
    masterGain.gain.setValueAtTime(0.80, ctx.currentTime + 28.5);
    masterGain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 30.0);

    compressor.connect(masterGain);
    masterGain.connect(dest);
    masterGain.connect(ctx.destination); // Audible through speakers while recording

    // 1. Warm Low Industrial Ambient Bed + Subtle Mechanical Drive Hum (55 Hz + 82.4 Hz + 110 Hz)
    const lowFilter = ctx.createBiquadFilter();
    lowFilter.type = 'lowpass';
    lowFilter.frequency.setValueAtTime(210, ctx.currentTime);
    lowFilter.Q.setValueAtTime(1.25, ctx.currentTime);
    lowFilter.connect(compressor);

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const oscSub = ctx.createOscillator();
    const bedGain = ctx.createGain();

    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(55.0, ctx.currentTime); // A1
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(82.41, ctx.currentTime); // E2
    oscSub.type = 'sine';
    oscSub.frequency.setValueAtTime(110.0, ctx.currentTime); // A2 mechanical hum

    bedGain.gain.setValueAtTime(0.13, ctx.currentTime);

    osc1.connect(bedGain);
    osc2.connect(bedGain);
    oscSub.connect(bedGain);
    bedGain.connect(lowFilter);

    osc1.start();
    osc2.start();
    oscSub.start();

    // 2. Procedural Grain-Flow & Centrifugal Cascade Acoustic Texture (Filtered Pink Noise Buffer)
    // Swells dynamically when camera approaches the Head Discharge Arc (Beat 3) and Transfer Spout / Satake Scouring Chamber (Beat 4)
    const bufferSize = ctx.sampleRate * 3;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    const audioRng = createSeededRandom(987654321);
    for (let i = 0; i < bufferSize; i++) {
      const white = audioRng() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.035;
      b6 = white * 0.115926;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;

    const grainFilter = ctx.createBiquadFilter();
    grainFilter.type = 'bandpass';
    grainFilter.frequency.setValueAtTime(1150, ctx.currentTime);
    grainFilter.Q.setValueAtTime(1.4, ctx.currentTime);

    const grainFlowGain = ctx.createGain();
    grainFlowGain.gain.setValueAtTime(0.04, ctx.currentTime);

    noiseSource.connect(grainFilter);
    grainFilter.connect(grainFlowGain);
    grainFlowGain.connect(compressor);
    noiseSource.start();

    cinematicState.audioCtx = ctx;
    cinematicState.audioDest = dest;
    cinematicState.ambientNodes = [osc1, osc2, oscSub, noiseSource];
    cinematicState.grainFlowGainNode = grainFlowGain;
    cinematicState.grainFlowFilterNode = grainFilter;
    cinematicState.compressorNode = compressor;

    return dest.stream;
  } catch (e) {
    console.warn('Web Audio API initialization warning:', e);
    return null;
  }
}

function updateShowcaseAudioDynamics(elapsed) {
  const ctx = cinematicState.audioCtx;
  const grainGain = cinematicState.grainFlowGainNode;
  const grainFilter = cinematicState.grainFlowFilterNode;
  if (!ctx || !grainGain || !grainFilter || ctx.state === 'closed') return;

  try {
    // Modulate grain cascade acoustic texture intensity based on camera proximity to active grain flow
    let targetGain = 0.045;
    let targetFreq = 1100;
    if (elapsed >= 3.0 && elapsed < 9.0) {
      // Beat 2: Boot scooping & vertical up-leg climb
      targetGain = 0.075;
      targetFreq = 980;
    } else if (elapsed >= 9.0 && elapsed < 15.0) {
      // Beat 3: Head pulley centrifugal discharge throw into spout (strongest cascade rush)
      targetGain = 0.125;
      targetFreq = 1480;
    } else if (elapsed >= 15.0 && elapsed < 22.0) {
      // Beat 4: Gravity transfer chute -> Satake VBF helical scouring chamber & exit spill
      targetGain = 0.115;
      targetFreq = 1320;
    } else if (elapsed >= 22.0 && elapsed < 27.0) {
      // Beat 5: Wide proof shot
      targetGain = 0.055;
      targetFreq = 1050;
    } else if (elapsed >= 27.0) {
      // Beat 6: End card fade down of grain noise
      targetGain = 0.012;
      targetFreq = 800;
    }

    grainGain.gain.setTargetAtTime(targetGain, ctx.currentTime, 0.15);
    grainFilter.frequency.setTargetAtTime(targetFreq, ctx.currentTime, 0.15);
  } catch (e) {}
}

function triggerShowcaseLabelTick(pitchIndex = 0) {
  const ctx = cinematicState.audioCtx;
  const comp = cinematicState.compressorNode;
  if (!ctx || !comp || ctx.state === 'closed') return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const tickGain = ctx.createGain();

    // Soft marimba/telemetry crystalline tick with slight pentatonic pitch variation
    const freqs = [880, 987.77, 1108.73, 1318.51, 1479.98];
    const baseFreq = freqs[pitchIndex % freqs.length];
    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.5, now + 0.085);

    tickGain.gain.setValueAtTime(0.001, now);
    tickGain.gain.linearRampToValueAtTime(0.15, now + 0.008);
    tickGain.gain.exponentialRampToValueAtTime(0.0008, now + 0.095);

    osc.connect(tickGain);
    tickGain.connect(comp);
    osc.start(now);
    osc.stop(now + 0.10);
  } catch (e) {
    // Ignore audio scheduling errors
  }
}

function triggerShowcaseEndCardLift() {
  const ctx = cinematicState.audioCtx;
  const comp = cinematicState.compressorNode;
  if (!ctx || !comp || ctx.state === 'closed') return;

  try {
    const now = ctx.currentTime;
    // Warm resolving A-major9 chord swell into Beat 6 End Card (27.0s - 30.0s)
    const chordFreqs = [220.0, 277.18, 329.63, 440.0, 493.88];
    chordFreqs.forEach((f, idx) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(f * 0.995, now);
      osc.frequency.exponentialRampToValueAtTime(f, now + 0.40);

      g.gain.setValueAtTime(0.001, now);
      g.gain.linearRampToValueAtTime(0.068, now + 0.75);
      g.gain.setValueAtTime(0.068, now + 2.1);
      g.gain.exponentialRampToValueAtTime(0.0005, now + 2.95);

      osc.connect(g);
      g.connect(comp);
      osc.start(now);
      osc.stop(now + 3.0);
    });
  } catch (e) {
    // Ignore audio scheduling errors
  }
}

function stopShowcaseAudioEngine() {
  if (cinematicState.ambientNodes && cinematicState.ambientNodes.length > 0) {
    cinematicState.ambientNodes.forEach(n => {
      try { n.stop(); } catch (e) {}
    });
    cinematicState.ambientNodes = [];
  }
  if (cinematicState.audioCtx && cinematicState.audioCtx.state !== 'closed') {
    try {
      cinematicState.audioCtx.close();
    } catch (e) {}
  }
  cinematicState.audioCtx = null;
  cinematicState.audioDest = null;
  cinematicState.grainFlowGainNode = null;
  cinematicState.grainFlowFilterNode = null;
  cinematicState.compressorNode = null;
}

// ----------------------------------------------------------------------------
// FIXED-STAGE 30-SECOND RECORDING PIPELINE (1920x1080 or 1080x1350 @ 60 FPS, 14 Mbps)
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

  // Load Unified Dual-Machine Process Scene (Unit 01 Bucket Elevator + Gravity Transfer Spout + Unit 02 Satake VBF Degermer)
  const elevatorMeta = await EchoDB.get('elevator_69b') || FLEET_CATALOG.find(m => m.id === 'elevator_69b') || FLEET_CATALOG[0];
  await loadMachineTwin(elevatorMeta, { silent: true, skipCameraReset: true, skipHashUpdate: true });
  if (grainParticleSystem) grainParticleSystem.visible = true;
  if (grainInstancedMesh) {
    grainInstancedMesh.visible = true;
    activeGrainCount = 650;
    grainInstancedMesh.count = activeGrainCount;
  }

  // Lock Three.js WebGLRenderer to exact Fixed Stage Size (1920x1080 or 1080x1350) with pixelRatio = 1
  // so output is ALWAYS exact 1920x1080 (or 1080x1350) regardless of browser window size!
  renderer.setPixelRatio(1);
  renderer.setSize(stageW, stageH, false);
  camera.aspect = stageW / stageH;
  camera.fov = isPortrait ? 39 : 35;
  camera.updateProjectionMatrix();

  // Pre-warm shaders & geometry so there is ZERO stutter on Frame 1 or when panning to Unit 02
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
  cinematicState.triggeredCues = new Set();
  cinematicState.endLiftTriggered = false;
  cinematicState.slowFrameStreak = 0;
  cinematicState.particleReducedLogged = false;
  cinematicState.startTime = performance.now();
  cinematicState.elapsed = 0;
  cinematicState.lastElapsed = 0;
  cinematicState.active = true;

  // Start Web Audio API Sound Engine from user click gesture
  const audioStream = initShowcaseAudioEngine();

  // Position camera & pre-populated grain flow at t = 0.0s and render first composite frame before starting recorder
  updateCinematicChoreography(cinematicState.startTime);
  renderer.render(scene, camera);
  renderCompositeVideoFrame(0);

  // Initialize MediaRecorder at 60 FPS, 14 Mbps Video + 128 kbps Audio (Crisp 1080p grain detail, ~52 MB < 60 MB target)
  try {
    const videoStream = compCanvas.captureStream(60);
    const combinedTracks = [...videoStream.getVideoTracks()];
    if (audioStream && audioStream.getAudioTracks().length > 0) {
      combinedTracks.push(...audioStream.getAudioTracks());
    }
    const combinedStream = new MediaStream(combinedTracks);

    const mimeTypes = [
      'video/mp4;codecs=avc1.64002A,mp4a.40.2',
      'video/mp4;codecs=avc1.42E01E,mp4a.40.2',
      'video/mp4;codecs=avc1',
      'video/mp4',
      'video/webm;codecs=vp9,opus',
      'video/webm;codecs=vp9',
      'video/webm;codecs=vp8,opus',
      'video/webm;codecs=vp8',
      'video/webm'
    ];
    const selectedMimeType = mimeTypes.find(type => typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(type)) || '';
    cinematicState.selectedMimeType = selectedMimeType;

    const recOptions = {
      videoBitsPerSecond: 14000000, // 14 Mbps (~52 MB for 30s, under 60 MB target with crisp grain particle detail)
      audioBitsPerSecond: 128000    // 128 kbps AAC/Opus audio
    };
    if (selectedMimeType) {
      recOptions.mimeType = selectedMimeType;
    }

    const recorder = new MediaRecorder(combinedStream, recOptions);
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
// MASTER 30-SECOND TIMELINE: 6 BEATS, DUAL-MACHINE CHOREOGRAPHY & GRAIN FLOW
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

  // 1. Trigger Web Audio Cues (Label Reveal Ticks, Grain Cascade Swell & Beat 6 End Card Lift)
  updateShowcaseAudioDynamics(elapsed);
  for (let i = 0; i < PROCESS_LINE_TIMED_CALLOUT_SCHEDULE.length; i++) {
    const cue = PROCESS_LINE_TIMED_CALLOUT_SCHEDULE[i];
    if (elapsed >= cue.start && !cinematicState.triggeredCues.has(cue.id)) {
      cinematicState.triggeredCues.add(cue.id);
      triggerShowcaseLabelTick(i);
    }
  }
  if (elapsed >= 27.0 && !cinematicState.endLiftTriggered) {
    cinematicState.endLiftTriggered = true;
    triggerShowcaseEndCardLift();
  }

  // 2. Drive ALL Mechanical & Instanced Grain Animation Deterministically from Master `elapsed` Time in Seconds
  // Note: In Beat 3 (9.0s - 15.0s, Head Pulley & Centrifugal Discharge), we apply a subtle slow-motion curve
  // so the viewer can clearly see individual buckets tipping and throwing golden grain kernels into the transfer spout!
  let effectiveSimTime = elapsed * 1.25;
  if (elapsed >= 9.0 && elapsed < 15.0) {
    effectiveSimTime = 9.0 * 1.25 + (elapsed - 9.0) * 0.68;
  } else if (elapsed >= 15.0) {
    effectiveSimTime = 9.0 * 1.25 + 6.0 * 0.68 + (elapsed - 15.0) * 1.25;
  }

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

  // Advance Instanced 3D Grain Flow across Both Connected Machines deterministically
  updateInstancedGrainSimulation(effectiveSimTime, true);

  // 3. Eased 6-Beat Camera Choreography (Continuous shot across Unit 01 -> Spout -> Unit 02)
  const distScale = isPortrait ? 1.16 : 1.0;
  const phaseTag = document.getElementById('cinematicPhaseTag');

  if (elapsed < 3.0) {
    // BEAT 1 (0.0s - 3.0s): ESTABLISHING WIDE SHOT OF BOTH CONNECTED MACHINES + GRAIN ALREADY FLOWING
    if (phaseTag) phaseTag.textContent = 'BEAT 01 / 06 • ESTABLISHING: INTEGRATED MILLING PROCESS LINE';
    if (!isCutawayActive) setCutawayState(true);
    updateExplodedView(0);

    const u = cubicEaseInOut(elapsed / 3.0);
    const camX = THREE.MathUtils.lerp(0.62, 0.48, u);
    const camY = THREE.MathUtils.lerp(1.22, 1.08, u);
    const camZ = THREE.MathUtils.lerp(2.58, 2.28, u) * distScale;
    const lookX = THREE.MathUtils.lerp(0.50, 0.36, u);
    const lookY = THREE.MathUtils.lerp(1.12, 0.98, u);

    camera.position.set(camX, camY, camZ);
    controls.target.set(lookX, lookY, 0);

  } else if (elapsed < 9.0) {
    // BEAT 2 (3.0s - 9.0s): UNIT 01 ELEVATOR BOOT INTAKE & VERTICAL CLIMB (Full Buckets Rising, Empty Returning)
    if (phaseTag) phaseTag.textContent = 'BEAT 02 / 06 • UNIT 01: BOOT SCOOP & LOADED BUCKET ASCENSION';
    if (!isCutawayActive) setCutawayState(true);
    updateExplodedView(0);

    const u = cubicEaseInOut((elapsed - 3.0) / 6.0);
    const angle = THREE.MathUtils.lerp(-0.26, 0.28, u);
    const radius = THREE.MathUtils.lerp(0.95, 1.06, Math.sin(u * Math.PI)) * distScale;
    const camY = THREE.MathUtils.lerp(0.34, 1.88, u);
    const lookY = THREE.MathUtils.lerp(0.32, 1.94, u);

    camera.position.set(Math.sin(angle) * radius, camY, Math.cos(angle) * radius);
    controls.target.set(0.0, lookY, 0);

  } else if (elapsed < 15.0) {
    // BEAT 3 (9.0s - 15.0s): UNIT 01 HEAD PULLEY & CENTRIFUGAL DISCHARGE ARC (Slow-Motion Feel + Head Callouts)
    if (phaseTag) phaseTag.textContent = 'BEAT 03 / 06 • UNIT 01: HEAD PULLEY & CENTRIFUGAL DISCHARGE ARC';
    if (!isCutawayActive) setCutawayState(true);
    updateExplodedView(0);

    const u = cubicEaseInOut((elapsed - 9.0) / 6.0);
    const angle = THREE.MathUtils.lerp(0.28, -0.34, u);
    const radius = THREE.MathUtils.lerp(0.94, 0.86, Math.sin(u * Math.PI)) * distScale;
    const camY = THREE.MathUtils.lerp(2.04, 2.22, u);
    const lookX = THREE.MathUtils.lerp(0.0, 0.14, u);
    const lookY = THREE.MathUtils.lerp(2.06, 2.12, u);

    camera.position.set(lookX + Math.sin(angle) * radius, camY, Math.cos(angle) * radius);
    controls.target.set(lookX, lookY, 0);

  } else if (elapsed < 22.0) {
    // BEAT 4 (15.0s - 22.0s): CAMERA TRAVELS ALONG GRAVITY TRANSFER SPOUT TO UNIT 02 (SATAKE VBF DEGERMER)
    if (phaseTag) phaseTag.textContent = 'BEAT 04 / 06 • UNIT 02: SPOUT HAND-OFF & SATAKE VBF MAIZE DEGERMER';
    if (!isCutawayActive) setCutawayState(true);
    updateExplodedView(0);

    const localT = (elapsed - 15.0) / 7.0;
    if (localT < 0.35) {
      // Sub-phase 4A (15.0s - 17.45s): Follow golden grain stream down the sight-glass transfer spout into Satake inlet
      const u = cubicEaseInOut(localT / 0.35);
      const camX = THREE.MathUtils.lerp(0.18, 1.08, u);
      const camY = THREE.MathUtils.lerp(2.14, 1.12, u);
      const camZ = THREE.MathUtils.lerp(0.92, 1.12, u) * distScale;
      const lookX = THREE.MathUtils.lerp(0.16, 1.05, u);
      const lookY = THREE.MathUtils.lerp(2.08, 0.92, u);

      camera.position.set(camX, camY, camZ);
      controls.target.set(lookX, lookY, 0);
    } else {
      // Sub-phase 4B (17.45s - 22.0s): Orbit Unit 02 Satake VBF showing helical scouring rotor, screen & exit grain spill
      const u = cubicEaseInOut((localT - 0.35) / 0.65);
      const angle = THREE.MathUtils.lerp(0.05, 0.52, u);
      const radius = THREE.MathUtils.lerp(1.12, 1.04, u) * distScale;
      const camY = THREE.MathUtils.lerp(1.12, 0.68, u);
      const lookX = THREE.MathUtils.lerp(1.05, 0.96, u);
      const lookY = THREE.MathUtils.lerp(0.92, 0.62, u);

      camera.position.set(lookX + Math.sin(angle) * radius, camY, Math.cos(angle) * radius);
      controls.target.set(lookX, lookY, 0);
    }

  } else if (elapsed < 27.0) {
    // BEAT 5 (22.0s - 27.0s): PULL BACK TO WIDE SHOT OF FULL PROCESS FLOW + VERIFIED PROOF OVERLAY
    if (phaseTag) phaseTag.textContent = 'BEAT 05 / 06 • PROOF: DUAL-UNIT TELEMETRY & CAPACITY BENCHMARK';
    if (!isCutawayActive) setCutawayState(true);

    const u = cubicEaseInOut((elapsed - 22.0) / 5.0);
    const camX = THREE.MathUtils.lerp(1.38, 0.72, u);
    const camY = THREE.MathUtils.lerp(0.76, 1.24, u);
    const camZ = THREE.MathUtils.lerp(1.25, 2.38, u) * distScale;
    const lookX = THREE.MathUtils.lerp(0.96, isPortrait ? 0.52 : 0.32, u);
    const lookY = THREE.MathUtils.lerp(0.65, 1.12, u);

    camera.position.set(camX, camY, camZ);
    controls.target.set(lookX, lookY, 0);

  } else {
    // BEAT 6 (27.0s - 30.0s): END CARD — Final hero pullback into SAGMA Emblem & [YOUR CALL TO ACTION]
    if (phaseTag) phaseTag.textContent = 'BEAT 06 / 06 • END CARD: SAGMA 3D TRAINING TWIN';
    const u = cubicEaseInOut((elapsed - 27.0) / 3.0);
    const camX = THREE.MathUtils.lerp(0.72, 0.85, u);
    const camY = THREE.MathUtils.lerp(1.24, 1.38, u);
    const camZ = THREE.MathUtils.lerp(2.38, 2.65, u) * distScale;
    const lookX = THREE.MathUtils.lerp(isPortrait ? 0.52 : 0.32, 0.52, u);
    const lookY = THREE.MathUtils.lerp(1.12, 1.16, u);

    camera.position.set(camX, camY, camZ);
    controls.target.set(lookX, lookY, 0);
  }

  camera.lookAt(controls.target);
  camera.updateMatrixWorld(true);
}

// Helper to project a callout's 3D world position onto the fixed stage canvas (w x h)
// Supports both Unit 01 (Elevator at X=0.0) and Unit 02 (Satake VBF at X=1.05, scaled 0.66)
function projectCalloutToStage(calloutData, stageW, stageH, unitNum = 1) {
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
    if (unitNum === 2) {
      tempV.set(1.05 + look[0] * 0.66, look[1] * 0.66, look[2] * 0.66);
    } else {
      tempV.set(look[0], look[1], look[2]);
    }
  }

  tempV.project(camera);
  if (tempV.z > 1.0) return null;

  return {
    ax: (tempV.x * 0.5 + 0.5) * stageW,
    ay: (-(tempV.y * 0.5) + 0.5) * stageH
  };
}

// ----------------------------------------------------------------------------
// COMPOSITE 2D STAGE RENDERER (TIMED CALLOUTS FOR UNIT 01 & UNIT 02, PROOF & END CARD)
// ----------------------------------------------------------------------------
function renderCompositeVideoFrame(elapsed) {
  if (!cinematicState.active || !cinematicState.compositeCtx || !cinematicState.compositeCanvas || !renderer) return;

  const ctx = cinematicState.compositeCtx;
  const webglCanvas = renderer.domElement;

  const w = cinematicState.stageWidth || 1920;
  const h = cinematicState.stageHeight || 1080;
  const isPortrait = cinematicState.format === 'portrait';
  const scale = isPortrait ? (w / 1150) : (w / 1920);

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

  // 3. Timed Sequential Callout Labels (3.0s - 22.0s across Unit 01 & Unit 02, Max 2-3 at once, Zero-Crossing Elbow Lines)
  if (elapsed >= 3.0 && elapsed < 22.0) {
    const activeItems = [];
    for (let i = 0; i < PROCESS_LINE_TIMED_CALLOUT_SCHEDULE.length; i++) {
      const sched = PROCESS_LINE_TIMED_CALLOUT_SCHEDULE[i];
      if (elapsed >= sched.start && elapsed <= sched.end) {
        const catalog = sched.unit === 2 ? SATAKE_CALLOUTS : DIAGRAM_69B_CALLOUTS;
        const calloutObj = catalog.find(c => c.id === sched.id);
        if (!calloutObj) continue;

        // Calculate smooth cubic ease-in (0.40s) and ease-out (0.40s)
        let alpha = 1.0;
        if (elapsed - sched.start < 0.40) {
          alpha = cubicEaseInOut((elapsed - sched.start) / 0.40);
        } else if (sched.end - elapsed < 0.40) {
          alpha = cubicEaseInOut((sched.end - elapsed) / 0.40);
        }

        const proj = projectCalloutToStage(calloutObj, w, h, sched.unit);
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

        // Place pill cleanly in outer left or right margin so it NEVER covers the machines
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

  // 4. BEAT 5 (22.0s - 27.0s): PROOF DATA OVERLAY CARD ([YOUR KEY METRIC] + Verified Specs for BOTH Machines)
  if (elapsed >= 22.0 && elapsed < 27.0) {
    const localP = elapsed - 22.0;
    let proofAlpha = 1.0;
    if (localP < 0.50) proofAlpha = cubicEaseInOut(localP / 0.50);
    else if (localP > 4.50) proofAlpha = cubicEaseInOut((5.0 - localP) / 0.50);

    ctx.save();
    ctx.globalAlpha = Math.max(0.02, Math.min(1, proofAlpha));

    const cardW = isPortrait ? Math.round(w - 96 * scale) : Math.round(650 * scale);
    const cardH = Math.round(360 * scale);
    const cardX = isPortrait ? Math.round(48 * scale) : Math.round(64 * scale);
    const cardY = isPortrait ? Math.round(135 * scale) : Math.round((h - cardH) * 0.44);

    // Dark Glassmorphic Telemetry Proof Panel
    ctx.fillStyle = 'rgba(9, 14, 20, 0.93)';
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.78)';
    ctx.lineWidth = Math.max(2, 2.5 * scale);
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, cardH, Math.round(16 * scale));
    ctx.fill();
    ctx.stroke();

    // Top Amber Header Strip
    ctx.fillStyle = 'rgba(245, 158, 11, 0.18)';
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, Math.round(52 * scale), [Math.round(16 * scale), Math.round(16 * scale), 0, 0]);
    ctx.fill();

    ctx.fillStyle = '#FBBF24';
    ctx.font = `700 ${Math.round(14.5 * scale)}px "DM Mono", monospace`;
    ctx.fillText('VERIFIED PROCESS TELEMETRY • UNIT 01 ELEVATOR + UNIT 02 SATAKE VBF', cardX + Math.round(24 * scale), cardY + Math.round(32 * scale));

    // Primary Key Metric Callout (Explicit Placeholder as requested: [YOUR KEY METRIC])
    ctx.fillStyle = '#9DB2A6';
    ctx.font = `600 ${Math.round(14 * scale)}px "DM Sans", sans-serif`;
    ctx.fillText('PRIMARY PROCESS BENCHMARK (CUSTOMIZE PLACEHOLDER):', cardX + Math.round(24 * scale), cardY + Math.round(84 * scale));

    ctx.fillStyle = '#4ADE80';
    ctx.font = `700 ${Math.round(38 * scale)}px "DM Mono", monospace`;
    ctx.fillText('[YOUR KEY METRIC]', cardX + Math.round(24 * scale), cardY + Math.round(132 * scale));

    // Authoritative Project Data Grid (Directly from FLEET_CATALOG for Unit 01 & Unit 02)
    const specs = [
      { label: 'UNIT 01 ELEVATOR CAPACITY', val: '35 – 120 t/h • 1.8–2.8 m/s' },
      { label: 'UNIT 01 DRIVE & BUCKETS',   val: '7.5–22 kW • 300 mm Pitch' },
      { label: 'UNIT 02 SATAKE VBF CAPACITY', val: '4.5 – 12.0 t/h (Maize)' },
      { label: 'UNIT 02 ROTOR & MOTOR SPEC', val: '750–920 RPM • 37–75 kW' }
    ];

    const gridStartY = cardY + Math.round(170 * scale);
    const colW = Math.round((cardW - 64 * scale) / 2);
    const rowH = Math.round(80 * scale);

    specs.forEach((sp, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const bx = cardX + Math.round(24 * scale) + col * (colW + Math.round(16 * scale));
      const by = gridStartY + row * rowH;

      ctx.fillStyle = 'rgba(18, 28, 38, 0.88)';
      ctx.strokeStyle = row === 1 ? 'rgba(45, 212, 191, 0.38)' : 'rgba(74, 222, 128, 0.35)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.roundRect(bx, by, colW, Math.round(64 * scale), Math.round(8 * scale));
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = row === 1 ? '#2DD4BF' : '#9DB2A6';
      ctx.font = `600 ${Math.round(11 * scale)}px "DM Mono", monospace`;
      ctx.fillText(sp.label, bx + Math.round(12 * scale), by + Math.round(22 * scale));

      ctx.fillStyle = '#F8FAFC';
      ctx.font = `700 ${Math.round(15 * scale)}px "DM Sans", sans-serif`;
      ctx.fillText(sp.val, bx + Math.round(12 * scale), by + Math.round(46 * scale));
    });

    ctx.restore();
  }

  // 5. Top-Left "SAGMA - 3D TRAINING TWIN" Badge — Visible in Opening (0-3s), Fades Out Smoothly After Opening (3.0s - 4.2s)
  if (elapsed < 4.2) {
    let badgeAlpha = 1.0;
    if (elapsed < 0.45) badgeAlpha = cubicEaseInOut(elapsed / 0.45);
    else if (elapsed > 3.0) badgeAlpha = 1.0 - cubicEaseInOut((elapsed - 3.0) / 1.2);

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

  // 6. Lower-Third Title Bar — Dynamically updates unit title as focus shifts from Both Units -> Unit 01 -> Unit 02 -> Process Proof
  if (elapsed < 27.0) {
    const grainLabel = GRAIN_TYPE === 'wheat' ? 'WHEAT' : 'YELLOW MAIZE';
    const beats = [
      {
        start: 0.0, end: 3.0,
        unitTitle: 'INTEGRATED PROCESS LINE | Unit 01 Bucket Elevator → Unit 02 Satake VBF Degermer',
        phaseText: `BEAT 01 • ESTABLISHING — CONTINUOUS ${grainLabel} CONVEYING & DEGERMING HAND-OFF`
      },
      {
        start: 3.0, end: 9.0,
        unitTitle: 'UNIT 01: BUCKET ELEVATOR | Vertical Grain Conveying System (Diagram 69b)',
        phaseText: `BEAT 02 • ELEVATOR INTAKE & CLIMB — BOOT SCOOP, FULL UP-LEG BUCKETS & RETURN LEG`
      },
      {
        start: 9.0, end: 15.0,
        unitTitle: 'UNIT 01: BUCKET ELEVATOR | Crowned Head Pulley & Centrifugal Discharge',
        phaseText: `BEAT 03 • HEAD DISCHARGE (SLOW-MO) — CENTRIFUGAL GRAIN THROW INTO TRANSFER SPOUT`
      },
      {
        start: 15.0, end: 22.0,
        unitTitle: 'UNIT 02: SATAKE VBF DEGERMER | Vertical Maize Conditioning & Degerming Mill',
        phaseText: `BEAT 04 • SPOUT HAND-OFF TO UNIT 02 — SCREW FEEDER, SCOURING ROTOR & EXIT DISCHARGE`
      },
      {
        start: 22.0, end: 27.0,
        unitTitle: 'UNIT 01 + UNIT 02 PROCESS LINE | Closed-Loop Grain Flow & Telemetry Proof',
        phaseText: `BEAT 05 • PROCESS PROOF — 35–120 T/H ELEVATOR FEEDING 4.5–12.0 T/H SATAKE VBF`
      }
    ];
    const currentBeat = beats.find(b => elapsed >= b.start && elapsed < b.end) || beats[0];
    const beatLocal = elapsed - currentBeat.start;
    const beatDur = currentBeat.end - currentBeat.start;

    // Animate lower-third in (0.40s) and out (0.40s) at every beat boundary
    let ltAlpha = 1.0;
    if (beatLocal < 0.40) ltAlpha = cubicEaseInOut(beatLocal / 0.40);
    else if (beatDur - beatLocal < 0.40) ltAlpha = cubicEaseInOut((beatDur - beatLocal) / 0.40);

    const slideY = Math.round((1.0 - ltAlpha) * 22 * scale);
    const padX = isPortrait ? Math.round(36 * scale) : Math.round(64 * scale);
    const cardH = Math.round(108 * scale);
    const cardX = padX;
    const cardY = h - cardH - Math.round(42 * scale) + slideY;
    const cardW = isPortrait ? (w - padX * 2) : Math.min(w - padX * 2, Math.round(1240 * scale));

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
    ctx.fillStyle = (elapsed >= 15.0 && elapsed < 22.0) ? '#2DD4BF' : '#F59E0B';
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
    ctx.fillStyle = '#4ADE80';
    ctx.fillRect(cardX + Math.round(10 * scale), cardY + cardH - Math.round(5 * scale), progW, Math.round(5 * scale));

    ctx.restore();
  }

  // 7. BEAT 6 (27.0s - 30.0s): END CARD — Full-Stage SAGMA Emblem, Both Units Title & [YOUR CALL TO ACTION]
  if (elapsed >= 27.0) {
    const endLocal = elapsed - 27.0;
    const endAlpha = cubicEaseInOut(Math.min(1.0, endLocal / 0.65));

    ctx.save();
    ctx.globalAlpha = endAlpha;

    // Deep atmospheric backdrop over slow-receding dual-machine 3D twin
    ctx.fillStyle = 'rgba(7, 12, 17, 0.86)';
    ctx.fillRect(0, 0, w, h);

    const panelW = isPortrait ? Math.round(w - 84 * scale) : Math.round(960 * scale);
    const panelH = Math.round(435 * scale);
    const panelX = Math.round((w - panelW) * 0.5);
    const panelY = Math.round((h - panelH) * 0.5);

    ctx.fillStyle = 'rgba(11, 19, 27, 0.96)';
    ctx.strokeStyle = 'rgba(74, 222, 128, 0.78)';
    ctx.lineWidth = Math.max(2, 2.8 * scale);
    ctx.beginPath();
    ctx.roundRect(panelX, panelY, panelW, panelH, Math.round(22 * scale));
    ctx.fill();
    ctx.stroke();

    // Centered Round SAGMA Gear Logo
    const centerX = Math.round(w * 0.5);
    if (cinematicState.logoImg && cinematicState.logoImg.complete && cinematicState.logoImg.naturalWidth > 0) {
      const logoSize = Math.round(96 * scale);
      ctx.drawImage(cinematicState.logoImg, Math.round(centerX - logoSize * 0.5), panelY + Math.round(34 * scale), logoSize, logoSize);
    }

    ctx.textAlign = 'center';
    ctx.fillStyle = '#4ADE80';
    ctx.font = `700 ${Math.round(15 * scale)}px "DM Mono", monospace`;
    ctx.fillText('SOUTHERN AFRICAN GRAIN MILLING ACADEMY', centerX, panelY + Math.round(162 * scale));

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `700 ${Math.round((isPortrait ? 30 : 36) * scale)}px "DM Sans", sans-serif`;
    ctx.fillText('SAGMA 3D TRAINING TWIN', centerX, panelY + Math.round(208 * scale));

    ctx.fillStyle = '#9DB2A6';
    ctx.font = `500 ${Math.round(17.5 * scale)}px "DM Sans", sans-serif`;
    ctx.fillText('Unit 01: Bucket Elevator (Diagram 69b)  •  Unit 02: Satake VBF Maize Degermer', centerX, panelY + Math.round(244 * scale));

    // Call To Action Button Pill ([YOUR CALL TO ACTION] placeholder)
    const ctaW = Math.min(panelW - Math.round(64 * scale), Math.round(520 * scale));
    const ctaH = Math.round(68 * scale);
    const ctaX = Math.round(centerX - ctaW * 0.5);
    const ctaY = panelY + Math.round(284 * scale);

    ctx.fillStyle = 'rgba(245, 158, 11, 0.20)';
    ctx.strokeStyle = '#FBBF24';
    ctx.lineWidth = Math.max(2, 2.5 * scale);
    ctx.beginPath();
    ctx.roundRect(ctaX, ctaY, ctaW, ctaH, Math.round(34 * scale));
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#FBBF24';
    ctx.font = `700 ${Math.round(24 * scale)}px "DM Mono", monospace`;
    ctx.textBaseline = 'middle';
    ctx.fillText('[YOUR CALL TO ACTION]', centerX, ctaY + Math.round(ctaH * 0.5));

    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#64748B';
    ctx.font = `600 ${Math.round(12 * scale)}px "DM Mono", monospace`;
    ctx.fillText('REPLACE PLACEHOLDER IN script.js • SAGMA INTERACTIVE TRAINING SYLLABUS', centerX, panelY + Math.round(396 * scale));

    ctx.restore();
  }

  // 8. Subtle Cross-Fade Transitions at Beat Boundaries (3.0s, 9.0s, 15.0s, 22.0s, 27.0s)
  const cutTimes = [3.0, 9.0, 15.0, 22.0, 27.0];
  for (let i = 0; i < cutTimes.length; i++) {
    const dist = Math.abs(elapsed - cutTimes[i]);
    if (dist < 0.22) {
      const flashAlpha = (1.0 - dist / 0.22) * 0.24;
      ctx.save();
      ctx.fillStyle = `rgba(13, 22, 30, ${flashAlpha.toFixed(3)})`;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();
    }
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
  a.download = `SAGMA-ProcessLine-Unit01-Elevator-Unit02-SatakeVBF-30s-${suffix}.${ext}`;
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

  // Stop Web Audio Synthesis cleanly
  stopShowcaseAudioEngine();

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

  // Restore user's motion, speed & cutaway settings
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
