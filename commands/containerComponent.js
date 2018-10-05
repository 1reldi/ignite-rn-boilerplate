// @cliDescription  Generate a component
// Generates a "component"
const fs = require('fs');

module.exports = async function(context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { parameters, strings, print, ignite } = context;
  const { pascalCase, isBlank } = strings;

  console.log(JSON.stringify(parameters));
  // validation
  if (isBlank(parameters.first)) {
    print.info(`ignite generate component <screen>\n`);
    print.info('A screen is required.');
    return;
  }
  if (isBlank(parameters.second)) {
    print.info(`ignite generate component <name>\n`);
    print.info('A name is required.');
    return;
  }

  const screen = pascalCase(parameters.first);
  const name = pascalCase(parameters.second);
  const props = { screen, name };

  // Copies the `component.js.ejs` in your plugin's templates folder
  // into App/Things/${screen}.js.
  const jobs = fs.existsSync(`src/Containers/${screen}/components/styles.js`)
    ? [
        {
          template: 'component.js.ejs',
          target: `src/Containers/${screen}/components/${name}.js`
        }
      ]
    : [
        {
          template: 'component.js.ejs',
          target: `src/Containers/${screen}/components/${name}.js`
        },
        {
          template: 'styles.js.ejs',
          target: `src/Containers/${screen}/components/styles.js`
        }
      ];

  // make the templates and pass in props with the third argument here
  await ignite.copyBatch(context, jobs, props);

  fs.appendFile(
    `src/Containers/${screen}/components/index.js`,
    `export * from './${name}';${'\n'}`,
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
};
//cd .. && ignite new MyAwesomeApp -b ./ignite-rn-boilerplate/ && cd MyAwesomeApp/ && ignite generate component Hwllo
