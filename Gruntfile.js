'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // configurable paths
  var yeomanConfig = {
    app: 'app',
    dist: 'dist'
  };

  try {
    yeomanConfig.app = require('./component.json').appPath || yeomanConfig.app;
  } catch (e) {}

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      coffee: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
        tasks: ['coffee:dist']
      },
      coffeeTest: {
        files: ['test/spec/{,*/}*.coffee'],
        tasks: ['coffee:test']
      },
      compass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass']
      },
      livereload: {
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
          '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        tasks: ['livereload']
      }
    },
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, yeomanConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, '.tmp'),
              mountFolder(connect, 'test')
            ];
          }
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= connect.options.port %>'
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js',
        '!<%= yeoman.app %>/scripts/templates.js'
      ]
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/scripts',
          src: '{,*/}*.coffee',
          dest: '.tmp/scripts',
          ext: '.js'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: 'test/spec',
          src: '{,*/}*.coffee',
          dest: '.tmp/spec',
          ext: '.js'
        }]
      }
    },
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/styles',
        cssDir: '.tmp/styles',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/styles/fonts',
        importPath: '<%= yeoman.app %>/components',
        relativeAssets: true
      },
      dist: {},
      server: {
        options: {
          debugInfo: true
        }
      }
    },
    concat: {
      dist: {
        // files: {
        //   '<%= yeoman.dist %>/scripts/app.js': [
        //     '.tmp/scripts/{,*/}*.js',
        //     '<%= yeoman.app %>/scripts/{,*/}*.js'
        //   ]
        // }
      }
    },
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        dirs: ['<%= yeoman.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/styles/main.css': [
            '.tmp/styles/{,*/}*.css',
            '<%= yeoman.app %>/styles/{,*/}*.css'
          ]
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: ['*.html', 'views/*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/scripts',
          src: '*.js',
          dest: '<%= yeoman.dist %>/scripts'
        }]
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= yeoman.dist %>/scripts/lib.js': [
            '<%= yeoman.dist %>/scripts/lib.js'
          ],
        }
      }
    },
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<%= yeoman.dist %>/styles/fonts/*'
          ]
        }
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,txt}',
            'components/**/*',
            'images/{,*/}*.{gif,webp}'
          ]
        }]
      }
    },
    ngtemplates:    {
      WeatherApp:        {
        options:    {
          base:     'app/views/',        // $templateCache ID will be relative to this folder
          prepend:  '/views/'   // (Optional) Prepend path to $templateCache ID
        },
        src:        [ 'app/views/**.html' ],
        dest:       'app/scripts/templates.js'
      }
    },
    closureDepsWriter: {
      options: {
        closureLibraryPath: 'app/components/closure-library', // path to closure library

        // [OPTIONAL] Root directory to scan. Can be string or array
        // root: ['source/ss', 'source/closure-library', 'source/showcase'],
        // root: [
        //   'app/components/closure-library/closure/goog', 
        //   'app/components/closure-library/third_party/closure', 
        //   'app/scripts'
        // ],//'string|Array',

        // [OPTIONAL] Root with prefix takes a pair of strings separated with a space,
        //    so proper way to use it is to suround with quotes.
        //    can be a string or array
       //root_with_prefix: '"source/ss ../../ss"',
        root_with_prefix: [
          '"app/scripts ../../../../scripts"'
        ],//'string|Array',

        // [OPTIONAL] string or array
//        path_with_depspath: ''


      },
       // any name that describes your operation
      buildDeps: {

        // [OPTIONAL] Set file targets. Can be a string, array or
        //    grunt file syntax (<config:...> or *)
        //src: 'scripts/app.js',

        // [OPTIONAL] If not set, will output to stdout
        dest: 'app/deps.js'

      }
    },
    closureBuilder:  {
      options: {
        closureLibraryPath: 'app/components/closure-library', // path to closure library

        // [OPTIONAL] You can define an alternative path of the builder.
        //builder: 'path/to/closurebuilder.py',
    
        // [REQUIRED] One of the two following options is required:
        //inputs: 'app/scripts/templates.js',//'string|Array', // input files (can just be the entry point)
        namespaces: 'sample.config', //'string|Array', // namespaces
    
        compilerFile: 'closure-compiler/compiler.jar',
    
        //output_mode: '', //'list', 'script' (default) or 'compiled' (if compile == true).
    
        compile: true, // boolean
    
        compilerOpts: {
          /**
          * Go wild here...
          * any key will be used as an option for the compiler
          * value can be a string or an array
          * If no value is required use null
          */
          externs: ["closure-compiler/angular-externs.js", "closure-compiler/custom-externs.js"],
          output_wrapper: "(function(){%output%})();",
          compilation_level: "SIMPLE_OPTIMIZATIONS",
          warning_level: "VERBOSE",
          jscomp_error: [
            // "checkTypes", "accessControls", "invalidCasts", 
            // "checkVars", "ambiguousFunctionDecl", "suspiciousCode", "const", "es5Strict"
          ]
        },
        // [OPTIONAL] Set exec method options
        execOpts: {
           /**
            * Set maxBuffer if you got message "Error: maxBuffer exceeded."
            * Node default: 200*1024
            */
           maxBuffer: 999999 * 1024
        }
    
      },

	  // any name that describes your operation
	  buildApp: {

	    // [REQUIRED] paths to be traversed to build the dependencies
	    src: [
	      'app/components/closure-library/closure/goog', 
	      'app/components/closure-library/third_party/closure', 
	      'app/scripts'
	    ],//'string|Array',

	    // [OPTIONAL] if not set, will output to stdout
	    dest: 'dist/scripts/app.js'
	  }
	}
  });

  grunt.renameTask('regarde', 'watch');

  grunt.registerTask('server', [
    'clean:server',
    'coffee:dist',
    'compass:server',
    'livereload-start',
    'connect:livereload',
    'open',
    'watch'
  ]);

  grunt.registerTask('test', [
    'clean:server',
    'coffee',
    'compass',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('buildold', [
    'clean:dist',
    // 'ngtemplates',
    'compass:dist',
    'useminPrepare',
    'imagemin',
    'cssmin',
    'htmlmin',
    'concat',
    'copy',
    'cdnify',
    'ngmin',
    'uglify',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    // 'ngtemplates',
    'compass:dist',
    'useminPrepare',
    'imagemin',
    'cssmin',
    'htmlmin',
    'concat',
    'uglify',
    'closureBuilder',
    'copy',
    // 'cdnify',
    // 'ngmin',
    'rev',
    'usemin'
  ]);
  grunt.registerTask('deps', ['closureDepsWriter']);

  grunt.registerTask('default', ['jshint', 'test', 'build']);
};
