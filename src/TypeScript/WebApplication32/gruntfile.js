module.exports = function (grunt) {

    var staticFilePattern = '**/*.{js,css,map,html,htm,jpg,jpeg,png,gif,eot,svg,ttf,woff}';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //concat: {
        //    options: {
        //        separator: ';'
        //    },
        //    dist: {
        //        src: ['src/**/*.js'],
        //        dest: 'dist/<%= pkg.name %>.js'
        //    }
        //},
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'public/app.min.js': ['<%= typescript.base.dest %>']
                }
            }
        },
        //qunit: {
        //    files: ['../tests/**/*.html']
        //},
        //jshint: {
        //    files: ['Gruntfile.js', '**/*.js'],
        //    options: {
        //        // options here to override JSHint defaults
        //        globals: {
        //            jQuery: true,
        //            console: true,
        //            module: true,
        //            document: true
        //        }
        //    }
        //},
        clean: ["public"],
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: "client/",
                        src: staticFilePattern,
                        dest: "public/"
                    },
                    {
                        expand: true,
                        cwd: "bower_components/",
                        src: staticFilePattern,
                        dest: "public/"
                    }
                ]
            }
        },
        less: {
            dev: {
                files: {
                    "public/site.css": "client/**/*.less"
                }
            },
            release: {
                options: {
                    cleancss: true
                },
                files: {
                    "public/site.css": "client/**/*.less"
                }
            }
        },
        typescript: {
            base: {
                src: ['client/**/*.ts'],
                dest: 'public/app.js',
                options: {
                    module: 'amd', // or commonjs
                    target: 'es5', // or es3
                    sourcemap: false
                }
            }
        },
        watch: {
            files: ['client/**/*.*', 'bower_components/' + staticFilePattern],
            tasks: ['dev']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-typescript');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-qunit');
    //grunt.loadNpmTasks('grunt-contrib-concat');

    //grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('dev', ['clean', 'less', 'typescript', 'copy']);
    grunt.registerTask('release', ['dev', 'uglify']);
    grunt.registerTask('default', ['dev']);
};