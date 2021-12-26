const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'integer arcu sem, maximus tristique mollis ac, pharetra in purus. Aliquam sed interdum enim, sit amet bibendum ante.',
    user_id: 2
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Aenean blandit nisi vitae viverra dapibus. Sed diam mi, cursus eu dolor sit amet, blandit sagittis sapien. Donec quis venenatis ligula.',
    user_id: 5
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'Cras pharetra erat in ex commodo scelerisque. Nullam et sapien sodales, ultricies velit at, porttitor massa. Quisque maximus eu velit a semper.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    content: 'Sed posuere ipsum mauris, eget facilisis nunc tristique quis. Proin pretium ornare erat, malesuada pretium velit aliquam ac.',
    user_id: 3
  },
{
   title: 'Pellentesque eget nunc.',
    content: 'Integer sollicitudin bibendum enim, ut scelerisque elit viverra nec. Phasellus sit amet ultrices quam, sit amet tincidunt tellus.',
    user_id: 7
},
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content: 'Vivamus mollis scelerisque ligula posuere sollicitudin. Aenean fermentum quis sem nec sollicitudin. Maecenas id lectus ut mauris pellentesque ultricies.',
    user_id: 8
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Nullam ut metus nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; ',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: ' Curabitur pulvinar, orci nec consectetur sodales, dolor mauris pharetra velit, quis facilisis velit arcu et nibh. Sed a massa nec dui pharetra congue.',
    user_id: 2
  },
  {
    title: 'Duis ac nibh.',
    content: 'Cras elit odio, dapibus id nulla id, faucibus porta odio. In mattis varius tellus, ut viverra tortor venenatis quis. Integer facilisis feugiat turpis, id volutpat magna dignissim vel.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content: 'Aenean congue sem lectus, at auctor leo lacinia nec. Vestibulum ipsum justo, mollis eget velit ac, pretium mollis ex. Nullam ac erat a nulla dictum varius. ',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: ' Sed efficitur lacus nec risus maximus lobortis pulvinar ut massa. Etiam arcu nisi, varius non bibendum sed, scelerisque ut neque. Ut elementum, ante a pharetra tincidunt, mauris ex scelerisque turpis, id rhoncus orci nibh id leo.',
    user_id: 3
  },
  {
    title: 'Donec dapibus.',
    content: 'Suspendisse metus lacus, fringilla vulputate pulvinar nec, gravida quis dui. Aenean euismod tincidunt semper. Pellentesque efficitur tortor et ligula lobortis bibendum. Cras eget nibh ante. ',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
   content: ' Aenean mattis sapien at sapien aliquet, non vehicula dolor tincidunt. Morbi imperdiet nibh sed iaculis fringilla. Etiam a massa risus. Vestibulum gravida, dolor eu bibendum malesuada, purus lacus consectetur nunc, vitae rutrum urna sem eu lectus. ',
    user_id: 3
  },
  {
    title: 'Etiam justo.',
    content: 'Suspendisse at augue feugiat neque hendrerit iaculis non et nibh. Integer bibendum sem non imperdiet varius. Etiam a augue nulla. Donec faucibus dolor ut libero laoreet, sit amet semper magna mollis. ',
    user_id: 11
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    content: 'Donec ut sem nisl. Curabitur semper sem at erat tristique, vel semper velit cursus. Duis ut congue sem. Proin gravida ligula eget quam posuere, ac pellentesque ex pulvinar. ',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;