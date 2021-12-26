const { Post } = require('../models');

const postdata = [
  {
    post_title: 'Donec posuere metus vitae ipsum.',
    post_content: 'integer arcu sem, maximus tristique mollis ac, pharetra in purus. Aliquam sed interdum enim, sit amet bibendum ante.'
  },
  {
    post_title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'Aenean blandit nisi vitae viverra dapibus. Sed diam mi, cursus eu dolor sit amet, blandit sagittis sapien. Donec quis venenatis ligula.'
  },
//   {
//     title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
//     post_content: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
//   },
//   {
//     title: 'Nunc purus.',
//     post_content: 'http://desdev.cn/enim/blandit/mi.jpg',
//     user_id: 4
//   },
//   {
//     title: 'Pellentesque eget nunc.',
//     post_content: 'http://google.ca/nam/nulla/integer.aspx',
//     user_id: 7
//   },
//   {
//     title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
//     post_content: 'https://stanford.edu/consequat.png',
//     user_id: 4
//   },
//   {
//     title: 'In hac habitasse platea dictumst.',
//     post_content: 'http://edublogs.org/non/ligula/pellentesque.js',
//     user_id: 1
//   },
//   {
//     title: 'Morbi non quam nec dui luctus rutrum.',
//     post_content: 'http://ucla.edu/consequat/nulla.html',
//     user_id: 1
//   },
//   {
//     title: 'Duis ac nibh.',
//     post_content: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
//     user_id: 9
//   },
//   {
//     title: 'Curabitur at ipsum ac tellus semper interdum.',
//     post_content: 'https://reverbnation.com/ligula/sit.jpg',
//     user_id: 5
//   },
//   {
//     title: 'In hac habitasse platea dictumst.',
//     post_content: 'http://china.com.cn/lectus/vestibulum.json',
//     user_id: 3
//   },
//   {
//     title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
//     post_content:'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
//     user_id: 10
//   },
//   {
//     title: 'Donec dapibus.',
//     post_content: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
//     user_id: 8
//   },
//   {
//     title: 'Nulla tellus.',
//     post_content: 'https://lycos.com/natoque/penatibus/et.html',
//     user_id: 3
//   },
//   {
//     title: 'Etiam justo.',
//     post_content: 'https://shareasale.com/quis.json',
//     user_id: 4
//   },
//   {
//     title: 'Nulla ut erat id mauris vulputate elementum.',
//     post_content: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
//     user_id: 6
//   },
//   {
//     title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
//     post_content: 'https://java.com/at/nibh/in.png',
//     user_id: 7
//   }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;