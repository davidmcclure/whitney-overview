
/**
 * @package     omeka
 * @subpackage  whitney-detail
 * @copyright   2014 David McClure
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

module.exports = {

  options: {
    separator: ';'
  },

  dist: {
    dest: 'script.js',
    src: [
      'node_modules/nprogress/nprogress.js',
      'node_modules/bootstrap/dist/js/bootstrap.js',
      'node_modules/vis/dist/vis.js',
      'node_modules/moment/moment.js',
      'assets/javascripts/**/*.js',
      'config/*.js'
    ]
  }

};
