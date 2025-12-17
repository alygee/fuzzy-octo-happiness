<?php
/**
 * Plugin Name: Inssmart Form
 * Description: Интеграция многошаговой формы Inssmart в WordPress
 * Version: 1.0.0
 * Author: Your Name
 */

// Предотвращаем прямой доступ
if (!defined('ABSPATH')) {
    exit;
}

// Подключаем скрипт и стили формы
function inssmart_form_enqueue_scripts() {
    // Укажите правильный путь к файлу после сборки
    $plugin_url = plugin_dir_url(__FILE__);
    
    // Подключаем CSS
    wp_enqueue_style(
        'inssmart-form',
        $plugin_url . 'dist/inssmart-form.css',
        array(),
        '1.0.0'
    );
    
    // Подключаем JS
    wp_enqueue_script(
        'inssmart-form',
        $plugin_url . 'dist/inssmart-form.js',
        array(), // React и ReactDOM встроены в бандл
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'inssmart_form_enqueue_scripts');

// Шорткод для вставки формы
function inssmart_form_shortcode($atts) {
    $atts = shortcode_atts(array(
        'container_id' => 'inssmart-form-container',
        'class' => ''
    ), $atts);
    
    $container_id = esc_attr($atts['container_id']);
    $class = esc_attr($atts['class']);
    
    ob_start();
    ?>
    <div id="<?php echo $container_id; ?>" class="<?php echo $class; ?>"></div>
    <script>
        if (typeof window.initInssmartForm === 'function') {
            window.initInssmartForm('<?php echo $container_id; ?>');
        } else {
            // Ждем загрузки скрипта
            document.addEventListener('DOMContentLoaded', function() {
                if (typeof window.initInssmartForm === 'function') {
                    window.initInssmartForm('<?php echo $container_id; ?>');
                }
            });
        }
    </script>
    <?php
    return ob_get_clean();
}
add_shortcode('inssmart_form', 'inssmart_form_shortcode');

// Альтернативный вариант: подключение React и ReactDOM из CDN
function inssmart_form_enqueue_react() {
    // Раскомментируйте, если React не подключен в теме
    // wp_enqueue_script('react', 'https://unpkg.com/react@18/umd/react.production.min.js', array(), '18.2.0', true);
    // wp_enqueue_script('react-dom', 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js', array('react'), '18.2.0', true);
}
// add_action('wp_enqueue_scripts', 'inssmart_form_enqueue_react');
?>

