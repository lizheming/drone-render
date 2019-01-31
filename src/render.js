const moment = require('moment');
const nunjucks = require('nunjucks');
const dateFilter = require('nunjucks-date-filter');
dateFilter.setDefaultFormat('YYYY-MM-DD HH:mm:ss');

module.exports = class {
  constructor() {
    this.nunjucks = new nunjucks.Environment();
    this.addFilter();
  }

  get renderData() {
    const ENVS = {
      'repo.owner': 'DRONE_REPO_OWNER',
      'repo.name': 'DRONE_REPO_NAME',
      'build.status': 'DRONE_BUILD_STATUS',
      'build.event': 'DRONE_BUILD_EVENT',
      'build.number': 'DRONE_BUILD_NUMBER',
      'build.commit': 'DRONE_COMMIT',
			'build.message': 'DRONE_COMMIT_MESSAGE',
      'build.branch': 'DRONE_BRANCH',
      'build.tag': 'DRONE_TAG',
      'build.ref': 'DRONE_COMMIT_REF',
			'build.pull_request': 'DRONE_PULL_REQUEST',
			'build.source_branch': 'DRONE_SOURCE_BRANCH',
			'build.target_branch': 'DRONE_TARGET_BRANCH',
      'build.author': 'DRONE_COMMIT_AUTHOR',
      'build.link': 'DRONE_BUILD_LINK',
      'build.started': 'DRONE_BUILD_STARTED',
      'build.finished': 'DRONE_BUILD_FINISHED'
    };

    const ENV_DATAS = {};
    for (const env in ENVS) {
      const envItems = env.split('.');
      const lastEnvItems = envItems.pop();

      let data = ENV_DATAS;
      for (const item of envItems) {
        if (!data[item]) {
          data[item] = {};
        }
        data = data[item];
      }

      data[lastEnvItems] = process.env[ ENVS[env] ];
    }

    ENV_DATAS.success = ENV_DATAS.build.status === 'success';
    ENV_DATAS.failure = !ENV_DATAS.success;

    ENV_DATAS.build.started *= 1000;
    ENV_DATAS.build.finished *= 1000;

    return ENV_DATAS;
  }

  addFilter() {
    this.nunjucks.addFilter('datetime', dateFilter);
    this.nunjucks.addFilter('uppercasefirst', function(text) {
      return text.replace(/^\S/, s => s.toUpperCase());
    });
  }

  render(text) {
    return this.nunjucks.renderString(text, this.renderData);
  }

  locale(...args) {
    return moment.locale(...args);
  }
};
