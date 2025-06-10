# Clipboard Health Assessment

This project is a solution for the Clipboard Health assessment task. It implements a script to fetch and process workplace data to find the most active workplaces based on completed shifts.

## Project Structure

```
.
├── src/
│   └── scripts/
│       └── top-workplaces.ts    # Main script to fetch and process workplace data
├── package.json                 # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the script:
```bash
npm start
```

## Output Format

The script outputs the top 3 workplaces by completed shifts in the following JSON format:

```json
[
  {
    "name": "Workplace Name",
    "shifts": 42
  },
  ...
]
```

## Requirements

- Node.js (v14 or higher)
- TypeScript
- Axios for HTTP requests 