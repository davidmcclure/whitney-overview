
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
      console.log(args.model.get('tags'));
      //if (args.model.hasTag('bbox')) {

        //// Visually highlight the word.
        //var record = this.getWordRecord(args.model);
        //if (record) Neatline.execute('MAP:showHighlight', record);

      //}
    },


    /**
     * Sync unhighlights.
     *
     * @param {Object} args
     */
    unhighlight: function(args) {
      console.log(args.model.get('tags'));
      //if (args.model.hasTag('bbox')) {

        //// Visually unhighlight the word.
        //var record = this.getWordRecord(args.model);
        //if (record) Neatline.execute('MAP:hideHighlight', record);

      //}
    },


    /**
     * Get all line siblings.
     *
     * @param {Object} record
     */
    getSiblings: function(record) {
      // TODO
    }


  });


});
