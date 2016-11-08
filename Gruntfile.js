module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    watch: {
      sass: {
        files: 'src/**/*.scss',
        tasks: ['sass']
      },
      requirejs: {
        files: 'src/**/*.js',
        tasks: ['requirejs']
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
    requirejs: {
      dev: {
        options: {
          mainConfigFile: "./src/scripts/main.js",
          name: "../../bower_components/almond/almond",
          include: [ "./main.js" ],
          out: ".build/js/main.js"
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            '.build/css/*.css',
            '.build/js/*.js',
            'src/**/*.html'
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

  grunt.registerTask('dev', ['sass', 'requirejs', 'browserSync', 'watch']);
  grunt.registerTask('build', ['sass', 'requirejs']);
}
