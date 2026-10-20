# SAGMA 3D Training Twin — Audio & Visual Credits

## 1. Procedural Web Audio Synthesis (`script.js` -> `initShowcaseAudioEngine`)
All sound effects and ambient beds captured in the 30-second showcase video exporter are **100% procedurally generated in real time** using the W3C **Web Audio API** (`AudioContext`, `OscillatorNode`, `BiquadFilterNode`, `GainNode`, `DynamicsCompressorNode`, and `MediaStreamAudioDestinationNode`). No third-party or copyrighted audio samples are used.

- **Low Industrial Ambient Bed**: Synthesized via warm low-pass filtered (`195 Hz` cutoff) harmonic oscillators tuned to `A1 (55.0 Hz)`, `E2 (82.41 Hz)`, and `A2 (110.0 Hz)` with smooth fade-in and fade-out envelopes.
- **Label Reveal Telemetry Ticks**: Synthesized via pentatonic sine-wave envelopes (`880 Hz`, `987.77 Hz`, `1108.73 Hz`, `1318.51 Hz`) triggered deterministically at each callout reveal timestamp on the master 30-second timeline.
- **Beat 5 End Card Harmonic Lift**: Synthesized via a 5-voice `A-major9` chord swell (`220.0 Hz`, `277.18 Hz`, `329.63 Hz`, `440.0 Hz`, `493.88 Hz`) triggered at `26.0s`.
- **Master Bus Dynamics**: Controlled via a `DynamicsCompressorNode` (`-14 dB` threshold, `6:1` ratio) to guarantee consistent broadcast levels and zero digital clipping.

**License**: Public Domain / Original Procedural Synthesis (CC0 1.0 Universal).

---

## 2. 3D Models, Fonts & Engineering References
- **Unit 01 3D Model (`assets/elevator_full_diagram69b.glb`)**: SAGMA Authoritative Digital Twin based on Diagram 69(b) & DIN 22104 / SolidWorks CAD specifications.
- **Typography**: `DM Sans` and `DM Mono` (Google Fonts, SIL Open Font License 1.1).
- **3D Engine**: Three.js r128 (MIT License).
