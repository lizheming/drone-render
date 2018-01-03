# drone-render

[![Greenkeeper badge](https://badges.greenkeeper.io/lizheming/drone-render.svg)](https://greenkeeper.io/)

[![npm](https://img.shields.io/npm/v/drone-render.svg?style=flat-square)]()
[![Travis](https://img.shields.io/travis/lizheming/drone-render.svg?style=flat-square)]()
[![Coveralls](https://img.shields.io/coveralls/lizheming/drone-render/master.svg?style=flat-square)]()
[![David](https://img.shields.io/david/lizheming/drone-render.svg?style=flat-square)]()

Render template with CI enviroment injected by Drone CI.

## Installation

    npm install drone-render --save


## How To Use

```js

const render = require('drone-render');
render(`
{% if build.status %}
  {{build.finished | datetime('fromNow')}} build {{build.number}} succeeded. Good job {{build.author}}.
{% else %}
  build {{build.number}} failed at {{build.finished | datetime}}. Fix me please.
{% endif %}
`);

//output
//a day ago build 20 succeeded. Good job lord.
```

### Template Reference

- `repo.owner`: repository owner
- `repo.name`: repository name
- `build.status`: build status type enumeration, either success or failure
- `build.event`: build event type enumeration, one of push, pull_request, tag, deployment
- `build.number`: build number
- `build.commit`: git sha for current commit
- `build.branch`: git branch for current commit
- `build.tag`: git tag for current commit
- `build.ref`: git ref for current commit
- `build.author`: git author for current commit
- `build.link`: link the the build results in drone
- `build.started`: unix timestamp for build started
- `build.finished`: unix timestamp for build finished


### Template Filter

- `uppercasefirst`: converts the first letter of a string to uppercase
- `datetime`: converts a unix timestamp to a date time string. Example {{build.started | datetime}}, you can see more info in [nunjucks-date-filter](https://www.npmjs.com/package/nunjucks-date-filter)
- More filter can see [builtin-filters](https://mozilla.github.io/nunjucks/templating.html#builtin-filters)

## Contributing

Contributions welcome!

## License

[MIT](https://github.com/lizheming/drone-render/blob/master/LICENSE)