<?php get_header(); ?>
<section class="site__main">
  <div class="single__main">
    <h1>Introduction a un gestionaire de contenue</h1>
    <?php
    if (have_posts()) :
      while (have_posts()) : the_post(); ?>
        <h2><?php the_title(); ?></h2>
        <p><?php wp_trim_words(the_content(), 20, "..."); ?></p>
        <?php
        $titre = get_the_title();
        $sigle = substr($titre, 0, 8);
        $heure = substr($titre, -6);

        ?>
        <code><?= $sigle ?></code>
        <code><?= $heure ?></code>





      <?php endwhile; ?>
    <?php endif; ?>
  </div>
</section>
<?php get_footer(); ?>