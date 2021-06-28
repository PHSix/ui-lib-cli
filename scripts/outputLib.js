import { red, cyan, yellow } from 'kolorist';

export default {
  /*
   * @param {string} message
   * */
  warning: function (message) {
    console.log(yellow(message));
  },
  /*
   * @param {string} message
   * */
  error: function (message) {
    console.log(red(message));
  },
  /*
   * @param {string} message
   * */
  log: function (message) {
    console.log(cyan(message));
  },
};
