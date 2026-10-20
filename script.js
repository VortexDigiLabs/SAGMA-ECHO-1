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
    specPdf: "specs/Buhler_02_Maize_Degermer_Plansifter_Puromat.pdf",
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
    specPdf: "specs/Buhler_03_MHXM_Degermer_CombiCleaner_MTKB.pdf",
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
    specPdf: "specs/Buhler_03_MHXM_Degermer_CombiCleaner_MTKB.pdf",
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
    specPdf: "specs/Buhler_05_RollerMills_MDDK_MDDM_MDDO_Specs.pdf",
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
    specPdf: "specs/Buhler_06_RollerMills_MDDK_MDDM_MDDO_Scrapers.pdf",
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
    specPdf: "specs/Buhler_04_Antares_MDDR_MDDT_RollerMill.pdf",
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
    specPdf: "specs/Buhler_07_RollerMills_MDDR_MDDM_MDDO_GapControl.pdf",
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
    specPdf: "specs/Buhler_09_Plansifter_Sieve_Dims_MPAG_MPAJ_Sangati.pdf",
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
    specPdf: "specs/Buhler_08_NovaStar_MPAJ_Square_Plansifter.pdf",
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
    specPdf: "specs/Buhler_09_Plansifter_Sieve_Dims_MPAG_MPAJ_Sangati.pdf",
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
    specPdf: "specs/Satake_11_ST_Rotary_Sifter_Dimensions.pdf",
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
    specPdf: "specs/Buhler_10_Puromat_MQRF_Semolina_Purifier.pdf",
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
    specPdf: "specs/Buhler_02_Maize_Degermer_Plansifter_Puromat.pdf",
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
    specPdf: "specs/Buhler_02_Maize_Degermer_Plansifter_Puromat.pdf",
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
    specPdf: "specs/Buhler_03_MHXM_Degermer_CombiCleaner_MTKB.pdf",
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
    specPdf: "specs/Satake_12_PH_Grain_Cleaner_Dimensions.pdf",
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
    specPdf: "specs/Satake_12_PH_Grain_Cleaner_Dimensions.pdf",
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
    specPdf: "specs/Buhler_03_MHXM_Degermer_CombiCleaner_MTKB.pdf",
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
    specPdf: "specs/Buhler_01_Corn_Maize_Milling_Line.pdf",
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
    specPdf: "specs/Buhler_Corn_Maize_Milling_Brochure.pdf",
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
const DB_VERSION = 3;
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
      const writeTx = this.db.transaction([STORE_NAME], 'readwrite');
      const writeStore = writeTx.objectStore(STORE_NAME);
      for (const m of FLEET_CATALOG) {
        writeStore.put(m);
      }
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
let grainParticleSystem = null;
let grainParticlesData = [];
let cutawayGlassMeshes = [];

// Lighting References
let dirLight, fillLight, rimLight, ambientLight, groundGrid, shadowPlane, studioEnvTexture;

// Performance Telemetry
let frameCount = 0;
let lastTime = performance.now();
let lastFpsUpdate = performance.now();
let measuredFPS = 60.0;

function generateStudioEnvironment(rendererInstance) {
  try {
    const pmremGenerator = new THREE.PMREMGenerator(rendererInstance);
    pmremGenerator.compileEquirectangularShader();

    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(0x0b1015);

    // Overhead Softbox Strip
    const topStrip = new THREE.Mesh(
      new THREE.PlaneGeometry(18, 8),
      new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
    );
    topStrip.position.set(0, 10, 0);
    topStrip.rotation.x = Math.PI / 2;
    envScene.add(topStrip);

    // Warm Key Studio Strip (Brass/Gold specular enhancer)
    const warmKey = new THREE.Mesh(
      new THREE.PlaneGeometry(12, 10),
      new THREE.MeshBasicMaterial({ color: 0xffd699, side: THREE.DoubleSide })
    );
    warmKey.position.set(12, 4, 10);
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
      new THREE.PlaneGeometry(24, 24),
      new THREE.MeshBasicMaterial({ color: 0x0d3b26, side: THREE.DoubleSide })
    );
    floorBounce.position.set(0, -8, 0);
    floorBounce.rotation.x = -Math.PI / 2;
    envScene.add(floorBounce);

    const envRT = pmremGenerator.fromScene(envScene, 0.04);
    pmremGenerator.dispose();
    return envRT.texture;
  } catch (e) {
    console.warn('PMREM environment fallback:', e);
    return null;
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

  // 3. Cool Cyan Rim / Edge Light
  fillLight = new THREE.DirectionalLight(0x38BDF8, 1.35);
  fillLight.position.set(-9, 6, -7);
  scene.add(fillLight);

  // 4. Warm Brass Under-Fill Light
  rimLight = new THREE.DirectionalLight(0xF59E0B, 0.75);
  rimLight.position.set(0, -5, 6);
  scene.add(rimLight);

  // 5. Soft Ground Contact Shadow Plane
  const planeGeo = new THREE.PlaneGeometry(60, 60);
  const shadowMat = new THREE.ShadowMaterial({ opacity: 0.42 });
  shadowPlane = new THREE.Mesh(planeGeo, shadowMat);
  shadowPlane.rotation.x = -Math.PI / 2;
  shadowPlane.position.y = -0.005;
  shadowPlane.receiveShadow = true;
  scene.add(shadowPlane);

  // 6. Precision Museum CAD Ground Grid
  const isDark = document.body.classList.contains('studio-dark-mode');
  groundGrid = new THREE.GridHelper(24, 48, 0x16A34A, isDark ? 0x182620 : 0xCBD8CE);
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
      color: 0x064E30,
      metalness: 0.45,
      roughness: 0.28,
      envMapIntensity: 1.4,
      side: THREE.DoubleSide
    }),
    gunmetal: new THREE.MeshStandardMaterial({
      color: 0x1A2129,
      metalness: 0.85,
      roughness: 0.26,
      envMapIntensity: 1.5,
      side: THREE.DoubleSide
    }),
    darkCastIron: new THREE.MeshStandardMaterial({
      color: 0x11161B,
      metalness: 0.72,
      roughness: 0.45,
      envMapIntensity: 1.2,
      side: THREE.DoubleSide
    }),
    machinedSteel: new THREE.MeshStandardMaterial({
      color: 0xCFD8E3,
      metalness: 0.96,
      roughness: 0.14,
      envMapIntensity: 1.8,
      side: THREE.DoubleSide
    }),
    brushedChrome: new THREE.MeshStandardMaterial({
      color: 0xE2E8F0,
      metalness: 0.98,
      roughness: 0.08,
      envMapIntensity: 2.0,
      side: THREE.DoubleSide
    }),
    anodizedBrass: new THREE.MeshStandardMaterial({
      color: 0xD99B26,
      metalness: 0.94,
      roughness: 0.18,
      envMapIntensity: 1.9,
      side: THREE.DoubleSide
    }),
    bronzeBushing: new THREE.MeshStandardMaterial({
      color: 0xB87333,
      metalness: 0.88,
      roughness: 0.24,
      envMapIntensity: 1.6,
      side: THREE.DoubleSide
    }),
    sensorCyan: new THREE.MeshStandardMaterial({
      color: 0x0EA5E9,
      emissive: 0x0284C7,
      emissiveIntensity: 0.55,
      metalness: 0.5,
      roughness: 0.2
    }),
    safetyRed: new THREE.MeshStandardMaterial({
      color: 0xDC2626,
      metalness: 0.65,
      roughness: 0.28
    }),
    opticalGlass: new THREE.MeshPhysicalMaterial({
      color: 0x93C5FD,
      transmission: 0.85,
      opacity: 0.28,
      transparent: true,
      roughness: 0.06,
      metalness: 0.05,
      ior: 1.52,
      reflectivity: 0.9,
      envMapIntensity: 2.2,
      depthWrite: false,
      side: THREE.DoubleSide
    }),
    slottedCageGlass: new THREE.MeshPhysicalMaterial({
      color: 0xA7F3D0,
      transmission: 0.72,
      opacity: 0.34,
      transparent: true,
      roughness: 0.15,
      metalness: 0.2,
      envMapIntensity: 1.8,
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
function buildMuseumSatakeVBF() {
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
  kinematicRotors.push({ mesh: drivePulley, axis: 'z', speed: 6.5 });
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
  kinematicRotors.push({ mesh: impellerHub, axis: 'z', speed: 9.0 });

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
  kinematicRotors.push({ mesh: scrollGroup, axis: 'y', speed: 4.8 });
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
  kinematicRotors.push({ mesh: rotorGroup, axis: 'y', speed: 4.8 });
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

  // 11. Live Swirling Golden Maize Kernel & Blue Aspiration Airflow Particle Stream
  createSatakeParticleStream(root);

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
      speed: 2.8 + Math.random() * 2.2
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
// FLAGSHIP 2: ENHANCE BUCKET ELEVATOR WITH MUSEUM PBR, GLASS CUTAWAY & FLOW
// ============================================================================
function enhanceBucketElevatorRoot(gltfRoot) {
  const P = createMuseumPalette();

  gltfRoot.traverse(child => {
    if (!child.isMesh) return;
    const n = (child.name || '').toLowerCase();

    if (n.includes('pulley') || n.includes('flange') || n.includes('takeup_screw')) {
      child.material = P.anodizedBrass.clone();
      if (n.includes('pulley')) {
        kinematicRotors.push({ mesh: child, axis: 'z', speed: 3.5 });
      }
    } else if (n.includes('bucket_')) {
      child.material = P.brushedChrome.clone();
    } else if (n.includes('shaft') || n.includes('bearing')) {
      child.material = P.machinedSteel.clone();
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

  // Add Live Ascending & Centrifugal Discharge Grain Stream in Elevator
  const count = 360;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  grainParticlesData = [];

  const colorGold = new THREE.Color(0xFBBF24);
  const colorEmerald = new THREE.Color(0x34D399);

  for (let i = 0; i < count; i++) {
    const t = Math.random(); // 0..1 path progress from boot up to head discharge
    const c = (i % 4 === 0) ? colorEmerald : colorGold;
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
    grainParticlesData.push({
      mode: 'elevator',
      t,
      jitterX: (Math.random() - 0.5) * 0.08,
      jitterZ: (Math.random() - 0.5) * 0.08,
      speed: 0.28 + Math.random() * 0.12
    });
  }

  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.032,
    vertexColors: true,
    transparent: true,
    opacity: 0.92,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  grainParticleSystem = new THREE.Points(geo, mat);
  grainParticleSystem.name = 'Elevator_Live_Grain_Stream';
  grainParticleSystem.userData.noExplode = true;
  gltfRoot.add(grainParticleSystem);
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
    let resolved = false;
    if (currentLoadedRoot && item.data.meshTarget) {
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
      const anchor = item.data.anchor || (item.data.camPreset && item.data.camPreset.look) || [0, 1.2, 0];
      tempV.set(anchor[0], anchor[1], anchor[2]);
    }

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
    if (scene) {
      scene.background = new THREE.Color(isDark ? 0x090D11 : 0xEAF0EB);
      scene.fog.color = new THREE.Color(isDark ? 0x090D11 : 0xEAF0EB);
    }
    if (groundGrid && groundGrid.material) {
      groundGrid.material.opacity = isDark ? 0.35 : 0.55;
    }
  });

  // 30s Cinematic Showcase & MP4 Video Exporter Triggers
  document.getElementById('btnCinematicShowcase')?.addEventListener('click', () => {
    if (cinematicState.active) {
      stopCinematicShowcase(true);
    } else {
      startCinematicShowcase();
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
// 21B. 30-SECOND CINEMATIC FLYTHROUGH & HIGH-BITRATE MP4 VIDEO EXPORTER
// ============================================================================
const CINEMATIC_TOTAL_DURATION = 30.0; // seconds (15s Bucket Elevator + 15s Satake VBF)

const cinematicState = {
  active: false,
  cancelled: false,
  startTime: 0,
  elapsed: 0,
  phase: 0, // 1 = Bucket Elevator (0-15s), 2 = Satake VBF (15-30s)
  switchingPhase2: false,
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

// Preload SAGMA round emblem for composite video watermark
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

async function startCinematicShowcase() {
  if (cinematicState.active || !renderer || !scene || !camera) return;

  // Save user state to restore cleanly after showcase
  cinematicState.savedMachineId = currentMachineMeta ? currentMachineMeta.id : 'satake_vbf';
  cinematicState.savedCutaway = isCutawayActive;
  cinematicState.savedMotion = isLiveMotionActive;
  cinematicState.savedSpeed = driveSpeedMultiplier;

  // Ensure LOTO is unlocked and Live Motion is active at vibrant speed
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

  // Enter Cinematic UI Mode (Hides non-essential menus, shows floating status pill)
  document.body.classList.add('cinematic-mode');
  const pill = document.getElementById('cinematicStatusPill');
  const ctaBtn = document.getElementById('btnCinematicShowcase');
  if (pill) pill.classList.add('active');
  if (ctaBtn) ctaBtn.classList.add('recording');

  // Disable manual OrbitControls during 30s sequence
  if (controls) controls.enabled = false;

  // Resize renderer after header hides so viewport fills full screen cleanly
  onWindowResize();

  // Load Phase 1 Machine: Unit 01 Bucket Elevator (0.0s - 15.0s)
  const elevatorMeta = await EchoDB.get('elevator_69b') || FLEET_CATALOG.find(m => m.id === 'elevator_69b') || FLEET_CATALOG[0];
  await loadMachineTwin(elevatorMeta, { silent: true, skipCameraReset: true, skipHashUpdate: true });
  if (grainParticleSystem) grainParticleSystem.visible = true;
  // Start 0s-10s with solid/semi-cutaway, then trigger full cutaway/X-ray at 10s
  setCutawayState(false);
  updateExplodedView(0);

  // Set initial camera at low wide angle near boot section (0.0s)
  camera.position.set(1.65, 0.32, 2.05);
  if (controls) {
    controls.target.set(0, 0.35, 0);
    controls.update();
  } else {
    camera.lookAt(0, 0.35, 0);
  }
  renderer.render(scene, camera);

  // Create Composite 2D Canvas matching WebGL canvas pixel dimensions for 60 FPS capture + lower-third titles
  const webglCanvas = renderer.domElement;
  const compCanvas = document.createElement('canvas');
  compCanvas.width = webglCanvas.width;
  compCanvas.height = webglCanvas.height;
  const compCtx = compCanvas.getContext('2d');

  cinematicState.compositeCanvas = compCanvas;
  cinematicState.compositeCtx = compCtx;
  cinematicState.recordedChunks = [];
  cinematicState.cancelled = false;
  cinematicState.phase = 1;
  cinematicState.switchingPhase2 = false;
  cinematicState.startTime = performance.now();
  cinematicState.elapsed = 0;
  cinematicState.active = true;

  // Draw first composite frame before starting stream
  renderCompositeVideoFrame(0);

  // Initialize MediaRecorder at 60 FPS with highest supported MP4 H.264/AVC codec first
  try {
    const stream = compCanvas.captureStream(60);
    const mimeTypes = [
      'video/mp4;codecs=avc1.42E01E,mp4a.40.2',
      'video/mp4;codecs=avc1',
      'video/mp4',
      'video/webm;codecs=vp9',
      'video/webm'
    ];
    const selectedMimeType = mimeTypes.find(type => typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(type)) || '';
    cinematicState.selectedMimeType = selectedMimeType;

    const recOptions = { videoBitsPerSecond: 16000000 }; // 16 Mbps high-bitrate studio capture
    if (selectedMimeType) {
      recOptions.mimeType = selectedMimeType;
    }

    const recorder = new MediaRecorder(stream, recOptions);
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

async function triggerPhase2SatakeTransition() {
  if (cinematicState.switchingPhase2 || !cinematicState.active) return;
  cinematicState.switchingPhase2 = true;
  cinematicState.phase = 2;

  const phaseTag = document.getElementById('cinematicPhaseTag');
  if (phaseTag) phaseTag.textContent = 'UNIT 02: SATAKE VBF DEGERMER';

  const satakeMeta = await EchoDB.get('satake_vbf') || FLEET_CATALOG.find(m => m.id === 'satake_vbf') || FLEET_CATALOG[0];
  await loadMachineTwin(satakeMeta, { silent: true, skipCameraReset: true, skipHashUpdate: true });
  if (grainParticleSystem) grainParticleSystem.visible = true;
  // Start Hero Orbit (15s-20s) with solid emerald casing, then activate cutaway at 20s
  setCutawayState(false);
  updateExplodedView(0);
}

function updateCinematicChoreography(now) {
  if (!cinematicState.active) return;

  const elapsed = (now - cinematicState.startTime) / 1000;
  cinematicState.elapsed = elapsed;

  // Update Floating Status Pill Countdown
  const timerEl = document.getElementById('cinematicTimerText');
  if (timerEl) {
    timerEl.textContent = `Recording Showcase: ${formatMMSS(elapsed)} / 00:30`;
  }

  if (elapsed >= CINEMATIC_TOTAL_DURATION) {
    stopCinematicShowcase(false);
    return;
  }

  // ==========================================================================
  // PHASE 1: BUCKET ELEVATOR (0.0s to 15.0s)
  // ==========================================================================
  if (elapsed < 15.0) {
    const phaseTag = document.getElementById('cinematicPhaseTag');
    if (phaseTag && phaseTag.textContent !== 'UNIT 01: BUCKET ELEVATOR') {
      phaseTag.textContent = 'UNIT 01: BUCKET ELEVATOR';
    }

    if (elapsed < 5.0) {
      // 0s - 5s (Establishing Rise): Low wide angle near boot section, smoothly craning upward toward head section
      const u = cubicEaseInOut(elapsed / 5.0);
      const angle = THREE.MathUtils.lerp(0.62, 0.28, u);
      const radius = THREE.MathUtils.lerp(2.45, 1.95, u);
      const camY = THREE.MathUtils.lerp(0.32, 2.28, u);
      const lookY = THREE.MathUtils.lerp(0.32, 2.12, u);

      camera.position.set(Math.sin(angle) * radius, camY, Math.cos(angle) * radius);
      controls.target.set(0, lookY, 0);
    } else if (elapsed < 10.0) {
      // 5s - 10s (Head & Discharge Orbit): Slowly orbit 180 degrees around head pulley & centrifugal discharge chute
      const u = cubicEaseInOut((elapsed - 5.0) / 5.0);
      const angle = THREE.MathUtils.lerp(0.28, 0.28 + Math.PI, u);
      const radius = THREE.MathUtils.lerp(1.95, 1.55, Math.sin(u * Math.PI));
      const camY = THREE.MathUtils.lerp(2.28, 2.42, Math.sin(u * Math.PI));
      const lookY = THREE.MathUtils.lerp(2.12, 2.22, u);

      camera.position.set(Math.sin(angle) * radius, camY, Math.cos(angle) * radius);
      controls.target.set(0.04, lookY, 0);
    } else {
      // 10s - 15s (Internal Cutaway Pull-Back): Trigger optical glass cutaway + subtle explode to reveal belt/buckets & pull back to full profile
      if (!isCutawayActive) {
        setCutawayState(true);
      }
      const u = cubicEaseInOut((elapsed - 10.0) / 5.0);
      const angle = THREE.MathUtils.lerp(0.28 + Math.PI, Math.PI * 2 + 0.35, u);
      const radius = THREE.MathUtils.lerp(1.65, 3.45, u);
      const camY = THREE.MathUtils.lerp(2.35, 1.32, u);
      const lookY = THREE.MathUtils.lerp(2.18, 1.20, u);

      // Subtle 18% radial cutaway separation so internal buckets & grain stream shine clearly
      const explodeAmt = Math.sin(u * Math.PI) * 0.18;
      updateExplodedView(explodeAmt);

      camera.position.set(Math.sin(angle) * radius, camY, Math.cos(angle) * radius);
      controls.target.set(0, lookY, 0);
    }
  }
  // ==========================================================================
  // PHASE 2: TRANSITION & SATAKE VBF DEGERMER (15.0s to 30.0s)
  // ==========================================================================
  else {
    if (cinematicState.phase === 1 && !cinematicState.switchingPhase2) {
      triggerPhase2SatakeTransition();
    }

    const p2Time = elapsed - 15.0;

    if (p2Time < 5.0) {
      // 15s - 20s (Hero Orbit): Start from front-quarter hero angle and orbit smoothly around main chassis & conditioner housing
      const u = cubicEaseInOut(p2Time / 5.0);
      const angle = THREE.MathUtils.lerp(-0.55, 1.35, u);
      const radius = THREE.MathUtils.lerp(2.85, 2.45, u);
      const camY = THREE.MathUtils.lerp(1.55, 1.82, u);
      const lookY = THREE.MathUtils.lerp(0.95, 1.08, u);

      camera.position.set(Math.sin(angle) * radius, camY, Math.cos(angle) * radius);
      controls.target.set(0, lookY, 0);
    } else if (p2Time < 10.0) {
      // 20s - 25s (Close-Up Internal Inspection): Dolly in toward cylindrical screen & decorticating rotor assembly, activating cutaway view
      if (!isCutawayActive) {
        setCutawayState(true);
      }
      const u = cubicEaseInOut((p2Time - 5.0) / 5.0);
      const angle = THREE.MathUtils.lerp(1.35, 0.25, u);
      const radius = THREE.MathUtils.lerp(2.45, 1.32, u);
      const camY = THREE.MathUtils.lerp(1.82, 1.18, u);
      const lookY = THREE.MathUtils.lerp(1.08, 1.02, u);

      // Subtle radial screen separation to expose spinning beater bars & maize vortex
      const explodeAmt = Math.sin(u * Math.PI) * 0.22;
      updateExplodedView(explodeAmt);

      camera.position.set(Math.sin(angle) * radius, camY, Math.cos(angle) * radius);
      controls.target.set(0, lookY, 0);
    } else {
      // 25s - 30s (Final Pull-Back & Resolve): Pull back to balanced, dramatic three-quarter overview and hold briefly for final frame at 30.0s
      if (!isCutawayActive) {
        setCutawayState(true);
      }
      // Reach final dramatic pose at 28.8s and hold rock-steady through 30.0s
      const pullProgress = Math.min(1.0, (p2Time - 10.0) / 3.8);
      const u = cubicEaseInOut(pullProgress);
      const angle = THREE.MathUtils.lerp(0.25, 0.68, u);
      const radius = THREE.MathUtils.lerp(1.32, 2.75, u);
      const camY = THREE.MathUtils.lerp(1.18, 1.72, u);
      const lookY = THREE.MathUtils.lerp(1.02, 1.05, u);

      updateExplodedView(0);

      camera.position.set(Math.sin(angle) * radius, camY, Math.cos(angle) * radius);
      controls.target.set(0, lookY, 0);
    }
  }

  camera.lookAt(controls.target);
}

function renderCompositeVideoFrame(elapsed) {
  if (!cinematicState.active || !cinematicState.compositeCtx || !cinematicState.compositeCanvas || !renderer) return;

  const ctx = cinematicState.compositeCtx;
  const canvas = cinematicState.compositeCanvas;
  const webglCanvas = renderer.domElement;

  if (canvas.width !== webglCanvas.width || canvas.height !== webglCanvas.height) {
    canvas.width = webglCanvas.width;
    canvas.height = webglCanvas.height;
  }

  const w = canvas.width;
  const h = canvas.height;
  const scale = Math.max(0.75, Math.min(w / 1920, 1.5));

  // 1. Copy live Three.js WebGL frame onto 2D composite canvas
  ctx.drawImage(webglCanvas, 0, 0, w, h);

  // 2. Subtle Cinematic Vignette & Bottom Gradient for Typography Legibility
  const grad = ctx.createLinearGradient(0, h * 0.72, 0, h);
  grad.addColorStop(0, 'rgba(9, 13, 18, 0)');
  grad.addColorStop(1, 'rgba(9, 13, 18, 0.78)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, h * 0.72, w, h * 0.28);

  // 3. Top-Left SAGMA Brand Watermark Badge
  const padX = Math.round(36 * scale);
  const padY = Math.round(32 * scale);
  ctx.save();
  ctx.fillStyle = 'rgba(13, 21, 28, 0.82)';
  ctx.strokeStyle = 'rgba(22, 163, 74, 0.55)';
  ctx.lineWidth = Math.max(1.5, 2 * scale);
  const badgeW = Math.round(340 * scale);
  const badgeH = Math.round(54 * scale);
  ctx.beginPath();
  ctx.roundRect(padX, padY, badgeW, badgeH, Math.round(27 * scale));
  ctx.fill();
  ctx.stroke();

  if (cinematicState.logoImg && cinematicState.logoImg.complete && cinematicState.logoImg.naturalWidth > 0) {
    const logoSize = Math.round(38 * scale);
    ctx.drawImage(cinematicState.logoImg, padX + Math.round(10 * scale), padY + Math.round(8 * scale), logoSize, logoSize);
  }

  ctx.fillStyle = '#F1F7F3';
  ctx.font = `700 ${Math.round(16 * scale)}px "DM Sans", sans-serif`;
  ctx.fillText('SAGMA ECHO • 3D TRAINING TWIN', padX + Math.round(58 * scale), padY + Math.round(25 * scale));

  ctx.fillStyle = '#4ADE80';
  ctx.font = `600 ${Math.round(11 * scale)}px "DM Mono", monospace`;
  ctx.fillText('SOUTHERN AFRICAN GRAIN MILLING ACADEMY', padX + Math.round(58 * scale), padY + Math.round(42 * scale));
  ctx.restore();

  // 4. Lower-Third Title Card (0s-15s Bucket Elevator | 15s-30s Satake VBF Degermer)
  const isPhase1 = elapsed < 15.0;
  const localT = isPhase1 ? elapsed : (elapsed - 15.0);
  // Smooth fade-in during first 0.7s and fade-out during last 0.6s of each 15s phase
  let alpha = 1.0;
  if (localT < 0.7) alpha = localT / 0.7;
  else if (localT > 14.4) alpha = Math.max(0, (15.0 - localT) / 0.6);

  const primaryTitle = isPhase1
    ? 'UNIT 01: BUCKET ELEVATOR | Vertical Grain Conveying System'
    : 'UNIT 02: SATAKE VBF DEGERMER | Maize Conditioning & Degerming';

  let subCaption = '';
  if (isPhase1) {
    if (elapsed < 5.0) subCaption = 'PHASE 01 • BOOT INLET HOPPER & VERTICAL CASING ESTABLISHING RISE';
    else if (elapsed < 10.0) subCaption = 'PHASE 02 • HEAD PULLEY DRIVE & CENTRIFUGAL DISCHARGE ORBIT';
    else subCaption = 'PHASE 03 • OPTICAL CUTAWAY & LIVE GRAIN CONVEYING PROFILE';
  } else {
    const p2 = elapsed - 15.0;
    if (p2 < 5.0) subCaption = 'PHASE 01 • HERO ORBIT — 75 KW DRIVE & CONDITIONER CHASSIS';
    else if (p2 < 10.0) subCaption = 'PHASE 02 • INTERNAL CUTAWAY — SLOTTED SCREEN & DECORTICATING ROTOR';
    else subCaption = 'PHASE 03 • FULL INSTRUMENT BENCH OVERVIEW & ASPIRATION FLOW';
  }

  ctx.save();
  ctx.globalAlpha = Math.max(0.05, Math.min(1, alpha));

  const cardX = padX;
  const cardH = Math.round(86 * scale);
  const cardY = h - cardH - Math.round(38 * scale);
  const cardW = Math.min(w - padX * 2, Math.round(920 * scale));

  // Lower-third glass card background
  ctx.fillStyle = 'rgba(9, 14, 20, 0.86)';
  ctx.strokeStyle = 'rgba(251, 191, 36, 0.45)';
  ctx.lineWidth = Math.max(1.5, 2 * scale);
  ctx.beginPath();
  ctx.roundRect(cardX, cardY, cardW, cardH, Math.round(10 * scale));
  ctx.fill();
  ctx.stroke();

  // Left anodized brass/emerald accent bar
  ctx.fillStyle = isPhase1 ? '#F59E0B' : '#16A34A';
  ctx.beginPath();
  ctx.roundRect(cardX, cardY, Math.round(8 * scale), cardH, [Math.round(10 * scale), 0, 0, Math.round(10 * scale)]);
  ctx.fill();

  // Lower-third Headline
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `700 ${Math.round(23 * scale)}px "DM Sans", sans-serif`;
  ctx.fillText(primaryTitle, cardX + Math.round(26 * scale), cardY + Math.round(38 * scale));

  // Lower-third Technical Sub-Caption
  ctx.fillStyle = '#FBBF24';
  ctx.font = `600 ${Math.round(13 * scale)}px "DM Mono", monospace`;
  ctx.fillText(subCaption, cardX + Math.round(26 * scale), cardY + Math.round(64 * scale));

  // Progress Bar along bottom edge of lower-third card
  const progW = (cardW - Math.round(16 * scale)) * Math.min(1, elapsed / CINEMATIC_TOTAL_DURATION);
  ctx.fillStyle = '#4ADE80';
  ctx.fillRect(cardX + Math.round(8 * scale), cardY + cardH - Math.round(4 * scale), progW, Math.round(4 * scale));

  ctx.restore();

  // 5. Transition Flash at 15.0s Whip-Pan Cut
  const distToCut = Math.abs(elapsed - 15.0);
  if (distToCut < 0.35) {
    const flashAlpha = (1 - distToCut / 0.35) * 0.45;
    ctx.save();
    ctx.fillStyle = `rgba(255, 255, 255, ${flashAlpha.toFixed(3)})`;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
  }
}

function exportRecordedShowcaseVideo() {
  const mime = cinematicState.selectedMimeType || 'video/mp4';
  const blob = new Blob(cinematicState.recordedChunks, { type: mime });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'SAGMA-ECHO-30s-Cinematic-Showcase.mp4';
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

  // Restore UI & OrbitControls immediately
  document.body.classList.remove('cinematic-mode');
  document.getElementById('cinematicStatusPill')?.classList.remove('active');
  document.getElementById('btnCinematicShowcase')?.classList.remove('recording');

  if (controls) {
    controls.enabled = true;
  }

  // Restore user's speed & cutaway settings
  driveSpeedMultiplier = cinematicState.savedSpeed || 1.0;
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

  // Advance Live Mechanical Kinematics & Particle Streams (if not LOTO locked)
  const isLotoLocked = document.getElementById('lotoIndicator')?.classList.contains('locked');
  if (isLiveMotionActive && !isLotoLocked && driveSpeedMultiplier > 0) {
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

    // 2. Update internal grain & aspiration airflow particle streams
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

  // Update 3D Callout Positions in Viewport
  if (!cinematicState.active) {
    updateCalloutPositions();
  }

  // Render Scene
  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }

  // Draw Composite 2D Video Frame (WebGL + Lower-Third Title Cards) if Recording
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

  // 5. Check URL Hash Route or Load Default Machine Twin (Satake VBF or Bucket Elevator)
  const hash = window.location.hash;
  let initialMachine = null;
  if (hash.startsWith('#machine/')) {
    const id = hash.replace('#machine/', '');
    initialMachine = await EchoDB.get(id);
  }

  if (!initialMachine) {
    initialMachine = await EchoDB.get('satake_vbf') || await EchoDB.get('elevator_69b') || FLEET_CATALOG[0];
  }

  // 6. Launch Initial 3D Twin Workspace
  await loadMachineTwin(initialMachine);

  console.log('SAGMA ECHO Unified V2 Ready.');
});
