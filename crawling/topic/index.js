var Topic = require('../../models').Topic;

var initializeTopics = () => {
  Topic.create({
    name: 'JavaScript',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
  });

  Topic.create({
    name: 'node.js',
    logo:
      'https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg'
  });

  Topic.create({
    name: 'Python',
    logl:
      'https://www.python.org/static/community_logos/python-logo-master-v3-TM.png'
  });

  Topic.create({
    name: 'react',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png'
  });

  Topic.create({
    name: 'ruby',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/480px-Ruby_logo.svg.png'
  });

  Topic.create({
    name: 'git',
    logo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcSFusff2muc5B3Qj-Vr0OaXdx5WnzsJBqD-5uNi6dTAOLQ-gBpA'
  });

  Topic.create({
    name: 'php',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/480px-PHP-logo.svg.png'
  });

  Topic.create({
    name: 'vue.js',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vue.png/300px-Vue.png'
  });

  Topic.create({
    name: 'angular',
    logo: 'https://teamextension.es/dist/img/skills/angularjs_og.png'
  });

  Topic.create({
    name: 'Blockchain',
    logo: 'https://www.ethereum.org/images/logos/ETHEREUM-ICON_Black_small.png'
  });

  Topic.create({
    name: 'Android development',
    logo: 'https://www.android.com/static/2016/img/share/andy-lg.png'
  });

  Topic.create({
    name: 'CSS',
    logo: 'https://pluralsight.imgix.net/paths/path-icons/css-c9b214f0d7.png'
  });

  Topic.create({
    name: 'Ddjango',
    logo:
      'https://s3.amazonaws.com/clarityfm-production/attachments/6605/default/django.png?1442839704'
  });

  Topic.create({
    name: 'Express',
    logo:
      'https://cdn-images-1.medium.com/max/1200/1*EKW3XazCN98jcVrlEP3H8g.png'
  });

  Topic.create({
    name: 'AWS',
    logo:
      'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png'
  });

  Topic.create({
    name: 'MySQL',
    logo:
      'data:image/png;base64,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'
  });

  Topic.create({
    name: 'MongoDB',
    logo:
      'https://cdn-images-1.medium.com/max/2000/1*Ta4qktHtO--RMUpnR08mBg.jpeg'
  });

  Topic.create({
    name: 'React Native',
    logo:
      'https://cdn-images-1.medium.com/max/1600/1*safAvjgR68qpQCreDTOcYA.png'
  });

  Topic.create({
    name: 'Solidity',
    logo:
      'data:image/png;base64,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'
  });

  Topic.create({
    name: 'Swift',
    logo: 'https://developer.apple.com/swift/images/swift-og.png'
  });

  Topic.create({
    name: 'Data Structures and Algorithm',
    logo:
      'data:image/jpeg;base64,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'
  });

  Topic.create({
    name: 'Docker',
    logo:
      'https://subicura.com/assets/article_images/2017-01-19-docker-guide-for-beginners-1/docker-logo.png'
  });
};

initializeTopics();

module.exports = initializeTopics;
