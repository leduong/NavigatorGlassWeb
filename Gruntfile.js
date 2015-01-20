// Generated on 2014-09-15 using generator-angular 0.9.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    pkg: grunt.file.readJSON('package.json'),

    // A simple code banner
    tag: {
      banner: '/*!\n' +
        ' * <%= pkg.name %>\n' +
        ' * <%= pkg.title %>\n' +
        ' * <%= pkg.url %>\n' +
        ' * @author <%= pkg.author %>\n' +
        ' * @version <%= pkg.version %>\n' +
        ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
        ' */\n'
    },

    // Sass compilation
    sass: {
      dev: {
        options: {
          style: 'expanded',
          banner: '<%= tag.banner %>',
        },
        files: {
          '<%= yeoman.app %>/styles/app.css': '<%= yeoman.app %>/styles/sass/app.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed',
        },
        files: {
          '<%= yeoman.dist %>/styles/app.css': '<%= yeoman.app %>/styles/sass/app.scss'
        }
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '<%= yeoman.app %>/styles-less/**/*.less',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      sass: {
        files: '<%= yeoman.app %>/styles/sass/{,*/}*.{scss,sass}',
        tasks: ['sass:dev', 'cssmin:dev', 'autoprefixer:dev']
      },
      less: {
        files: ['<%= yeoman.app %>/styles-less/**/*.less'],
        tasks: ['less:server']
      },
    },
    open: {
      server: {
        url: 'http://localhost:<%= connect.options.port %>'
      }
    },
    less: {
      server: {
        options: {
          strictMath: true,
          dumpLineNumbers: true,
          sourceMap: true,
          sourceMapRootpath: '',
          outputSourceFiles: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/styles-less',
          src: 'app.less',
          dest: '.tmp/styles',
          ext: '.css'
        }]
      },
      dist: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/styles-less',
          src: 'app.less',
          dest: '.tmp/styles',
          ext: '.css'
        }]
      }
    },

    ngconstant: {
      // Options for all targets
      options: {
        space: '  ',
        wrap: '"use strict";\n\n {%= __ngModule %}',
        name: 'navigatorConfig',
      },
      // Environment targets
      dev: {
        options: {
          dest: '<%= yeoman.app %>/scripts/config.js'
        },
        constants: {
          ENV: {
            name: 'development',
            ApiUrl: 'http://navigatorglassweb.cloudapp.net:80/api',
            oAuth: 'http://6b74cc2ca3764a3db82c8499ef1795aa.cloudapp.net'
          }
        }
      },
      local: {
        options: {
          dest: '<%= yeoman.app %>/scripts/config.js'
        },
        constants: {
          ENV: {
            name: 'local',
            ApiUrl: 'http://localhost:43868/api',
            oAuth: 'http://6b74cc2ca3764a3db82c8499ef1795aa.cloudapp.net'
          }
        }
      },
      stage: {
        options: {
          dest: '<%= yeoman.app %>/scripts/config.js'
        },
        constants: {
          ENV: {
            name: 'stage',
            ApiUrl: 'http://6b74cc2ca3764a3db82c8499ef1795aa.cloudapp.net/api',
            oAuth: 'http://6b74cc2ca3764a3db82c8499ef1795aa.cloudapp.net'
          }
        }
      },
      prod: {
        options: {
          dest: '<%= yeoman.app %>/scripts/config.js'
        },
        constants: {
          ENV: {
            name: 'production',
            ApiUrl: 'http://navigatorglassweb.cloudapp.net/api',
            oAuth: 'http://6b74cc2ca3764a3db82c8499ef1795aa.cloudapp.net'
          }
        }
      },
      mock: {
        options: {
          dest: '<%= yeoman.app %>/scripts/config.js'
        },
        constants: {
          ENV: {
            name: 'production',
            ApiUrl: 'http://navigatormock.cloudapp.net/api',
            oAuth: 'http://6b74cc2ca3764a3db82c8499ef1795aa.cloudapp.net'
          }
        }
      },
      bdev: {
        options: {
          dest: '<%= yeoman.dist %>/scripts/config.js'
        },
        constants: {
          ENV: {
            name: 'development',
            ApiUrl: 'http://navigatorglassweb.cloudapp.net:80/api',
            oAuth: 'http://6b74cc2ca3764a3db82c8499ef1795aa.cloudapp.net'
          }
        }
      },
      blocal: {
        options: {
          dest: '<%= yeoman.dist %>/scripts/config.js'
        },
        constants: {
          ENV: {
            name: 'local',
            ApiUrl: 'http://localhost:43868/api',
            oAuth: 'http://6b74cc2ca3764a3db82c8499ef1795aa.cloudapp.net'
          }
        }
      },
      bstage: {
        options: {
          dest: '<%= yeoman.dist %>/scripts/config.js'
        },
        constants: {
          ENV: {
            name: 'stage',
            ApiUrl: 'http://6b74cc2ca3764a3db82c8499ef1795aa.cloudapp.net/api',
            oAuth: 'http://6b74cc2ca3764a3db82c8499ef1795aa.cloudapp.net'
          }
        }
      },
      bprod: {
        options: {
          dest: '<%= yeoman.dist %>/scripts/config.js'
        },
        constants: {
          ENV: {
            name: 'production',
            ApiUrl: 'http://navigatorglassweb.cloudapp.net/api',
            oAuth: 'http://6b74cc2ca3764a3db82c8499ef1795aa.cloudapp.net'
          }
        }
      },
      bmock: {
        options: {
          dest: '<%= yeoman.dist %>/scripts/config.js'
        },
        constants: {
          ENV: {
            name: 'production',
            ApiUrl: 'http://navigatormock.cloudapp.net/api',
            oAuth: 'http://6b74cc2ca3764a3db82c8499ef1795aa.cloudapp.net'
          }
        }
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dev: {
        options: {
          port: 9000,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      local: {
        options: {
          port: 9000,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      stage: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      prod: {
        options: {
          port: 9002,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      mock: {
        options: {
          port: 9000,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc'
          // reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js',
          '!<%= yeoman.app %>/scripts/config.js',
          '!<%= yeoman.app %>/scripts/libs/**.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath: /\.\.\//
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/images']
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/styles/app.css': [
            '.tmp/styles/{,*/}*.css'
          ]
        }
      }
    },

    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: ['*.js', '!oldieshim.js'],
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'fonts/*',
            'external/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: 'bower_components/bootstrap/dist',
          src: 'fonts/*',
          dest: '<%= yeoman.dist %>'
        }, {
          expand: true,
          cwd: 'bower_components/font-awesome',
          src: 'fonts/*',
          dest: '<%= yeoman.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ],
      lessServer: [
        'less:server',
        'copy:styles'
      ],
      lessDist: [
        'less:dist',
        'copy:styles'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: './test/karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('serve:dev', [
    'clean:server',
    'ngconstant:dev',
    'wiredep',
    'concurrent:server',
    'sass:dev',
    'autoprefixer',
    'connect:dev',
    'watch'
  ]);

  grunt.registerTask('serve:local', [
    'clean:server',
    'ngconstant:local',
    'wiredep',
    'concurrent:server',
    'sass:dev',
    'autoprefixer',
    'connect:local',
    'watch'
  ]);

  grunt.registerTask('serve:stage', [
    'clean:server',
    'ngconstant:stage',
    'wiredep',
    'concurrent:server',
    'sass:dev',
    'autoprefixer',
    'connect:stage',
    'watch'
  ]);

  grunt.registerTask('serve:prod', [
    'clean:server',
    'ngconstant:prod',
    'wiredep',
    'concurrent:server',
    'sass:dev',
    'autoprefixer',
    'connect:prod',
    'watch'
  ]);

  grunt.registerTask('serve:mock', [
    'clean:server',
    'ngconstant:mock',
    'wiredep',
    'concurrent:lessServer',
    'autoprefixer',
    'connect:mock',
    'open',
    'watch'
  ]);

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('build:dev', [
    'clean:dist',
    'ngconstant:bdev',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('build:local', [
    'clean:dist',
    'ngconstant:blocal',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('build:stage', [
    'clean:dist',
    'ngconstant:bstage',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('build:prod', [
    'clean:dist',
    'ngconstant:bprod',
    'wiredep',
    'useminPrepare',
    'concurrent:lessDist',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('build:mock', [
    'clean:dist',
    'ngconstant:bmock',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'sass:dev',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('heroku', [
    'clean:dist',
    'ngconstant:mock',
    'useminPrepare',
    'concurrent:lessDist',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'sass:dev',
    'test',
    'build'
  ]);
};