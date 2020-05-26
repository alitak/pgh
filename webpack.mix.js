const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    // web
    .js('resources/js/web/app_web.js', 'public/js')
    .sass('resources/sass/web/app_web.scss', 'public/css')
    // admin
    .js('resources/js/admin/app_admin.js', 'public/js')
    .sass('resources/sass/admin/app_admin.scss', 'public/css')
;

if (mix.inProduction()) {
    mix.version();
}

// if (mix.inProduction()) {
//     mix.version();
// } else {
//     mix.browserSync({
//         ghostMode: false,
//         proxy: {
//             target: 'localhost:28080',
//             ws: true
//         }
//     });
// }
