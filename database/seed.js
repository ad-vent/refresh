const faker = require('faker');

const db = require('./index.js');
const Recipe = require('./recipes.js');

const name = ['Eleen Yeh', 'Nathan Sou', 'Watson Fu', 'Justin Kwan', 'Kim Dang', 'Michael Shi', 'Bradley Zazzara', 'Dennis Huynh', 'Jon Zawada'];
const photo = [
  'https://ca.slack-edge.com/T0130S7DBUJ-U0134SRE970-2efddf69b0ae-512',
  'https://ca.slack-edge.com/T0130S7DBUJ-U0141E3KCU8-cba846dcc561-512',
  'https://ca.slack-edge.com/T0130S7DBUJ-U013HQ53FCL-b7f1623bef32-512',
  'https://ca.slack-edge.com/T0130S7DBUJ-U012WSG8JQP-11c0157bb81a-512',
  'https://ca.slack-edge.com/T0130S7DBUJ-U013BJW38G2-69bd395ab8b2-512',
  'https://ca.slack-edge.com/T0130S7DBUJ-U013HQ4P5EY-d960262d6c6b-512',
  'https://ca.slack-edge.com/T0130S7DBUJ-U01311SNRK4-e7ee30ea3ca8-512',
  'https://ca.slack-edge.com/T0130S7DBUJ-U012L9NJC4X-7e8931f3337f-512',
  'https://ca.slack-edge.com/T0130S7DBUJ-U013QSE9S1E-cd2004d20aba-512'
];

const createSampleEntries = () => {
  let entries = [];

  for (let i = 1; i <= 50; i++) {
    let randomIndex = Math.floor(Math.random() * 9);
    entries.push({
      recipe_id: i,
      full_name: name[randomIndex],
      user_image: photo[randomIndex],
      follewers: [],
      following: [],
      recipe: {
        image: faker.image.food(),
        title: faker.lorem.words(),
        ingredients: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
        description: faker.lorem.paragraphs(5, "\n"),
        date: faker.date.between('2020-07-01', '2020-07-25'),
        likes: faker.random.number({ min: 1, max: 10000 }),
        comments: [
          {
            full_name: faker.name.findName(),
            text: faker.hacker.phrase()
          },
          {
            full_name: faker.name.findName(),
            text: faker.hacker.phrase()
          },
          {
            full_name: faker.name.findName(),
            text: faker.hacker.phrase()
          }
        ]
      }


    });
  }
  return entries;
};

const seedData = createSampleEntries();

const insertSampleEntries = () => {
  Recipe.create(seedData)
    .then(() => console.log('db seeded'))
    .catch((err) => console.log(err, 'failed to seed db'))
};

insertSampleEntries();
