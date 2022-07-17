<?php
/**
 * 31w-AG functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package 31w-XM
 */

function mon31w_setup() {
    /*
        * Let WordPress manage the document title.
        * By adding theme support, we declare that this theme does not use a
        * hard-coded <title> tag in the document head, and expect WordPress to
        * provide it for us.
        */
    add_theme_support( 'title-tag' );
    add_theme_support( 'html5', array('search-form') );
	add_theme_support( 'custom-background' );
    //avoir plusieur menus
    register_nav_menus( array(
        'sidebar_menu' => __( 'Sidebar Menu', 'mon_31w' ),
        'footer_menu'  => __( 'Footer Menu', 'mon_31w' ),
    ) );
  
}
add_action( 'after_setup_theme', 'mon31w_setup' );

function mon_31w_enqueue() {
	wp_enqueue_style( 'mon_31w-style', 
                        get_stylesheet_uri(), 
                        array(),
                        filemtime(get_template_directory() . '/style.css'));
    wp_enqueue_style('31w-google-font', 
                        "https://fonts.googleapis.com/css2?family=Anek+Latin&family=Playfair+Display:ital,wght@0,400;0,600;1,900&display=swap", false);
	
}
add_action( 'wp_enqueue_scripts', 'mon_31w_enqueue' );
