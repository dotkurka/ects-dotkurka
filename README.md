# ECTS Convert

## Installation

`$ npm install ects-dotkurka`

## Using

```
const ECTS = require('ects-dotkurka');

cons score = 95;

const ectsConverter = new ECTS(score);
const ectsResult = ectsConverter.ectsFromScore()

console.log(`Score: ${score}, ECTS Grade: ${ectsResult}`); // Score: 95, ECTS Grade: A
```

## The score-to-ECTS conversion ratios are provided in the table.

| Score      | ECTS |
| ---------- | ---- |
| `90 - 100` | `A`  |
| `82 - 89`  | `B`  |
| `74 - 81`  | `C`  |
| `65 - 73`  | `D`  |
| `60 - 64`  | `E`  |
| `0 - 59`   | `B`  |
