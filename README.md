# whatthefiatfee-frontend

## Setup

Add API URL to .env.local

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
- separate components for tablerows
- footer: source
- pwa

## Tools
- Bootstrap
- Next.js
- React
- React Bootstrap
- Recharts
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
- format current bitcoin price to local string
- create chart for historical data
    - getstaticprops, revalidate 6(?) hours
- use https://blog.alanmontgomery.co.uk/using-react-context-api-with-nextjs
- separate components for buttongroup, txnSize slider