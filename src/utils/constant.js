export const ArmorType = {
  LEATHER: 'leather',
  CLOTH: 'cloth',
  MAIL: 'mail',
  PLATE: 'plate',
  NOT_SPECIFIED: 'not-specified',
};

export const Difficulty = {
  MYTHIC_PLUS: 'mythic-plus',
  MYTHIC: 'mythic',
  HEROIC: 'heroic',
  NORMAL: 'normal',
  LFR: 'lfr',
};

export const Instance = {
  RAID: {
    NERUBAR_PLACE: 'nerubar-place',
  },
  DUNGEON: {
    CITY_OF_ECHOES: 'city-of-echoes',
    CITY_OF_THREADS: 'city-of-threads',
    THE_STONEVAULT: 'the-stonevault',
    THE_DOWNBREAKER: 'the-downbreaker',
    MIST_OF_TIRNA_SCITHE: 'mist-of-tirna-scithe',
    THE_NECROTIC_WAKE: 'the-necritic-wake',
    SIEGE_OF_BORALUS: 'siege-of-boralus',
    GRIM_BATOL: 'grim-batol',
  },
  BATTLEGROUND: 'battleground',
  PVP: 'pvp',
};

export const BoostType = {
  RAID: 'raid',
  DUNGEON: 'dungeon',
  BATTLEGROUND: 'battleground',
  PVP: 'pvp',
  ACHIEVEMENT: 'achievement',
  MOUNT: 'mount',
  LEVELING: 'leveling',
};

export const GameVersion = {
  RETAIL: 'retail',
  CLASSIC: {
    SEASON_OF_DISCOVERY: 'season-of-discovery',
    HARCORE: 'harcore',
    VANILLA: 'vanilla',
    CATACLYSM: 'cataclysm',
  },
};

export const QueueType = {
  SOLO: 'solo',
  DUO: 'duo',
  TEAM: 'team',
};

export const BoostLimit = {
  MAX_RAID_ROSTER: 30,
  MAX_RAID_CLIENT: 16,
  MAX_DUNGEON_ROSTER: 4,
  MAX_DUNGEON_CLIENT: 1,
};
