﻿module.exports = function (grunt) {

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
                    'client/app.min.js': ['<%= typescript.base.dest %>']
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
        typescript: {
            base: {
                src: ['**/*.ts'],
                dest: 'client/app.js',
                options: {
                    module: 'amd', // or commonjs
                    target: 'es5', // or es3
                    sourcemap: false
                }
            }
        },
        watch: {
            files: ['<%= typescript.base.src %>'],
            tasks: ['typescript']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-typescript');

    //grunt.registerTask('test', ['jshint', 'qunit']);

    grunt.registerTask('default', ['typescript', 'uglify']);

};