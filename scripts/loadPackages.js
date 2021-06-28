import fs from 'fs';
import outputLib from './outputLib.js';

/*
 * @return {string | boolen}
 * */
function getPackageJson() {
  let cwd = process.cwd();
  while (!fs.existsSync(cwd + '/package.json')) {
    cwd = cwd.match(/\/.+\//)[0];
    // package json don't exist
    if (cwd === null) {
      return false;
    }
    // update project root path
    cwd = cwd.slice(0, cwd.length - 1);
  }
  cwd += "/package.json"
  return cwd;
}


/*
  * @return {string[]}
  * */
export default function () {
  let res = getPackageJson();
  if (res === false) {
    outputLib.error('Error: This is not a nodejs project!');
    process.exit(-1);
  }
  let packages = JSON.parse(fs.readFileSync(res).toString()).dependencies;
  let arr = [];
  for (let x in packages) {
    arr.push(x);
  }
  return arr
}
