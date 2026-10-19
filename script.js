// ============================================================================
// SAGMA ECHO - Digital Twin Studio Engine
// Integrated Architecture with Central Asset Library, IndexedDB,
// 3D Callouts, Calculations Engine, and OSHA/SAGMA LOTO State Machine.
// ============================================================================

// 1. ABSOLUTE TOP PRIORITY: BLOCK BROWSER DEFAULT DRAG & DROP FILE DOWNLOADS
['dragover', 'dragenter', 'dragleave', 'drop'].forEach(evt => {
    window.addEventListener(evt, e => { e.preventDefault(); e.stopPropagation(); }, false);
    document.addEventListener(evt, e => { e.preventDefault(); e.stopPropagation(); }, false);
});

// 2. DATASETS
const DIAGRAM_69B_CALLOUTS = [
  {
    "tag": "01",
    "id": "split_hood",
    "meshTarget": "Casing_Head_SplitHood_Removable",
    "title": "Split Removable Upper Hood",
    "section": "Head Assembly",
    "source": "SAGMA Diagram 69(b) [Header]",
    "desc": "The entire upper housing is split longitudinally and can be removed for inspection, belt splicing, and pulley maintenance without disturbing the vertical casing legs.",
    "safety": "Ensure motor is locked out (LOTO) and mechanical belt clamp is locked before loosening hood clamps.",
    "color": "#ffaa00",
    "camPreset": {
      "cam": [
        0.85,
        2.2,
        1.35
      ],
      "look": [
        0,
        2.05,
        0
      ]
    }
  },
  {
    "tag": "02",
    "id": "crowned_pulley",
    "meshTarget": "Pulley_Head_Drive_Crowned",
    "title": "Crowned Head Drive Pulley (391 mm)",
    "section": "Head Assembly",
    "source": "SAGMA Wheat/Maize Mod 2 Sec 1.1.1 & CAD",
    "desc": "Machined with a convex camber (crowned profile) to run true and naturally center the belt. 391 mm diameter derived directly from SolidWorks CAD geometry.",
    "safety": "Inspect lagging for wear; uneven wear causes severe tracking drift and casing friction.",
    "color": "#00d2ff",
    "camPreset": {
      "cam": [
        0.75,
        2.1,
        1.2
      ],
      "look": [
        0,
        2,
        0
      ]
    }
  },
  {
    "tag": "03",
    "id": "discharge_saddle",
    "meshTarget": "Casing_Head_Lower_With_Saddle",
    "title": "Centrifugal Discharge Saddle (Grain)",
    "section": "Discharge & Flow",
    "source": "SAGMA Diagram 69(b) [Head Callout]",
    "desc": "Curved aerodynamic saddle positioned underneath the head pulley guiding tangential material release directly into the discharge spout without recirculation.",
    "safety": "Worn or warped saddles allow grain to fall back down the boot (backlegging), driving up power draw.",
    "color": "#ff8800",
    "camPreset": {
      "cam": [
        0.95,
        1.95,
        1.15
      ],
      "look": [
        0.15,
        1.9,
        0
      ]
    }
  },
  {
    "tag": "04",
    "id": "wear_plates",
    "meshTarget": "Discharge_Spout_Centrifugal",
    "title": "Wear Plates & Rubber Deflector",
    "section": "Discharge & Flow",
    "source": "SAGMA Diagram 69(b) [Head Callout]",
    "desc": "Heavy-duty abrasion-resistant steel liner plates and a flexible yet highly durable rubber deflector prevent high-velocity grain impact damage at the head spout.",
    "safety": "Check deflector flexibility quarterly; hardened rubber cracks and permits grain kernel shatter.",
    "color": "#ff6600",
    "camPreset": {
      "cam": [
        1.1,
        1.9,
        1.2
      ],
      "look": [
        0.35,
        1.85,
        0
      ]
    }
  },
  {
    "tag": "05",
    "id": "drive_motor",
    "meshTarget": "Drive_Electric_Motor_Gearbox",
    "title": "Gearmotor & Mounting Platform",
    "section": "Drive Kinematics",
    "source": "SAGMA Diagram 69(b) [Drive Callout]",
    "desc": "Shaft-mounted gearmotor with flexible coupling on head mounting bracket. For power ratings above 55 kW, an integrated starting clutch is prescribed.",
    "safety": "Confirm torque arm buffer condition and oil levels before full-load commissioning.",
    "color": "#00e676",
    "camPreset": {
      "cam": [
        -0.95,
        2.1,
        1.3
      ],
      "look": [
        -0.2,
        2.05,
        0
      ]
    }
  },
  {
    "tag": "06",
    "id": "head_sensor",
    "meshTarget": "Sensor_Head_Thermal_Slip_Detector",
    "title": "Head Thermal & Belt Slip Sensor",
    "section": "Safety & Fire Protection",
    "source": "SAGMA Wheat/Maize Mod 2 & OSHA 1910.272",
    "desc": "Monitors rotational speed differential between drive pulley and belt to prevent frictional heating and hot-spot fire runaway in dust-laden atmospheres.",
    "safety": "Mandatory interlock: auto-shuts down elevator when belt slip exceeds 10% to prevent grain dust deflagration.",
    "color": "#ff3366",
    "camPreset": {
      "cam": [
        0.65,
        2.1,
        0.95
      ],
      "look": [
        0,
        2.05,
        0
      ]
    }
  },
  {
    "tag": "07",
    "id": "trunking_legs",
    "meshTarget": "Casing_Trunking_UpLeg",
    "title": "Twin-Leg Trunking & Angle Flanges",
    "section": "Casing Legs",
    "source": "SAGMA Diagram 69(b) [Leg Callout]",
    "desc": "Airtight dual vertical casing ducts joined by angle flanges at modular 2.4m intervals, providing structural rigidity, chimney draft containment, and dust isolation.",
    "safety": "Maintain gasket integrity at all angle flange joints to prevent combustible dust release.",
    "color": "#00f2fe",
    "camPreset": {
      "cam": [
        1.5,
        1.3,
        1.9
      ],
      "look": [
        0,
        1.15,
        0
      ]
    }
  },
  {
    "tag": "08",
    "id": "antistatic_belt",
    "meshTarget": "Belt_Strand_UpLeg",
    "title": "Antistatic Belt (DIN 22104)",
    "section": "Conveying Assembly",
    "source": "SAGMA Diagram 69(b) [Leg Callout]",
    "desc": "Multi-ply polyester/polyamide fabric core with conductive antistatic rubber covers conforming to DIN 22104 (< 3x10^8 ohms electrical resistance).",
    "safety": "Never replace with non-antistatic conveyor belting; static charge accumulation creates an immediate explosion hazard in dry dust environments.",
    "color": "#ffaa00",
    "camPreset": {
      "cam": [
        0.85,
        1.1,
        1.25
      ],
      "look": [
        0,
        1,
        0
      ]
    }
  },
  {
    "tag": "09",
    "id": "deep_buckets",
    "meshTarget": "Bucket_UpLeg_01",
    "title": "Deep High-Capacity Buckets (300 mm Pitch)",
    "section": "Conveying Assembly",
    "source": "SAGMA Maize Mod 4 Ch 9 / Wheat Mod 5 Ch 8",
    "desc": "Deep buckets designed for whole wheat/maize allowing rapid centrifugal discharge. Spaced at verified 300 mm (0.30m) pitch along the 18.3m continuous loop (58 buckets total).",
    "safety": "Check elevator bolts torque with lock-nuts; detached buckets cause catastrophic boot chokes and sparks.",
    "color": "#ff9900",
    "camPreset": {
      "cam": [
        0.65,
        1.05,
        0.95
      ],
      "look": [
        0.1,
        0.95,
        0
      ]
    }
  },
  {
    "tag": "10",
    "id": "rotation_frame",
    "meshTarget": "Rotation_Frame_Tie_Brace",
    "title": "Floor Rotation & Tie Frame",
    "section": "Structural Bracing",
    "source": "SAGMA Diagram 69(b) [Middle Callout]",
    "desc": "Structural steel tie frame securing the elevator casing to intermediate concrete floor slabs at Z ~ 5.0m elevation, preventing lateral buckling and sway.",
    "safety": "Ensure tie rods are torqued and allow thermal axial expansion while eliminating wind/vibration deflection.",
    "color": "#88aacc",
    "camPreset": {
      "cam": [
        1.2,
        1.25,
        1.5
      ],
      "look": [
        0,
        1.15,
        0
      ]
    }
  },
  {
    "tag": "11",
    "id": "boot_takeup",
    "meshTarget": "Boot_TakeUp_Screw_L",
    "title": "Twin Screw Take-Up Tensioner",
    "section": "Boot & Tensioning",
    "source": "SAGMA Diagram 69(b) [Boot Callout]",
    "desc": "Internal crowned boot pulley mounted on sliding bearing blocks adjusted via twin vertical ACME threaded rods to eliminate belt slack and maintain true tracking.",
    "safety": "Equal tensioning on both left and right screws is critical; uneven turns cause belt to wander and rub against trunking.",
    "color": "#00d2ff",
    "camPreset": {
      "cam": [
        0.85,
        0.45,
        1.15
      ],
      "look": [
        0,
        0.35,
        0
      ]
    }
  },
  {
    "tag": "12",
    "id": "boot_feed",
    "meshTarget": "Boot_Feed_Spout_Intake",
    "title": "Boot Feed Spout (Down-Leg Infeed)",
    "section": "Boot & Feeding",
    "source": "SAGMA Diagram 69(b) & Mod 2 Sec 1.1.1",
    "desc": "Infeed material enters on the down-leg side so descending/ascending buckets scoop grain upward smoothly without back-pressure stalling or dragging excess stock through boot sump.",
    "safety": "Never feed on the wrong side; up-leg infeed jams incoming grain against advancing bucket lips.",
    "color": "#ffaa00",
    "camPreset": {
      "cam": [
        -0.95,
        0.45,
        1.05
      ],
      "look": [
        -0.2,
        0.35,
        0
      ]
    }
  },
  {
    "tag": "13",
    "id": "cleanout_doors",
    "meshTarget": "Boot_Cleanout_Door_Front",
    "title": "Tool-Operated Cleanout Doors",
    "section": "Safety & Maintenance",
    "source": "SAGMA Diagram 69(b) [Boot Callout]",
    "desc": "Removable cleanout panels secured with tool-operated fasteners for clearing chokes and inspecting boot pulley condition.",
    "safety": "OSHA 1910.147 / 1910.272 MANDATE: Never open cleanout doors before complete electrical LOTO and mechanical belt anti-runback clamping. Always use timber canes to poke grain chokes \u2014 NEVER hands!",
    "color": "#dc2626",
    "camPreset": {
      "cam": [
        0.75,
        0.4,
        0.95
      ],
      "look": [
        0,
        0.3,
        0
      ]
    }
  }
];
const SATAKE_CALLOUTS = [
  {
    "tag": "01",
    "id": "2.1",
    "meshTarget": "Satake_Feed_Inlet_Magnet",
    "title": "Grain Feed Inlet & Permanent Magnet",
    "section": "INLET & FEED ASSEMBLY",
    "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)",
    "desc": "Conditioned whole maize enters the top inlet hopper. The permanent magnet catches tramp ferrous metal before entry, protecting internal slotted screens and high-speed rotor beaters from catastrophic impact damage.",
    "safety": "Inspect magnet face at every shift stop. Never use bare hands to remove metal splinters to prevent severe lacerations.",
    "specs": "Feed capacity 2.0\u20137.0 t/h (VBF 5A: 2\u20133 t/h; VBF 7B: 3\u20134 t/h; VBF 10A: 4\u20137 t/h); high-intensity permanent plate/drum magnet.",
    "tolerance": "Rare-earth magnetic trap rated >10,000 Gauss. Plate clearance 25 mm.",
    "anchor": [
      0.35,
      1.8,
      0.0
    ],
    "color": "#005A36",
    "camPreset": {
      "cam": [
        1.5499999999999998,
        2.2,
        1.4
      ],
      "look": [
        0.35,
        1.8,
        0.0
      ]
    }
  },
  {
    "tag": "02",
    "id": "2.2",
    "meshTarget": "Satake_Inlet_Screw_Feeder",
    "title": "Motorized Inlet Screw Feeder & Compact Clutch",
    "section": "INLET & FEED ASSEMBLY",
    "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)",
    "desc": "A horizontal motorized feed screw propels incoming maize into the lower housing, automatically regulating feed volume based on main motor ammeter load.",
    "safety": "Electrically interlocked with main motor ammeter load; automatically halts feed upon current overload spikes.",
    "specs": "Independent motorized variable-speed scroll drive; compact single-unit scroll design.",
    "tolerance": "Variable flight pitch 65 mm. Radial barrel flight clearance: 2.0 mm (+/- 0.5 mm).",
    "anchor": [
      0.3,
      1.45,
      0.0
    ],
    "color": "#005A36",
    "camPreset": {
      "cam": [
        1.5,
        1.85,
        1.4
      ],
      "look": [
        0.3,
        1.45,
        0.0
      ]
    }
  },
  {
    "tag": "03",
    "id": "2.3",
    "meshTarget": "Satake_Distribution_Scroll",
    "title": "Vertical Distribution Scroll",
    "section": "ROTOR & SCOURING CHAMBER",
    "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)",
    "desc": "Positioned at the base of the scouring chamber, this rotating spiral scroll catches incoming grain from the feed screw and forces it vertically upward into the narrow friction chamber against gravity.",
    "safety": "Lock-Out / Tag-Out (LOTO) mandatory before manual cleanout of lower scroll intake cavity.",
    "specs": "Heavy-duty cast-iron vertical spiral scroll attached to the lower rotor shaft.",
    "tolerance": "Spiral flight lead angle: 18 deg. Bottom throat radial clearance: 3.5 mm nominal.",
    "anchor": [
      0.0,
      0.45,
      0.0
    ],
    "color": "#005A36",
    "camPreset": {
      "cam": [
        1.2,
        0.8500000000000001,
        1.4
      ],
      "look": [
        0.0,
        0.45,
        0.0
      ]
    }
  },
  {
    "tag": "04",
    "id": "2.4",
    "meshTarget": "Satake_Vertical_Steel_Rotor",
    "title": "Cylindrical Steel Rotor (Split Segment Design)",
    "section": "ROTOR & DRIVE KINEMATICS",
    "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)",
    "desc": "Revolves vertically inside the screen cylinder to turn the bed of grain, creating intense kernel-to-kernel and kernel-to-screen friction to peel outer pericarp (bran) skins and detach the germ.",
    "safety": "Lock-Out / Tag-Out (LOTO) mandatory before opening access panels; contact with the revolving rotor causes severe injury.",
    "specs": "Smooth cylindrical steel rotor operating at 465 RPM; split segment design (dismantles into two halves for maintenance).",
    "tolerance": "Rotor dynamic balance tolerance: < 2.5 g mm/kg. Operating velocity: 465 RPM (+/- 5 RPM).",
    "anchor": [
      0.0,
      1.05,
      0.0
    ],
    "color": "#005A36",
    "camPreset": {
      "cam": [
        1.2,
        1.4500000000000002,
        1.4
      ],
      "look": [
        0.0,
        1.05,
        0.0
      ]
    }
  },
  {
    "tag": "05",
    "id": "2.5",
    "meshTarget": "Satake_Beater_Bars",
    "title": "Detachable Steel Beater Bars (Qty 2)",
    "section": "ROTOR & SCOURING CHAMBER",
    "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)",
    "desc": "Extends the full height of the rotor. As the rotor turns at 465 RPM, these beaters tumble rising maize kernels against the slotted screens, popping the germ free from its cavity with minimal endosperm flouring.",
    "safety": "Verify beater bar mounting bolt torque (85 Nm) and check for edge wear before closing screen housing.",
    "specs": "Two hardened-steel, rigid impact/agitator bars mounted on opposite sides of the rotor.",
    "tolerance": "Dual-opposed mounting at 180 deg. Radial tip-to-screen clearance: 11.0 mm (+/- 1.0 mm).",
    "anchor": [
      0.18,
      1.1,
      0.0
    ],
    "color": "#005A36",
    "camPreset": {
      "cam": [
        1.38,
        1.5,
        1.4
      ],
      "look": [
        0.18,
        1.1,
        0.0
      ]
    }
  },
  {
    "tag": "06",
    "id": "2.6",
    "meshTarget": "Satake_Slotted_Screens",
    "title": "Multifaceted Slotted Screen Cartridge & Rib Cage",
    "section": "SCREEN ASSEMBLY",
    "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)",
    "desc": "Encloses the scouring chamber. The slotted apertures allow scoured bran, light germ snips, and attrition dust to pass into the exhaust hood while retaining larger debranned endosperm kernels (samp) inside.",
    "safety": "Inspect screen apertures regularly for foreign object damage or wear. Use protective gloves to handle sharp edges.",
    "specs": "8 multifaceted vertical slotted screen panels enclosed in a heavy-gauge steel rib cage and outer clamping frames.",
    "tolerance": "8-segment polygonal cage. Slotted aperture width: 1.0 mm x 12.0 mm (calibrated for maize).",
    "anchor": [
      -0.27,
      1.05,
      0.0
    ],
    "color": "#005A36",
    "camPreset": {
      "cam": [
        0.9299999999999999,
        1.4500000000000002,
        1.4
      ],
      "look": [
        -0.27,
        1.05,
        0.0
      ]
    }
  },
  {
    "tag": "07",
    "id": "2.7",
    "meshTarget": "Satake_Slotted_Screens",
    "title": "Independently Adjustable Resistance Bars",
    "section": "RETARDATION & PRESSURE CONTROL",
    "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)",
    "desc": "Positioned along the vertical screen walls, these bars retard the swirling movement of grain, increasing internal friction severity to match specific maize hardness or moisture conditions.",
    "safety": "Adjust resistance bolts evenly across all quadrants to prevent uneven screen barrel pressure.",
    "specs": "Rigid alloy resistance bars mounted inside the screen jacket with external adjusting bolts.",
    "tolerance": "External adjusting screw travel: 0\u201315 mm protrusion into grain stream.",
    "anchor": [
      0.0,
      1.25,
      0.25
    ],
    "color": "#005A36",
    "camPreset": {
      "cam": [
        1.2,
        1.65,
        1.65
      ],
      "look": [
        0.0,
        1.25,
        0.25
      ]
    }
  },
  {
    "tag": "08",
    "id": "2.8",
    "meshTarget": "Satake_Top_Outlet_Weighted_Flap",
    "title": "Overtails Discharge Chute & Weighted Retention Flap",
    "section": "DISCHARGE CONTROL",
    "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)",
    "desc": "Located at the top outlet. Retards the exit of debranned maize to maintain the exact internal pressure required for complete degerming; the auto-weight module monitors motor amperage to adjust pressure dynamically.",
    "safety": "Keep hands clear of discharge flap mechanism during automatic CCU modulation.",
    "specs": "Counter-weighted hinged discharge gate with optional CCU Auto-Weight control module.",
    "tolerance": "Flap counterweight moment arm: 250 mm. Gate seal clearance: 1.5 mm neoprene cushion.",
    "anchor": [
      -0.35,
      1.54,
      0.03
    ],
    "color": "#005A36",
    "camPreset": {
      "cam": [
        0.85,
        1.94,
        1.43
      ],
      "look": [
        -0.35,
        1.54,
        0.03
      ]
    }
  },
  {
    "tag": "09",
    "id": "2.9",
    "meshTarget": "Satake_Air_Induction_Fan",
    "title": "Air Induction Fan & Central Hollow Rotor Duct",
    "section": "ASPIRATION & AIR SYSTEM",
    "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)",
    "desc": "The fan forces cool air down through the hollow drive shaft and out behind the beater bars, sweeping across the grain bed to cool stock and carry loose bran and germ through the slotted screens into the offal exhaust.",
    "safety": "Verify negative pressure airflow before starting feed to prevent dust accumulation and overheating.",
    "specs": "Central hollow drive shaft with air discharge slots located directly behind each beater bar; negative pressure pneumatic exhaust ducting.",
    "tolerance": "Air volume required: 30\u201345 m3/min @ 120\u2013150 mm WG static negative pressure.",
    "anchor": [
      0.0,
      0.2,
      -0.28
    ],
    "color": "#005A36",
    "camPreset": {
      "cam": [
        1.2,
        0.6000000000000001,
        1.1199999999999999
      ],
      "look": [
        0.0,
        0.2,
        -0.28
      ]
    }
  },
  {
    "tag": "10",
    "id": "2.10",
    "meshTarget": "Satake_Drive_Motor_75kW",
    "title": "Machine Base Frame & 75 kW Main Belt Drive",
    "section": "BASE & DRIVE KINEMATICS",
    "source": "SAGMA Maize Milling Module 4 & 5 (Satake VBF)",
    "desc": "Cast-steel base frame housing bottom thrust bearings and drive pulleys, supplying rotational power to drive the vertical rotor shaft at 465 RPM under heavy friction loading.",
    "safety": "V-belt guards must remain securely bolted at all times during operation.",
    "specs": "Bottom-mounted 75 kW electric motor (3-Phase, 50 Hz); multi-V-belt drive with heavy protective guard enclosure.",
    "tolerance": "Motor: 75 kW, 1,480 RPM nominal. Multi V-belt reduction ratio: 3.18:1 (output 465 RPM).",
    "anchor": [
      0.35,
      0.32,
      0.0
    ],
    "color": "#005A36",
    "camPreset": {
      "cam": [
        1.5499999999999998,
        0.72,
        1.4
      ],
      "look": [
        0.35,
        0.32,
        0.0
      ]
    }
  }
];

const FLEET_DEFINITIONS = [
  {
    id: "elevator_69b",
    name: "Industrial Bucket Elevator",
    sub: "SAGMA Diagram 69(b) Authoritative Twin",
    category: "Grain Elevating & Conveying",
    sourceFile: "assets/elevator_full_diagram69b.glb",
    previewImg: "assets/preview_render.png",
    partsCount: 99,
    fileSize: "247 KB",
    syllabusRef: "Maize Mod 4 Ch 9 / Wheat Mod 5 Ch 8",
    callouts: DIAGRAM_69B_CALLOUTS,
    defaultCam: { pos: [2.5, 2.0, 3.2], target: [0, 1.2, 0] },
    isDefault: true
  },
  {
    id: "satake_vbf",
    name: "Satake VBF Vertical Maize Degermer",
    sub: "Vertical Beater & Screen Cone Milling Twin",
    category: "Grain Degermination & Processing",
    sourceFile: "assets/satake_vbf.glb",
    previewImg: "assets/satake_preview.png",
    partsCount: 87,
    fileSize: "310 KB",
    syllabusRef: "SAGMA Maize Milling Module 4 & 5",
    callouts: SATAKE_CALLOUTS,
    defaultCam: { pos: [2.2, 2.2, 2.8], target: [0, 1.2, 0] },
    isDefault: false
  },
  {
    id: "elevator_cad",
    name: "Engineering CAD Bucket Elevator",
    sub: "High-Poly SolidWorks CAD Twin",
    category: "Grain Elevating & Conveying",
    sourceFile: "assets/elevator_highpoly.glb",
    previewImg: "assets/preview_render.png",
    partsCount: 511,
    fileSize: "48.8 MB",
    syllabusRef: "SolidWorks Mechanical Assembly",
    callouts: DIAGRAM_69B_CALLOUTS,
    defaultCam: { pos: [3.5, 3.0, 4.5], target: [0, 1.5, 0] },
    isDefault: false
  }
];

// ============================================================================
// 3. INDEXEDDB PERSISTENCE LAYER: ECHO_STUDIO_DB
// ============================================================================
const DB_NAME = 'ECHO_STUDIO_DB';
const DB_VERSION = 1;
const STORE_NAME = 'machines';

const EchoDB = {
  db: null,

  init() {
    return new Promise((resolve, reject) => {
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
        console.error('IndexedDB open error:', e.target.error);
        resolve(null); // Fallback gracefully if storage is restricted
      };
    });
  },

  async seedInitialFleet() {
    if (!this.db) return;
    const count = await this.count();
    if (count === 0) {
      for (const m of FLEET_DEFINITIONS) {
        await this.putMachine(m);
      }
      console.log('Seeded initial fleet models into IndexedDB');
    }
  },

  count() {
    return new Promise(res => {
      if (!this.db) return res(0);
      const tx = this.db.transaction([STORE_NAME], 'readonly');
      const req = tx.objectStore(STORE_NAME).count();
      req.onsuccess = () => res(req.result);
      req.onerror = () => res(0);
    });
  },

  getAll() {
    return new Promise(res => {
      if (!this.db) return res([...FLEET_DEFINITIONS]);
      const tx = this.db.transaction([STORE_NAME], 'readonly');
      const req = tx.objectStore(STORE_NAME).getAll();
      req.onsuccess = () => {
        const items = req.result || [];
        if (items.length === 0) return res([...FLEET_DEFINITIONS]);
        res(items);
      };
      req.onerror = () => res([...FLEET_DEFINITIONS]);
    });
  },

  get(id) {
    return new Promise(res => {
      if (!this.db) return res(FLEET_DEFINITIONS.find(m => m.id === id) || null);
      const tx = this.db.transaction([STORE_NAME], 'readonly');
      const req = tx.objectStore(STORE_NAME).get(id);
      req.onsuccess = () => res(req.result || FLEET_DEFINITIONS.find(m => m.id === id) || null);
      req.onerror = () => res(FLEET_DEFINITIONS.find(m => m.id === id) || null);
    });
  },

  putMachine(record) {
    return new Promise((res, rej) => {
      if (!this.db) return res(record);
      const tx = this.db.transaction([STORE_NAME], 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(record);
      req.onsuccess = () => res(record);
      req.onerror = e => rej(e.target.error);
    });
  }
};

// ============================================================================
// 4. THREE.JS SPATIAL 3D CANVAS & ENVIRONMENT
// ============================================================================
let scene, camera, renderer, controls;
let currentLoadedRoot = null;
let currentMachineMeta = FLEET_DEFINITIONS[0];
let currentCallouts = [];
let calloutsVisible = true;
let calloutElements = [];
let isolatedMesh = null;
let originalMaterials = new Map();
let meshOriginalTransforms = [];
let animFrameId = null;
let lastTime = performance.now();
let frameCount = 0;
let lastFpsUpdate = performance.now();

// Highlight material (SAGMA Forest Emerald)
const HIGHLIGHT_MATERIAL = new THREE.MeshStandardMaterial({
  color: 0x0D6E45,
  emissive: 0x005A36,
  emissiveIntensity: 0.55,
  roughness: 0.35,
  metalness: 0.5
});

const GHOST_MATERIAL = new THREE.MeshStandardMaterial({
  color: 0xCBD7CE,
  transparent: true,
  opacity: 0.12,
  roughness: 0.8,
  metalness: 0.1
});

function initThreeEngine() {
  const container = document.getElementById('viewport-container');
  const canvas = document.getElementById('three-canvas');

  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xEAF0EB); // SAGMA approved sage background
  scene.fog = new THREE.FogExp2(0xEAF0EB, 0.012);

  // Camera
  const aspect = container.clientWidth / container.clientHeight;
  camera = new THREE.PerspectiveCamera(45, aspect, 0.05, 500);
  camera.position.set(2.5, 2.0, 3.2);

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance'
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  if (renderer.outputEncoding !== undefined) {
    renderer.outputEncoding = THREE.sRGBEncoding;
  }

  // OrbitControls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.screenSpacePanning = true;
  controls.minDistance = 0.2;
  controls.maxDistance = 60;
  controls.target.set(0, 1.2, 0);

  // Studio Lighting (Clean, Crisp, Green-Tuned Engineering Lighting)
  const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.78);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xFFFFFF, 1.15);
  keyLight.position.set(12, 22, 16);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 2048;
  keyLight.shadow.mapSize.height = 2048;
  keyLight.shadow.camera.near = 0.5;
  keyLight.shadow.camera.far = 80;
  keyLight.shadow.bias = -0.0001;
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xD6E8DD, 0.65);
  fillLight.position.set(-14, 14, -14);
  scene.add(fillLight);

  const bounceLight = new THREE.DirectionalLight(0xCBD7CE, 0.35);
  bounceLight.position.set(0, -10, 0);
  scene.add(bounceLight);

  // Soft Grid Floor
  const gridHelper = new THREE.GridHelper(40, 40, 0x005A36, 0xCBD7CE);
  gridHelper.position.y = -0.01;
  scene.add(gridHelper);

  // Resize handler
  window.addEventListener('resize', onWindowResize, false);

  // Raycasting for interactive click selection on 3D meshes
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    if (!currentLoadedRoot) return;

    const intersects = raycaster.intersectObjects(currentLoadedRoot.children, true);
    if (intersects.length > 0) {
      const hitMesh = intersects[0].object;
      handleMeshClick(hitMesh);
    }
  });

  // Start Animation Loop
  animate();
}

function onWindowResize() {
  const container = document.getElementById('viewport-container');
  if (!container || !renderer || !camera) return;
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
  updateCalloutPositions();
}

function animate() {
  animFrameId = requestAnimationFrame(animate);

  controls.update();
  renderer.render(scene, camera);

  if (calloutsVisible) {
    updateCalloutPositions();
  }

  // Telemetry updates
  frameCount++;
  const now = performance.now();
  if (now - lastFpsUpdate >= 500) {
    const fps = Math.round((frameCount * 1000) / (now - lastFpsUpdate));
    const fpsEl = document.getElementById('telemetry-fps');
    if (fpsEl) fpsEl.textContent = fps + ' FPS';
    frameCount = 0;
    lastFpsUpdate = now;
  }
}

// ============================================================================
// 5. MODEL LOADING & CENTRAL ASSET PIPELINE
// ============================================================================
const gltfLoader = new THREE.GLTFLoader();
if (THREE.DRACOLoader) {
  const dracoLoader = new THREE.DRACOLoader();
  dracoLoader.setDecoderPath('libs/');
  gltfLoader.setDRACOLoader(dracoLoader);
}

function showLoading(msg) {
  const overlay = document.getElementById('loading-overlay');
  const txt = document.getElementById('loading-msg');
  if (overlay) overlay.style.display = 'flex';
  if (txt) txt.textContent = msg || 'Loading Model...';
}

function hideLoading() {
  const overlay = document.getElementById('loading-overlay');
  if (overlay) overlay.style.display = 'none';
}

async function loadMachineTwin(machineMeta) {
  showLoading('Loading ' + machineMeta.name + '...');

  // Reset current selection state
  clearActiveCallouts();
  resetExplodedView();
  closeInspector();

  // Remove existing model from scene
  if (currentLoadedRoot) {
    scene.remove(currentLoadedRoot);
    currentLoadedRoot.traverse(child => {
      if (child.isMesh) {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
          else child.material.dispose();
        }
      }
    });
    currentLoadedRoot = null;
  }

  currentMachineMeta = machineMeta;
  originalMaterials.clear();
  meshOriginalTransforms = [];

  // Update top bar title
  const titleLabel = document.getElementById('active-machine-name-label');
  if (titleLabel) titleLabel.textContent = machineMeta.name;

  try {
    let gltfData;
    if (machineMeta.customArrayBuffer) {
      // Load from stored ArrayBuffer in IndexedDB
      gltfData = await new Promise((resolve, reject) => {
        gltfLoader.parse(machineMeta.customArrayBuffer, '', resolve, reject);
      });
    } else {
      // Load from local asset URL
      gltfData = await new Promise((resolve, reject) => {
        gltfLoader.load(machineMeta.sourceFile, resolve, undefined, reject);
      });
    }

    const modelRoot = gltfData.scene || gltfData.scenes[0];
    currentLoadedRoot = modelRoot;

    // Enable shadows, store materials, and compute original transforms for exploded view
    let nodeCount = 0;
    const modelBox = new THREE.Box3().setFromObject(modelRoot);
    const modelCenter = new THREE.Vector3();
    modelBox.getCenter(modelCenter);

    modelRoot.traverse(child => {
      nodeCount++;
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        originalMaterials.set(child, child.material);

        const worldPos = new THREE.Vector3();
        child.getWorldPosition(worldPos);
        const dir = worldPos.clone().sub(modelCenter).normalize();
        if (dir.length() < 0.001) dir.set(1, 0, 0);

        meshOriginalTransforms.push({
          mesh: child,
          origPos: child.position.clone(),
          direction: dir
        });
      }
    });

    // Update Telemetry
    const telemetryNodes = document.getElementById('telemetry-nodes');
    if (telemetryNodes) telemetryNodes.textContent = nodeCount + ' parts';
    const telemetrySize = document.getElementById('telemetry-size');
    if (telemetrySize) telemetrySize.textContent = machineMeta.fileSize || 'Standard';

    // Auto-center and normalize scale if necessary
    const boxSize = new THREE.Vector3();
    modelBox.getSize(boxSize);
    const maxDim = Math.max(boxSize.x, boxSize.y, boxSize.z);

    // If model is extremely huge or tiny, fit it nicely into a ~2.5m viewing sphere
    if (maxDim > 50 || maxDim < 0.1) {
      const scale = 2.5 / maxDim;
      modelRoot.scale.set(scale, scale, scale);
    }

    // Reposition to ground floor (y = 0)
    const updatedBox = new THREE.Box3().setFromObject(modelRoot);
    modelRoot.position.y -= updatedBox.min.y;
    scene.add(modelRoot);

    // Set camera framing
    if (machineMeta.defaultCam) {
      smoothMoveCamera(machineMeta.defaultCam.pos, machineMeta.defaultCam.target);
    } else {
      resetCameraFraming();
    }

    // Spawn 3D Callouts
    currentCallouts = machineMeta.callouts || [];
    renderCalloutBadges();

    hideLoading();
  } catch (err) {
    console.error('Failed to load machine model:', err);
    showLoading('Error: Failed to load ' + machineMeta.name + '. ' + err.message);
    setTimeout(hideLoading, 3000);
  }
}

// ============================================================================
// 6. 3D CALLOUT BADGES & 2D PROJECTION ENGINE
// ============================================================================
function clearActiveCallouts() {
  const container = document.getElementById('callout-container');
  if (container) container.innerHTML = '';
  calloutElements = [];
}

function renderCalloutBadges() {
  clearActiveCallouts();
  const container = document.getElementById('callout-container');
  if (!container || !currentCallouts || currentCallouts.length === 0) return;

  currentCallouts.forEach((c, idx) => {
    const el = document.createElement('div');
    el.className = 'callout-item';
    el.id = 'callout-badge-' + (c.id || idx);
    el.innerHTML = `
      <div class="callout-pill" style="border-color:${c.color || 'var(--brand-green)'}">
        <span class="callout-num" style="background:${c.color || 'var(--brand-green)'}">${c.tag || (idx+1)}</span>
        <span class="callout-label">${c.title}</span>
      </div>
    `;

    el.addEventListener('click', (e) => {
      e.stopPropagation();
      selectCallout(c);
    });

    container.appendChild(el);
    calloutElements.push({ el, data: c });
  });

  updateCalloutPositions();
}

function getCalloutWorldPos(callout) {
  if (!currentLoadedRoot) return new THREE.Vector3(0, 1.2, 0);

  // 1. Search meshTarget in hierarchy
  if (callout.meshTarget) {
    let foundMesh = null;
    currentLoadedRoot.traverse(child => {
      if (child.isMesh && (child.name === callout.meshTarget || child.name.includes(callout.meshTarget))) {
        foundMesh = child;
      }
    });
    if (foundMesh) {
      const b = new THREE.Box3().setFromObject(foundMesh);
      const c = new THREE.Vector3();
      b.getCenter(c);
      return c;
    }
  }

  // 2. Fallback to anchor or camPreset.look
  if (callout.anchor) {
    return new THREE.Vector3(...callout.anchor);
  }
  if (callout.camPreset && callout.camPreset.look) {
    return new THREE.Vector3(...callout.camPreset.look);
  }

  return new THREE.Vector3(0, 1.2, 0);
}

function updateCalloutPositions() {
  if (!calloutsVisible || calloutElements.length === 0 || !renderer || !camera) return;

  const container = document.getElementById('viewport-container');
  const width = container.clientWidth;
  const height = container.clientHeight;

  const tempV = new THREE.Vector3();

  calloutElements.forEach(item => {
    const worldPos = getCalloutWorldPos(item.data);
    tempV.copy(worldPos);

    // Check if behind camera
    tempV.project(camera);
    const isBehind = tempV.z > 1;

    if (isBehind || Math.abs(tempV.x) > 1.2 || Math.abs(tempV.y) > 1.2) {
      item.el.style.display = 'none';
      return;
    }

    const x = (tempV.x * 0.5 + 0.5) * width;
    const y = (-(tempV.y * 0.5) + 0.5) * height;

    item.el.style.display = 'block';
    item.el.style.left = `${Math.round(x)}px`;
    item.el.style.top = `${Math.round(y)}px`;
  });
}

function selectCallout(callout) {
  // Open and populate syllabus inspector card
  openInspector(callout);

  // Animate camera smoothly to preset
  if (callout.camPreset) {
    smoothMoveCamera(callout.camPreset.cam, callout.camPreset.look);
  }

  // Highlight the target mesh in 3D
  highlightTargetMesh(callout.meshTarget);
}

function handleMeshClick(mesh) {
  // Find matching callout by mesh name
  const match = currentCallouts.find(c => c.meshTarget && (c.meshTarget === mesh.name || mesh.name.includes(c.meshTarget)));
  if (match) {
    selectCallout(match);
  } else {
    // Generic mesh inspection
    const genericData = {
      tag: "PART",
      title: mesh.name || "Structural Component",
      section: "Sub-Assembly Part",
      source: currentMachineMeta.syllabusRef || "SAGMA CAD Specification",
      desc: `3D Mesh element with ${mesh.geometry ? mesh.geometry.attributes.position.count : 0} vertices. Component of ${currentMachineMeta.name}.`,
      specs: `Node: ${mesh.name}`,
      safety: "Ensure machine is isolated and locked out before undertaking any maintenance."
    };
    openInspector(genericData);
    highlightTargetMesh(mesh.name);
  }
}

// ============================================================================
// 7. SYLLABUS MECHANICAL INSPECTOR DRAWER
// ============================================================================
let activeInspectedCallout = null;

function openInspector(data) {
  activeInspectedCallout = data;
  const card = document.getElementById('inspector-card');
  if (!card) return;

  document.getElementById('insp-tag').textContent = data.tag || "KEY";
  document.getElementById('insp-title').textContent = data.title || "Component";
  document.getElementById('insp-section').textContent = data.section || "Mechanical Section";
  document.getElementById('insp-source').textContent = data.source || "SAGMA Syllabus Reference";
  document.getElementById('insp-desc').textContent = data.desc || "No additional description available.";

  const safetyWrap = document.getElementById('insp-safety-wrap');
  const safetyTxt = document.getElementById('insp-safety');
  if (data.safety) {
    safetyWrap.style.display = 'block';
    safetyTxt.textContent = data.safety;
  } else {
    safetyWrap.style.display = 'none';
  }

  card.classList.add('active');
}

function closeInspector() {
  const card = document.getElementById('inspector-card');
  if (card) card.classList.remove('active');
  resetMeshHighlights();
  activeInspectedCallout = null;
}

function highlightTargetMesh(targetName) {
  if (!currentLoadedRoot || !targetName) return;
  resetMeshHighlights();

  currentLoadedRoot.traverse(child => {
    if (child.isMesh && (child.name === targetName || child.name.includes(targetName))) {
      child.material = HIGHLIGHT_MATERIAL;
    }
  });
}

function resetMeshHighlights() {
  if (!currentLoadedRoot) return;
  currentLoadedRoot.traverse(child => {
    if (child.isMesh && originalMaterials.has(child)) {
      child.material = originalMaterials.get(child);
      child.visible = true;
    }
  });
  isolatedMesh = null;
}

function isolateTargetMesh() {
  if (!activeInspectedCallout || !currentLoadedRoot) return;
  const targetName = activeInspectedCallout.meshTarget;
  if (!targetName) return;

  const isAlreadyIsolated = (isolatedMesh === targetName);

  if (isAlreadyIsolated) {
    // Un-isolate
    resetMeshHighlights();
    highlightTargetMesh(targetName);
    document.getElementById('btn-insp-isolate').textContent = 'Isolate Component';
  } else {
    // Isolate
    isolatedMesh = targetName;
    currentLoadedRoot.traverse(child => {
      if (child.isMesh) {
        if (child.name === targetName || child.name.includes(targetName)) {
          child.material = HIGHLIGHT_MATERIAL;
          child.visible = true;
        } else {
          child.material = GHOST_MATERIAL;
        }
      }
    });
    document.getElementById('btn-insp-isolate').textContent = 'Show All Parts';
  }
}

// ============================================================================
// 8. CAMERA ANIMATION & PRESET MANAGER
// ============================================================================
let cameraTween = null;

function smoothMoveCamera(targetCamPos, targetLookAt, duration = 800) {
  if (cameraTween) cancelAnimationFrame(cameraTween);

  const startPos = camera.position.clone();
  const startTarget = controls.target.clone();
  const endPos = new THREE.Vector3(...targetCamPos);
  const endTarget = new THREE.Vector3(...targetLookAt);

  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Smooth easeInOutCubic
    const ease = progress < 0.5 
      ? 4 * progress * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    camera.position.lerpVectors(startPos, endPos, ease);
    controls.target.lerpVectors(startTarget, endTarget, ease);

    if (progress < 1) {
      cameraTween = requestAnimationFrame(step);
    } else {
      cameraTween = null;
    }
  }

  cameraTween = requestAnimationFrame(step);
}

function resetCameraFraming() {
  if (currentMachineMeta && currentMachineMeta.defaultCam) {
    smoothMoveCamera(currentMachineMeta.defaultCam.pos, currentMachineMeta.defaultCam.target);
  } else {
    smoothMoveCamera([2.5, 2.0, 3.2], [0, 1.2, 0]);
  }
}

// ============================================================================
// 9. RADIAL EXPLODED VIEW ENGINE
// ============================================================================
function updateExplodedView(factor) {
  if (!currentLoadedRoot || meshOriginalTransforms.length === 0) return;

  meshOriginalTransforms.forEach(item => {
    // Expand mesh along its radial direction vector from model center
    const offset = item.direction.clone().multiplyScalar(factor * 1.8);
    item.mesh.position.copy(item.origPos).add(offset);
  });
}

function resetExplodedView() {
  const slider = document.getElementById('explode-slider');
  const val = document.getElementById('explode-val');
  if (slider) slider.value = 0;
  if (val) val.textContent = '0%';
  updateExplodedView(0);
}

// ============================================================================
// 10. CENTRAL EQUIPMENT LIBRARY & UPLOAD PIPELINE
// ============================================================================
async function renderLibraryModal() {
  const container = document.getElementById('library-cards-container');
  if (!container) return;
  container.innerHTML = '';

  const allMachines = await EchoDB.getAll();

  allMachines.forEach(m => {
    const card = document.createElement('div');
    card.className = 'library-card' + (m.id === currentMachineMeta.id ? ' active' : '');
    card.innerHTML = `
      <img src="${m.previewImg || 'assets/preview_render.png'}" class="library-card-img" alt="${m.name}">
      <div class="library-card-body">
        <div class="library-card-tag">${m.category}</div>
        <div class="library-card-title">${m.name}</div>
        <div class="library-card-sub">${m.sub}</div>
        <div class="library-card-meta">
          <span>📦 ${m.partsCount || 'N/A'} parts</span>
          <span>💾 ${m.fileSize || 'Standard'}</span>
        </div>
        <div style="margin-top:14px;">
          <button class="btn btn-primary" style="width:100%; justify-content:center;" onclick="handleSelectTwin('${m.id}')">
            ${m.id === currentMachineMeta.id ? '✓ Active Model' : 'Load Digital Twin'}
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

window.handleSelectTwin = async function(id) {
  const machine = await EchoDB.get(id);
  if (machine) {
    closeModal('modal-library');
    loadMachineTwin(machine);
  }
};

function setupUploadPipeline() {
  const dropZone = document.getElementById('library-upload-zone');
  const fileInput = document.getElementById('library-file-input');
  if (!dropZone || !fileInput) return;

  dropZone.addEventListener('click', () => fileInput.click());

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer && e.dataTransfer.files.length > 0) {
      handleFileSelected(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelected(e.target.files[0]);
    }
  });
}

async function handleFileSelected(file) {
  if (!file.name.toLowerCase().endsWith('.glb') && !file.name.toLowerCase().endsWith('.gltf')) {
    alert('Please upload a 3D GLB or GLTF asset file.');
    return;
  }

  showLoading(`Importing and parsing ${file.name}...`);

  try {
    const arrayBuffer = await file.arrayBuffer();
    const customId = 'custom_' + Date.now();
    const sizeKB = (file.size / 1024).toFixed(1) + ' KB';

    const newMachine = {
      id: customId,
      name: file.name.replace(/\.[^/.]+$/, ""),
      sub: "Imported User 3D Spatial Model",
      category: "Custom Equipment",
      sourceFile: null,
      customArrayBuffer: arrayBuffer,
      previewImg: "assets/preview_render.png",
      partsCount: "Custom CAD",
      fileSize: sizeKB,
      syllabusRef: "Imported Milling Model",
      callouts: [],
      defaultCam: { pos: [3.0, 2.5, 3.5], target: [0, 1.2, 0] },
      isDefault: false
    };

    await EchoDB.putMachine(newMachine);
    await renderLibraryModal();
    hideLoading();
    closeModal('modal-library');
    loadMachineTwin(newMachine);
  } catch (err) {
    console.error('Failed to import user model:', err);
    hideLoading();
    alert('Failed to process custom 3D model: ' + err.message);
  }
}

// ============================================================================
// 11. SAGMA MODULE 8 SECTION 3 CALCULATIONS ENGINE
// ============================================================================
function updateCalculations() {
  const speed = parseFloat(document.getElementById('calc-input-speed').value) || 110;
  const pitch = parseFloat(document.getElementById('calc-input-pitch').value) || 0.3;
  const mass = parseFloat(document.getElementById('calc-input-mass').value) || 3.5;
  const height = parseFloat(document.getElementById('calc-input-height').value) || 20;
  const eff = parseFloat(document.getElementById('calc-input-eff').value) || 70;

  // Update slider label values
  document.getElementById('calc-val-speed').textContent = `${speed} m/min (${(speed/60).toFixed(2)} m/s)`;
  document.getElementById('calc-val-pitch').textContent = `${pitch.toFixed(2)} m (${Math.round(pitch*1000)} mm)`;
  document.getElementById('calc-val-mass').textContent = `${mass.toFixed(1)} kg`;
  document.getElementById('calc-val-height').textContent = `${height} m`;
  document.getElementById('calc-val-eff').textContent = `${eff}%`;

  // Official SAGMA Module 8 Section 3 Formulas
  // 1. Buckets per min = Belt Speed (m/min) / Bucket Pitch (m)
  const bucketsPerMin = speed / pitch;

  // 2. Capacity (kg/min) = Buckets/min * Mass per bucket (kg)
  const capacityKgPerMin = bucketsPerMin * mass;

  // 3. Capacity (t/h) = (Capacity kg/min * 60) / 1000
  const capacityTh = (capacityKgPerMin * 60) / 1000;

  // 4. Head Pulley RPM = Speed (m/s) / (pi * D) -> For 391 mm crowned pulley (D = 0.391m)
  const speedMperS = speed / 60;
  const headPulleyDiameterM = 0.391;
  const headRpm = (speedMperS * 60) / (Math.PI * headPulleyDiameterM);

  // 5. Theoretical Lifting Power (kW) = Mass flow (kg/s) * Height (m) * 9.81 / 1000
  const massFlowKgPerS = capacityKgPerMin / 60;
  const theoPowerKw = (massFlowKgPerS * height * 9.81) / 1000;

  // 6. Motor Power Required with Efficiency allowance (kW)
  const efficiencyFactor = eff / 100;
  const motorPowerKw = theoPowerKw / efficiencyFactor;

  // Bind to DOM
  document.getElementById('out-bucket-rate').textContent = `${Math.round(bucketsPerMin)} / min (${(bucketsPerMin/60).toFixed(1)}/s)`;
  document.getElementById('out-capacity-th').textContent = `${capacityTh.toFixed(1)} t/h`;
  document.getElementById('out-head-rpm').textContent = `${Math.round(headRpm)} RPM`;
  document.getElementById('out-theo-power').textContent = `${theoPowerKw.toFixed(2)} kW`;
  document.getElementById('out-motor-power').textContent = `${motorPowerKw.toFixed(2)} kW`;
}

// ============================================================================
// 12. OSHA 1910.147 / SAGMA MODULE 2 LOTO STATE MACHINE
// ============================================================================
const LOTOState = {
  NORMAL_RUNNING: 'NORMAL_RUNNING',
  CHOKED_STALLED: 'CHOKED_STALLED',
  EMERGENCY_STOPPED: 'EMERGENCY_STOPPED',
  ISOLATING: 'ISOLATING',
  SAFE_FOR_MAINTENANCE: 'SAFE_FOR_MAINTENANCE',
  BOOT_PANEL_OPENED: 'BOOT_PANEL_OPENED',
  CLEARED_REASSEMBLING: 'CLEARED_REASSEMBLING',
  RESTART_COMPLETE: 'RESTART_COMPLETE',
  INCIDENT_HALT: 'INCIDENT_HALT'
};

const LOTOSim = {
  currentState: LOTOState.CHOKED_STALLED,
  breakerLocked: false,
  zeroEnergyTested: false,
  gravityRestrained: false,
  panelOpened: false,
  chokeCleared: false,

  reset() {
    this.currentState = LOTOState.CHOKED_STALLED;
    this.breakerLocked = false;
    this.zeroEnergyTested = false;
    this.gravityRestrained = false;
    this.panelOpened = false;
    this.chokeCleared = false;
    this.updateUI();
    this.log('[SYSTEM] Elevator stalled due to high product choke in boot casing. High amp trip.');
  },

  log(msg, isViolation = false) {
    const box = document.getElementById('loto-log-box');
    if (!box) return;
    const line = document.createElement('div');
    line.style.marginTop = '4px';
    if (isViolation) {
      line.style.color = 'var(--red)';
      line.style.fontWeight = 'bold';
    }
    line.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
    box.appendChild(line);
    box.scrollTop = box.scrollHeight;
  },

  actionEstop() {
    this.currentState = LOTOState.EMERGENCY_STOPPED;
    this.log('E-Stop pressed. Control power halted, but main 400V/525V circuit remains energised.');
    this.updateUI();
  },

  actionLockout() {
    if (this.currentState !== LOTOState.EMERGENCY_STOPPED) {
      this.log('VIOLATION: Attempted to lock out without pressing E-Stop first! (OSHA 1910.147)', true);
      return;
    }
    this.breakerLocked = true;
    this.currentState = LOTOState.ISOLATING;
    this.log('Padlock and Danger Tag applied to Main Isolator Disconnect. (OSHA 1910.147 / ISO 14118)');
    this.updateUI();
  },

  actionZeroEnergy() {
    if (!this.breakerLocked) {
      this.log('VIOLATION: Tested controls on an unlocked live breaker! (OSHA 1910.147)', true);
      return;
    }
    this.zeroEnergyTested = true;
    this.log('Depressed Start button; zero response. Voltmeter confirmed 0V across all phases. Electrical energy DEAD.');
    this.updateUI();
  },

  actionGravityRestraint() {
    if (!this.zeroEnergyTested) {
      this.log('VIOLATION: Attempted to install mechanical belt clamp before confirming zero electrical energy! (OSHA 1910.147)', true);
      return;
    }
    this.gravityRestrained = true;
    this.currentState = LOTOState.SAFE_FOR_MAINTENANCE;
    this.log('Mechanical Anti-Runback Belt Clamp installed. Stored gravitational torque restrained. SAFE FOR ACCESS. (SAGMA Mod 2 Sec 1.1.1)');
    this.updateUI();
  },

  actionOpenPanel() {
    if (this.currentState !== LOTOState.SAFE_FOR_MAINTENANCE) {
      this.log('CRITICAL VIOLATION: Opened boot casing on an unisolated or unrestrained elevator! Runback hazard! (OSHA 1910.272)', true);
      return;
    }
    this.panelOpened = true;
    this.currentState = LOTOState.BOOT_PANEL_OPENED;
    this.log('Unbolted tool-operated boot inspection door. Packed wheat/maize choke exposed.');
    this.updateUI();
  },

  actionHandClear() {
    this.log('🚨 FATAL SAFETY VIOLATION: Hand reached into boot zone! SAGMA Wheat & Maize Mod 2 Sec 1.1.1 [4] MANDATES NEVER REACHING INTO BOOT. Traumatic amputation risk from belt release!', true);
    alert('FATAL SAFETY VIOLATION: Hands must NEVER enter the elevator boot zone! Use the approved SAGMA clearing cane.');
  },

  actionCaneClear() {
    if (!this.panelOpened) {
      this.log('Action rejected: Boot inspection door is closed.', true);
      return;
    }
    this.chokeCleared = true;
    this.currentState = LOTOState.CLEARED_REASSEMBLING;
    this.log('Choked stock poked and cleared using approved non-sparking wooden clearing cane. Belt freed.');
    this.updateUI();
  },

  actionClosePanels() {
    if (!this.chokeCleared) {
      this.log('Action rejected: Clear the choked grain before closing inspection panels.', true);
      return;
    }
    this.panelOpened = false;
    this.log('Boot inspection door reinstalled and securely bolted with tool-operated fasteners.');
    this.updateUI();
  },

  actionRestart() {
    if (this.panelOpened) {
      this.log('VIOLATION: Attempted restart with open inspection door!', true);
      return;
    }
    this.gravityRestrained = false;
    this.breakerLocked = false;
    this.zeroEnergyTested = false;
    this.currentState = LOTOState.RESTART_COMPLETE;
    this.log('Mechanical belt clamps removed. LOTO padlocks removed. Controlled empty restart successful. Machine running clean.');
    this.updateUI();
  },

  updateUI() {
    const banner = document.getElementById('loto-status-banner');
    const title = document.getElementById('loto-machine-state-title');
    const energy = document.getElementById('loto-energy-state');

    // Buttons
    const btnEstop = document.getElementById('loto-btn-estop');
    const btnLock = document.getElementById('loto-btn-lockout');
    const btnZero = document.getElementById('loto-btn-zero');
    const btnGrav = document.getElementById('loto-btn-gravity');
    const btnOpen = document.getElementById('loto-btn-open-panel');
    const btnHand = document.getElementById('loto-btn-hand-clear');
    const btnCane = document.getElementById('loto-btn-cane-clear');
    const btnClose = document.getElementById('loto-btn-close-panels');
    const btnRestart = document.getElementById('loto-btn-restart');

    if (this.currentState === LOTOState.CHOKED_STALLED) {
      title.textContent = 'CHOKED / STALLED (High Current Trip)';
      energy.textContent = 'LIVE 400V ELECTRICAL POTENTIAL & STORED GRAVITY TORQUE';
      banner.style.background = 'var(--red-bg)';
      banner.style.borderColor = 'var(--red-border)';

      btnEstop.disabled = false;
      btnLock.disabled = true;
      btnZero.disabled = true;
      btnGrav.disabled = true;
      btnOpen.disabled = true;
      btnHand.disabled = true;
      btnCane.disabled = true;
      btnClose.disabled = true;
      btnRestart.disabled = true;
    } else if (this.currentState === LOTOState.EMERGENCY_STOPPED) {
      title.textContent = 'STOPPED (Control Circuit Open - Live Line)';
      energy.textContent = 'LIVE VOLTAGE AT DISCONNECT';
      banner.style.background = 'var(--amber-bg)';
      banner.style.borderColor = 'var(--amber-border)';

      btnEstop.disabled = true;
      btnLock.disabled = false;
      btnZero.disabled = true;
      btnGrav.disabled = true;
      btnOpen.disabled = true;
      btnHand.disabled = true;
      btnCane.disabled = true;
      btnClose.disabled = true;
      btnRestart.disabled = true;
    } else if (this.currentState === LOTOState.ISOLATING) {
      title.textContent = 'ISOLATING (Padlock & Tag Affixed)';
      energy.textContent = this.zeroEnergyTested ? 'VERIFIED ELECTRICAL ZERO' : 'UNVERIFIED RESIDUAL CHARGE';
      banner.style.background = 'var(--amber-bg)';
      banner.style.borderColor = 'var(--amber-border)';

      btnEstop.disabled = true;
      btnLock.disabled = true;
      btnZero.disabled = false;
      btnGrav.disabled = !this.zeroEnergyTested;
      btnOpen.disabled = true;
      btnHand.disabled = true;
      btnCane.disabled = true;
      btnClose.disabled = true;
      btnRestart.disabled = true;
    } else if (this.currentState === LOTOState.SAFE_FOR_MAINTENANCE) {
      title.textContent = 'SAFE FOR MAINTENANCE (Zero Energy & Clamped)';
      energy.textContent = 'DE-ENERGIZED & GRAVITATIONALLY SECURED';
      banner.style.background = 'var(--sensor-bg)';
      banner.style.borderColor = 'var(--brand-emerald)';

      btnEstop.disabled = true;
      btnLock.disabled = true;
      btnZero.disabled = true;
      btnGrav.disabled = true;
      btnOpen.disabled = false;
      btnHand.disabled = true;
      btnCane.disabled = true;
      btnClose.disabled = true;
      btnRestart.disabled = true;
    } else if (this.currentState === LOTOState.BOOT_PANEL_OPENED) {
      title.textContent = 'BOOT ACCESS OPEN (Zero Energy Chamber)';
      energy.textContent = 'DE-ENERGIZED & CLAMPED';

      btnEstop.disabled = true;
      btnLock.disabled = true;
      btnZero.disabled = true;
      btnGrav.disabled = true;
      btnOpen.disabled = true;
      btnHand.disabled = false;
      btnCane.disabled = false;
      btnClose.disabled = true;
      btnRestart.disabled = true;
    } else if (this.currentState === LOTOState.CLEARED_REASSEMBLING) {
      title.textContent = 'CHOKE CLEARED (Ready to Close Guards)';
      energy.textContent = 'DE-ENERGIZED & CLAMPED';

      btnEstop.disabled = true;
      btnLock.disabled = true;
      btnZero.disabled = true;
      btnGrav.disabled = true;
      btnOpen.disabled = true;
      btnHand.disabled = true;
      btnCane.disabled = true;
      btnClose.disabled = false;
      btnRestart.disabled = true;
    } else if (this.currentState === LOTOState.RESTART_COMPLETE) {
      title.textContent = 'NORMAL RUNNING (Commissioned)';
      energy.textContent = 'NORMAL OPERATING POWER (400V/50Hz)';
      banner.style.background = 'var(--sensor-bg)';
      banner.style.borderColor = 'var(--brand-emerald)';

      btnEstop.disabled = true;
      btnLock.disabled = true;
      btnZero.disabled = true;
      btnGrav.disabled = true;
      btnOpen.disabled = true;
      btnHand.disabled = true;
      btnCane.disabled = true;
      btnClose.disabled = true;
      btnRestart.disabled = true;
    }
  }
};

// ============================================================================
// 13. MODAL CONTROLLERS & EVENT BINDINGS
// ============================================================================
function openModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.add('active');
  if (modalId === 'modal-library') renderLibraryModal();
  if (modalId === 'modal-calc') updateCalculations();
  if (modalId === 'modal-loto') LOTOSim.updateUI();
}

function closeModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.remove('active');
}

function setupDOMListeners() {
  // Generic modal close handlers (data-close, backdrop click, and Escape key)
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = btn.getAttribute('data-close') || btn.closest('.modal-backdrop')?.id;
      if (targetId) closeModal(targetId);
    });
  });

  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop.id);
      }
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.active').forEach(m => m.classList.remove('active'));
      closeInspector();
    }
  });

  // Library Modal
  document.getElementById('btn-open-library')?.addEventListener('click', () => openModal('modal-library'));
  document.getElementById('btn-close-library')?.addEventListener('click', () => closeModal('modal-library'));

  // Quick switch between Elevator 69(b) and Satake VBF
  document.getElementById('btn-machine-quick-switch')?.addEventListener('click', async () => {
    const nextId = (currentMachineMeta.id === 'elevator_69b') ? 'satake_vbf' : 'elevator_69b';
    const nextModel = await EchoDB.get(nextId);
    if (nextModel) loadMachineTwin(nextModel);
  });

  // Calculations Modal
  document.getElementById('btn-open-calc')?.addEventListener('click', () => openModal('modal-calc'));
  document.getElementById('btn-close-calc')?.addEventListener('click', () => closeModal('modal-calc'));

  ['calc-input-speed', 'calc-input-pitch', 'calc-input-mass', 'calc-input-height', 'calc-input-eff'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', updateCalculations);
  });

  // LOTO Modal
  document.getElementById('btn-open-loto')?.addEventListener('click', () => {
    LOTOSim.reset();
    openModal('modal-loto');
  });
  document.getElementById('btn-close-loto')?.addEventListener('click', () => closeModal('modal-loto'));

  document.getElementById('loto-btn-estop')?.addEventListener('click', () => LOTOSim.actionEstop());
  document.getElementById('loto-btn-lockout')?.addEventListener('click', () => LOTOSim.actionLockout());
  document.getElementById('loto-btn-zero')?.addEventListener('click', () => LOTOSim.actionZeroEnergy());
  document.getElementById('loto-btn-gravity')?.addEventListener('click', () => LOTOSim.actionGravityRestraint());
  document.getElementById('loto-btn-open-panel')?.addEventListener('click', () => LOTOSim.actionOpenPanel());
  document.getElementById('loto-btn-hand-clear')?.addEventListener('click', () => LOTOSim.actionHandClear());
  document.getElementById('loto-btn-cane-clear')?.addEventListener('click', () => LOTOSim.actionCaneClear());
  document.getElementById('loto-btn-close-panels')?.addEventListener('click', () => LOTOSim.actionClosePanels());
  document.getElementById('loto-btn-restart')?.addEventListener('click', () => LOTOSim.actionRestart());

  // Callouts Toggle
  document.getElementById('btn-toggle-callouts')?.addEventListener('click', () => {
    calloutsVisible = !calloutsVisible;
    const container = document.getElementById('callout-container');
    if (container) container.style.display = calloutsVisible ? 'block' : 'none';
    const btn = document.getElementById('btn-toggle-callouts');
    if (btn) btn.classList.toggle('active', calloutsVisible);
  });

  // Keyboard shortcut 'L' for callouts
  window.addEventListener('keydown', (e) => {
    if (e.key === 'l' || e.key === 'L') {
      document.getElementById('btn-toggle-callouts')?.click();
    }
  });

  // Camera Presets
  document.getElementById('btn-reset-cam')?.addEventListener('click', resetCameraFraming);

  document.querySelectorAll('[data-cam]').forEach(btn => {
    btn.addEventListener('click', () => {
      const preset = btn.getAttribute('data-cam');
      if (preset === 'head') {
        smoothMoveCamera([1.2, 2.2, 1.8], [0, 2.05, 0]);
      } else if (preset === 'middle') {
        smoothMoveCamera([1.8, 1.4, 2.0], [0, 1.2, 0]);
      } else if (preset === 'boot') {
        smoothMoveCamera([1.2, 0.5, 1.6], [0, 0.35, 0]);
      } else if (preset === 'overview') {
        resetCameraFraming();
      }
    });
  });

  // Exploded View Slider
  const explodeSlider = document.getElementById('explode-slider');
  const explodeVal = document.getElementById('explode-val');
  explodeSlider?.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    if (explodeVal) explodeVal.textContent = Math.round(val * 100) + '%';
    updateExplodedView(val);
  });

  // Inspector Drawer Controls
  document.getElementById('btn-close-inspector')?.addEventListener('click', closeInspector);
  document.getElementById('btn-insp-focus')?.addEventListener('click', () => {
    if (activeInspectedCallout && activeInspectedCallout.camPreset) {
      smoothMoveCamera(activeInspectedCallout.camPreset.cam, activeInspectedCallout.camPreset.look);
    }
  });
  document.getElementById('btn-insp-isolate')?.addEventListener('click', isolateTargetMesh);

  // Close modals on clicking overlay backdrop
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });

  setupUploadPipeline();
}

// ============================================================================
// 14. APPLICATION BOOTSTRAP
// ============================================================================
window.addEventListener('DOMContentLoaded', async () => {
  console.log('SAGMA ECHO Digital Twin Studio Initializing...');
  initThreeEngine();
  setupDOMListeners();

  await EchoDB.init();

  // Load primary default twin: Diagram 69(b) Bucket Elevator
  const defaultModel = await EchoDB.get('elevator_69b') || FLEET_DEFINITIONS[0];
  await loadMachineTwin(defaultModel);

  console.log('SAGMA ECHO Ready.');
});
