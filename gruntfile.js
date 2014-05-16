module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
		  paths: ["public/less"]
        },
        files: {
          "public/css/main.css": "public/less/layout.less"
        }
      }
    },
    watch: {
		files: ['public/less/*.less'],
		tasks: ['less']
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  grunt.registerTask('default', ['less']);
};