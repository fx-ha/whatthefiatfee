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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TO DO
- refactor table
- usd fee per transaction calculation:
    - get current data from api
    - fiat_fee = table_entry * median_txn_size * fiat_price / 100000000
- create fiat selection
- create chart for historical data
    - getstaticprops, revalidate 6(?) hours
- bitcon icons

## Tools
- Bootstrap
- Next.js
- React
- React Bootstrap
- Sass
- Typescript

## Done
- create table