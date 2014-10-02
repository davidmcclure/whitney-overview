
/**
 * @package     omeka
 * @subpackage  whitney-overview
 * @copyright   2014 David McClure
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.on('start', function() {

  var map  = $('#neatline-map');
  var text = $('div.narrative');

  var resize = function() {
    map.add(text).height($(window).height());
    Neatline.execute('MAP:updateSize');
  };

  $(window).resize(_.debounce(resize, 500));
  resize();

});
