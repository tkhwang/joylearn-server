var Book = require('../../models').Book;
var Course = require('../../models').Course;
var randomImage = require('../random/image');

var initializeCourse = () => {
  Course.create({
    name: 'Front-end 입문 강력 추천',
    image: randomImage(),
    courses: [
      {
        topic: 'javascript',
        lecture: {
          name: "ES6 Javascript: The Complete Developer's Guide",
          url:
            'https://www.udemy.com/javascript-es6-tutorial/?couponCode=4MORE1234',
          image:
            'https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
          free: false,
          lang: '',
          review: 0,
          topics: [
            {
              name: 'javascript',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
            }
          ]
        },
        comment: 'asdfasdfasdfasdf'
      }
    ]
  }).then(course => {
    course.setTopics(['javascript']);
  });

  Course.create({
    name: 'Back-end 입문 강력 추천',
    image: randomImage(),
    courses: [
      {
        topic: 'javascript',
        lecture: {
          name: '초보자를 위한 바닐라 JavaScript',
          url: 'https://academy.nomadcoders.co/courses/enrolled/435558',
          image:
            'https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=649&q=80',
          free: true,
          lang: 'kor',
          review: 0,
          comment: 'sdfgsdgf'
        }
      }
    ]
  }).then(course => {
    course.setTopics(['javascript']);
  });
};

var initCourse = () => {
  initializeCourse();
};

initCourse();
module.exports = initCourse;
