# whatthefiatfee-frontend

## Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Builds the app for production:
```bash
npm run build
```

Run the built app in production mode:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TO DO
- create chart for historical data
    - getstaticprops, revalidate 6(?) hours
- footer: source

## Tools
- Bootstrap
- Next.js
- React
- React Bootstrap
- Sass
- Typescript

## Done
- create table
- usd fee per transaction calculation:
    - get current data from api
    - fiat_fee = table_entry * median_txn_size * fiat_price / 100000000
- transaction size slider
    - default: 400
    - min: 100
    - max: 1000
- bitcon icons    
- create fiat selection
- refactor table