/**
  Hello, I'm a Gruntfile
*/

/*global module:false*/
/*global require:false*/
/*global process:false*/

module.exports = function(grunt) {
  'use strict';

  var gruntConfigRoot =  process.cwd() + '/grunt_config/';
  var dirs = require(gruntConfigRoot + 'directory-map.js');

  var configOptions = {
    configPath: gruntConfigRoot + 'options/',
    // additional data for configuations
    config: {
      // build system directory constants
      dirs: dirs
    }
  }; // end configOptions

  require('load-grunt-config')(grunt, configOptions);
  grunt.loadTasks(gruntConfigRoot + 'tasks');

  grunt.task.registerTask('default', ['say-hello']);

} // end exports
