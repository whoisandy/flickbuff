module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    watch: {
      sass: {
        files: 'src/**/*.scss',
        tasks: ['sass']
      }
    },
    sass: {
  		options: {
  			outputStlye: 'compressed'
  		},
  		dev: {
  			files: {
  				'.build/css/styles.css': 'src/sass/main.scss'
  			}
  		}
  	},
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            '.build/css/*.css',
            'src/scripts/**/*.js',
            'src/index.html'
          ]
        },
        options: {
          watchTask: true,
          server: '.',
          serveStatic: ['src', 'bower_components', '.build']
        }
      }
    }
  });

  grunt.registerTask('dev', ['sass', 'browserSync', 'watch']);
  grunt.registerTask('build', ['sass']);
}
