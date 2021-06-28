import loadPackages from './loadPackages.js';
import prompts from 'prompts';
import installPackages from './installPackages.js';

async function filterSelecter(choices) {
  const response = await prompts({
    type: 'multiselect',
    name: 'value',
    message: 'Select some lib which your want to install.',
    choices: choices,
    max: 2,
    hint: '- Space to select. Return to submit',
  });
  installPackages(response)
}

export default function (packagesLib) {
  let installed = loadPackages();
  packagesLib.forEach((item) => {
    let title = item.title.match(/.+\(/);
    if (title === null) {
      if (installed.indexOf(item.title !== -1)) {
        item.selected = true;
      }
    } else {
      if (installed.indexOf(title[0].slice(0, title[0].length - 2)) !== -1) {
        item.selected = true;
      }
    }
  });
  filterSelecter(packagesLib);
}
