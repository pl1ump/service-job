# Service technician cheat sheet — CNC cutting

Personal study notes on CNC cutting technologies, written while preparing for a
service technician interview. **Not official documentation of any manufacturer.**

Live: https://pl1ump.github.io/service-job/

## What is covered

| Section | Contents |
|---|---|
| Plasma | torch cross-section, consumables, pilot → transferred arc, THC, reading sparks, gases |
| Laser | head cross-section, fibre vs CO₂, assist gases, capacitive height sensing, wear parts |
| Waterjet | cutting head, taper and jet lag, pump and fluid path, why it is a cold process |
| Oxy-fuel | the chemistry, why mild steel only, practical notes, safety |
| Milling | drilling, tapping, marking, bevel milling — cutting speed and feed per tooth |
| Common | machine construction, program structure, three height-control principles, remote diagnosis |
| Faults | 36 symptom → cause entries, searchable and filterable by technology |

Three languages: Ukrainian, Slovak, English. The choice is kept in `localStorage`.

## Structure

```
index.html    markup, styles, SVG diagram templates
content.js    all text in three languages + the fault table
app.js        renders panels from content.js, wires navigation and filters
```

No framework and no build step — static files only. Adding a language means adding
one object to `CONTENT` and one array to `FAULTS`.
