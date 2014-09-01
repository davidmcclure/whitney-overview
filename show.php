<?php

/**
 * @package     omeka
 * @subpackage  whitney-overview
 * @copyright   2014 David McClure
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

?>

<?php queue_css_file('style'); ?>
<?php queue_js_file('show'); ?>

<?php echo head(array(
  'title' => nl_getExhibitField('title'),
  'bodyclass' => 'neatline show'
)); ?>

<!-- Exhibit -->
<div class="exhibit">
  <?php echo nl_getExhibitMarkup(); ?>
</div>

<div id="neatline-narrative" class="narrative">

  <!-- Back Link -->
  <a href="<?php echo url('neatline'); ?>" class="back">
    <span class="arrow">&larr;</span> View all Exhibits
  </a>

  <!-- Narrative -->
  <h1 class="title"><?php echo nl_getExhibitField('title'); ?></h1>
  <?php echo nl_getExhibitField('narrative'); ?>

  <!-- Colophon -->
  <?php echo common('colophon'); ?>

</div>

<?php echo foot(); ?>
