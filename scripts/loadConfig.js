/*
 * A funciton help to get user's config.
 * */
import fs from 'fs';
// config paths
let config_paths = [
  process.env.HOME + '/.uiLibConfig.json',
  process.env.HOME + '/.config/uiLib/config.json',
];

// check file exist
function fileExists(path) {
  let res = false;
  res = fs.existsSync(path);

  return res;
}

// get config file path
function getConfigPath() {
  for (let path of config_paths) {
    if (fileExists(path)) {
      return path;
    }
  }
  return false;
}
export default function () {
  let path = getConfigPath();
  if (path === false) {
    return false;
  }
  let configObj = JSON.parse(fs.readFileSync(path).toString());
  let arr = [];
  for (let x in configObj) {
    if (typeof configObj[x] === 'object') {
      let newObj = {
        title: x + ` (${configObj[x].desc})`,
        value: configObj[x].packageName,
      };
      newObj.title = x;
      arr.push(newObj);
    } else {
      arr.push({ value: x, title: x + ` (${configObj[x]})`,});
    }
  }
  return arr;
}
