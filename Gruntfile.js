'use strict';

module.exports = function (grunt) {

  require('time-grunt')(grunt);

  grunt.initConfig({
    'gh-pages': {
      options: {
        base: 'client'
      },
      src: ['**']
    }
  });

  grunt.registerTask('deploy', [
    
  ]);

};