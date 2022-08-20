# Serverseitiges Rendern Content Management System
Diese Projekt ist im zusammenhang einer Bachelor arbeit entstanden, welche sich mit dem hinzufügen von Serverseitigem Rendern in einem Content Management System untersucht.

## Setup
Zum ausführen des Systems wird nur node.js benötigt.
1. Installation durch `npm i`
2. Kompilieren der Typescript dateine: `npm run build`
3. Publizieren der Seiten: `npm run publish`
4. Starten des Servers: `npm start`

## Scripte
| Befehl | Beschreibung |
| --- | --- |
| `npm run build` | Kompiliert das Typscript nach `/dist`und bündelt den Frontendcode nach `/build/assets/bundel.js`|
| `npm run build:tsc` | Kompiliert das Typscript nach `/dist`. |
| `npm run build:bundel` | Bündelt den Frontendcode nach `/build/assets/bundel.js` |
| `npm run watch` | Startetet den webserver und startet diesen neu, wenn es eine Änderung im `/dist/server`. |
| `npm run watch:tsc` | Beobachtet alle Typscript Dateien und Kompiliert dies nach `/dist` neu, falls es änderungen gab. |
| `npm run watch:bundel` | Beobachtet den Frontend code und bündelt diesen nach `/build/assets/bundel.js` neu, wenn es Änderungen gab. |
| `npm start` | Startet den Webserver unter `localhost:3000` |
| `npm run publish` | Publiziert eine Seite aus dem simulierten Bearbeitungsmodus zu den Livedateien. Diese Dateien liegen in `/build`. |
| `npm run publish <page>` | Publiziert eine gegebene Seite. |