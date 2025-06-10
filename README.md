# Clipboard Health Assessment

This project is an assessment for Clipboard Health, implementing a script to fetch the most active workplaces based on completed shifts.

## Project Structure

- `src/scripts/top-workplaces.ts`: Main script to fetch and process workplace data
- `package.json`: Project configuration and dependencies
- `tsconfig.json`: TypeScript configuration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the script:
```bash
npm run start:topWorkplaces
```

## Output Format

The script outputs the top 3 workplaces with the most completed shifts in the following format:
```json
[
  {
    "name": "Workplace Name",
    "shifts": 123
  },
  ...
]
```

## Requirements

- Node.js
- TypeScript
- Axios for API requests 