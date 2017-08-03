module.exports = function (grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        config: {
            src: 'less',
            dist: 'css'
        },
        watch: {
            scripts: {
                files: ['less/**/*.less'],
                tasks: ['less']
            }
        },
        less: {
            production: {
                options: {
                    paths: ['<%= config.src %>/less'],
                    imports: {
                        reference: ['modules/variables.less', 'modules/mixins+.less']
                    },
                    cleancss: true
                },
                files: {
                    '<%= config.dist %>/mobile-build.css': ['<%= config.src %>/mobile-build.less']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
};