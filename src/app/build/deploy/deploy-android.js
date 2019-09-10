const execa = require('execa');
const path = require('path');
const inquirer = require('inquirer');
const rootPath = path.resolve(__dirname, '../../');
const packageConfig = require('../../package.json');
const version = packageConfig.version;

if (require.main === module) {
  const filepath = path.resolve(rootPath, './node_modules/.bin/code-push');

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'deploymentName',
        message: '发布阶段',
        choices: ['Production', 'Staging'],
        default: 'Production',
      },
      {
        type: 'list',
        name: 'platform',
        message: '发布平台',
        choices: ['android', 'ios'],
        default: 'android',
      },
      {
        type: 'editor',
        name: 'desc',
        message: '更新描述',
        default: `版本更新 v${version}: \n\n`,
      },
      {
        type: 'checkbox',
        name: 'ext',
        message: '额外配置',
        choices: ['mandatory'],
      },
    ])
    .then((answers) => {
      const { deploymentName, platform, desc, ext } = answers;

      console.log(`Uploading Version: ${version}`);
      console.log(`Code Push: ${filepath}`);

      const args = [
        'release-react',
        'TRPGEngine',
        platform,
        '-t',
        version,
        '-d',
        deploymentName,
        '--des',
        JSON.stringify(desc),
        ...ext.map((s) => `--${s}`),
      ];

      console.log('发布参数:', JSON.stringify(args.join(' ')));
      return inquirer
        .prompt([{ type: 'confirm', name: 'confirm', message: '确认参数?' }])
        .then((an) => {
          if (an.confirm === true) {
            return args;
          } else {
            throw new Error('User Cancel');
          }
        });
    })
    .then((args) => {
      console.log('=============================');
      const env = {
        PLATFORM: 'app',
        NODE_ENV: 'production',
        REACT_NATIVE_APP_ROOT: '../../', // TODO: 需要想办法收起来
      };
      console.log('args', args);
      console.log('env', env);
      execa(filepath, args, {
        cwd: rootPath,
        env,
      }).all.pipe(process.stdout);
    });
}