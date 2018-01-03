const Render = require('./render');
const instance = new Render();
function render(...args) {
  return instance.render(...args);
}
render.locale = instance.locale;
module.exports = render;
