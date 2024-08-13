import Raid from '../src/boost/test/raid.js';

const boosters = [
  {
    id: 1,
    name: 'Faithrien-Silvermoon',
  },
  {
    id: 2,
    name: 'Meithrien-Silvermoon',
  },
];

const booster = [
  {
    id: 3,
    name: 'Leithrien-Silvermoon',
  },
];

const raid = new Raid({
  id: 1234567890,
  type: 'raid',
  armorType: 'leather',
  instance: 'narubar-place',
  version: 'retail',
  count: 1,
  pot: 800000,
});

raid.addRoster(booster);
console.log(raid);
raid.addRoster(boosters);
console.log('-----');
console.log(raid.toJSON());
