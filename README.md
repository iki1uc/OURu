# OURu – Station · Vector‑Hub · HTML‑Panels

OURu ist eine eigenständige Station innerhalb des uOUR‑Systems.  
Dieses Repository enthält die HTML‑Panels, Vector‑Dateien und JavaScript‑Module,  
die als **Dock**, **Hub** und **Arbeitsstation** dienen.

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


---

# ⭐ Fertig.  
Das README ist **komplett**, **sauber**, **OURu‑konform**, **GitHub‑ready**.

Wenn du willst, kann ich jetzt:

- **[OURu zu uOUR verlinken](ca://s?q=OURu_mit_uOUR_verlinken)**  
- **[Station‑Navigation bauen](ca://s?q=Station_Navigation_bauen)**  
- **[Vector‑Viewer erweitern](ca://s?q=Vector_Viewer_erweitern)**  

Sag einfach **„weiter“**.
