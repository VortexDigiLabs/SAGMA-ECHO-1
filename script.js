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
  // CATEGORY 06: Conveying, Dust Handling & Packing (UNIT 01)
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
  // CATEGORY 01: Degerming, Debranning & Decortication (UNIT 02)
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
const DB_VERSION = 6;
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
let cachedBrushedBumpTex = null;
function getBrushedMetalBumpTexture() {
  if (cachedBrushedBumpTex) return cachedBrushedBumpTex;
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const rng = createSeededRandom(994411);
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, 256, 256);
  for (let y = 0; y < 256; y++) {
    const v = Math.floor(108 + (rng() - 0.5) * 48);
    ctx.fillStyle = `rgb(${v},${v},${v})`;
    ctx.fillRect(0, y, 256, 1);
    // Subtle anisotropic micro-scratches
    for (let s = 0; s < 4; s++) {
      const sx = Math.floor(rng() * 220);
      const sw = Math.floor(12 + rng() * 36);
      const sv = Math.floor(96 + rng() * 68);
      ctx.fillStyle = `rgb(${sv},${sv},${sv})`;
      ctx.fillRect(sx, y, sw, 1);
    }
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(4, 4);
  cachedBrushedBumpTex = tex;
  return tex;
}

let cachedRadialSoftSpriteTex = null;
function getRadialSoftSpriteTexture() {
  if (cachedRadialSoftSpriteTex) return cachedRadialSoftSpriteTex;
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(64, 64, 2, 64, 64, 62);
  grad.addColorStop(0.0, 'rgba(255, 252, 235, 1.0)');
  grad.addColorStop(0.25, 'rgba(253, 224, 71, 0.85)');
  grad.addColorStop(0.55, 'rgba(245, 158, 11, 0.32)');
  grad.addColorStop(0.85, 'rgba(217, 119, 6, 0.06)');
  grad.addColorStop(1.0, 'rgba(217, 119, 6, 0.0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  cachedRadialSoftSpriteTex = tex;
  return tex;
}

let cachedFloorAOShadowTex = null;
function getFloorAOShadowTexture() {
  if (cachedFloorAOShadowTex) return cachedFloorAOShadowTex;
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(128, 128, 14, 128, 128, 122);
  grad.addColorStop(0.0, 'rgba(3, 6, 10, 0.82)');
  grad.addColorStop(0.45, 'rgba(4, 9, 14, 0.52)');
  grad.addColorStop(0.78, 'rgba(5, 12, 18, 0.16)');
  grad.addColorStop(1.0, 'rgba(5, 12, 18, 0.0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 256);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  cachedFloorAOShadowTex = tex;
  return tex;
}

function createMuseumPalette() {
  const bumpTex = getBrushedMetalBumpTexture();
  return {
    sagmaGreen: new THREE.MeshStandardMaterial({
      color: 0x0D6E45,
      metalness: 0.52,
      roughness: 0.22,
      bumpMap: bumpTex,
      bumpScale: 0.0035,
      envMapIntensity: 1.75,
      side: THREE.DoubleSide
    }),
    gunmetal: new THREE.MeshStandardMaterial({
      color: 0x263342,
      metalness: 0.82,
      roughness: 0.24,
      bumpMap: bumpTex,
      bumpScale: 0.0045,
      envMapIntensity: 1.85,
      side: THREE.DoubleSide
    }),
    darkCastIron: new THREE.MeshStandardMaterial({
      color: 0x161D24,
      metalness: 0.72,
      roughness: 0.38,
      bumpMap: bumpTex,
      bumpScale: 0.006,
      envMapIntensity: 1.45,
      side: THREE.DoubleSide
    }),
    machinedSteel: new THREE.MeshStandardMaterial({
      color: 0x94A3B8,
      metalness: 0.88,
      roughness: 0.16,
      bumpMap: bumpTex,
      bumpScale: 0.003,
      envMapIntensity: 2.0,
      side: THREE.DoubleSide
    }),
    brushedChrome: new THREE.MeshStandardMaterial({
      color: 0xCBD5E1,
      metalness: 0.92,
      roughness: 0.12,
      bumpMap: bumpTex,
      bumpScale: 0.0025,
      envMapIntensity: 2.2,
      side: THREE.DoubleSide
    }),
    anodizedBrass: new THREE.MeshStandardMaterial({
      color: 0xE5A024,
      metalness: 0.88,
      roughness: 0.18,
      bumpMap: bumpTex,
      bumpScale: 0.003,
      envMapIntensity: 2.1,
      side: THREE.DoubleSide
    }),
    bronzeBushing: new THREE.MeshStandardMaterial({
      color: 0xB87333,
      metalness: 0.85,
      roughness: 0.22,
      bumpMap: bumpTex,
      bumpScale: 0.003,
      envMapIntensity: 1.8,
      side: THREE.DoubleSide
    }),
    sensorCyan: new THREE.MeshStandardMaterial({
      color: 0x2DD4BF,
      emissive: 0x14B8A6,
      emissiveIntensity: 0.78,
      metalness: 0.55,
      roughness: 0.18
    }),
    safetyRed: new THREE.MeshStandardMaterial({
      color: 0xDC2626,
      emissive: 0x7F1D1D,
      emissiveIntensity: 0.22,
      metalness: 0.58,
      roughness: 0.25
    }),
    opticalGlass: new THREE.MeshPhysicalMaterial({
      color: 0x7DD3FC,
      emissive: 0x0D9488,
      emissiveIntensity: 0.10,
      opacity: 0.26,
      transparent: true,
      roughness: 0.06,
      metalness: 0.12,
      reflectivity: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      envMapIntensity: 2.6,
      depthWrite: false,
      side: THREE.DoubleSide
    }),
    slottedCageGlass: new THREE.MeshPhysicalMaterial({
      color: 0x34D399,
      emissive: 0x059669,
      emissiveIntensity: 0.12,
      opacity: 0.30,
      transparent: true,
      roughness: 0.10,
      metalness: 0.18,
      clearcoat: 0.9,
      envMapIntensity: 2.2,
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

  // Soft Ambient Occlusion Contact Shadow Pad directly under the machine plinth
  const aoPad = new THREE.Mesh(
    new THREE.PlaneGeometry(width * 1.48, depth * 1.48),
    new THREE.MeshBasicMaterial({
      map: getFloorAOShadowTexture(),
      transparent: true,
      opacity: 0.78,
      depthWrite: false
    })
  );
  aoPad.rotation.x = -Math.PI / 2;
  aoPad.position.y = 0.002;
  aoPad.userData.noExplode = true;
  plinthGroup.add(aoPad);

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
// FLAGSHIP 3: CONNECTED DUAL-MACHINE PROCESS LINE (UNIT 01 -> SPOUT -> UNIT 02)
// ============================================================================
async function buildCombinedProcessLineScene() {
  const processRoot = new THREE.Group();
  processRoot.name = 'SAGMA_Combined_Process_Line_Root';
  const P = createMuseumPalette();

  // 1. Load Unit 01: Industrial Bucket Elevator (Positioned at X = 0.0, Y = 0.0 .. 2.40m)
  const elevatorRoot = await new Promise((res, rej) => {
    const loader = new THREE.GLTFLoader();
    loader.load('assets/elevator_full_diagram69b.glb', gltf => res(gltf.scene || gltf.scenes[0]), undefined, rej);
  });
  enhanceBucketElevatorRoot(elevatorRoot, { skipInternalParticles: true });

  const elevBox = new THREE.Box3().setFromObject(elevatorRoot);
  const elevSize = elevBox.getSize(new THREE.Vector3());
  const elevCenter = elevBox.getCenter(new THREE.Vector3());
  const elevMax = Math.max(elevSize.x, elevSize.y, elevSize.z);
  if (elevMax > 0) {
    const sf = 2.4 / elevMax;
    elevatorRoot.scale.setScalar(sf);
    elevBox.setFromObject(elevatorRoot);
    elevBox.getCenter(elevCenter);
    elevatorRoot.position.sub(elevCenter);
    elevatorRoot.position.y += (elevBox.max.y - elevBox.min.y) / 2;
  }
  elevatorRoot.name = 'Unit01_Bucket_Elevator_Group';
  processRoot.add(elevatorRoot);

  // 2. Build Unit 02: Satake VBF Vertical Maize Degermer (Positioned at X = 1.15, Scale = 0.72 -> Y = 0.0 .. 1.48m)
  const satakeRoot = buildMuseumSatakeVBF({ skipInternalParticles: true });
  satakeRoot.name = 'Unit02_Satake_VBF_Group';
  satakeRoot.scale.setScalar(0.72);
  satakeRoot.position.set(1.15, 0.0, 0.0);
  processRoot.add(satakeRoot);

  // 3. Build Optical Sight-Glass Transfer Spout connecting Unit 01 Discharge (0.14, 2.15, 0) -> Unit 02 Inlet (1.42, 1.38, 0)
  const spoutGroup = new THREE.Group();
  spoutGroup.name = 'Process_Transfer_Spout_Assembly';

  const pStart = new THREE.Vector3(0.14, 2.15, 0.0);
  const pEnd = new THREE.Vector3(1.42, 1.38, 0.0);
  const spoutVec = new THREE.Vector3().subVectors(pEnd, pStart);
  const spoutLen = spoutVec.length();
  const spoutMid = new THREE.Vector3().addVectors(pStart, pEnd).multiplyScalar(0.5);

  // Outer Optical Sight-Glass Tube so golden maize / wheat stream is 100% visible inside!
  const spoutGlass = new THREE.Mesh(
    new THREE.CylinderGeometry(0.056, 0.056, spoutLen, 32, 1, true),
    P.opticalGlass
  );
  spoutGlass.position.copy(spoutMid);
  spoutGlass.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), spoutVec.clone().normalize());
  cutawayGlassMeshes.push(spoutGlass);
  spoutGroup.add(spoutGlass);

  // Bottom Stainless Wear Trough inside Transfer Spout
  const spoutTrough = new THREE.Mesh(
    new THREE.CylinderGeometry(0.052, 0.052, spoutLen * 0.96, 24, 1, true, -Math.PI * 0.35, Math.PI * 0.7),
    P.machinedSteel
  );
  spoutTrough.position.copy(spoutMid);
  spoutTrough.quaternion.copy(spoutGlass.quaternion);
  spoutGroup.add(spoutTrough);

  // 5 Machined Anodized Brass Reinforcement Flange Rings along Transfer Spout
  for (let f = 0; f <= 4; f++) {
    const frac = f / 4;
    const ringPos = new THREE.Vector3().lerpVectors(pStart, pEnd, frac);
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.072, 0.072, 0.024, 28), P.anodizedBrass);
    collar.position.copy(ringPos);
    collar.quaternion.copy(spoutGlass.quaternion);
    spoutGroup.add(collar);
  }

  // Overtails Finished Samp Collector Bin under Unit 02 Discharge Spout (X = 0.76, Y = 0.0 .. 0.42, Z = 0.03)
  const collectorBin = new THREE.Group();
  collectorBin.name = 'Unit02_Overtails_Collector_Bin';
  const binBody = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.14, 0.36, 32), P.gunmetal);
  binBody.position.set(0.76, 0.22, 0.03);
  collectorBin.add(binBody);
  const binRim = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.014, 16, 32), P.anodizedBrass);
  binRim.rotation.x = Math.PI / 2;
  binRim.position.set(0.76, 0.40, 0.03);
  collectorBin.add(binRim);
  const grainMound = new THREE.Mesh(
    new THREE.SphereGeometry(0.155, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.5),
    new THREE.MeshStandardMaterial({
      color: GRAIN_TYPE === 'wheat' ? 0xD99B52 : 0xFBBF24,
      emissive: GRAIN_TYPE === 'wheat' ? 0x78350F : 0xB45309,
      emissiveIntensity: 0.28,
      roughness: 0.35
    })
  );
  grainMound.position.set(0.76, 0.34, 0.03);
  grainMound.userData.isGrainFill = true;
  collectorBin.add(grainMound);
  spoutGroup.add(collectorBin);

  processRoot.add(spoutGroup);
  processRoot.updateMatrixWorld(true);

  // 4. Create Unified 7-Stage Instanced 3D Grain Flow across Both Connected Machines
  createInstancedGrainFlow(processRoot, 'process_line', activeGrainCount);

  return processRoot;
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
    emissiveIntensity: 0.38,
    roughness: 0.25,
    metalness: 0.14
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
      speed: mode === 'process_line' ? (0.095 + rng() * 0.025) : (0.16 + rng() * 0.04),
      jitterX: (rng() - 0.5) * 0.032,
      jitterY: (rng() - 0.5) * 0.024,
      jitterZ: (rng() - 0.5) * 0.034,
      rotX: rng() * Math.PI * 2,
      rotY: rng() * Math.PI * 2,
      rotZ: rng() * Math.PI * 2,
      rotSpeedX: (rng() - 0.5) * 6.0,
      rotSpeedY: (rng() - 0.5) * 6.0,
      scaleX: isWheat ? (0.85 + rng() * 0.35) : (1.05 + rng() * 0.45),
      scaleY: isWheat ? (1.15 + rng() * 0.40) : (0.85 + rng() * 0.35),
      scaleZ: isWheat ? (0.85 + rng() * 0.35) : (0.75 + rng() * 0.30),
      vortexPhase: rng() * Math.PI * 2,
      vortexRadius: 0.19 + rng() * 0.090
    });
  }
  if (instMesh.instanceColor) instMesh.instanceColor.needsUpdate = true;

  parentRoot.add(instMesh);
  grainInstancedMesh = instMesh;
  grainParticleSystem = instMesh;

  // 2. Soft Radial-Textured Dust / Chaff Haze Sprites near Discharge & Intake (ZERO blocky square pixels!)
  const hazeCount = 90;
  const hazeGeo = new THREE.BufferGeometry();
  const hazePos = new Float32Array(hazeCount * 3);
  for (let i = 0; i < hazeCount; i++) {
    if (mode === 'process_line') {
      if (i < 30) {
        // Unit 01 Boot intake haze
        hazePos[i * 3] = -0.11 + (rng() - 0.5) * 0.16;
        hazePos[i * 3 + 1] = 0.22 + (rng() - 0.5) * 0.14;
        hazePos[i * 3 + 2] = (rng() - 0.5) * 0.14;
      } else if (i < 60) {
        // Unit 01 Head discharge & spout entry haze
        hazePos[i * 3] = 0.12 + (rng() - 0.5) * 0.20;
        hazePos[i * 3 + 1] = 2.18 + (rng() - 0.5) * 0.18;
        hazePos[i * 3 + 2] = (rng() - 0.5) * 0.16;
      } else {
        // Unit 02 Satake VBF inlet & overtails discharge haze
        hazePos[i * 3] = 0.85 + (rng() - 0.5) * 0.28;
        hazePos[i * 3 + 1] = 0.95 + (rng() - 0.5) * 0.28;
        hazePos[i * 3 + 2] = 0.03 + (rng() - 0.5) * 0.20;
      }
    } else if (mode === 'elevator_only') {
      if (i < 50) {
        hazePos[i * 3] = 0.32 + (rng() - 0.5) * 0.55;
        hazePos[i * 3 + 1] = 8.95 + (rng() - 0.5) * 0.55;
        hazePos[i * 3 + 2] = (rng() - 0.5) * 0.45;
      } else {
        hazePos[i * 3] = -0.34 + (rng() - 0.5) * 0.45;
        hazePos[i * 3 + 1] = 0.78 + (rng() - 0.5) * 0.45;
        hazePos[i * 3 + 2] = (rng() - 0.5) * 0.45;
      }
    } else {
      if (i < 45) {
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
  const softSpriteTex = getRadialSoftSpriteTexture();
  const hazeMat = new THREE.PointsMaterial({
    color: isWheat ? 0xFCD34D : 0xFBBF24,
    map: softSpriteTex,
    alphaMap: softSpriteTex,
    size: mode === 'elevator_only' ? 0.32 : 0.11,
    transparent: true,
    opacity: 0.36,
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

// Guided Grain Flow Paths (Supports Unified 7-Stage Process Line + Individual Units; Never clips through walls)
function evaluateGrainParticleTransform(p, u, outPos) {
  let stretchFactor = 1.0;

  if (p.mode === 'process_line') {
    // Unified 7-Stage Connected Process Path in World Coordinates (Unit 01 at X=0 -> Spout -> Unit 02 at X=1.15)
    if (u < 0.08) {
      // Stage 1: Unit 01 Boot Inlet Hopper -> Boot Sump Scoop
      const f = u / 0.08;
      outPos.set(
        THREE.MathUtils.lerp(-0.15, -0.064, f) + p.jitterX * 0.4,
        THREE.MathUtils.lerp(0.28, 0.16, Math.sin(f * Math.PI * 0.5)) + p.jitterY * 0.3,
        p.jitterZ * 0.55
      );
    } else if (u < 0.38) {
      // Stage 2: Rising Up-Leg inside Loaded Buckets (Y = 0.16 -> 2.26m)
      const f = (u - 0.08) / 0.30;
      outPos.set(
        -0.064 + p.jitterX * 0.38,
        0.16 + f * 2.10,
        p.jitterZ * 0.55
      );
      stretchFactor = 1.15;
    } else if (u < 0.46) {
      // Stage 3: Centrifugal Discharge Arc over Crowned Head Pulley into Spout Collar
      const f = (u - 0.38) / 0.08;
      const theta = Math.PI * (1.0 - f * 0.86);
      outPos.set(
        Math.cos(theta) * 0.065 + f * 0.085 + p.jitterX * 0.35,
        2.26 + Math.sin(theta) * 0.068 - f * f * 0.12,
        p.jitterZ * 0.5
      );
      stretchFactor = 1.65; // Gentle motion elongation in fast centrifugal arc
    } else if (u < 0.62) {
      // Stage 4: High-Velocity Gravity Flow down Optical Sight-Glass Transfer Spout into Unit 02 Inlet
      const f = (u - 0.46) / 0.16;
      outPos.set(
        THREE.MathUtils.lerp(0.14, 1.42, f) + p.jitterX * 0.32,
        THREE.MathUtils.lerp(2.15, 1.38, f) + p.jitterY * 0.28,
        p.jitterZ * 0.35
      );
      stretchFactor = 1.85; // Gentle motion streak along transfer spout
    } else if (u < 0.70) {
      // Stage 5: Unit 02 Satake VBF Rare-Earth Magnet Inlet & Horizontal Motorized Screw Feeder
      const f = (u - 0.62) / 0.08;
      outPos.set(
        THREE.MathUtils.lerp(1.42, 1.24, f) + p.jitterX * 0.35,
        THREE.MathUtils.lerp(1.38, 0.55, f) + p.jitterY * 0.3,
        p.jitterZ * 0.38
      );
      stretchFactor = 1.25;
    } else if (u < 0.91) {
      // Stage 6: Helical Scouring & Degerming Vortex inside Multifaceted Slotted Screen (X=1.15, Y=0.52..1.12)
      const f = (u - 0.70) / 0.21;
      const angle = p.vortexPhase - f * Math.PI * 6.5;
      const r = (p.vortexRadius * 0.72) + Math.sin(f * Math.PI * 2) * 0.011;
      outPos.set(
        1.15 + Math.cos(angle) * r,
        0.52 + f * 0.60,
        Math.sin(angle) * r
      );
      stretchFactor = 1.35;
    } else {
      // Stage 7: Overtails Discharge Chute & Natural Spill into Finished Samp Collector Bin (X=0.92 -> 0.76)
      const f = (u - 0.91) / 0.09;
      const spread = 0.45 + f * 0.85;
      outPos.set(
        THREE.MathUtils.lerp(0.92, 0.76, f) + p.jitterX * spread,
        1.16 - f * f * 0.78 + p.jitterY * 0.3,
        0.03 + p.jitterZ * spread
      );
      stretchFactor = 1.45;
    }
    return stretchFactor;
  }

  if (p.mode === 'elevator_only') {
    // Unit 01: Industrial Bucket Elevator (Local 0..9.6m GLTF coordinates)
    if (u < 0.14) {
      const f = u / 0.14;
      outPos.set(
        THREE.MathUtils.lerp(-0.56, -0.245, f) + p.jitterX * 1.4,
        THREE.MathUtils.lerp(1.08, 0.58, Math.sin(f * Math.PI * 0.5)) + p.jitterY * 1.2,
        p.jitterZ * 2.2
      );
    } else if (u < 0.78) {
      const f = (u - 0.14) / 0.64;
      outPos.set(
        -0.245 + p.jitterX * 1.2,
        0.62 + f * 8.44,
        p.jitterZ * 2.2
      );
    } else {
      const f = (u - 0.78) / 0.22;
      const theta = Math.PI * (1.0 - f * 0.88);
      outPos.set(
        Math.cos(theta) * 0.26 + f * 0.42 + p.jitterX * 1.5,
        9.06 + Math.sin(theta) * 0.27 - f * f * 0.85,
        p.jitterZ * 2.2
      );
      stretchFactor = 1.55;
    }
    return stretchFactor;
  }

  // Unit 02: Satake VBF Vertical Maize Degermer (Local 0..2.1m coordinates)
  if (u < 0.15) {
    const f = u / 0.15;
    outPos.set(
      0.38 + p.jitterX * 0.7,
      THREE.MathUtils.lerp(2.08, 1.66, f),
      p.jitterZ * 0.7
    );
  } else if (u < 0.28) {
    const f = (u - 0.15) / 0.13;
    outPos.set(
      THREE.MathUtils.lerp(0.38, 0.12, f),
      THREE.MathUtils.lerp(1.66, 0.76, f) + p.jitterY * 0.4,
      p.jitterZ * 0.6
    );
  } else if (u < 0.82) {
    const f = (u - 0.28) / 0.54;
    const angle = p.vortexPhase - f * Math.PI * 6.5;
    const r = p.vortexRadius + Math.sin(f * Math.PI * 2) * 0.015;
    outPos.set(
      Math.cos(angle) * r,
      0.72 + f * 0.84,
      Math.sin(angle) * r
    );
    stretchFactor = 1.3;
  } else {
    const f = (u - 0.82) / 0.18;
    const spread = 1.0 + f * 1.8;
    outPos.set(
      THREE.MathUtils.lerp(-0.32, -0.52, f) + p.jitterX * spread,
      1.62 - f * f * 0.76 + p.jitterY * 0.4,
      0.04 + p.jitterZ * spread
    );
    stretchFactor = 1.45;
  }
  return stretchFactor;
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

    const stretch = evaluateGrainParticleTransform(p, p.t, tempPos) || 1.0;

    dummyMatrixObj.position.copy(tempPos);
    const rotT = isAbsoluteTime ? elapsedOrDelta : (performance.now() * 0.001);
    dummyMatrixObj.rotation.set(
      p.rotX + rotT * p.rotSpeedX,
      p.rotY + rotT * p.rotSpeedY,
      p.rotZ
    );
    dummyMatrixObj.scale.set(p.scaleX, p.scaleY * stretch, p.scaleZ);
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
    } else if (machine.id === 'combined_process_line') {
      // Connected Dual-Machine Process Line (Unit 01 Bucket Elevator + Sight-Glass Transfer Spout + Unit 02 Satake VBF)
      root = await buildCombinedProcessLineScene();
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
    if (maxDim > 0 && machine.id !== 'satake_vbf' && machine.id !== 'combined_process_line') {
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
// 20. LOADING OVERLAY & PROGRESS BAR
// ============================================================================
function showLoading(msg, pct = 45) {
  const overlay = document.getElementById('loading-overlay');
  const text = document.getElementById('loadingMsg');
  const fill = document.getElementById('loadingProgressFill');
  if (text) text.textContent = msg || 'INITIALIZING NVIDIA 3D STAGE...';
  if (fill) fill.style.width = Math.max(10, Math.min(100, pct)) + '%';
  if (overlay) {
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'auto';
  }
}

function hideLoading() {
  const overlay = document.getElementById('loading-overlay');
  const fill = document.getElementById('loadingProgressFill');
  if (fill) fill.style.width = '100%';
  if (overlay) {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
  }
}

// ============================================================================
// 21. EVENT LISTENERS, QUALITY PRESETS, PRESENTATION MODE & TIMELINE SCRUBBER
// ============================================================================
let currentQualityPreset = 'standard'; // 'standard' | 'ultra' | 'safe'
let isPresentationMode = false;
let isTimelinePreviewPlaying = false;
let timelinePreviewElapsed = 0.0;

function applyQualityPreset(preset) {
  currentQualityPreset = preset || 'standard';
  const sel = document.getElementById('qualityPresetSelect');
  if (sel && sel.value !== currentQualityPreset) sel.value = currentQualityPreset;

  if (!renderer) return;

  if (currentQualityPreset === 'ultra') {
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 2, 2));
    renderer.shadowMap.enabled = true;
    activeGrainCount = 650;
  } else if (currentQualityPreset === 'safe') {
    renderer.setPixelRatio(1);
    renderer.shadowMap.enabled = false;
    activeGrainCount = 340;
  } else {
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1.5, 1.5));
    renderer.shadowMap.enabled = true;
    activeGrainCount = 650;
  }

  if (grainInstancedMesh) {
    grainInstancedMesh.count = activeGrainCount;
  }
  onWindowResize();
}

function togglePresentationMode() {
  isPresentationMode = !isPresentationMode;
  document.body.classList.toggle('presentation-mode', isPresentationMode);
  const btn = document.getElementById('btnPresentationMode');
  if (btn) btn.classList.toggle('active', isPresentationMode);

  if (isPresentationMode) {
    if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
    setTimelinePreviewPlaying(true);
  } else {
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }
  setTimeout(onWindowResize, 80);
}

function setTimelinePreviewPlaying(playing) {
  isTimelinePreviewPlaying = Boolean(playing);
  const btn = document.getElementById('btnTimelinePlayPause');
  const icon = document.getElementById('timelinePlayIcon');
  const txt = document.getElementById('timelinePlayText');
  if (btn) btn.classList.toggle('active', isTimelinePreviewPlaying);
  if (icon) icon.textContent = isTimelinePreviewPlaying ? '⏸' : '▶';
  if (txt) txt.textContent = isTimelinePreviewPlaying ? 'Pause 30s Preview' : 'Play 30s Preview';
}

function seekMasterTimeline(sec) {
  timelinePreviewElapsed = Math.max(0, Math.min(CINEMATIC_TOTAL_DURATION, parseFloat(sec) || 0));
  updateScrubberUI(timelinePreviewElapsed);
  applyMasterTimelinePose(timelinePreviewElapsed, false);
}

function updateScrubberUI(elapsed) {
  const slider = document.getElementById('timelineScrubberInput');
  const readout = document.getElementById('timelineTimeReadout');
  const beatLbl = document.getElementById('timelineBeatLabel');

  const clamped = Math.max(0, Math.min(CINEMATIC_TOTAL_DURATION, elapsed));
  const pct = (clamped / CINEMATIC_TOTAL_DURATION) * 100;

  if (slider) {
    slider.value = clamped.toFixed(2);
    slider.style.setProperty('--control-value', `${pct.toFixed(1)}%`);
  }
  if (readout) {
    const s = Math.floor(clamped);
    const tenths = Math.floor((clamped - s) * 10);
    readout.textContent = `00:${s < 10 ? '0' + s : s}.${tenths} / 00:30.0`;
  }

  const beatInfo = getBeatMetadataAtTime(clamped);
  if (beatLbl && beatInfo) {
    beatLbl.textContent = beatInfo.scrubberTitle;
  }

  document.querySelectorAll('.scrubber-beat-marker').forEach(m => {
    const t = parseFloat(m.getAttribute('data-time') || '0');
    const isAct = beatInfo && Math.abs(beatInfo.start - t) < 0.2;
    m.classList.toggle('active', Boolean(isAct));
  });
}

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

    const hudStatus = document.getElementById('hudStatus');
    if (hudStatus) {
      hudStatus.textContent = isLocked ? 'LOTO ISOLATED (0 RPM)' : (dict['hud.statusVal'] || 'STUDIO PBR + FLOW');
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

  // Boardroom Presentation Mode Button
  document.getElementById('btnPresentationMode')?.addEventListener('click', togglePresentationMode);

  // 30s Cinematic Showcase & Deterministic MP4 Video Exporter Triggers
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

  // Interactive 30s Timeline Scrubber Controls
  document.getElementById('btnTimelinePlayPause')?.addEventListener('click', () => {
    setTimelinePreviewPlaying(!isTimelinePreviewPlaying);
  });
  document.getElementById('btnTimelineReplay')?.addEventListener('click', () => {
    seekMasterTimeline(0);
    setTimelinePreviewPlaying(true);
  });
  document.getElementById('timelineScrubberInput')?.addEventListener('input', (e) => {
    setTimelinePreviewPlaying(false);
    seekMasterTimeline(parseFloat(e.target.value));
  });
  document.querySelectorAll('.scrubber-beat-marker').forEach(marker => {
    marker.addEventListener('click', () => {
      const t = parseFloat(marker.getAttribute('data-time') || '0');
      seekMasterTimeline(t);
    });
  });

  // Quality Preset Selector
  document.getElementById('qualityPresetSelect')?.addEventListener('change', (e) => {
    applyQualityPreset(e.target.value);
  });

  // Global Boardroom Keyboard Shortcuts (Space, ArrowLeft/Right, R, F, G, Escape)
  window.addEventListener('keydown', (e) => {
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'select' || tag === 'textarea') return;

    if (e.code === 'Space') {
      e.preventDefault();
      if (!cinematicState.active) {
        setTimelinePreviewPlaying(!isTimelinePreviewPlaying);
      }
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      if (!cinematicState.active) {
        setTimelinePreviewPlaying(false);
        seekMasterTimeline(timelinePreviewElapsed + 1.0);
      }
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      if (!cinematicState.active) {
        setTimelinePreviewPlaying(false);
        seekMasterTimeline(timelinePreviewElapsed - 1.0);
      }
    } else if (e.key === 'r' || e.key === 'R') {
      e.preventDefault();
      if (!cinematicState.active) {
        startCinematicShowcase('landscape');
      }
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      if (!cinematicState.active) {
        togglePresentationMode();
      }
    } else if (e.key === 'g' || e.key === 'G') {
      e.preventDefault();
      setGrainType(GRAIN_TYPE === 'maize' ? 'wheat' : 'maize');
    } else if (e.code === 'Escape') {
      if (cinematicState.active) {
        stopCinematicShowcase(true);
      } else if (isPresentationMode) {
        togglePresentationMode();
      }
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
  document.getElementById('btnResetCam')?.addEventListener('click', () => {
    setTimelinePreviewPlaying(false);
    resetCameraFraming();
  });
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
// 21B. BOARDROOM 30-SECOND 6-BEAT SHOWCASE & DETERMINISTIC MP4 EXPORTER (NO AUDIO)
// ============================================================================
const CINEMATIC_TOTAL_DURATION = 30.0;
const CINEMATIC_FPS = 60;
const CINEMATIC_TOTAL_FRAMES = 1800; // 30.0s * 60 fps exact

// Authoritative 6-Beat Structure (0-4s, 4-10s, 10-15s, 15-21s, 21-27s, 27-30s)
const CINEMATIC_BEATS_METADATA = [
  {
    beatIndex: 1,
    start: 0.0,
    end: 4.0,
    flowStageIndex: 0, // INTAKE
    scrubberTitle: 'BEAT 01 (00–04s) • HERO WIDE PROCESS SHOT & GRAIN INTAKE',
    unitTitle: 'SAGMA 3D TRAINING TWIN | Connected Grain Conveying & Degerming Line',
    phaseText: 'BEAT 01 (00–04s) • HERO ESTABLISHING SHOT: UNIT 01 BUCKET ELEVATOR → UNIT 02 SATAKE VBF',
    specUnit: 1,
    focusWorld: [0.0, 0.35, 0.0],
    camKeyframes: [
      [0.48, 1.12, 4.95],
      [0.52, 1.10, 4.75],
      [0.36, 1.06, 4.15]
    ],
    lookKeyframes: [
      [0.52, 0.98, 0.0],
      [0.50, 0.98, 0.0],
      [0.24, 0.92, 0.0]
    ]
  },
  {
    beatIndex: 2,
    start: 4.0,
    end: 10.0,
    flowStageIndex: 1, // ELEVATE
    scrubberTitle: 'BEAT 02 (04–10s) • UNIT 01 INTAKE, TENSIONER & VERTICAL CLIMB',
    unitTitle: 'UNIT 01: INDUSTRIAL BUCKET ELEVATOR | DIN 22104 / Diagram 69(b)',
    phaseText: 'BEAT 02 (04–10s) • BOOT INTAKE HOPPER, SCREW TENSIONER & LOADED DEEP BUCKET CLIMB',
    specUnit: 1,
    focusWorld: [-0.06, 1.10, 0.0],
    camKeyframes: [
      [0.36, 1.08, 4.15],
      [-0.24, 0.58, 1.58],
      [0.18, 1.25, 1.62],
      [0.28, 1.88, 1.65]
    ],
    lookKeyframes: [
      [0.24, 0.92, 0.0],
      [-0.04, 0.42, 0.0],
      [0.0, 1.18, 0.0],
      [0.02, 1.92, 0.0]
    ]
  },
  {
    beatIndex: 3,
    start: 10.0,
    end: 15.0,
    flowStageIndex: 2, // DISCHARGE
    scrubberTitle: 'BEAT 03 (10–15s) • HEAD PULLEY ORBIT & CENTRIFUGAL DISCHARGE',
    unitTitle: 'UNIT 01: INDUSTRIAL BUCKET ELEVATOR | 391 mm Crowned Pulley & Split Hood',
    phaseText: 'BEAT 03 (10–15s) • CROWNED DRIVE PULLEY, THERMAL SENSOR & CENTRIFUGAL DISCHARGE',
    specUnit: 1,
    focusWorld: [0.06, 2.18, 0.0],
    camKeyframes: [
      [0.28, 1.88, 1.65],
      [-0.36, 2.12, 1.58],
      [0.08, 2.16, 1.56],
      [0.45, 2.04, 1.68]
    ],
    lookKeyframes: [
      [0.02, 1.92, 0.0],
      [0.0, 2.06, 0.0],
      [0.05, 2.08, 0.0],
      [0.28, 1.95, 0.0]
    ]
  },
  {
    beatIndex: 4,
    start: 15.0,
    end: 21.0,
    flowStageIndex: 3, // DEGERM (Transfer & Feed)
    scrubberTitle: 'BEAT 04 (15–21s) • TRANSFER SPOUT TRACKING INTO UNIT 02 SATAKE VBF',
    unitTitle: 'PROCESS TRANSFER & UNIT 02 INLET | Sight-Glass Spout → Satake VBF Degermer',
    phaseText: 'BEAT 04 (15–21s) • GRAVITY SPOUT TRANSFER, RARE-EARTH MAGNET & MOTORIZED SCREW FEEDER',
    specUnit: 2,
    focusWorld: [1.36, 1.32, 0.0],
    camKeyframes: [
      [0.45, 2.04, 1.68],
      [0.78, 1.72, 1.88],
      [1.18, 1.38, 1.82],
      [1.36, 1.18, 1.68]
    ],
    lookKeyframes: [
      [0.28, 1.95, 0.0],
      [0.76, 1.52, 0.0],
      [1.18, 1.05, 0.0],
      [1.16, 0.88, 0.0]
    ]
  },
  {
    beatIndex: 5,
    start: 21.0,
    end: 27.0,
    flowStageIndex: 3, // DEGERM (Internal X-Ray Scouring)
    scrubberTitle: 'BEAT 05 (21–27s) • UNIT 02 X-RAY CUTAWAY: ROTOR, SCREEN & ASPIRATION',
    unitTitle: 'UNIT 02: SATAKE VBF VERTICAL MAIZE DEGERMER | X-Ray Internal Scouring Chamber',
    phaseText: 'BEAT 05 (21–27s) • SPLIT STEEL ROTOR, BEATER BARS, SLOTTED SCREEN & HOLLOW AIR SHAFT',
    specUnit: 2,
    focusWorld: [1.15, 0.82, 0.0],
    camKeyframes: [
      [1.36, 1.18, 1.68],
      [1.02, 0.96, 1.54],
      [0.88, 0.82, 1.58],
      [1.22, 0.86, 1.78]
    ],
    lookKeyframes: [
      [1.16, 0.88, 0.0],
      [1.15, 0.80, 0.0],
      [1.12, 0.72, 0.0],
      [1.05, 0.78, 0.0]
    ]
  },
  {
    beatIndex: 6,
    start: 27.0,
    end: 30.0,
    flowStageIndex: 4, // OUTPUT
    scrubberTitle: 'BEAT 06 (27–30s) • FULL PROCESS WIDE PULLBACK & BOARDROOM END CARD',
    unitTitle: 'SAGMA 3D TRAINING TWIN | Complete Maize & Wheat Milling Process Line',
    phaseText: 'BEAT 06 (27–30s) • OVERTAILS SAMP DISCHARGE, FULL LINE OVERVIEW & CLOSING SUMMARY',
    specUnit: 2,
    focusWorld: [0.76, 0.42, 0.03],
    camKeyframes: [
      [1.22, 0.86, 1.78],
      [0.64, 1.12, 4.75],
      [0.52, 1.12, 4.95]
    ],
    lookKeyframes: [
      [1.05, 0.78, 0.0],
      [0.54, 1.00, 0.0],
      [0.52, 0.98, 0.0]
    ]
  }
];

// ----------------------------------------------------------------------------
// DEDICATED 30-SECOND 6-BEAT CHOREOGRAPHY FOR EACH INDIVIDUAL MACHINE & PROCESS LINE
// ----------------------------------------------------------------------------
function getActiveCinematicMode() {
  if (cinematicState.active && cinematicState.recordingMode) {
    return cinematicState.recordingMode;
  }
  const id = currentMachineMeta ? currentMachineMeta.id : 'elevator_69b';
  if (id === 'satake_vbf') return 'satake_vbf';
  if (id === 'combined_process_line') return 'combined_process_line';
  return 'elevator_69b';
}

// 1A. UNIT 01 ONLY (INDUSTRIAL BUCKET ELEVATOR) — 30-Second 6-Beat Choreography
const ELEVATOR_ONLY_BEATS_METADATA = [
  {
    beatIndex: 1,
    start: 0.0,
    end: 4.0,
    flowStageIndex: 0, // 01 INTAKE
    scrubberTitle: 'BEAT 01 (00–04s) • UNIT 01 HERO FULL-HEIGHT ESTABLISHING SHOT',
    unitTitle: 'UNIT 01: INDUSTRIAL BUCKET ELEVATOR | DIN 22104 / SAGMA Diagram 69(b)',
    phaseText: 'BEAT 01 (00–04s) • FULL-HEIGHT ESTABLISHING SHOT & BOOT GRAIN INTAKE',
    specUnit: 1,
    focusWorld: [0.0, 1.05, 0.0],
    camKeyframes: [
      [0.0, 1.12, 4.85],
      [0.18, 1.10, 4.75],
      [0.08, 1.06, 4.35]
    ],
    lookKeyframes: [
      [0.0, 0.98, 0.0],
      [0.0, 0.98, 0.0],
      [0.0, 0.92, 0.0]
    ]
  },
  {
    beatIndex: 2,
    start: 4.0,
    end: 10.0,
    flowStageIndex: 0, // 01 INTAKE & TENSIONING
    scrubberTitle: 'BEAT 02 (04–10s) • BOOT INTAKE SPOUT, TENSIONER & CLEANOUT DOORS',
    unitTitle: 'UNIT 01: INDUSTRIAL BUCKET ELEVATOR | Boot Assembly & Down-Leg Infeed',
    phaseText: 'BEAT 02 (04–10s) • DOWN-LEG BOOT FEED SPOUT, ACME SCREW TENSIONER & CLEANOUT DOORS',
    specUnit: 1,
    focusWorld: [0.0, 0.32, 0.0],
    camKeyframes: [
      [0.08, 1.06, 4.35],
      [-0.48, 0.38, 1.38],
      [0.42, 0.42, 1.42],
      [0.26, 0.82, 1.62]
    ],
    lookKeyframes: [
      [0.0, 0.92, 0.0],
      [-0.06, 0.28, 0.0],
      [0.04, 0.28, 0.0],
      [0.0, 0.78, 0.0]
    ]
  },
  {
    beatIndex: 3,
    start: 10.0,
    end: 15.0,
    flowStageIndex: 1, // 02 ELEVATE
    scrubberTitle: 'BEAT 03 (10–15s) • TWIN-LEG TRUNKING, ANTISTATIC BELT & BUCKET CLIMB',
    unitTitle: 'UNIT 01: INDUSTRIAL BUCKET ELEVATOR | Twin-Leg Casing & 58 Deep Buckets',
    phaseText: 'BEAT 03 (10–15s) • DIN 22104 ANTISTATIC BELT, 300 MM BUCKET PITCH & ROTATION FRAME',
    specUnit: 1,
    focusWorld: [-0.05, 1.25, 0.0],
    camKeyframes: [
      [0.26, 0.82, 1.62],
      [-0.32, 1.15, 1.52],
      [0.28, 1.48, 1.56],
      [0.32, 1.88, 1.65]
    ],
    lookKeyframes: [
      [0.0, 0.78, 0.0],
      [-0.04, 1.12, 0.0],
      [0.0, 1.45, 0.0],
      [0.0, 1.92, 0.0]
    ]
  },
  {
    beatIndex: 4,
    start: 15.0,
    end: 21.0,
    flowStageIndex: 2, // 03 DRIVE & HEAD
    scrubberTitle: 'BEAT 04 (15–21s) • HEAD DRIVE PULLEY, GEARMOTOR & SLIP SENSOR',
    unitTitle: 'UNIT 01: INDUSTRIAL BUCKET ELEVATOR | 391 mm Crowned Pulley & Drive Assembly',
    phaseText: 'BEAT 04 (15–21s) • SPLIT REMOVABLE HOOD, CROWNED DRIVE PULLEY & THERMAL SLIP SENSOR',
    specUnit: 1,
    focusWorld: [0.0, 2.18, 0.0],
    camKeyframes: [
      [0.32, 1.88, 1.65],
      [-0.46, 2.15, 1.52],
      [-0.12, 2.22, 1.48],
      [0.38, 2.14, 1.54]
    ],
    lookKeyframes: [
      [0.0, 1.92, 0.0],
      [-0.06, 2.12, 0.0],
      [0.0, 2.18, 0.0],
      [0.06, 2.10, 0.0]
    ]
  },
  {
    beatIndex: 5,
    start: 21.0,
    end: 27.0,
    flowStageIndex: 3, // 04 CENTRIFUGAL DISCHARGE
    scrubberTitle: 'BEAT 05 (21–27s) • CENTRIFUGAL DISCHARGE SADDLE & WEAR PLATES',
    unitTitle: 'UNIT 01: INDUSTRIAL BUCKET ELEVATOR | Centrifugal Discharge & Wear Liners',
    phaseText: 'BEAT 05 (21–27s) • TANGENTIAL GRAIN THROW, DISCHARGE SADDLE & RUBBER DEFLECTOR',
    specUnit: 1,
    focusWorld: [0.14, 2.10, 0.0],
    camKeyframes: [
      [0.38, 2.14, 1.54],
      [0.56, 2.06, 1.42],
      [0.35, 1.95, 1.62],
      [0.24, 1.52, 2.85]
    ],
    lookKeyframes: [
      [0.06, 2.10, 0.0],
      [0.14, 2.06, 0.0],
      [0.10, 1.98, 0.0],
      [0.0, 1.35, 0.0]
    ]
  },
  {
    beatIndex: 6,
    start: 27.0,
    end: 30.0,
    flowStageIndex: 4, // 05 OUTPUT SUMMARY
    scrubberTitle: 'BEAT 06 (27–30s) • FULL ELEVATOR WIDE PULLBACK & BOARDROOM END CARD',
    unitTitle: 'UNIT 01: INDUSTRIAL BUCKET ELEVATOR | Complete Vertical Conveying System',
    phaseText: 'BEAT 06 (27–30s) • FULL-HEIGHT OVERVIEW, TELEMETRY SUMMARY & CLOSING END CARD',
    specUnit: 1,
    focusWorld: [0.0, 1.18, 0.0],
    camKeyframes: [
      [0.24, 1.52, 2.85],
      [0.06, 1.12, 4.75],
      [0.0, 1.12, 4.85]
    ],
    lookKeyframes: [
      [0.0, 1.35, 0.0],
      [0.0, 0.98, 0.0],
      [0.0, 0.98, 0.0]
    ]
  }
];

const ELEVATOR_ONLY_CALLOUT_SCHEDULE = [
  // Beat 1 (0-4s): Full Elevator Wide Shot
  { id: 'split_hood',      unit: 1, start: 0.1, end: 3.9, side: 'left',  worldAnchor: [0.0, 2.28, 0.0] },
  { id: 'trunking_legs',   unit: 1, start: 0.2, end: 3.9, side: 'left',  worldAnchor: [-0.06, 1.22, 0.0] },
  { id: 'discharge_saddle',unit: 1, start: 0.3, end: 3.9, side: 'right', worldAnchor: [0.12, 2.10, 0.0] },
  { id: 'boot_feed',       unit: 1, start: 0.4, end: 3.9, side: 'right', worldAnchor: [-0.11, 0.24, 0.0] },

  // Beat 2 (4-10s): Boot Intake, Tensioner & Cleanout Doors
  { id: 'boot_feed',       unit: 1, start: 4.0, end: 9.95, side: 'left',  worldAnchor: [-0.11, 0.24, 0.0] },
  { id: 'boot_takeup',     unit: 1, start: 4.1, end: 9.95, side: 'right', worldAnchor: [0.05, 0.18, 0.0] },
  { id: 'cleanout_doors',  unit: 1, start: 4.2, end: 9.95, side: 'right', worldAnchor: [0.06, 0.34, 0.0] },

  // Beat 3 (10-15s): Twin-Leg Trunking, Antistatic Belt, Deep Buckets & Tie Frame
  { id: 'trunking_legs',   unit: 1, start: 10.0, end: 14.95, side: 'left',  worldAnchor: [-0.06, 1.18, 0.0] },
  { id: 'antistatic_belt', unit: 1, start: 10.1, end: 14.95, side: 'left',  worldAnchor: [-0.06, 1.48, 0.0] },
  { id: 'deep_buckets',    unit: 1, start: 10.2, end: 14.95, side: 'right', worldAnchor: [-0.05, 1.32, 0.0] },
  { id: 'rotation_frame',  unit: 1, start: 10.3, end: 14.95, side: 'right', worldAnchor: [0.05, 1.05, 0.0] },

  // Beat 4 (15-21s): Split Hood, Drive Motor, Crowned Pulley & Thermal Slip Sensor
  { id: 'split_hood',      unit: 1, start: 15.0, end: 20.95, side: 'left',  worldAnchor: [0.0, 2.30, 0.0] },
  { id: 'drive_motor',     unit: 1, start: 15.1, end: 20.95, side: 'left',  worldAnchor: [-0.12, 2.14, 0.0] },
  { id: 'crowned_pulley',  unit: 1, start: 15.2, end: 20.95, side: 'right', worldAnchor: [0.0, 2.22, 0.0] },
  { id: 'head_sensor',     unit: 1, start: 15.3, end: 20.95, side: 'right', worldAnchor: [0.06, 2.16, 0.0] },

  // Beat 5 (21-27s): Centrifugal Discharge Saddle, Wear Plates & Crowned Pulley
  { id: 'crowned_pulley',   unit: 1, start: 21.0, end: 26.95, side: 'left',  worldAnchor: [0.0, 2.22, 0.0] },
  { id: 'head_sensor',      unit: 1, start: 21.1, end: 26.95, side: 'left',  worldAnchor: [-0.06, 2.14, 0.0] },
  { id: 'discharge_saddle', unit: 1, start: 21.2, end: 26.95, side: 'right', worldAnchor: [0.12, 2.12, 0.0] },
  { id: 'wear_plates',      unit: 1, start: 21.3, end: 26.95, side: 'right', worldAnchor: [0.18, 2.04, 0.0] },

  // Beat 6 (27-30s): Full Pullback Wide Shot
  { id: 'split_hood',       unit: 1, start: 27.0, end: 30.0, side: 'left',  worldAnchor: [0.0, 2.28, 0.0] },
  { id: 'boot_feed',        unit: 1, start: 27.1, end: 30.0, side: 'left',  worldAnchor: [-0.11, 0.24, 0.0] },
  { id: 'discharge_saddle', unit: 1, start: 27.1, end: 30.0, side: 'right', worldAnchor: [0.12, 2.12, 0.0] },
  { id: 'boot_takeup',      unit: 1, start: 27.2, end: 30.0, side: 'right', worldAnchor: [0.05, 0.18, 0.0] }
];

// 1B. UNIT 02 ONLY (SATAKE VBF VERTICAL MAIZE DEGERMER) — 30-Second 6-Beat Choreography
const SATAKE_ONLY_BEATS_METADATA = [
  {
    beatIndex: 1,
    start: 0.0,
    end: 4.0,
    flowStageIndex: 0, // 01 INTAKE
    scrubberTitle: 'BEAT 01 (00–04s) • UNIT 02 SATAKE VBF HERO ESTABLISHING SHOT',
    unitTitle: 'UNIT 02: SATAKE VBF VERTICAL MAIZE DEGERMER | VBF 5A / 7B / 10A Series',
    phaseText: 'BEAT 01 (00–04s) • FULL MACHINE ESTABLISHING SHOT & CONDITIONED MAIZE INTAKE',
    specUnit: 2,
    focusWorld: [0.0, 0.92, 0.0],
    camKeyframes: [
      [0.0, 1.02, 4.15],
      [0.22, 1.04, 4.05],
      [0.36, 1.18, 3.65]
    ],
    lookKeyframes: [
      [0.0, 0.88, 0.0],
      [0.02, 0.88, 0.0],
      [0.08, 1.02, 0.0]
    ]
  },
  {
    beatIndex: 2,
    start: 4.0,
    end: 10.0,
    flowStageIndex: 1, // 02 SCREW FEED
    scrubberTitle: 'BEAT 02 (04–10s) • RARE-EARTH MAGNET TRAP & MOTORIZED SCREW FEEDER',
    unitTitle: 'UNIT 02: SATAKE VBF VERTICAL MAIZE DEGERMER | Top Inlet & Screw Feeder',
    phaseText: 'BEAT 02 (04–10s) • >10,000 GAUSS MAGNET TRAP, MOTORIZED FEED SCREW & DISTRIBUTION SCROLL',
    specUnit: 2,
    focusWorld: [0.28, 1.68, 0.0],
    camKeyframes: [
      [0.36, 1.18, 3.65],
      [0.72, 1.78, 1.65],
      [0.45, 1.25, 1.72],
      [0.18, 1.12, 1.68]
    ],
    lookKeyframes: [
      [0.08, 1.02, 0.0],
      [0.28, 1.72, 0.0],
      [0.12, 1.15, 0.0],
      [0.0, 1.08, 0.0]
    ]
  },
  {
    beatIndex: 3,
    start: 10.0,
    end: 15.0,
    flowStageIndex: 2, // 03 ROTOR SCOURING
    scrubberTitle: 'BEAT 03 (10–15s) • X-RAY CUTAWAY: SPLIT STEEL ROTOR & BEATER BARS',
    unitTitle: 'UNIT 02: SATAKE VBF VERTICAL MAIZE DEGERMER | 465 RPM Split Steel Rotor',
    phaseText: 'BEAT 03 (10–15s) • VERTICAL DISTRIBUTION SCROLL, SPLIT ROTOR DRUM & HARDENED BEATER BARS',
    specUnit: 2,
    focusWorld: [0.0, 1.12, 0.0],
    camKeyframes: [
      [0.18, 1.12, 1.68],
      [-0.36, 1.14, 1.58],
      [0.0, 1.08, 1.54],
      [0.42, 1.16, 1.62]
    ],
    lookKeyframes: [
      [0.0, 1.08, 0.0],
      [0.0, 1.08, 0.0],
      [0.0, 1.06, 0.0],
      [0.05, 1.12, 0.0]
    ]
  },
  {
    beatIndex: 4,
    start: 15.0,
    end: 21.0,
    flowStageIndex: 3, // 04 SCREEN & ASPIRATION
    scrubberTitle: 'BEAT 04 (15–21s) • SLOTTED SCREEN CARTRIDGE & RESISTANCE BARS',
    unitTitle: 'UNIT 02: SATAKE VBF VERTICAL MAIZE DEGERMER | 8-Segment Polygonal Screen Cage',
    phaseText: 'BEAT 04 (15–21s) • 1.0×12.0 MM SLOTTED SCREENS, RIB CAGE & ADJUSTABLE RESISTANCE BARS',
    specUnit: 2,
    focusWorld: [0.0, 1.15, 0.0],
    camKeyframes: [
      [0.42, 1.16, 1.62],
      [0.64, 1.22, 1.68],
      [-0.48, 1.38, 1.72],
      [-0.32, 0.85, 1.85]
    ],
    lookKeyframes: [
      [0.05, 1.12, 0.0],
      [0.08, 1.16, 0.0],
      [-0.18, 1.38, 0.0],
      [0.0, 0.65, 0.0]
    ]
  },
  {
    beatIndex: 5,
    start: 21.0,
    end: 27.0,
    flowStageIndex: 3, // 04 ASPIRATION & 75KW DRIVE
    scrubberTitle: 'BEAT 05 (21–27s) • AIR INDUCTION FAN, 75 KW MOTOR & OVERTAILS FLAP',
    unitTitle: 'UNIT 02: SATAKE VBF VERTICAL MAIZE DEGERMER | Aspiration & 75 kW Main Drive',
    phaseText: 'BEAT 05 (21–27s) • HOLLOW SHAFT AIR INDUCTION, 75 KW V-BELT DRIVE & WEIGHTED RETENTION FLAP',
    specUnit: 2,
    focusWorld: [0.0, 0.45, 0.0],
    camKeyframes: [
      [-0.32, 0.85, 1.85],
      [-0.45, 0.48, 1.68],
      [0.52, 0.52, 1.74],
      [0.28, 1.05, 2.65]
    ],
    lookKeyframes: [
      [0.0, 0.65, 0.0],
      [-0.12, 0.34, 0.0],
      [0.22, 0.36, 0.0],
      [0.0, 1.02, 0.0]
    ]
  },
  {
    beatIndex: 6,
    start: 27.0,
    end: 30.0,
    flowStageIndex: 4, // 05 OUTPUT SUMMARY
    scrubberTitle: 'BEAT 06 (27–30s) • FULL SATAKE VBF PULLBACK & BOARDROOM END CARD',
    unitTitle: 'UNIT 02: SATAKE VBF VERTICAL MAIZE DEGERMER | Complete Degerming System',
    phaseText: 'BEAT 06 (27–30s) • FULL MACHINE OVERVIEW, TELEMETRY SUMMARY & CLOSING END CARD',
    specUnit: 2,
    focusWorld: [0.0, 1.05, 0.0],
    camKeyframes: [
      [0.28, 1.05, 2.65],
      [0.06, 1.02, 4.05],
      [0.0, 1.02, 4.15]
    ],
    lookKeyframes: [
      [0.0, 1.02, 0.0],
      [0.0, 0.88, 0.0],
      [0.0, 0.88, 0.0]
    ]
  }
];

const SATAKE_ONLY_CALLOUT_SCHEDULE = [
  // Beat 1 (0-4s): Full Satake VBF Wide Shot
  { id: '2.1',  unit: 2, start: 0.1, end: 3.9, side: 'right', worldAnchor: [0.38, 1.92, 0.0] },
  { id: '2.8',  unit: 2, start: 0.2, end: 3.9, side: 'left',  worldAnchor: [-0.35, 1.65, 0.03] },
  { id: '2.6',  unit: 2, start: 0.3, end: 3.9, side: 'right', worldAnchor: [0.31, 1.12, 0.0] },
  { id: '2.10', unit: 2, start: 0.4, end: 3.9, side: 'left',  worldAnchor: [0.42, 0.28, -0.18] },

  // Beat 2 (4-10s): Magnet Trap, Motorized Screw Feeder & Distribution Scroll
  { id: '2.1',  unit: 2, start: 4.0, end: 9.95, side: 'right', worldAnchor: [0.38, 1.92, 0.0] },
  { id: '2.2',  unit: 2, start: 4.1, end: 9.95, side: 'right', worldAnchor: [0.28, 1.66, 0.0] },
  { id: '2.8',  unit: 2, start: 4.2, end: 9.95, side: 'left',  worldAnchor: [-0.35, 1.65, 0.03] },
  { id: '2.3',  unit: 2, start: 4.3, end: 9.95, side: 'left',  worldAnchor: [0.0, 0.56, 0.0] },

  // Beat 3 (10-15s): Split Steel Rotor, Beater Bars & Distribution Scroll
  { id: '2.4',  unit: 2, start: 10.0, end: 14.95, side: 'left',  worldAnchor: [0.0, 1.12, 0.0] },
  { id: '2.3',  unit: 2, start: 10.1, end: 14.95, side: 'left',  worldAnchor: [0.0, 0.56, 0.0] },
  { id: '2.5',  unit: 2, start: 10.2, end: 14.95, side: 'right', worldAnchor: [0.21, 1.12, 0.0] },
  { id: '2.6',  unit: 2, start: 10.3, end: 14.95, side: 'right', worldAnchor: [0.31, 0.96, 0.0] },

  // Beat 4 (15-21s): Multifaceted Slotted Screen Cartridge, Resistance Bars & Weighted Flap
  { id: '2.6',  unit: 2, start: 15.0, end: 20.95, side: 'right', worldAnchor: [0.31, 1.12, 0.0] },
  { id: '2.7',  unit: 2, start: 15.1, end: 20.95, side: 'right', worldAnchor: [0.33, 1.25, 0.0] },
  { id: '2.8',  unit: 2, start: 15.2, end: 20.95, side: 'left',  worldAnchor: [-0.35, 1.65, 0.03] },
  { id: '2.4',  unit: 2, start: 15.3, end: 20.95, side: 'left',  worldAnchor: [0.0, 1.12, 0.0] },

  // Beat 5 (21-27s): Air Induction Fan, 75 kW Main Belt Drive & Base Frame
  { id: '2.9',  unit: 2, start: 21.0, end: 26.95, side: 'left',  worldAnchor: [-0.22, 0.26, 0.26] },
  { id: '2.3',  unit: 2, start: 21.1, end: 26.95, side: 'left',  worldAnchor: [0.0, 0.56, 0.0] },
  { id: '2.10', unit: 2, start: 21.2, end: 26.95, side: 'right', worldAnchor: [0.42, 0.28, -0.18] },
  { id: '2.7',  unit: 2, start: 21.3, end: 26.95, side: 'right', worldAnchor: [0.33, 1.25, 0.0] },

  // Beat 6 (27-30s): Full Satake VBF Wide Pullback
  { id: '2.1',  unit: 2, start: 27.0, end: 30.0, side: 'right', worldAnchor: [0.38, 1.92, 0.0] },
  { id: '2.6',  unit: 2, start: 27.1, end: 30.0, side: 'right', worldAnchor: [0.31, 1.12, 0.0] },
  { id: '2.8',  unit: 2, start: 27.1, end: 30.0, side: 'left',  worldAnchor: [-0.35, 1.65, 0.03] },
  { id: '2.9',  unit: 2, start: 27.2, end: 30.0, side: 'left',  worldAnchor: [-0.22, 0.26, 0.26] }
];

function getActiveBeatsCatalog() {
  const mode = getActiveCinematicMode();
  if (mode === 'elevator_69b') return ELEVATOR_ONLY_BEATS_METADATA;
  if (mode === 'satake_vbf') return SATAKE_ONLY_BEATS_METADATA;
  return CINEMATIC_BEATS_METADATA;
}

function getActiveCalloutSchedule() {
  const mode = getActiveCinematicMode();
  if (mode === 'elevator_69b') return ELEVATOR_ONLY_CALLOUT_SCHEDULE;
  if (mode === 'satake_vbf') return SATAKE_ONLY_CALLOUT_SCHEDULE;
  return MASTER_6BEAT_CALLOUT_SCHEDULE;
}

function getBeatMetadataAtTime(elapsed) {
  const catalog = getActiveBeatsCatalog();
  const clamped = Math.max(0, Math.min(CINEMATIC_TOTAL_DURATION - 0.001, elapsed));
  return catalog.find(b => clamped >= b.start && clamped < b.end) || catalog[catalog.length - 1];
}

// Guaranteed Callout Schedule across ALL 6 BEATS (0.0s to 30.0s) so every single second of every beat has 3-4 clear callouts!
// World-space anchor coordinates (`worldAnchor`) are explicitly verified against the connected process line (Unit 01 at X=0, Unit 02 at X=1.15 scale 0.72)
const MASTER_6BEAT_CALLOUT_SCHEDULE = [
  // --- BEAT 1 (0.0s - 4.0s): Hero Wide Shot of Both Machines (2 Unit 01 + 2 Unit 02 Callouts) ---
  { id: 'boot_feed',      unit: 1, start: 0.1, end: 3.9, side: 'left',  worldAnchor: [-0.11, 0.24, 0.0] },
  { id: 'trunking_legs',  unit: 1, start: 0.2, end: 3.9, side: 'left',  worldAnchor: [-0.06, 1.22, 0.0] },
  { id: '2.1',            unit: 2, start: 0.3, end: 3.9, side: 'right', worldAnchor: [1.42, 1.38, 0.0] },
  { id: '2.6',            unit: 2, start: 0.4, end: 3.9, side: 'right', worldAnchor: [1.15, 0.80, 0.0] },

  // --- BEAT 2 (4.0s - 10.0s): Unit 01 Intake, Tensioner & Vertical Climb ---
  { id: 'boot_feed',      unit: 1, start: 4.0, end: 7.1, side: 'left',  worldAnchor: [-0.11, 0.24, 0.0] },
  { id: 'boot_takeup',    unit: 1, start: 4.1, end: 7.1, side: 'right', worldAnchor: [0.05, 0.18, 0.0] },
  { id: 'cleanout_doors', unit: 1, start: 4.2, end: 7.1, side: 'right', worldAnchor: [0.06, 0.34, 0.0] },

  { id: 'trunking_legs',   unit: 1, start: 7.1, end: 9.95, side: 'left',  worldAnchor: [-0.06, 1.18, 0.0] },
  { id: 'antistatic_belt', unit: 1, start: 7.2, end: 9.95, side: 'left',  worldAnchor: [-0.06, 1.48, 0.0] },
  { id: 'deep_buckets',    unit: 1, start: 7.3, end: 9.95, side: 'right', worldAnchor: [-0.05, 1.32, 0.0] },
  { id: 'rotation_frame',  unit: 1, start: 7.4, end: 9.95, side: 'right', worldAnchor: [0.05, 1.05, 0.0] },

  // --- BEAT 3 (10.0s - 15.0s): Unit 01 Head Pulley, Drive & Centrifugal Discharge ---
  { id: 'split_hood',       unit: 1, start: 10.0, end: 14.95, side: 'left',  worldAnchor: [0.0, 2.30, 0.0] },
  { id: 'drive_motor',      unit: 1, start: 10.1, end: 14.95, side: 'left',  worldAnchor: [-0.12, 2.14, 0.0] },
  { id: 'crowned_pulley',   unit: 1, start: 10.2, end: 14.95, side: 'right', worldAnchor: [0.0, 2.22, 0.0] },
  { id: 'discharge_saddle', unit: 1, start: 10.3, end: 14.95, side: 'right', worldAnchor: [0.12, 2.12, 0.0] },

  // --- BEAT 4 (15.0s - 21.0s): Tracking Shot along Transfer Spout into Unit 02 Satake VBF ---
  { id: 'wear_plates', unit: 1, start: 15.0, end: 20.95, side: 'left',  worldAnchor: [0.18, 2.10, 0.0] },
  { id: '2.1',         unit: 2, start: 15.1, end: 20.95, side: 'right', worldAnchor: [1.42, 1.38, 0.0] },
  { id: '2.2',         unit: 2, start: 15.2, end: 20.95, side: 'right', worldAnchor: [1.35, 1.18, 0.0] },
  { id: '2.8',         unit: 2, start: 15.3, end: 20.95, side: 'left',  worldAnchor: [0.90, 1.16, 0.03] },

  // --- BEAT 5 (21.0s - 27.0s): Unit 02 Internals (X-Ray Cutaway of Rotor, Beaters, Screen & Shaft) ---
  { id: '2.4', unit: 2, start: 21.0, end: 24.1, side: 'left',  worldAnchor: [1.15, 0.84, 0.0] },
  { id: '2.3', unit: 2, start: 21.1, end: 24.1, side: 'left',  worldAnchor: [1.15, 0.42, 0.0] },
  { id: '2.5', unit: 2, start: 21.2, end: 24.1, side: 'right', worldAnchor: [1.28, 0.82, 0.0] },
  { id: '2.6', unit: 2, start: 21.3, end: 24.1, side: 'right', worldAnchor: [1.36, 0.72, 0.0] },

  { id: '2.7',  unit: 2, start: 24.1, end: 26.95, side: 'right', worldAnchor: [1.38, 0.90, 0.0] },
  { id: '2.9',  unit: 2, start: 24.2, end: 26.95, side: 'left',  worldAnchor: [0.99, 0.22, 0.18] },
  { id: '2.10', unit: 2, start: 24.3, end: 26.95, side: 'right', worldAnchor: [1.45, 0.22, -0.10] },

  // --- BEAT 6 (27.0s - 30.0s): Pull Back to Full Process Wide Shot & Finale ---
  { id: 'split_hood', unit: 1, start: 27.0, end: 30.0, side: 'left',  worldAnchor: [0.0, 2.28, 0.0] },
  { id: 'boot_feed',  unit: 1, start: 27.1, end: 30.0, side: 'left',  worldAnchor: [-0.11, 0.24, 0.0] },
  { id: '2.1',        unit: 2, start: 27.1, end: 30.0, side: 'right', worldAnchor: [1.42, 1.38, 0.0] },
  { id: '2.8',        unit: 2, start: 27.2, end: 30.0, side: 'right', worldAnchor: [0.90, 1.12, 0.03] }
];

const cinematicState = {
  active: false,
  cancelled: false,
  format: 'landscape', // 'landscape' (1920x1080 / 3840x2160) or 'portrait' (1080x1350)
  stageWidth: 1920,
  stageHeight: 1080,
  startTime: 0,
  elapsed: 0,
  lastElapsed: 0,
  compositeCanvas: null,
  compositeCtx: null,
  mediaRecorder: null,
  recordedChunks: [],
  selectedMimeType: '',
  logoImg: null,
  savedMachineId: null,
  savedCutaway: true,
  savedMotion: true,
  savedSpeed: 1.0,
  lastExportedMasterBlob: null,
  lastExportedEmailBlob: null
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

// Evaluate Catmull-Rom Spline Camera Path with Cubic Ease-In-Out per Beat + Gentle Steady Handheld Float
function evaluateSplineCameraAtTime(elapsed, isPortrait = false) {
  const beat = getBeatMetadataAtTime(elapsed);
  const localT = Math.max(0, Math.min(1, (elapsed - beat.start) / (beat.end - beat.start)));
  const easedU = cubicEaseInOut(localT);

  const camPts = beat.camKeyframes.map(pt => new THREE.Vector3(pt[0], pt[1], pt[2]));
  const lookPts = beat.lookKeyframes.map(pt => new THREE.Vector3(pt[0], pt[1], pt[2]));

  const camCurve = new THREE.CatmullRomCurve3(camPts, false, 'catmullrom', 0.5);
  const lookCurve = new THREE.CatmullRomCurve3(lookPts, false, 'catmullrom', 0.5);

  const pos = camCurve.getPoint(easedU);
  const target = lookCurve.getPoint(easedU);

  // Subtle, organic cinema-head float so the camera never feels robotic
  const floatX = Math.sin(elapsed * 0.85) * 0.012;
  const floatY = Math.cos(elapsed * 1.10) * 0.010;
  pos.x += floatX;
  pos.y += floatY;

  if (isPortrait) {
    // Pull back slightly in 4:5 vertical format so both machines fit with generous margins
    pos.z *= 1.18;
  }

  return { pos, target, beat };
}

// Deterministic Pose & Simulation Stepper for any timestamp `elapsed` (0.0s .. 30.0s)
function applyMasterTimelinePose(elapsed, isRecording = false) {
  const effectiveSimTime = elapsed * 1.25;

  // 1. Rotate all mechanical pulleys, screw feeders, fan impellers & degerminator rotors deterministically
  for (let i = 0; i < kinematicRotors.length; i++) {
    const item = kinematicRotors[i];
    if (item && item.mesh) {
      const angle = item.speed * effectiveSimTime;
      if (item.axis === 'x') item.mesh.rotation.x = angle;
      else if (item.axis === 'y') item.mesh.rotation.y = angle;
      else if (item.axis === 'z') item.mesh.rotation.z = angle;
    }
  }

  // 2. Advance all 58 Bucket Elevator buckets deterministically (Loaded on rising up-leg, tipping over head pulley, empty on return leg)
  if (kinematicBuckets.length > 0) {
    for (let i = 0; i < kinematicBuckets.length; i++) {
      const b = kinematicBuckets[i];
      if (!b || !b.mesh) continue;
      const initialPhase = i / kinematicBuckets.length;
      const p = (initialPhase + 0.14 * effectiveSimTime) % 1.0;

      if (p < 0.44) {
        const u = p / 0.44;
        b.mesh.position.set(-0.2605, 0.65 + u * 8.40, b.baseZ);
        b.mesh.rotation.set(0, 0, 0);
        if (b.grainFill) {
          b.grainFill.visible = true;
          b.grainFill.scale.set(1, 1, 1);
        }
      } else if (p < 0.50) {
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
        const u = (p - 0.50) / 0.44;
        b.mesh.position.set(0.2605, 9.05 - u * 8.40, b.baseZ);
        b.mesh.rotation.set(0, 0, Math.PI);
        if (b.grainFill) {
          b.grainFill.visible = false;
        }
      } else {
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

  // 3. Advance 7-Stage Instanced 3D Grain Flow deterministically
  updateInstancedGrainSimulation(effectiveSimTime, true);

  // 4. Ghosted X-Ray Cutaway Modulation so internal rotors, beaters & buckets shine clearly
  if (!isCutawayActive) setCutawayState(true);
  updateExplodedView(0);
  const recMode = getActiveCinematicMode();
  const isXrayBeat = recMode === 'satake_vbf'
    ? (elapsed >= 10.0 && elapsed < 21.0)
    : (elapsed >= 21.0 && elapsed < 27.0);
  cutawayGlassMeshes.forEach(glassMesh => {
    if (glassMesh && glassMesh.material) {
      glassMesh.material.opacity = isXrayBeat ? 0.18 : 0.26;
    }
  });

  // 5. Evaluate Catmull-Rom Spline Camera Position & Target
  const isPortrait = isRecording ? (cinematicState.format === 'portrait') : false;
  const { pos, target, beat } = evaluateSplineCameraAtTime(elapsed, isPortrait);

  if (camera && controls) {
    camera.position.copy(pos);
    controls.target.copy(target);
    camera.lookAt(controls.target);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld(true);
  }

  if (currentLoadedRoot) {
    currentLoadedRoot.updateMatrixWorld(true);
  }

  const phaseTag = document.getElementById('cinematicPhaseTag');
  if (phaseTag && beat) {
    phaseTag.textContent = beat.scrubberTitle;
  }
}

// Project a scheduled callout's verified 3D world anchor onto the fixed stage canvas (w x h)
function projectScheduledCalloutToStage(schedItem, calloutData, stageW, stageH) {
  if (!camera) return null;
  const tempV = new THREE.Vector3();

  if (schedItem && Array.isArray(schedItem.worldAnchor)) {
    tempV.set(schedItem.worldAnchor[0], schedItem.worldAnchor[1], schedItem.worldAnchor[2]);
  } else if (currentLoadedRoot && calloutData && calloutData.meshTarget) {
    const targetObj = currentLoadedRoot.getObjectByName(calloutData.meshTarget);
    if (targetObj) {
      targetObj.updateWorldMatrix(true, true);
      const box = new THREE.Box3().setFromObject(targetObj);
      if (!box.isEmpty()) {
        box.getCenter(tempV);
      }
    }
  } else {
    tempV.set(0, 1.2, 0);
  }

  tempV.project(camera);
  if (tempV.z > 1.0) return null;

  return {
    ax: THREE.MathUtils.clamp((tempV.x * 0.5 + 0.5) * stageW, stageW * 0.08, stageW * 0.92),
    ay: THREE.MathUtils.clamp((-(tempV.y * 0.5) + 0.5) * stageH, stageH * 0.12, stageH * 0.84)
  };
}

// ----------------------------------------------------------------------------
// COMPOSITE 2D STAGE RENDERER (CALLOUTS IN EVERY BEAT, FLOW TRACKER, SPEC COUNTERS, INTRO & END CARD)
// ----------------------------------------------------------------------------
function renderCompositeVideoFrame(elapsed) {
  if (!cinematicState.compositeCtx || !cinematicState.compositeCanvas || !renderer) return;

  const ctx = cinematicState.compositeCtx;
  const webglCanvas = renderer.domElement;

  const w = cinematicState.stageWidth || 1920;
  const h = cinematicState.stageHeight || 1080;
  const isPortrait = cinematicState.format === 'portrait';
  const scale = isPortrait ? (w / 1150) : (w / 1920);
  const currentBeat = getBeatMetadataAtTime(elapsed);
  const activeSpecUnit = currentBeat.specUnit || (elapsed < 15.0 ? 1 : 2);

  // 1. Copy fixed-size Three.js WebGL frame onto 2D composite stage
  ctx.drawImage(webglCanvas, 0, 0, w, h);

  // 2. Subtle Focus-Pull Radial Vignette & Color Grade (Teal Shadows, Warm Amber Highlights)
  if (currentBeat && Array.isArray(currentBeat.focusWorld) && camera) {
    const focusV = new THREE.Vector3(currentBeat.focusWorld[0], currentBeat.focusWorld[1], currentBeat.focusWorld[2]);
    focusV.project(camera);
    const fx = (focusV.x * 0.5 + 0.5) * w;
    const fy = (-(focusV.y * 0.5) + 0.5) * h;

    const focusGrad = ctx.createRadialGradient(fx, fy, Math.min(w, h) * 0.18, fx, fy, Math.max(w, h) * 0.72);
    focusGrad.addColorStop(0.0, 'rgba(0, 0, 0, 0.0)');
    focusGrad.addColorStop(0.65, 'rgba(6, 14, 20, 0.14)');
    focusGrad.addColorStop(1.0, 'rgba(4, 10, 16, 0.46)');
    ctx.fillStyle = focusGrad;
    ctx.fillRect(0, 0, w, h);
  }

  // Top & Bottom Broadcast Safe-Area Gradient Vignettes
  const topGrad = ctx.createLinearGradient(0, 0, 0, h * 0.16);
  topGrad.addColorStop(0, 'rgba(6, 11, 16, 0.76)');
  topGrad.addColorStop(1, 'rgba(6, 11, 16, 0)');
  ctx.fillStyle = topGrad;
  ctx.fillRect(0, 0, w, h * 0.16);

  const botGrad = ctx.createLinearGradient(0, h * 0.72, 0, h);
  botGrad.addColorStop(0, 'rgba(6, 11, 16, 0)');
  botGrad.addColorStop(1, 'rgba(6, 11, 16, 0.88)');
  ctx.fillStyle = botGrad;
  ctx.fillRect(0, h * 0.72, w, h * 0.28);

  // 3. TOP PROCESS-FLOW TRACKER BAR (Adapts dynamically to Unit 01, Unit 02, or Combined Process Line)
  {
    const recMode = getActiveCinematicMode();
    const stages = recMode === 'elevator_69b'
      ? ['01 INTAKE', '02 TENSION', '03 ELEVATE', '04 HEAD DRIVE', '05 DISCHARGE']
      : recMode === 'satake_vbf'
      ? ['01 MAGNET IN', '02 SCREW FEED', '03 ROTOR SCOUR', '04 SCREEN/AIR', '05 OVERTAILS']
      : ['01 INTAKE', '02 ELEVATE', '03 DISCHARGE', '04 DEGERM', '05 OUTPUT'];
    const activeIdx = currentBeat ? currentBeat.flowStageIndex : 0;
    const trackerW = isPortrait ? Math.round(w * 0.90) : Math.round(780 * scale);
    const trackerH = Math.round(40 * scale);
    const trackerX = Math.round((w - trackerW) * 0.5);
    const trackerY = Math.round(28 * scale);

    ctx.save();
    ctx.fillStyle = 'rgba(8, 15, 22, 0.88)';
    ctx.strokeStyle = 'rgba(45, 212, 191, 0.45)';
    ctx.lineWidth = Math.max(1.5, 1.8 * scale);
    ctx.beginPath();
    ctx.roundRect(trackerX, trackerY, trackerW, trackerH, Math.round(20 * scale));
    ctx.fill();
    ctx.stroke();

    const stepW = trackerW / stages.length;
    for (let s = 0; s < stages.length; s++) {
      const isCompleted = s < activeIdx;
      const isCurrent = s === activeIdx;
      const sx = trackerX + s * stepW;

      if (isCurrent) {
        ctx.fillStyle = 'rgba(20, 184, 166, 0.28)';
        ctx.beginPath();
        ctx.roundRect(sx + Math.round(4 * scale), trackerY + Math.round(4 * scale), stepW - Math.round(8 * scale), trackerH - Math.round(8 * scale), Math.round(16 * scale));
        ctx.fill();
      }

      ctx.font = `700 ${Math.round(12.5 * scale)}px "DM Mono", monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = isCurrent ? '#FBBF24' : (isCompleted ? '#4ADE80' : '#94A3B8');
      ctx.fillText(stages[s], sx + stepW * 0.5, trackerY + trackerH * 0.5);

      if (s < stages.length - 1) {
        ctx.fillStyle = 'rgba(148, 163, 184, 0.45)';
        ctx.font = `600 ${Math.round(11 * scale)}px "DM Mono", monospace`;
        ctx.fillText('→', sx + stepW, trackerY + trackerH * 0.5);
      }
    }
    ctx.restore();
  }

  // 4. Top-Left "SAGMA - 3D TRAINING TWIN" Badge (Visible 0-4.2s as requested, then cleanly fades out)
  if (elapsed < 4.2) {
    let badgeAlpha = 1.0;
    if (elapsed < 0.5) badgeAlpha = cubicEaseInOut(elapsed / 0.5);
    else if (elapsed > 3.2) badgeAlpha = 1.0 - cubicEaseInOut((elapsed - 3.2) / 1.0);

    const padX = Math.round(52 * scale);
    const padY = Math.round(24 * scale);
    ctx.save();
    ctx.globalAlpha = Math.max(0, Math.min(1, badgeAlpha));
    ctx.fillStyle = 'rgba(10, 18, 25, 0.92)';
    ctx.strokeStyle = 'rgba(74, 222, 128, 0.78)';
    ctx.lineWidth = Math.max(1.5, 2 * scale);
    const badgeW = Math.round(355 * scale);
    const badgeH = Math.round(52 * scale);
    ctx.beginPath();
    ctx.roundRect(padX, padY, badgeW, badgeH, Math.round(26 * scale));
    ctx.fill();
    ctx.stroke();

    if (cinematicState.logoImg && cinematicState.logoImg.complete && cinematicState.logoImg.naturalWidth > 0) {
      const logoSize = Math.round(36 * scale);
      ctx.drawImage(cinematicState.logoImg, padX + Math.round(10 * scale), padY + Math.round(8 * scale), logoSize, logoSize);
    }

    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `700 ${Math.round(15.5 * scale)}px "DM Sans", sans-serif`;
    ctx.fillText('SAGMA - 3D TRAINING TWIN', padX + Math.round(56 * scale), padY + Math.round(23 * scale));

    ctx.fillStyle = '#4ADE80';
    ctx.font = `600 ${Math.round(10.5 * scale)}px "DM Mono", monospace`;
    ctx.fillText('SOUTHERN AFRICAN GRAIN MILLING ACADEMY', padX + Math.round(56 * scale), padY + Math.round(40 * scale));
    ctx.restore();
  }

  // 5. TIMED CALLOUT LABELS IN EVERY SINGLE BEAT (0.0s - 30.0s, 3-4 at a time, Zero Overlap, Zero Crossing Lines)
  const activeItems = [];
  const activeSchedule = getActiveCalloutSchedule();
  for (let i = 0; i < activeSchedule.length; i++) {
    const sched = activeSchedule[i];
    if (elapsed >= sched.start && elapsed <= sched.end) {
      const catalog = sched.unit === 2 ? SATAKE_CALLOUTS : DIAGRAM_69B_CALLOUTS;
      const calloutObj = catalog.find(c => c.id === sched.id);
      if (!calloutObj) continue;

      // Smooth cubic ease-in (0.35s) and ease-out (0.35s)
      let alpha = 1.0;
      if (elapsed - sched.start < 0.35) {
        alpha = cubicEaseInOut((elapsed - sched.start) / 0.35);
      } else if (sched.end - elapsed < 0.35) {
        alpha = cubicEaseInOut((sched.end - elapsed) / 0.35);
      }

      const proj = projectScheduledCalloutToStage(sched, calloutObj, w, h);
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
      const minPillGap = Math.round(78 * scale);

      group.forEach((item) => {
        ctx.save();
        ctx.globalAlpha = Math.max(0.05, Math.min(1, item.alpha));

        const isUnit2 = item.sched.unit === 2;
        const accentColor = isUnit2 ? '#2DD4BF' : '#4ADE80';
        const accentBorder = isUnit2 ? 'rgba(45, 212, 191, 0.92)' : 'rgba(74, 222, 128, 0.92)';

        // Slide-in offset during reveal
        const slideOffset = (1 - item.alpha) * (side === 'left' ? -22 : 22) * scale;

        const fontTag = `700 ${Math.round(17 * scale)}px "DM Mono", monospace`;
        const fontTitle = `700 ${Math.round(18 * scale)}px "DM Sans", sans-serif`;
        const fontSub = `600 ${Math.round(12.5 * scale)}px "DM Mono", monospace`;

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
        const padX = Math.round(15 * scale);
        const badgeBoxW = Math.round(tagW + 16 * scale);
        const pillW = Math.round(padX + badgeBoxW + 13 * scale + contentW + padX);
        const pillH = Math.round(60 * scale);

        // Place pill cleanly in outer 5% title-safe margin so it NEVER covers the machines
        const marginX = isPortrait ? Math.round(36 * scale) : Math.round(58 * scale);
        const pillX = Math.round((side === 'left' ? marginX : (w - marginX - pillW)) + slideOffset);

        // Clamp Y within safe stage zone and enforce vertical spacing so pills never overlap
        let targetCenterY = Math.max(Math.round(135 * scale), Math.min(h - Math.round(240 * scale), item.ay));
        if (targetCenterY - prevPillY < minPillGap) {
          targetCenterY = prevPillY + minPillGap;
        }
        prevPillY = targetCenterY;
        const pillY = Math.round(targetCenterY - pillH * 0.5);

        // Route 2-segment CAD elbow leader line from machine anchor (ax, ay) to outer margin pill edge
        const attachX = side === 'left' ? (pillX + pillW) : pillX;
        const attachY = Math.round(pillY + pillH * 0.5);
        const elbowX = side === 'left'
          ? Math.min(item.ax - Math.round(24 * scale), attachX + Math.round(36 * scale))
          : Math.max(item.ax + Math.round(24 * scale), attachX - Math.round(36 * scale));

        // Leader Line Subtle Bloom & Crisp Stroke
        ctx.save();
        ctx.shadowColor = accentColor;
        ctx.shadowBlur = Math.round(8 * scale);
        ctx.beginPath();
        ctx.moveTo(item.ax, item.ay);
        ctx.lineTo(elbowX, attachY);
        ctx.lineTo(attachX, attachY);
        ctx.strokeStyle = accentBorder;
        ctx.lineWidth = Math.max(2, 2.4 * scale);
        ctx.stroke();
        ctx.restore();

        // Animated Pulsing 3D Anchor Ring + Dot on Machine Component
        const pulseR = (8.0 + Math.sin(elapsed * 6.0) * 2.5) * scale;
        ctx.beginPath();
        ctx.arc(item.ax, item.ay, Math.max(6, pulseR), 0, Math.PI * 2);
        ctx.fillStyle = isUnit2 ? 'rgba(45, 212, 191, 0.32)' : 'rgba(74, 222, 128, 0.32)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(item.ax, item.ay, Math.max(4, 4.8 * scale), 0, Math.PI * 2);
        ctx.fillStyle = accentColor;
        ctx.fill();
        ctx.lineWidth = Math.max(1.5, 2 * scale);
        ctx.strokeStyle = '#090D12';
        ctx.stroke();

        // Frosted-Glass Broadcast Callout Card Background
        ctx.fillStyle = 'rgba(8, 14, 21, 0.94)';
        ctx.strokeStyle = accentBorder;
        ctx.lineWidth = Math.max(1.8, 2.2 * scale);
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, pillW, pillH, Math.round(12 * scale));
        ctx.fill();
        ctx.stroke();

        // Tag Number Pill Box (01..13)
        const tagBoxX = pillX + padX;
        const tagBoxY = pillY + Math.round(11 * scale);
        const tagBoxH = pillH - Math.round(22 * scale);
        ctx.fillStyle = isUnit2 ? 'rgba(20, 184, 166, 0.28)' : 'rgba(22, 163, 74, 0.30)';
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
        const textStartX = tagBoxX + badgeBoxW + Math.round(13 * scale);
        ctx.textAlign = 'left';
        ctx.textBaseline = 'alphabetic';
        ctx.font = fontTitle;
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(titleText, textStartX, pillY + Math.round(24 * scale));

        ctx.font = fontSub;
        ctx.fillStyle = '#FBBF24';
        ctx.fillText(subText, textStartX, pillY + Math.round(44 * scale));

        ctx.restore();
      });
    };

    drawCalloutGroup(leftGroup, 'left');
    drawCalloutGroup(rightGroup, 'right');
  }

  // 6. LOWER-THIRD TITLE BAR + ANIMATED VERIFIED SPEC COUNTERS + PHASE PROGRESS BAR
  {
    const beatLocal = elapsed - currentBeat.start;
    const beatDur = currentBeat.end - currentBeat.start;

    let ltAlpha = 1.0;
    if (beatLocal < 0.35) ltAlpha = cubicEaseInOut(beatLocal / 0.35);
    else if (beatDur - beatLocal < 0.35) ltAlpha = cubicEaseInOut((beatDur - beatLocal) / 0.35);

    const slideY = Math.round((1.0 - ltAlpha) * 16 * scale);
    const padX = isPortrait ? Math.round(36 * scale) : Math.round(58 * scale);
    const cardH = Math.round(108 * scale);
    const cardX = padX;
    const cardY = h - cardH - Math.round(38 * scale) + slideY;
    const cardW = isPortrait ? (w - padX * 2) : Math.round(1240 * scale);

    ctx.save();
    ctx.globalAlpha = Math.max(0.05, Math.min(1, ltAlpha));

    // Lower-third glass card background
    ctx.fillStyle = 'rgba(8, 13, 19, 0.94)';
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.72)';
    ctx.lineWidth = Math.max(1.8, 2.2 * scale);
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, cardH, Math.round(12 * scale));
    ctx.fill();
    ctx.stroke();

    // Left Amber/Teal Accent Bar
    ctx.fillStyle = activeSpecUnit === 2 ? '#2DD4BF' : '#F59E0B';
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, Math.round(10 * scale), cardH, [Math.round(12 * scale), 0, 0, Math.round(12 * scale)]);
    ctx.fill();

    // Primary Unit Headline
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `700 ${Math.round((isPortrait ? 19 : 23.5) * scale)}px "DM Sans", sans-serif`;
    ctx.fillText(currentBeat.unitTitle, cardX + Math.round(26 * scale), cardY + Math.round(41 * scale));

    // High-Contrast Amber Phase Line
    ctx.fillStyle = '#FBBF24';
    ctx.font = `700 ${Math.round((isPortrait ? 13.5 : 17.5) * scale)}px "DM Mono", monospace`;
    ctx.fillText(currentBeat.phaseText, cardX + Math.round(26 * scale), cardY + Math.round(76 * scale));

    // Master Timeline Progress Bar along bottom edge of lower-third card
    const progW = (cardW - Math.round(20 * scale)) * Math.min(1, elapsed / CINEMATIC_TOTAL_DURATION);
    ctx.fillStyle = activeSpecUnit === 2 ? '#2DD4BF' : '#4ADE80';
    ctx.fillRect(cardX + Math.round(10 * scale), cardY + cardH - Math.round(5 * scale), progW, Math.round(5 * scale));

    // Animated Verified Telemetry Spec Counter Card on Bottom-Right (Landscape)
    if (!isPortrait) {
      const specW = Math.round(510 * scale);
      const specX = w - padX - specW;
      const specY = cardY;

      ctx.fillStyle = 'rgba(8, 15, 22, 0.94)';
      ctx.strokeStyle = activeSpecUnit === 2 ? 'rgba(45, 212, 191, 0.72)' : 'rgba(74, 222, 128, 0.72)';
      ctx.lineWidth = Math.max(1.8, 2.0 * scale);
      ctx.beginPath();
      ctx.roundRect(specX, specY, specW, cardH, Math.round(12 * scale));
      ctx.fill();
      ctx.stroke();

      const countUp = cubicEaseInOut(Math.min(1, beatLocal / 1.1));
      const colW = specW / 3;

      const specs = activeSpecUnit === 1
        ? [
            { label: 'NOMINAL THROUGHPUT', val: `${Math.round(35 * countUp)}–${Math.round(120 * countUp)} t/h` },
            { label: 'BELT VELOCITY', val: `${(1.8 * countUp).toFixed(1)}–${(2.8 * countUp).toFixed(1)} m/s` },
            { label: 'INSTALLED DRIVE', val: `${(7.5 * countUp).toFixed(1)}–${Math.round(22 * countUp)} kW` }
          ]
        : [
            { label: 'MAIZE THROUGHPUT', val: `${(4.5 * countUp).toFixed(1)}–${(12.0 * countUp).toFixed(1)} t/h` },
            { label: 'ROTOR SPEED', val: `${Math.round(750 * countUp)}–${Math.round(920 * countUp)} RPM` },
            { label: '4-POLE DRIVE', val: `${Math.round(37 * countUp)}–${Math.round(75 * countUp)} kW` }
          ];

      specs.forEach((sp, idx) => {
        const cx = specX + idx * colW + Math.round(18 * scale);
        ctx.fillStyle = '#94A3B8';
        ctx.font = `600 ${Math.round(10.5 * scale)}px "DM Mono", monospace`;
        ctx.fillText(sp.label, cx, specY + Math.round(36 * scale));

        ctx.fillStyle = activeSpecUnit === 2 ? '#2DD4BF' : '#4ADE80';
        ctx.font = `700 ${Math.round(20 * scale)}px "DM Mono", monospace`;
        ctx.fillText(sp.val, cx, specY + Math.round(72 * scale));
      });
    }

    ctx.restore();
  }

  // 7. OPENING INTRO TITLE BANNER (0.2s - 3.4s) & CLOSING BOARDROOM END CARD (27.4s - 30.0s)
  if (elapsed >= 0.2 && elapsed <= 3.4) {
    let introAlpha = 1.0;
    if (elapsed < 0.7) introAlpha = cubicEaseInOut((elapsed - 0.2) / 0.5);
    else if (elapsed > 2.6) introAlpha = 1.0 - cubicEaseInOut((elapsed - 2.6) / 0.8);

    ctx.save();
    ctx.globalAlpha = Math.max(0, Math.min(1, introAlpha));
    const pillW = Math.round(680 * scale);
    const pillH = Math.round(44 * scale);
    const pillX = Math.round((w - pillW) * 0.5);
    const pillY = h - Math.round(198 * scale);

    ctx.fillStyle = 'rgba(8, 15, 22, 0.86)';
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.65)';
    ctx.lineWidth = Math.max(1.5, 1.8 * scale);
    ctx.beginPath();
    ctx.roundRect(pillX, pillY, pillW, pillH, Math.round(27 * scale));
    ctx.fill();
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#FBBF24';
    ctx.font = `700 ${Math.round(15 * scale)}px "DM Mono", monospace`;
    const recMode = getActiveCinematicMode();
    const introBannerText = recMode === 'elevator_69b'
      ? 'EXECUTIVE BOARDROOM SHOWCASE • UNIT 01: INDUSTRIAL BUCKET ELEVATOR'
      : recMode === 'satake_vbf'
      ? 'EXECUTIVE BOARDROOM SHOWCASE • UNIT 02: SATAKE VBF MAIZE DEGERMER'
      : 'EXECUTIVE BOARDROOM SHOWCASE • UNIT 01 ELEVATOR & UNIT 02 SATAKE VBF';
    ctx.fillText(introBannerText, w * 0.5, pillY + pillH * 0.5);
    ctx.restore();
  }

  // Closing End Card Overlay (27.4s - 30.0s) with Round SAGMA Logo & [YOUR CALL TO ACTION]
  // Positioned cleanly in the bottom-left broadcast safe zone so the full 3D machine remains 100% unobstructed above!
  if (elapsed >= 27.4) {
    const endAlpha = cubicEaseInOut(Math.min(1, (elapsed - 27.4) / 0.75));
    ctx.save();
    ctx.globalAlpha = Math.max(0, Math.min(1, endAlpha));

    const padX = isPortrait ? Math.round(36 * scale) : Math.round(58 * scale);
    const boxW = isPortrait ? (w - padX * 2) : Math.round(1240 * scale);
    const boxH = Math.round(108 * scale);
    const boxX = padX;
    const boxY = h - boxH - Math.round(38 * scale);

    ctx.fillStyle = 'rgba(7, 13, 19, 1.0)';
    ctx.strokeStyle = 'rgba(45, 212, 191, 0.95)';
    ctx.lineWidth = Math.max(2, 2.5 * scale);
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxW, boxH, Math.round(12 * scale));
    ctx.fill();
    ctx.stroke();

    // Left Teal Accent Bar
    ctx.fillStyle = '#2DD4BF';
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, Math.round(10 * scale), boxH, [Math.round(12 * scale), 0, 0, Math.round(12 * scale)]);
    ctx.fill();

    if (cinematicState.logoImg && cinematicState.logoImg.complete && cinematicState.logoImg.naturalWidth > 0) {
      const lSize = Math.round(66 * scale);
      ctx.drawImage(cinematicState.logoImg, boxX + Math.round(26 * scale), boxY + Math.round((boxH - lSize) * 0.5), lSize, lSize);
    }

    const tx = boxX + Math.round(112 * scale);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `700 ${Math.round(22 * scale)}px "DM Sans", sans-serif`;
    ctx.fillText('SOUTHERN AFRICAN GRAIN MILLING ACADEMY • 3D DIGITAL TRAINING TWIN', tx, boxY + Math.round(36 * scale));

    const recMode = getActiveCinematicMode();
    const endSubText = recMode === 'elevator_69b'
      ? 'UNIT 01: INDUSTRIAL BUCKET ELEVATOR (DIN 22104) • BOARD OF DIRECTORS EDITION'
      : recMode === 'satake_vbf'
      ? 'UNIT 02: SATAKE VBF VERTICAL MAIZE DEGERMER • BOARD OF DIRECTORS EDITION'
      : 'UNIT 01 BUCKET ELEVATOR & UNIT 02 SATAKE VBF DEGERMER • BOARD OF DIRECTORS EDITION';
    ctx.fillStyle = '#2DD4BF';
    ctx.font = `600 ${Math.round(14 * scale)}px "DM Mono", monospace`;
    ctx.fillText(endSubText, tx, boxY + Math.round(63 * scale));

    ctx.fillStyle = '#FBBF24';
    ctx.font = `700 ${Math.round(15.5 * scale)}px "DM Mono", monospace`;
    ctx.fillText('[YOUR CALL TO ACTION] • Interactive 3D Curriculum & Mill Simulation', tx, boxY + Math.round(90 * scale));

    ctx.restore();
  }

  // 8. Smooth Starting Fade-In (0.0s -> 0.7s) and Ending Fade-Out (29.2s -> 30.0s)
  let fadeOverlayAlpha = 0.0;
  if (elapsed < 0.7) {
    fadeOverlayAlpha = 1.0 - cubicEaseInOut(elapsed / 0.7);
  } else if (elapsed >= 29.25) {
    fadeOverlayAlpha = cubicEaseInOut((elapsed - 29.25) / 0.75);
  }

  if (fadeOverlayAlpha > 0.005) {
    ctx.save();
    ctx.fillStyle = `rgba(7, 11, 16, ${Math.min(1, fadeOverlayAlpha).toFixed(3)})`;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
  }
}

function triggerBlobDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 8000);
}

// ----------------------------------------------------------------------------
// DETERMINISTIC FRAME-BY-FRAME WEBCODECS + MP4-MUXER PIPELINE (NO AUDIO)
// Produces BOTH Master (~24 Mbps) and Lighter Email Copy (12 Mbps) MP4s!
// ----------------------------------------------------------------------------
async function startCinematicShowcase(format = 'landscape') {
  if (cinematicState.active || !renderer || !scene || !camera) return;

  setTimelinePreviewPlaying(false);

  const isPortrait = format === 'portrait';
  const isUltra = currentQualityPreset === 'ultra' && !isPortrait;
  const stageW = isPortrait ? 1080 : (isUltra ? 3840 : 1920);
  const stageH = isPortrait ? 1350 : (isUltra ? 2160 : 1080);

  cinematicState.format = isPortrait ? 'portrait' : 'landscape';
  cinematicState.stageWidth = stageW;
  cinematicState.stageHeight = stageH;

  // Save user state & keep the currently selected machine active (never jump away from the user's selected machine!)
  const activeMachineId = currentMachineMeta ? currentMachineMeta.id : 'elevator_69b';
  cinematicState.savedMachineId = activeMachineId;
  cinematicState.recordingMode = (activeMachineId === 'satake_vbf')
    ? 'satake_vbf'
    : (activeMachineId === 'combined_process_line' ? 'combined_process_line' : 'elevator_69b');
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

  // Enter Cinematic UI Mode
  document.body.classList.add('cinematic-mode');
  const pill = document.getElementById('cinematicStatusPill');
  const ctaBtn = document.getElementById(isPortrait ? 'btnCinematicPortrait' : 'btnCinematicShowcase');
  if (pill) pill.classList.add('active');
  if (ctaBtn) ctaBtn.classList.add('recording');

  if (controls) controls.enabled = false;

  // Ensure the user's currently selected machine is loaded in the 3D scene
  if (!currentLoadedRoot) {
    const targetMeta = await EchoDB.get(activeMachineId) || FLEET_CATALOG.find(m => m.id === activeMachineId) || FLEET_CATALOG[0];
    await loadMachineTwin(targetMeta, { silent: true, skipCameraReset: true, skipHashUpdate: true });
  }

  if (grainParticleSystem) grainParticleSystem.visible = true;
  if (grainInstancedMesh) {
    grainInstancedMesh.visible = true;
    activeGrainCount = currentQualityPreset === 'safe' ? 360 : 650;
    grainInstancedMesh.count = activeGrainCount;
  }

  // Lock Three.js WebGLRenderer to exact Fixed Stage Size with pixelRatio = 1
  renderer.setPixelRatio(1);
  renderer.setSize(stageW, stageH, false);
  camera.aspect = stageW / stageH;
  camera.fov = isPortrait ? 40 : 38;
  camera.updateProjectionMatrix();

  renderer.compile(scene, camera);

  // Create Fixed-Size Composite 2D Canvas
  const compCanvas = document.createElement('canvas');
  compCanvas.width = stageW;
  compCanvas.height = stageH;
  const compCtx = compCanvas.getContext('2d', { alpha: false });
  if (compCtx) {
    compCtx.imageSmoothingEnabled = true;
    compCtx.imageSmoothingQuality = 'high';
  }

  cinematicState.compositeCanvas = compCanvas;
  cinematicState.compositeCtx = compCtx;
  cinematicState.cancelled = false;
  cinematicState.active = true;

  const canUseWebCodecs = typeof window.VideoEncoder === 'function' && typeof window.VideoFrame === 'function' && typeof window.Mp4Muxer !== 'undefined';

  if (canUseWebCodecs) {
    await runDeterministicWebCodecsExport(stageW, stageH, isPortrait);
  } else {
    await runFallbackMediaRecorderExport(stageW, stageH, isPortrait);
  }
}

async function runDeterministicWebCodecsExport(stageW, stageH, isPortrait) {
  const totalFrames = CINEMATIC_TOTAL_FRAMES; // 1,800 frames @ 60 fps = 30.00s exact
  const fps = CINEMATIC_FPS;
  const codecStr = (stageW > 1920 || stageH > 1080) ? 'avc1.640033' : 'avc1.64002A';

  // 1. Setup Master Muxer & Encoder (24 Mbps)
  const masterTarget = new Mp4Muxer.ArrayBufferTarget();
  const masterMuxer = new Mp4Muxer.Muxer({
    target: masterTarget,
    video: { codec: 'avc', width: stageW, height: stageH },
    fastStart: 'in-memory',
    firstTimestampBehavior: 'offset'
  });

  // 2. Setup Lighter Email Copy Muxer & Encoder (12 Mbps)
  const emailTarget = new Mp4Muxer.ArrayBufferTarget();
  const emailMuxer = new Mp4Muxer.Muxer({
    target: emailTarget,
    video: { codec: 'avc', width: stageW, height: stageH },
    fastStart: 'in-memory',
    firstTimestampBehavior: 'offset'
  });

  const masterEncoder = new VideoEncoder({
    output: (chunk, meta) => masterMuxer.addVideoChunk(chunk, meta),
    error: (err) => console.error('Master VideoEncoder error:', err)
  });

  const emailEncoder = new VideoEncoder({
    output: (chunk, meta) => emailMuxer.addVideoChunk(chunk, meta),
    error: (err) => console.error('Email VideoEncoder error:', err)
  });

  masterEncoder.configure({
    codec: codecStr,
    width: stageW,
    height: stageH,
    bitrate: 24_000_000,
    framerate: fps
  });

  emailEncoder.configure({
    codec: codecStr,
    width: stageW,
    height: stageH,
    bitrate: 12_000_000,
    framerate: fps
  });

  const timerEl = document.getElementById('cinematicTimerText');
  const fmtLabel = `${stageW}×${stageH}`;

  for (let frameIdx = 0; frameIdx < totalFrames; frameIdx++) {
    if (!cinematicState.active || cinematicState.cancelled) break;

    const elapsed = frameIdx / fps; // Exact deterministic timestamp in seconds (dt = 1/60s)
    cinematicState.elapsed = elapsed;

    // Step 3D scene, camera spline, buckets, rotors & grain flow deterministically
    applyMasterTimelinePose(elapsed, true);
    renderer.render(scene, camera);
    renderCompositeVideoFrame(elapsed);

    const timestampUs = Math.round(frameIdx * (1_000_000 / fps));
    const isKeyFrame = (frameIdx % 60 === 0);

    const vfMaster = new VideoFrame(cinematicState.compositeCanvas, { timestamp: timestampUs });
    masterEncoder.encode(vfMaster, { keyFrame: isKeyFrame });
    vfMaster.close();

    const vfEmail = new VideoFrame(cinematicState.compositeCanvas, { timestamp: timestampUs });
    emailEncoder.encode(vfEmail, { keyFrame: isKeyFrame });
    vfEmail.close();

    // Respect encoder queue backpressure so zero frames are ever dropped
    if (masterEncoder.encodeQueueSize > 12 || emailEncoder.encodeQueueSize > 12) {
      await Promise.all([masterEncoder.flush(), emailEncoder.flush()]);
    }

    if (frameIdx % 6 === 0) {
      if (timerEl) {
        const pct = Math.round(((frameIdx + 1) / totalFrames) * 100);
        timerEl.textContent = `DETERMINISTIC 60FPS EXPORT (${fmtLabel}) • ${formatMMSS(elapsed)} / 00:30 (${pct}%)`;
      }
      await new Promise(r => setTimeout(r, 0));
    }
  }

  if (!cinematicState.cancelled) {
    if (timerEl) timerEl.textContent = 'FINALIZING MASTER (24 Mbps) & EMAIL (12 Mbps) MP4 FILES...';
    await Promise.all([masterEncoder.flush(), emailEncoder.flush()]);
    masterEncoder.close();
    emailEncoder.close();
    masterMuxer.finalize();
    emailMuxer.finalize();

    const masterBlob = new Blob([masterTarget.buffer], { type: 'video/mp4' });
    const emailBlob = new Blob([emailTarget.buffer], { type: 'video/mp4' });

    cinematicState.lastExportedMasterBlob = masterBlob;
    cinematicState.lastExportedEmailBlob = emailBlob;
    window.__lastExportedMasterBlob = masterBlob;
    window.__lastExportedEmailBlob = emailBlob;

    const recMode = getActiveCinematicMode();
    const unitSlug = recMode === 'elevator_69b'
      ? 'Unit01-Bucket-Elevator'
      : recMode === 'satake_vbf'
      ? 'Unit02-Satake-VBF-Degermer'
      : 'Connected-Process-Line';
    const suffix = isPortrait ? '1080x1350-Vertical' : `${stageW}x${stageH}-60fps`;
    triggerBlobDownload(masterBlob, `SAGMA-${unitSlug}-30s-Master-24Mbps-${suffix}.mp4`);
    setTimeout(() => {
      triggerBlobDownload(emailBlob, `SAGMA-${unitSlug}-30s-Email-12Mbps-${suffix}.mp4`);
    }, 650);
  } else {
    try { masterEncoder.close(); } catch (e) {}
    try { emailEncoder.close(); } catch (e) {}
  }

  await stopCinematicShowcase(cinematicState.cancelled);
}

async function runFallbackMediaRecorderExport(stageW, stageH, isPortrait) {
  cinematicState.recordedChunks = [];
  cinematicState.startTime = performance.now();
  cinematicState.elapsed = 0;

  applyMasterTimelinePose(0, true);
  renderer.render(scene, camera);
  renderCompositeVideoFrame(0);

  try {
    const videoStream = cinematicState.compositeCanvas.captureStream(60);
    const mimeTypes = [
      'video/mp4;codecs=avc1.64002A',
      'video/mp4;codecs=avc1',
      'video/mp4',
      'video/webm;codecs=vp9',
      'video/webm'
    ];
    const selectedMimeType = mimeTypes.find(type => typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(type)) || '';
    cinematicState.selectedMimeType = selectedMimeType;

    const recOptions = { videoBitsPerSecond: 20_000_000 };
    if (selectedMimeType) recOptions.mimeType = selectedMimeType;

    const recorder = new MediaRecorder(videoStream, recOptions);
    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) cinematicState.recordedChunks.push(e.data);
    };
    recorder.onstop = () => {
      if (!cinematicState.cancelled && cinematicState.recordedChunks.length > 0) {
        const mime = cinematicState.selectedMimeType || 'video/mp4';
        const ext = mime.includes('webm') ? 'webm' : 'mp4';
        const blob = new Blob(cinematicState.recordedChunks, { type: mime });
        const suffix = isPortrait ? '1080x1350-Vertical' : '1920x1080-60fps';
        triggerBlobDownload(blob, `SAGMA-3D-Training-Twin-30s-Master-${suffix}.${ext}`);
      }
    };
    recorder.start(200);
    cinematicState.mediaRecorder = recorder;
  } catch (recErr) {
    console.warn('MediaRecorder fallback error:', recErr);
  }
}

async function stopCinematicShowcase(wasCancelled = false) {
  if (!cinematicState.active && !wasCancelled) return;

  cinematicState.active = false;
  cinematicState.cancelled = Boolean(wasCancelled);

  if (cinematicState.mediaRecorder && cinematicState.mediaRecorder.state !== 'inactive') {
    try {
      cinematicState.mediaRecorder.stop();
    } catch (e) {}
  }

  document.body.classList.remove('cinematic-mode');
  document.getElementById('cinematicStatusPill')?.classList.remove('active');
  document.getElementById('btnCinematicShowcase')?.classList.remove('recording');
  document.getElementById('btnCinematicPortrait')?.classList.remove('recording');

  if (camera) {
    camera.fov = 42;
    camera.updateProjectionMatrix();
  }
  if (renderer) {
    applyQualityPreset(currentQualityPreset);
  }
  if (controls) {
    controls.enabled = true;
  }

  const restoreId = cinematicState.savedMachineId || 'elevator_69b';
  if (!currentMachineMeta || currentMachineMeta.id !== restoreId) {
    const restoreMeta = await EchoDB.get(restoreId) || FLEET_CATALOG.find(m => m.id === restoreId) || FLEET_CATALOG[0];
    await loadMachineTwin(restoreMeta, { silent: true, skipCameraReset: true, skipHashUpdate: true });
  }

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

  // If deterministic WebCodecs export is running, it steps and renders frames inside its own loop
  if (cinematicState.active && !cinematicState.mediaRecorder) {
    return;
  }

  // If fallback real-time MediaRecorder is active
  if (cinematicState.active && cinematicState.mediaRecorder) {
    const elapsed = Math.max(0, (now - cinematicState.startTime) / 1000);
    cinematicState.elapsed = elapsed;
    if (elapsed >= CINEMATIC_TOTAL_DURATION) {
      stopCinematicShowcase(false);
      return;
    }
    applyMasterTimelinePose(elapsed, true);
    renderer.render(scene, camera);
    renderCompositeVideoFrame(elapsed);
    return;
  }

  // Interactive 30s Timeline Scrubber Preview / Presentation Mode Auto-Loop
  if (isTimelinePreviewPlaying) {
    timelinePreviewElapsed += delta;
    if (timelinePreviewElapsed >= CINEMATIC_TOTAL_DURATION) {
      timelinePreviewElapsed = 0.0; // Smooth loop in Presentation Mode & Preview
    }
    updateScrubberUI(timelinePreviewElapsed);
    applyMasterTimelinePose(timelinePreviewElapsed, false);
    updateCalloutPositions();
    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
    return;
  }

  // Standard Interactive Mode: Advance Live Mechanical Kinematics & Particle Streams
  const isLotoLocked = document.getElementById('lotoIndicator')?.classList.contains('locked');
  if (isLiveMotionActive && !isLotoLocked && driveSpeedMultiplier > 0) {
    for (let i = 0; i < kinematicRotors.length; i++) {
      const item = kinematicRotors[i];
      if (item && item.mesh) {
        const step = item.speed * driveSpeedMultiplier * delta;
        if (item.axis === 'x') item.mesh.rotation.x += step;
        else if (item.axis === 'y') item.mesh.rotation.y += step;
        else if (item.axis === 'z') item.mesh.rotation.z += step;
      }
    }

    if (kinematicBuckets.length > 0 && currentExplodeFactor < 0.02) {
      for (let i = 0; i < kinematicBuckets.length; i++) {
        const b = kinematicBuckets[i];
        if (!b || !b.mesh) continue;
        b.phase = (b.phase + 0.14 * driveSpeedMultiplier * delta) % 1.0;
        const p = b.phase;

        if (p < 0.44) {
          const u = p / 0.44;
          b.mesh.position.set(-0.2605, 0.65 + u * 8.40, b.baseZ);
          b.mesh.rotation.set(0, 0, 0);
          if (b.grainFill) {
            b.grainFill.visible = true;
            b.grainFill.scale.set(1, 1, 1);
          }
        } else if (p < 0.50) {
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
          const u = (p - 0.50) / 0.44;
          b.mesh.position.set(0.2605, 9.05 - u * 8.40, b.baseZ);
          b.mesh.rotation.set(0, 0, Math.PI);
          if (b.grainFill) {
            b.grainFill.visible = false;
          }
        } else {
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

    updateInstancedGrainSimulation(delta, false);
  }

  if (controls) {
    controls.update();
  }

  updateCalloutPositions();

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

  // 5. Check URL Hash Route or Load Default Connected Process Line (Unit 01 Bucket Elevator + Unit 02 Satake VBF)
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
