import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

// Read in the .env environment variables in the file to connect to posstgres

dotenvSafe.config();

// Connect to postgres

const sql = postgres();

export const burritos = [
  {
    id: '1',
    name: 'Ultimate Burrito',
    link: 'ultimate-burrito',
    desc: 'Burritos are filled with a savory filling, most often a meat such as chicken, beef, or pork, and often include a large array of other ingredients such as rice, cooked beans (either whole or refried), vegetables such as lettuce and tomatoes, cheese, and condiments such as salsa, pico de gallo, guacamole, or crema.',
    price: '33,95',
    img: '/images/ultimate-burrito.jpeg',
  },
  {
    id: '2',
    name: 'Beef Burrito',
    link: 'beef-burrito',
    desc: 'Burritos are filled with a savory filling, most often a meat such as chicken, beef, or pork, and often include a large array of other ingredients such as rice, cooked beans (either whole or refried), vegetables such as lettuce and tomatoes, cheese, and condiments such as salsa, pico de gallo, guacamole, or crema.',
    price: '23,00',
    img: '/images/beef-burrito.jpeg',
  },
  {
    id: '3',
    name: 'Chicken Burrito',
    link: 'chicken-burrito',
    desc: 'Burritos are filled with a savory filling, most often a meat such as chicken, beef, or pork, and often include a large array of other ingredients such as rice, cooked beans (either whole or refried), vegetables such as lettuce and tomatoes, cheese, and condiments such as salsa, pico de gallo, guacamole, or crema.',
    price: '26,95',
    img: '/images/chicken-burrito.jpeg',
  },
  {
    id: '4',
    name: 'Bean Burrito',
    link: 'bean-burrito',
    desc: 'Burritos are filled with a savory filling, most often a meat such as chicken, beef, or pork, and often include a large array of other ingredients such as rice, cooked beans (either whole or refried), vegetables such as lettuce and tomatoes, cheese, and condiments such as salsa, pico de gallo, guacamole, or crema.',
    price: '28,90',
    img: '/images/bean-burrito.jpeg',
  },
  {
    id: '5',
    name: 'Vegan Burrito',
    link: 'vegan-burrito',
    desc: 'Burritos are filled with a savory filling, most often a meat such as chicken, beef, or pork, and often include a large array of other ingredients such as rice, cooked beans (either whole or refried), vegetables such as lettuce and tomatoes, cheese, and condiments such as salsa, pico de gallo, guacamole, or crema.',
    price: '19,90',
    img: '/images/vegan-burrito.jpeg',
  },
];
