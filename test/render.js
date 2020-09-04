const { test } = require('ava');
const Render = require('../src/render');

const ENVS = {
  'PATH': '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
  'HOSTNAME': 'fc19973b75a9',
  'CI_PREV_COMMIT_REF': 'refs/heads/master',
  'DRONE_JOB_STARTED': '1514903861',
  'CI_COMMIT_AUTHOR': 'lizheming',
  'CI_PREV_COMMIT_AUTHOR_AVATAR': 'https://secure.gravatar.com/avatar/32f210c5e3cd76fdf677981974274dfd',
  'CI_PREV_COMMIT_AUTHOR_EMAIL': 'i@imnerd.org',
  'DRONE_COMMIT_REF': 'refs/heads/master',
  'PLUGIN_MESSAGE': 'lizheminghello2',
  'DRONE_COMMIT_AUTHOR_EMAIL': 'i@imnerd.org',
  'DRONE_JOB_NUMBER': '1',
  'DRONE_PREV_BUILD_STATUS': 'success',
  'DRONE_REPO': 'lizheming/ipquery',
  'DRONE_REPO_NAME': 'ipquery',
  'CI_BUILD_NUMBER': '20',
  'CI_COMMIT_MESSAGE': 'change token config\n',
  'DRONE': 'true',
  'CI_BUILD_EVENT': 'push',
  'DRONE_COMMIT_AUTHOR_AVATAR': 'https://secure.gravatar.com/avatar/32f210c5e3cd76fdf677981974274dfd',
  'CI_REPO_REMOTE': 'http://git.eming.li/lizheming/ipquery.git',
  'DRONE_REPO_PRIVATE': 'true',
  'DRONE_JOB_STATUS': 'success',
  'CI_BUILD_STATUS': 'success',
  'CI_COMMIT_REF': 'refs/heads/master',
  'CI_PREV_BUILD_FINISHED': '1514903613',
  'DRONE_NETRC_MACHINE': 'git.eming.li',
  'PLUGIN_BASE_API_URL': 'https://telegram.eming.li',
  'DRONE_BUILD_STARTED': '1514903861',
  'CI_PREV_BUILD_STATUS': 'success',
  'CI_WORKSPACE': '/drone/src/git.eming.li/lizheming/ipquery',
  'DRONE_COMMIT_MESSAGE': 'change token config\n',
  'DRONE_COMMIT': '56dd8fba6d5812b9587d1015ceaeadd188839666',
  'DRONE_REPO_SCM': 'git',
  'DRONE_BUILD_STATUS': 'success',
  'CI': 'drone',
  'CI_COMMIT_BRANCH': 'master',
  'CI_COMMIT_SHA': '56dd8fba6d5812b9587d1015ceaeadd188839666',
  'CI_REPO_LINK': 'http://git.eming.li/lizheming/ipquery',
  'CI_REPO_PRIVATE': 'true',
  'DRONE_BUILD_LINK': 'https://ci.eming.li/lizheming/ipquery/20',
  'DRONE_REPO_OWNER': 'lizheming',
  'DRONE_WORKSPACE': '/drone/src/git.eming.li/lizheming/ipquery',
  'CI_NETRC_MACHINE': 'git.eming.li',
  'CI_PREV_COMMIT_AUTHOR': 'lizheming',
  'CI_REMOTE_URL': 'http://git.eming.li/lizheming/ipquery.git',
  'DRONE_JOB_FINISHED': '1514903955',
  'DRONE_COMMIT_BRANCH': 'master',
  'TELEGRAM_TO': '337635385',
  'TELEGRAM_TOKEN': '483467761:AAEG1v18nAuxuUwbTVZcJNzSIR_aTnb6Lr4',
  'CI_JOB_STATUS': 'success',
  'CI_PREV_COMMIT_AUTHOR_NAME': 'lizheming',
  'CI_PREV_COMMIT_SHA': 'd096d9ad0a9e5181df9ea9aa415795407b9068ae',
  'DRONE_BRANCH': 'master',
  'DRONE_BUILD_NUMBER': '20',
  'DRONE_NETRC_USERNAME': '872783289804f0744306d23d1c949a54bcbd1a63',
  'DRONE_BUILD_FINISHED': '1514903955',
  'DRONE_BUILD_EVENT': 'push',
  'DRONE_REPO_LINK': 'http://git.eming.li/lizheming/ipquery',
  'PLUGIN_TOKEN': '$TELEGRAM_TOKEN',
  'DRONE_MACHINE': '27d9c84372e4',
  'CI_JOB_NUMBER': '1',
  'CI_PREV_BUILD_LINK': 'http://git.eming.li/lizheming/ipquery/compare/a69c60c67bfff59de25a80008b6f6a1fb8d673bf...d096d9ad0a9e5181df9ea9aa415795407b9068ae',
  'CI_PREV_COMMIT_MESSAGE': 'drone\n',
  'DRONE_PREV_COMMIT_SHA': 'd096d9ad0a9e5181df9ea9aa415795407b9068ae',
  'CI_PREV_BUILD_EVENT': 'push',
  'CI_REPO_NAME': 'lizheming/ipquery',
  'DRONE_BUILD_CREATED': '1514903860',
  'DRONE_PREV_BUILD_NUMBER': '19',
  'PLUGIN_TO': '$TELEGRAM_TO',
  'CI_BUILD_STARTED': '1514903861',
  'CI_BUILD_FINISHED': '1514903955',
  'CI_JOB_FINISHED': '1514903955',
  'CI_NETRC_PASSWORD': 'x-oauth-basic',
  'CI_NETRC_USERNAME': '872783289804f0744306d23d1c949a54bcbd1a63',
  'CI_SYSTEM_LINK': 'https://ci.eming.li',
  'CI_REPO': 'lizheming/ipquery',
  'CI_SYSTEM_ARCH': 'linux/amd64',
  'CI_SYSTEM_NAME': 'drone',
  'DRONE_ARCH': 'linux/amd64',
  'DRONE_COMMIT_AUTHOR': 'lizheming',
  'CI_COMMIT_AUTHOR_AVATAR': 'https://secure.gravatar.com/avatar/32f210c5e3cd76fdf677981974274dfd',
  'CI_PREV_BUILD_NUMBER': '19',
  'CI_PREV_BUILD_STARTED': '1514903513',
  'CI_JOB_STARTED': '1514903861',
  'CI_PREV_BUILD_CREATED': '1514903513',
  'CI_PREV_COMMIT_BRANCH': 'master',
  'CI_SYSTEM': 'drone',
  'DRONE_COMMIT_SHA': '56dd8fba6d5812b9587d1015ceaeadd188839666',
  'DRONE_NETRC_PASSWORD': 'x-oauth-basic',
  'CI_BUILD_CREATED': '1514903860',
  'CI_COMMIT_AUTHOR_EMAIL': 'i@imnerd.org',
  'CI_COMMIT_AUTHOR_NAME': 'lizheming',
  'DRONE_REMOTE_URL': 'http://git.eming.li/lizheming/ipquery.git',
  'VERSION': 'v8.9.3',
  'NPM_VERSION': '5',
  'YARN_VERSION': 'latest',
  'HOME': '/root'
};

const setENV = obj => { for (const i in obj) process.env[i] = ENVS[i]; };
const clearENV = () => { for (const i in ENVS) delete process.env[i]; };

test.before('render data normal', () => setENV(ENVS));
test('render data normal', t => {
  const render = new Render();
  const data = render.renderData;
  t.deepEqual(data, {
    'repo': {
      'owner': 'lizheming',
      'name': 'ipquery'
    },
    'build': {
      'pull_request': undefined,
      'source_branch': undefined,
      'target_branch': undefined,
      'message': 'change token config\n',
      'tag': undefined,
      'status': 'success',
      'event': 'push',
      'number': '20',
      'commit': '56dd8fba6d5812b9587d1015ceaeadd188839666',
      'branch': 'master',
      'ref': 'refs/heads/master',
      'author': 'lizheming',
      'author_name': undefined,
      'link': 'https://ci.eming.li/lizheming/ipquery/20',
      'started': 1514903861000,
      'finished': 1514903955000
    },
    'success': true,
    'failure': false
  });
});
test.after('render data normal', clearENV);

test.before('render datetime filter', () => setENV(ENVS));
test('render datetime filter', t => {
  t.plan(2);

  const render = new Render();
  const text = render.render('{{build.finished | datetime}}');
  t.is(text, '2018-01-02 14:39:15');

  const yesterday = Date.now() - 24 * 3600 * 1000 * 5 - 60;
  render.locale('zh-cn');
  const since = render.render(`{{${yesterday} | datetime('fromNow')}}`);
  t.is(since, '5 天前');
});
test.after('render datetime filter', clearENV);

test('render uppercasefirst filter', t => {
  const render = new Render();
  const text = render.render('{{"abcd" | uppercasefirst}}');
  t.is(text, 'Abcd');
});
