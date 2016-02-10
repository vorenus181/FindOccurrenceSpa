/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

var lib = "./wwwroot/libs/";

var paths = {
    npm: './node_modules/',
    jsVendors: lib + 'js',
    cssVendors: lib + 'css',
    imgVendors: lib + 'img',
    fontsVendors: lib + 'fonts'
};

gulp.task('setup-vendors', function (done) {
    gulp.src([
      'node_modules/jquery/dist/jquery*.js',
      'node_modules/fancybox/dist/js/jquery.fancybox.js',
      'node_modules/fancybox/dist/js/jquery.fancybox.cjs.js',
      'node_modules/fancybox/dist/js/jquery.fancybox.pack.js',
      'node_modules/bootstrap/dist/js/bootstrap*.js',
      'node_modules/alertify/lib/alertify*.js',
      'node_modules/angular/angular*.js',
      'node_modules/angular-bootstrap/ui-bootstrap.js',
      'node_modules/angular-bootstrap/ui-bootstrap.min.js',
      'node_modules/angular-bootstrap/ui-bootstrap-tpls.js',
      'node_modules/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'node_modules/angular-cookies/angular-cookies*.js',
      'node_modules/angular-loader/angular-loader*.js',
      'node_modules/angular-resource/angular-resource*.js',
      'node_modules/angular-route/angular-route*.js',
      'node_modules/angular-sanitize/angular-sanitize*.js'
    ]).pipe(gulp.dest(paths.jsVendors));

    gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.css',
      'node_modules/fancybox/dist/css/jquery.fancybox.css',
      'node_modules/font-awesome/css/font-awesome.css',
      'node_modules/alertify/themes/alertify.core.css',
      'node_modules/alertify/themes/alertify.bootstrap.css',
      'node_modules/alertify/themes/alertify.default.css'
    ]).pipe(gulp.dest(paths.cssVendors));

    gulp.src([
      'node_modules/fancybox/dist/img/blank.gif',
      'node_modules/fancybox/dist/img/fancybox_loading.gif',
      'node_modules/fancybox/dist/img/fancybox_loading@2x.gif',
      'node_modules/fancybox/dist/img/fancybox_overlay.png',
      'node_modules/fancybox/dist/img/fancybox_sprite.png',
      'node_modules/fancybox/dist/img/fancybox_sprite@2x.png'
    ]).pipe(gulp.dest(paths.imgVendors));

    gulp.src([
      'node_modules/bootstrap/fonts/glyphicons-halflings-regular.eot',
      'node_modules/bootstrap/fonts/glyphicons-halflings-regular.svg',
      'node_modules/bootstrap/fonts/glyphicons-halflings-regular.ttf',
      'node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff',
      'node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff2',
      'node_modules/font-awesome/fonts/FontAwesome.otf',
      'node_modules/font-awesome/fonts/fontawesome-webfont.eot',
      'node_modules/font-awesome/fonts/fontawesome-webfont.svg',
      'node_modules/font-awesome/fonts/fontawesome-webfont.ttf',
      'node_modules/font-awesome/fonts/fontawesome-webfont.woff',
      'node_modules/font-awesome/fonts/fontawesome-webfont.woff2'
    ]).pipe(gulp.dest(paths.fontsVendors));
});