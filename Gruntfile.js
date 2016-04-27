module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files:[
                    {
                        expand: true,     // Enable dynamic expansion.
                        cwd: 'js-source/',      // Src matches are relative to this path.
                        src: 'index.js', // Actual pattern(s) to match.
                        dest: 'js/',   // Destination path prefix.
                        ext: '.js'  // Dest filepaths will have this extension.
                    }
                ]
            }
        },
        cssmin: {
            options: {
                banner: '/!*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> *!/\n'
            },
            my_target:{
                files:[
                    {
                        expand: true,     // Enable dynamic expansion.
                        cwd: 'style-source/',      // Src matches are relative to this path.
                        src: '*.css', // Actual pattern(s) to match.
                        dest: 'style/',   // Destination path prefix.
                        ext: '.css'  // Dest filepaths will have this extension.
                    }
                ]
            }
        },
        jshint:{
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            },
            uses_defaults: ['js-source/*.js'],
            with_overrides: {
                options: {
                    curly: false,
                    undef: true
                },
                files: {
                    src: ['js-source/*.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['js-source/*.js','style-source/*.css'],
                tasks: ['jshint','cssmin'],
                options: {
                    interrupt: true
                }
            }
        },
        browserSync: {
            bsFiles: {
                src :['*.html','style/*.css']
            },
            options: {
                server: {
                    watchTask: true,
                    baseDir: "./"
                }
            }
        }
    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // 默认被执行的任务列表。
    //grunt.registerTask('default', ['cssmin','jshint','uglify']);
    grunt.registerTask('default', ['browserSync']);

};