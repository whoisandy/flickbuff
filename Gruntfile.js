module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      copy: {
        files: 'src/index.html',
        tasks: ['copy']
      },
      sass: {
        files: 'src/**/*.scss',
        tasks: ['sass']
      },
      concat: {
        files: 'src/**/*.js',
        tasks: ['concat']
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'src',
        src: '**/*.html',
        dest: 'dist/',
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/scripts/app.js'],
        dest: 'dist/js/app.js',
      },
    },
    sass: {
  		options: {
  			outputStlye: 'compressed'
  		},
  		dist: {
  			files: {
  				'dist/css/styles.css': 'src/sass/main.scss'
  			}
  		}
  	},
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'dist/css/*.css',
            'dist/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './dist'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('dev', ['copy', 'sass', 'concat', 'browserSync', 'watch']);
  grunt.registerTask('build', ['copy', 'sass', 'concat']);
}
