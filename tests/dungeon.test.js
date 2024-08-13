import Dungeon from '../src/boost/dungeon/index.js';

const dungeon = new Dungeon({
  id: 3452342,
  type: 'dungeon',
  version: 'retail',
  client: { id: 1234, characterName: 'Timf-Silvermoon' },
  armorType: 'leather',
  instance: 'halls-of-infusion',
  count: 1,
  keystoneLevel: 10,
  difficulty: 'mythic-plus',
});

console.log(dungeon);
