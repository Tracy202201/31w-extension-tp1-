<?php

/**
 *Plugin Name: carrousel
 *Description: Un deuxième exemple de plugin utilisant carrousel en utilisant des dossiers pour la structure
 *Author: Xiaowei Ma
 *Plugin URI: https://github.com/Tracy202201/31w-extension-tp1-.git
 */


function carrousel_31w_enqueue()
{

    $version_css  = filemtime(plugin_dir_path(__FILE__) . 'style.css');
    $version_js = filemtime(plugin_dir_path(__FILE__) . 'script/carrousel.js');

    wp_enqueue_style(
        'carrousel_31w_css',
        plugin_dir_url(__FILE__) . 'style.css',
        array(),
        $version_css
    );

    wp_enqueue_script(
        'carrousel_31w_js',
        plugin_dir_url(__FILE__) . 'script/carrousel.js',
        array(),
        $version_js,
        true
    );
}

add_action('wp_enqueue_scripts', 'carrousel_31w_enqueue');

function genere_carrousel()
{
    /////////////////////////////////////// HTML
    //le contenu du carrousel
    $contenu = '<div class="carrousel">';
    //le bouton fermeture
    $contenu .= '<button class="carrousel__fermeture">X</button>';
    //le conteneur d'images
    $contenu .= '<figure class ="carrousel__img></figure>';
    //le forlulaire des radio bouton pour naviguer d'une image a l'autre
    $contenu .= '<form class ="carrousel__radio></form>';
    $contenu .= '</div><!--- fin du carrousel---!>';
    

    return $contenu;
}

add_shortcode('carrousel', 'genere_carrousel');
