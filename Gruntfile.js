module.exports = function(grunt) {
    
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Project configuration.
  grunt.initConfig({
  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'src/web/index.html'     // 'destination': 'source'
      }
    }
  }
});
 
grunt.registerTask('default', ['htmlmin']);

};