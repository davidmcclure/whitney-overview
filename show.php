<?php

/**
 * @package     omeka
 * @subpackage  whitney-overview
 * @copyright   2014 David McClure
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

?>

<?php echo head(array(
  'title' => nl_getExhibitField('title'),
  'bodyclass' => 'neatline show'
)); ?>

<!-- Exhibit. -->
<div class="exhibit">
  <?php echo nl_getExhibitMarkup(); ?>
</div>

<div id="neatline-narrative" class="narrative">

  <!-- Title. -->
  <div class="page-header">
    <h1><?php echo nl_getExhibitField('title'); ?></h1>
  </div>

  <!-- Narrative. -->
  <?php echo nl_getExhibitField('narrative'); ?>

</div>

<?php echo foot(); ?>
