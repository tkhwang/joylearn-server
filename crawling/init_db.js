const initializeTopics = require('./topic');
const initializeInstructors = require('./instructors');
const initializeLecture = require('./lecture');
const initializeBook = require('./book');
const initializeCourse = require('./course');

var initDb = () => {
  initializeTopics();
  initializeInstructors();

  initializeLecture();
  initializeBook();

  initializeCourse();
};

initDb();
module.exports = initDb;
