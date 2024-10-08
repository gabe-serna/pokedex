import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ClassProps {
  className?: string;
}

export interface Selected {
  name: string;
  id: number;
}

export const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const genMap = new Map<number, string>();
genMap.set(1, 'i');
genMap.set(2, 'ii');
genMap.set(3, 'iii');
genMap.set(4, 'iv');
genMap.set(5, 'v');
genMap.set(6, 'vi');
genMap.set(7, 'vii');
genMap.set(8, 'viii');
genMap.set(9, 'ix');

export const reverseGenMap = new Map<string, number>();
genMap.forEach((value, key) => {
  reverseGenMap.set(value, key);
});

export const weaknesses = new Map<string, string[]>();
weaknesses.set('normal', ['fighting']);
weaknesses.set('fire', ['water', 'rock', 'ground']);
weaknesses.set('water', ['electric', 'grass']);
weaknesses.set('electric', ['ground']);
weaknesses.set('grass', ['fire', 'ice', 'poison', 'flying', 'bug']);
weaknesses.set('ice', ['fire', 'fighting', 'rock', 'steel']);
weaknesses.set('fighting', ['flying', 'psychic', 'fairy']);
weaknesses.set('poison', ['ground', 'psychic']);
weaknesses.set('ground', ['water', 'grass', 'ice']);
weaknesses.set('flying', ['electric', 'ice', 'rock']);
weaknesses.set('psychic', ['bug', 'ghost', 'dark']);
weaknesses.set('bug', ['fire', 'flying', 'rock']);
weaknesses.set('rock', ['water', 'grass', 'fighting', 'ground', 'steel']);
weaknesses.set('ghost', ['ghost', 'dark']);
weaknesses.set('dragon', ['ice', 'dragon', 'fairy']);
weaknesses.set('dark', ['fighting', 'bug', 'fairy']);
weaknesses.set('steel', ['fire', 'fighting', 'ground']);
weaknesses.set('fairy', ['poison', 'steel']);

export const types = new Map<string, string>();
/* https://gist.github.com/apaleslimghost/0d25ec801ca4fc43317bcff298af43c3 */
types.set('normal', '#A8A77A');
types.set('fire', '#EE8130');
types.set('water', '#6390F0');
types.set('electric', '#F7D02C');
types.set('grass', '#7AC74C');
types.set('ice', '#96D9D6');
types.set('fighting', '#C22E28');
types.set('poison', '#A33EA1');
types.set('ground', '#E2BF65');
types.set('flying', '#A98FF3');
types.set('psychic', '#F95587');
types.set('bug', '#A6B91A');
types.set('rock', '#B6A136');
types.set('ghost', '#735797');
types.set('dragon', '#6F35FC');
types.set('dark', '#705746');
types.set('steel', '#B7B7CE');
types.set('fairy', '#D685AD');

export const abilities = [
  'Adaptability',
  'Aerilate',
  'Aftermath',
  'Air Lock',
  'Anger Point',
  'Anger Shell',
  'Anticipation',
  'Arena Trap',
  'Armor Tail',
  'Aroma Veil',
  'As One',
  'Aura Break',
  'Bad Dreams',
  'Ball Fetch',
  'Battery',
  'Battle Armor',
  'Battle Bond',
  'Beads of Ruin',
  'Beast Boost',
  'Berserk',
  'Big Pecks',
  'Blaze',
  'Bulletproof',
  'Cheek Pouch',
  'Chilling Neigh',
  'Chlorophyll',
  'Clear Body',
  'Cloud Nine',
  'Color Change',
  'Comatose',
  'Commander',
  'Competitive',
  'Compound Eyes',
  'Contrary',
  'Corrosion',
  'Cotton Down',
  'Cud Chew',
  'Curious Medicine',
  'Cursed Body',
  'Cute Charm',
  'Damp',
  'Dancer',
  'Dark Aura',
  'Dauntless Shield',
  'Dazzling',
  'Defeatist',
  'Defiant',
  'Delta Stream',
  'Desolate Land',
  'Disguise',
  'Download',
  `Dragon’s Maw`,
  'Drizzle',
  'Drought',
  'Dry Skin',
  'Early Bird',
  'Earth Eater',
  'Effect Spore',
  'Electric Surge',
  'Electromorphosis',
  'Emergency Exit',
  'Fairy Aura',
  'Filter',
  'Flame Body',
  'Flash Fire',
  'Flower Gift',
  'Flower Veil',
  'Fluffy',
  'Forecast',
  'Forewarn',
  'Friend Guard',
  'Frisk',
  'Full Metal Body',
  'Fur Coat',
  'Gluttony',
  'Good as Gold',
  'Gooey',
  'Gorilla Tactics',
  'Grassy Surge',
  'Grim Neigh',
  'Guard Dog',
  'Gulp Missile',
  'Guts',
  'Hadron Engine',
  'Healer',
  'Heatproof',
  'Heavy Metal',
  'Honey Gather',
  'Hospitality',
  'Huge Power',
  'Hunger Switch',
  'Hustle',
  'Hydration',
  'Hyper Cutter',
  'Ice Body',
  'Ice Face',
  'Illuminate',
  'Illusion',
  'Immunity',
  'Infiltrator',
  'Innards Out',
  'Inner Focus',
  'Insomnia',
  'Intimidate',
  'Intrepid Sword',
  'Iron Barbs',
  'Iron Fist',
  'Justified',
  'Keen Eye',
  'Klutz',
  'Leaf Guard',
  'Levitate',
  'Light Metal',
  'Lightning Rod',
  'Limber',
  'Lingering Aroma',
  'Liquid Ooze',
  'Magic Bounce',
  'Magic Guard',
  'Magician',
  'Magma Armor',
  'Magnet Pull',
  'Marvel Scale',
  'Mega Launcher',
  'Merciless',
  'Mimicry',
  `Mind’s Eye`,
  'Minus',
  'Misty Surge',
  'Mold Breaker',
  'Motor Drive',
  'Moxie',
  'Multitype',
  'Mummy',
  'Mycelium Might',
  'Natural Cure',
  'Neuroforce',
  'Neutralizing Gas',
  'No Guard',
  'Normalize',
  'Oblivious',
  'Opportunist',
  'Orichalcum Pulse',
  'Overcoat',
  'Overgrow',
  'Own Tempo',
  'Parental Bond',
  'Pastel Veil',
  'Pickpocket',
  'Pickup',
  'Pixilate',
  'Plus',
  'Poison Heal',
  'Poison Point',
  'Poison Puppeteer',
  'Poison Touch',
  'Power Construct',
  'Power Spot',
  'Prankster',
  'Pressure',
  'Primordial Sea',
  'Prism Armor',
  'Protosynthesis',
  'Psychic Surge',
  'Punk Rock',
  'Pure Power',
  'Purifying Salt',
  'Quark Drive',
  'Queenly Majesty',
  'Quick Draw',
  'Quick Feet',
  'RKS System',
  'Rain Dish',
  'Rattled',
  'Receiver',
  'Reckless',
  'Refrigerate',
  'Regenerator',
  'Ripen',
  'Rivalry',
  'Rock Head',
  'Rough Skin',
  'Run Away',
  'Sand Force',
  'Sand Rush',
  'Sand Spit',
  'Sand Stream',
  'Sand Veil',
  'Sap Sipper',
  'Schooling',
  'Scrappy',
  'Screen Cleaner',
  'Seed Sower',
  'Serene Grace',
  'Shadow Shield',
  'Shadow Tag',
  'Sharpness',
  'Shed Skin',
  'Sheer Force',
  'Shell Armor',
  'Shield Dust',
  'Shields Down',
  'Simple',
  'Skill Link',
  'Slow Start',
  'Slush Rush',
  'Sniper',
  'Snow Cloak',
  'Snow Warning',
  'Solar Power',
  'Solid Rock',
  'Soul-Heart',
  'Soundproof',
  'Speed Boost',
  'Stakeout',
  'Stall',
  'Stamina',
  'Stance Change',
  'Static',
  'Steadfast',
  'Steam Engine',
  'Steelworker',
  'Stench',
  'Sticky Hold',
  'Storm Drain',
  'Strong Jaw',
  'Sturdy',
  'Suction Cups',
  'Super Luck',
  'Supersweet Syrup',
  'Supreme Overlord',
  'Surge Surfer',
  'Swarm',
  'Sweet Veil',
  'Swift Swim',
  'Sword of Ruin',
  'Synchronize',
  'Tablets of Ruin',
  'Tangled Feet',
  'Tangling Hair',
  'Technician',
  'Telepathy',
  'Tera Shell',
  'Tera Shift',
  'Teraform Zero',
  'Teravolt',
  'Thermal Exchange',
  'Thick Fat',
  'Tinted Lens',
  'Torrent',
  'Tough Claws',
  'Toxic Chain',
  'Toxic Debris',
  'Trace',
  'Transistor',
  'Triage',
  'Truant',
  'Turboblaze',
  'Unaware',
  'Unburden',
  'Unnerve',
  'Unseen Fist',
  'Vessel of Ruin',
  'Victory Star',
  'Vital Spirit',
  'Volt Absorb',
  'Wandering Spirit',
  'Water Absorb',
  'Water Bubble',
  'Water Compaction',
  'Water Veil',
  'Weak Armor',
  'Well-Baked Body',
  'White Smoke',
  'Wimp Out',
  'Wind Power',
  'Wind Rider',
  'Wonder Guard',
  'Wonder Skin',
  'Zero to Hero'
];
