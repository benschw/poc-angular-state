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
        tasks: ['deps', 'livereload']
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
      server: '.tmp',
      build: 'build'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js'
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
          src: ['*.html'], //src: ['*.html', 'views/*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      },
      distTpls: {
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
          src: ['scripts/**/*.tpl.html'], //src: ['*.html', 'views/*.html'],
          dest: '<%= yeoman.dist %>'
        }]
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
      SampleViews: {
        options:    {
          base:     'app/scripts',        // $templateCache ID will be relative to this folder
          prepend:  'scripts',            // (Optional) Prepend path to $templateCache ID
          module:   'sample'
        },
        src:        [ 'app/scripts/views/**.html' ],
        dest:       'build/tpl/sample-templates.js'
      },
      ContactsViews: {
        options:    {
          base:     'app/scripts',        // $templateCache ID will be relative to this folder
          prepend:  'scripts',            // (Optional) Prepend path to $templateCache ID
          module:   'contacts'
        },
        src:        [ 'app/scripts/contacts/views/**.html' ],
        dest:       'build/tpl/contacts-templates.js'
      },
      AccountSettingsViews: {
        options:    {
          base:     'app/scripts',        // $templateCache ID will be relative to this folder
          prepend:  'scripts',            // (Optional) Prepend path to $templateCache ID
          module:   'accountSettings'
        },
        src:        [ 'app/scripts/accountSettings/views/**.html' ],
        dest:       'build/tpl/accountSettings-templates.js'
      }
    },

    closureDepsWriter: {
      options: {
        closureLibraryPath: 'app/components/closure-library', // path to closure library

        // [OPTIONAL] Root directory to scan. Can be string or array
        // root: [
        //   'app/components/closure-library/closure/goog', 
        //   'app/components/closure-library/third_party/closure', 
        //   'app/scripts'
        // ],//'string|Array',

        root_with_prefix: [
          '"app/scripts ../../../../scripts"'
        ],//'string|Array',
      },

      buildDeps: {
        dest: 'app/deps.js'
      }
    },

    closureBuilder:  {
      options: {
        closureLibraryPath: 'app/components/closure-library', // path to closure library

        namespaces: 'sample.config', //'string|Array', // namespaces
    
        compilerFile: 'closure-compiler/compiler.jar',
        compile: true, // boolean
    
        compilerOpts: {
          externs: ["closure-compiler/angular-externs.js", "closure-compiler/custom-externs.js"],
          output_wrapper: "(function(){%output%})();",
          compilation_level: "ADVANCED_OPTIMIZATIONS",
          warning_level: "VERBOSE",
          jscomp_error: [
            // "checkTypes", 
            "accessControls", "invalidCasts", 
            "checkVars", "ambiguousFunctionDecl", "suspiciousCode", "const", "es5Strict"
          ]
        }
      },

  	  buildApp: {
  	    src: [
  	      'app/components/closure-library/closure/goog', 
  	      'app/components/closure-library/third_party/closure', 
  	      'app/scripts'
          // 'build/tplPrepared'
  	    ],//'string|Array',
  	    dest: '<%= yeoman.dist %>/scripts/app.js'
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

    uglify: {
      // lib.js & app.js defined by useminPrepare
    },
    concat: {
      // lib.js & app.js defined by useminPrepare
      // closure: {
      //   files: {
      //     '<%= yeoman.dist %>/scripts/app.js': ['build/app.js']
      //   }
      // }
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

  grunt.registerTask('build', [
    // 'clean:build',
    'clean:dist',
    'compass:dist',
    'useminPrepare',

    'imagemin',
    'cssmin',
    'htmlmin:dist',
    'htmlmin:distTpls',
    // 'ngtemplates',

    'concat',
    'uglify',
    'closureBuilder',

    'copy',
    'rev',
    'usemin'
  ]);
  grunt.registerTask('deps', ['closureDepsWriter']);

  grunt.registerTask('default', ['jshint', 'test', 'build']);
};
