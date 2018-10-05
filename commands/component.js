// @cliDescription  Generate a component
// Generates a "component"
const fs = require('fs');

module.exports = async function(context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { parameters, strings, print, ignite } = context;
  const { pascalCase, isBlank } = strings;

  // validation
  if (isBlank(parameters.first)) {
    print.info(`ignite generate component <name>\n`);
    print.info('A name is required.');
    return;
  }

  const name = pascalCase(parameters.first);
  const props = { name };

  fs.appendFile(
    'src/Components/index.js',
    `export * from './${name}/${name}';${'\n'}`,
    err => {
      if (err) {
        console.log(err);
      }
    }
  );

  // Copies the `component.js.ejs` in your plugin's templates folder
  // into App/Things/${name}.js.
  const jobs = [
    {
      template: 'component.js.ejs',
      target: `src/Components/${name}/${name}.js`
    },
    {
      template: 'styles.js.ejs',
      target: `src/Components/${name}/styles.js`
    }
  ];

  // make the templates and pass in props with the third argument here
  await ignite.copyBatch(context, jobs, props);
};
//cd .. && ignite new MyAwesomeApp -b ./ignite-rn-boilerplate/ && cd MyAwesomeApp/ && ignite generate component Hwllo
