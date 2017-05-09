const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = function() {
  let data = {
    news: [],
    user: []
  };

  let images = [];
  for (let i=0;i<100;i++) {
    images.push(Random.image('200x100', Random.color(), Random.word(2,6)));
  }

  for (let i = 0; i < 100; i++) {
    let content = Random.cparagraph(0,10);
    data.news.push({
      id: i,
      title: Random.cword(8,20),
      desc: content.substr(0,40),
      tag: Random.cword(2,6),
      views: Random.integer(100,5000),
      images: images.slice(0,Random.integer(1,3))
    })
  }

  let sex = ['male','female'];
  for (let j=0;j<100;j++) {
    data.user.push({
      id: Random.increment(),
      name: Random.cname(),
      certNo: Random.id(),
      age: Random.natural(0,150),
      gender: sex[Random.natural(0,1)]
    })
  }

  return data;
}