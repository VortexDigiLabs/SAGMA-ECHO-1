# SAGMA ECHO Unification & Feature Expansion — Merge Plan
**Target Branch:** feat/echo-unified-v2
**Host Application:** C:\Users\PC 1\Desktop\ECHO
**Date:** October 2026
**Architect:** Lead Agentic Architect (Antigravity IDE)

---

## 1. Local Repositories & Resource Mapping

### Primary Host Repository (Deployment Target)
- **Path:** C:\Users\PC 1\Desktop\ECHO
- **Active Branch:** feat/echo-unified-v2 (branched cleanly from baseline main)
- **Architecture:** Standalone, offline-first Three.js WebGL application executed via ECHO.bat (python -m http.server 8000 + Chrome/Edge Standalone App Mode).
- **Existing Assets:** Three.js r128, GLTFLoader, DRACOLoader, OrbitControls, Satake VBF 10A model (assets/satake_vbf.glb), Bucket Elevator model (assets/elevator_full_diagram69b.glb), OSHA LOTO simulator, milling calculation modules.

### Repo A: SAGMA Branded Repository
- **Path:** C:\Users\PC 1\Desktop\SAGMA - Interactive Content\immersive-machinery-exploration-platform (1)
- **Key Modules & Assets to Port:**
  - **Design System & Brand Tokens:**
    - Primary Forest Green: #005A36
    - Secondary Emerald Accent: #0D6E45
    - Dark Industrial Contrast: #14281E
    - Warm Sage Background / Tint: #EAF0EB / #E6F3EC
    - High-Contrast White / Neutral: #FFFFFF / #F4F8F5
    - Status Accents: Sensor Green (#16A34A), Warning Amber (#D97706), Safety Red (#DC2626)
  - **Logos & Badges:** public/ and C:\Users\PC 1\Desktop\SAGMA Logo (LOGO-removebg-preview.png, Gear_Logo-removebg-preview.png).
  - **Typography:** DM Sans (Interface) & DM Mono (Telemetry / Technical readouts).
  - **i18n Localization Engine:** src/lib/i18n.tsx containing verified dictionaries for:
    - English (en-ZA) — Default
    - Afrikaans (af-ZA)
    - isiZulu (zu-ZA)
    - Sesotho (st-ZA)
    - Portugues (pt-MZ / pt-AO)
  - **Curriculum Metadata:** Complete 13-point Diagram 69(b) Bucket Elevator inspection points and technical specifications.

### Repo B: Unbranded 3D CAD Feature Pipeline
- **Path:** C:\Users\PC 1\Desktop\Anatomy
- **Key Modules & Shaders to Port:**
  - **NVIDIA CAD Viewport Pipeline:**
    - High-end PBR Metallic-Roughness shader pipeline.
    - 3-point Studio HDRI / neutral directional lighting setup (Key, Fill, Rim, Ambient ground bounce).
    - Contact Shadow ground plane for depth grounding.
    - Damped OrbitControls (enableDamping: true, dampingFactor: 0.05).
    - Edge / Wireframe CAD diagnostic overlay.
    - Camera orbit bounding box calculation with auto-framing.
  - **Telemetry HUD:**
    - Live WebGL performance stats (FPS, Triangles, Draw calls, Memory).
    - Dimension bounding box (Width x Depth x Height in mm).
    - Center of gravity / mass indicator.

### Additional Data & Technical Documentation Sources
- **Vendor Spec Sheets & Manifest:** C:\Users\PC 1\Desktop\CAD from WEB
  - _Vendor_Spec_Sheets_PDF/: 13 official manufacturer specification PDFs (Buhler, Satake, Henry Simon, Sangati Berga).
  - MANIFEST.md: Complete classification of equipment into the 6 SAGMA milling categories.

---

## 2. Gated Implementation Roadmap

| Milestone | Scope | Deliverables | Verification |
|---|---|---|---|
| M1 | Dual-Repo Audit & Branch Setup | MERGE_PLAN.md, branch feat/echo-unified-v2 | Git status clean, repositories documented |
| M2 | SAGMA Brand Unification + NVIDIA CAD Pipeline | SAGMA color tokens, NVIDIA PBR materials, studio lighting, wireframe overlay, smooth damping | Dev server runs at 60 FPS, high-contrast dark studio / SAGMA industrial theme |
| M3 | Categorized Equipment Library & Dedicated Machine Spaces | 6 Milling categories, search & filter, OEM badges, isolated interactive machine spaces (/machine/:id), technical spec drawer, embedded PDF viewer | Clean navigation between machines, WebGL memory disposed on switch |
| M4 | Universal Machine File Uploader | Drag-and-drop modal, .glb, .gltf, .obj, .stl, .step/.stp/.iges (via occt-import-js), PDF attachment, IndexedDB (EchoDB) persistence | Uploaded files immediately render in 3D and persist across browser reloads |
| M5 | Multi-Language Selector (i18n) & E2E Polish | 5-language dropdown (en-ZA, af-ZA, zu-ZA, st-ZA, pt-MZ), dynamic label updates without camera resets | All UI controls localized, verified with browser checks |
