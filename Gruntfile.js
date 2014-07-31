module.exports = function(grunt){
    // project configuration
    grunt.initConfig({        
      nodewebkit: {
        options: {
            build_dir: './builds',
            win: false,
            mac: false,
            linux32: false,
            linux64: true,
        },
        src: ['./package.json', './src/**/*']
      }
    })

    grunt.loadNpmTasks('grunt-node-webkit-builder');

};
