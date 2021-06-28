import platform from './systemPlatform.js';
import loadConfig from './loadConfig.js';
import qucickGuide from './qucickGuide.js';
import installGuide from './installGuide.js';
import outputLib from './outputLib.js';

if (!platform()) {
  outputLib.error('error: ui-lib-cli only support linux now ...');
  process.exit(-1);
} else {
  let config = loadConfig();
  if (config === false) {
    outputLib.log(
      'Your has not create your configure json file and now ui-lib-cli go to help you configure your config.json.'
    );
    qucickGuide();
  } else {
    installGuide(config);
  }
}
