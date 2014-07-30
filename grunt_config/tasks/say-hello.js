module.exports = function(grunt) {

  grunt.registerTask('say-hello', 'A custom task to say hello', function() {
    var currentTask = grunt.task.current.name;
    // template resolution only works if you set config values
    // before getting and resolving an option value
    grunt.config.set('helloTaskName', currentTask);
    var taskConfig = grunt.config.get(currentTask);
    grunt.log.writeln('Hello from', taskConfig.from);
  });

}
