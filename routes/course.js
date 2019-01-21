var express = require('express');
var router = express.Router();

const { Lecture } = require('../models');
const { Instructor } = require('../models');
const { Comment } = require('../models');
const { Review } = require('../models');
const { Book } = require('../models');
const { Course } = require('../models');

router.post('/:topicId', async (req, res, next) => {
  const { course } = req.body;
  const topicId = decodeURIComponent(req.params.topicId);

  const newCourse = await Course.create({
    name: course.name,
    url: course.url,
    image: course.image,
    free: course.free,
    lang: course.lang,
    courses: course.courses
  });

  newCourse.setTopics([topicId]);
  console.log('[+] /course/', topicId, newCourse);

  res.send(newCourse);
});

module.exports = router;
