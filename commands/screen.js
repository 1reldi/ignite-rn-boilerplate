// @cliDescription  Generate a screen
// Generates a "screen"
const fs = require('fs');

module.exports = async function(context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { parameters, strings, print, ignite } = context;
  const { pascalCase, isBlank } = strings;

  // validation
  if (isBlank(parameters.first)) {
    print.info(`ignite generate screen <name>\n`);
    print.info('A name is required.');
    return;
  }

  const name = pascalCase(parameters.first);
  const props = { name };

  var data = fs
    .readFileSync('src/Containers/index.js')
    .toString()
    .split('\n');
  data.splice(0, 0, `export { default as ${name} } from './${name}/${name}';`);
  var text = data.join('\n');
  fs.writeFile('src/Containers/index.js', text, err => {
    if (err) {
      console.log(err);
    }
  });

  // fs.appendFile(
  //   'src/Containers/index.js',
  //   `export { default as ${name} } from './${name}/${name}';${'\n'}`,
  //   err => {
  //     if (err) {
  //       console.log(err);
  //     }
  //   }
  // );

  // Copies the `screen.js.ejs` in your plugin's templates folder
  // into App/Things/${name}.js.
  const jobs = [
    {
      template: 'screen.js.ejs',
      target: `src/Containers/${name}/${name}.js`
    },
    {
      template: 'styles.js.ejs',
      target: `src/Containers/${name}/styles.js`
    }
  ];

  // make the templates and pass in props with the third argument here
  await ignite.copyBatch(context, jobs, props);
};
//cd .. && ignite new MyAwesomeApp -b ./ignite-rn-boilerplate/ && cd MyAwesomeApp/ && ignite generate screen Hwllo
