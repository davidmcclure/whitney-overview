
/**
 * @package     omeka
 * @subpackage  whitney-overview
 * @copyright   2014 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 * @jsx         React.DOM
 */

Neatline.module('Zoom', function(Zoom) {


  Zoom.Component = React.createClass({


    /**
     * Render the buttons.
     */
    render: function() {
      return (
        <div className="buttons">
          <div className="btn home" onClick={this.home}>
            <i className="fa fa-home" />
          </div>
          <div className="btn in" onClick={this.zoomIn}>
            <i className="fa fa-plus" />
          </div>
          <div className="btn out" onClick={this.zoomOut}>
            <i className="fa fa-minus" />
          </div>
        </div>
      );
    },


    /**
     * Cache the map instance.
     */
    componentWillMount: function() {
      this.setState({ map: Neatline.request('MAP:getMap') });
    },


    /**
     * Go back to the default focus/zoom.
     */
    home: function() {

      var exhibit = Neatline.g.neatline.exhibit

      // Recenter the map.
      this.state.map.setCenter(
        exhibit.map_focus.split(','),
        exhibit.map_zoom
      );

      // Clear the route.
      Backbone.history.navigate('', { replace: true });

    },


    /**
     * Zoom the map in.
     */
    zoomIn: function() {
      this.state.map.zoomIn();
    },


    /**
     * Zoom the map out.
     */
    zoomOut: function() {
      this.state.map.zoomOut();
    }


  });


});
