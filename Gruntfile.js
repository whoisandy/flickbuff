module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    watch: {
      copy: {
        files: 'src/**/*.html',
        tasks: ['copy', 'requirejs']
      },
      sass: {
        files: 'src/**/*.scss',
        tasks: ['sass']
      },
      requirejs: {
        files: 'src/**/*.js',
        tasks: ['requirejs']
      }
    },
    clean: {
      dev: {
        src: ['.build']
      }
    },
    copy: {
      dev: {
        expand: true,
        cwd: 'src/',
        src: 'scripts/templates/**',
        dest: '.build/js/tmpl',
        flatten: true,
        filter: 'isFile',
      },
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

  grunt.registerTask('dev', ['clean', 'copy', 'sass', 'requirejs', 'browserSync', 'watch']);
  grunt.registerTask('build', ['clean', 'copy', 'sass', 'requirejs']);
}
