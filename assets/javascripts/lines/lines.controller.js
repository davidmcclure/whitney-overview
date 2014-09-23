
/**
 * @package     omeka
 * @subpackage  whitney-overview
 * @copyright   2014 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Lines', function(Lines) {


  Lines.Controller = Neatline.Shared.Controller.extend({


    slug: 'LINES',

    events: [
      'highlight',
      'unhighlight'
    ],


    /**
     * Sync a highlight.
     *
     * @param {Object} args
     */
    highlight: function(args) {
      if (args.model.hasTag('line')) {
        this.syncSiblings(args.model, 'showHighlight');
      }
    },


    /**
     * Sync unhighlights.
     *
     * @param {Object} args
     */
    unhighlight: function(args) {
      if (args.model.hasTag('line')) {
        this.syncSiblings(args.model, 'hideHighlight');
      }
    },


    /**
     * Get all line siblings.
     *
     * @param {String} tag
     */
    getSiblings: function(tag) {

      // Get the map collection.
      var records = Neatline.request('MAP:getRecords');

      // Get all records with the tag.
      return records.filter(function(record) {
        return record.hasTag(tag);
      });

    },


    /**
     * Sync unhighlights.
     *
     * @param {Object} model
     * @param {String} command
     */
    syncSiblings: function(model, command) {

      _.each(model.get('tags'), _.bind(function(tag) {
        if (tag.match(/^line\d+$/)) {

          // Highlight the other records on the line.
          _.each(this.getSiblings(tag), function(record) {
            Neatline.execute('MAP:'+command, record);
          });

        }
      }, this));

    }


  });


});
