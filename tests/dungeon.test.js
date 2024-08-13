import Dungeon from '../src/boost/dungeon.js';

const dungeon = new Dungeon({
  version: 'retail',
  client: 'timf',
  armorType: 'leather',
  instance: 'halls-of-infusion',
  count: 1,
  pot: 800000,
  roster: [1, 2, 3, 4],
});

console.log(dungeon);
