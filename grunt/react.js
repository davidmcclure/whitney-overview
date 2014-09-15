
/**
 * @package     omeka
 * @subpackage  whitney-overview
 * @copyright   2014 David McClure
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

module.exports = {

  dist: {
    dest: 'script.js',
    src: [
      'node_modules/nprogress/nprogress.js',
      'node_modules/react/dist/react-with-addons.js',
      'node_modules/vis/dist/vis.js',
      'node_modules/moment/moment.js',
      'assets/javascripts/**/*.js',
      'config/*.js'
    ]
  }

};
