const {test} = require('ava');
const Render = require('../src/render');
const Index = require('../src/index');

test('export render', t => {
  const time = Date.now();
  const str = `{{${time} | datetime('fromNow')}}`;

  Index.locale('zh-cn');
  t.is(Index(str), new Render().render(str));
});
