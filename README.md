# OURu – Station · Vector‑Hub · HTML‑Panels

OURu ist eine eigenständige Station innerhalb des uOUR‑Systems.  
Sie dient als **Arbeitsfläche**, **Test‑Umgebung**, **Vector‑Hub** und **HTML‑Panel‑Dock**.  
Hier werden Module ausgeführt, erweitert und visualisiert.

---

## 📂 Struktur

OURu/
│
├── DOM.html
├── ID.html
├── IDE.html
├── indy.html
├── scan.html
├── time_3x11_scroll_zoom.html
├── toolomat_flaeche_48.html
│
├── clock.html
├── clock.js
│
├── fin.e.js
├── toolomat_flaeche_48.js
│
├── axiom.vector
├── air.vector
├── highway.vector
│
└── README.md


---

## 🧭 Zweck der Station

Die OURu‑Station dient als:

- **Arbeitsfläche**  
- **Test‑Umgebung**  
- **Vector‑Hub**  
- **HTML‑Panel‑Dock**  
- **Axiom‑Viewer**  
- **Zeit‑Module‑Host**

Sie ist **nicht** die Pipeline selbst, sondern der **Ort**, an dem Module  
ausgeführt, getestet, erweitert und visualisiert werden.

---

## 🕒 CLOCK – Echtzeit

```js
setInterval(() => {
  document.getElementById("clock-real").innerText =
    new Date().toLocaleTimeString();
}, 1000);


⏱️ TIME – Arbeitszeit

let workSeconds = 0;
setInterval(() => {
  workSeconds++;
  document.getElementById("clock-work").innerText =
    new Date(workSeconds * 1000).toISOString().substr(11, 8);
}, 1000);


📐 Axiom‑Vector‑Dateien
axiom.vector – Grundaxiom

air.vector – Air‑Achse

highway.vector – Highway‑Achse

Diese Dateien definieren die Basisachsen, die in den Panels dargestellt werden.

🧩 HTML‑Panels
DOM.html – Struktur‑Panel

ID.html – Identitäts‑Panel

IDE.html – Identity‑Extension

indy.html – Index‑Panel

scan.html – Scan‑Panel

time_3x11_scroll_zoom.html – Zeit‑Scroll‑Panel

toolomat_flaeche_48.html – Tool‑Panel

🔧 JavaScript‑Module
clock.js – Echtzeit + Arbeitszeit

fin.e.js – Engine‑Modul

toolomat_flaeche_48.js – Tool‑Logik

📄 Status
Station vollständig funktionsfähig

Panels korrekt geladen

Vector‑Dateien kompatibel

Zeitmodule aktiv

Keine Alt‑Code‑Konflikte

🔗 Weiterführende Module
uOUR‑Pipeline

Axiom‑System

Vector‑Engine

AirSchach‑Formeln

📄 Lizenz
MIT


© iki1uc wieimmer
Open System
Frei nutzbar, frei teilbar, frei erweiterbar.
Branding "iki1uc wieimmer" muss bestehen bleiben. Keine Garantie, Nutzung auf eigene Verantwortung.
