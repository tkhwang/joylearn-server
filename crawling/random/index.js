var faker = require('faker');

var Instructor = require('../../models').Instructor;
var Lecture = require('../../models').Lecture;
var User = require('../../models').User;

const topics = [
  'algorithm',
  'android',
  'angular',
  'apollo',
  'aws',
  'blockchain',
  'coding',
  'css',
  'django',
  'docker',
  'express',
  'git',
  'graphql',
  'html',
  'javascript',
  'jquery',
  'mongodb',
  'mysql',
  'node.js',
  'php',
  'prisma',
  'react',
  'reactnative',
  'redux',
  'ruby',
  'swift',
  'typescript',
  'vue.js'
];

const instructors = [
  'academind',
  'mosh',
  'nicolas',
  'pirple',
  'stephen',
  'traversy-media',
  'tyler',
  'unsure-programmer',
  'velopert',
  'wesbos',
  'zerocho'
];

var genRandomInstructor = () => {
  const len = instructors.length;
  const index = Math.floor(Math.random() * len);
  return instructors[index];
};

var genRandomTopic = () => {
  const len = topics.length;
  const index = Math.floor(Math.random() * len);
  return topics[index];
};

const MAX_INSTRUCTOR = 300;
const MAX_LECTURE = 300;

var generateRandomInstructors = () => {
  for (let i = 0; i < MAX_INSTRUCTOR; i++) {
    Instructor.create({
      name: faker.Name.findName(),
      mainUrl: 'http://' + faker.Internet.domainName(),
      gitHub: 'http://' + faker.Internet.domainName(),
      image: faker.Image.imageUrl()
    }).then(instructor => {
      instructor.setTopics([genRandomTopic()]);
    });
  }
};

var generateRandomLectures = () => {
  for (let i = 0; i < MAX_LECTURE; i++) {
    Lecture.create({
      name: faker.Company.companyName(),
      url: 'http://' + faker.Internet.domainName(),
      image: faker.Image.imageUrl(),
      free: false,
      instructor: genRandomInstructor()
    }).then(lecture => {
      lecture.setTopics([genRandomTopic()]);
      lecture.setInstructors(genRandomInstructor());
    });
  }
};

var generateRandomUser = () => {
  User.findAll().then(users => {
    const max = users.length;
    return Math.floor(Math.random() * max);
  });
};

var generateRandomReview = () => {
  const min = 1;
  const max = 5;
  const random = Math.floor(Math.random() * (max - min)) + min;

  return random;
};

var addRandomReview = () => {
  const MAX = 10;
  Lecture.findAll().then(lectures => {
    lectures.forEach(lecture => {
      console.log(typeof lecture.review);

      let temp = [];
      for (let i = 0; i < MAX; i++) {
        const user = generateRandomUser();
        const value = generateRandomReview();
        temp.push({
          // user: user
          review: value
        });
      }
      lecture.reviews = temp;
      lecture.save();
    });
  });
};

var initDB = () => {
  generateRandomInstructors();
  generateRandomLectures();
  // addRandomReview();
};

initDB();
module.exports = initDB;
