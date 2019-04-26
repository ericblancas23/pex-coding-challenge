var products = [
  { id: 1, name: 'Buzzy' },
  { id: 2, name: 'Bytrex' },
  { id: 3, name: 'CactiDance' },
  { id: 4, name: 'CactiLoops' },
  { id: 5, name: 'Cadaver Jelly' },
  { id: 6, name: 'Caffeine Serene' },
  { id: 7, name: 'Cajun Sation' },
  { id: 8, name: 'Call it Green' },
  { id: 9, name: 'Callflex' },
  { id: 10, name: 'Calling Card Shark' },
  { id: 11, name: 'Calque' },
  { id: 12, name: 'Camel Meal Tea' },
  { id: 13, name: 'Camelot Chamomile' },
  { id: 14, name: 'Campxotica' },
  { id: 15, name: 'Camus the Killer Tale' },
  { id: 16, name: 'Candecor' },
  { id: 17, name: 'Candelarium' },
  { id: 18, name: 'CandID' },
  { id: 19, name: 'Candlelight Vittles' },
  { id: 20, name: 'Candy Ask' },
  { id: 21, name: 'Candy Floss' },
];
 
var prices = [
  { id: 6, price: 55 },
  { id: 14, price: 22 },
  { id: 15, price: 57 },
  { id: 4, price: 41 },
  { id: 18, price: 9 },
  { id: 17, price: 3 },
  { id: 2, price: 73 },
  { id: 7, price: 43 },
  { id: 5, price: 78 },
  { id: 1, price: 91 },
  { id: 8, price: 58 },
  { id: 16, price: 69 },
  { id: 13, price: 74 },
  { id: 19, price: 14 },
  { id: 21, price: 25 },
  { id: 12, price: 84 },
  { id: 20, price: 8 },
  { id: 9, price: 94 },
  { id: 10, price: 36 },
  { id: 3, price: 34 },
  { id: 11, price: 71 },
];

prices.sort((a, b) => a.price - b.price)
      .forEach(p => {
        console.log(products.find(a => a.id === p.id))
      })