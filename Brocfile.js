/* global require, module */

var EmberApp   = require('ember-cli/lib/broccoli/ember-app');
var pickFiles  = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var app = new EmberApp();

// Bootstrap
app.import({
    development: 'bower_components/bootstrap/dist/css/bootstrap.css',
    production:  'bower_components/bootstrap/dist/css/bootstrap.min.css'
});

app.import({
    development: 'bower_components/bootstrap/dist/css/bootstrap-theme.css',
    production:  'bower_components/bootstrap/dist/css/bootstrap-theme.min.css'
});

app.import({
    development: 'bower_components/bootstrap/dist/js/bootstrap.js',
    production:  'bower_components/bootstrap/dist/js/bootstrap.min.js'
});

app.import('bower_components/bootstrap/fonts/glyphicons-halflings-regular.eot', {destDir: '/fonts'});
app.import('bower_components/bootstrap/fonts/glyphicons-halflings-regular.svg', {destDir: '/fonts'});
app.import('bower_components/bootstrap/fonts/glyphicons-halflings-regular.ttf', {destDir: '/fonts'});
app.import('bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff', {destDir: '/fonts'});

//Bootstrap Theme

app.import('vendor/holo-theme/js/scripts.js');
app.import('vendor/holo-theme/css/styles.css');

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
