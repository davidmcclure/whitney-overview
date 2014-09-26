
/**
 * @package     omeka
 * @subpackage  whitney-overview
 * @copyright   2014 David McClure
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.on('start', function() {

  var resize = function() {
    Neatline.execute('MAP:updateSize');
  };

  $(window).resize(resize);
  resize();

});
