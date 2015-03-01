/*
 * Serve content over a socket
 */

module.exports = function (socket) {


  var Docker = require('../node_modules/dockerode/lib/docker');
  var Docker = require('dockerode');

  //protocol http vs https is automatically detected
  var docker = new Docker({
    host: '192.168.59.103',
    port: process.env.DOCKER_PORT || 2375,
  });
    console.log(docker);
  var container = docker.getContainer('2e526a0308c0');





  socket.emit('send:name', {
    name: 'Bob'
  });

  setInterval(function () {
    // socket.emit('send:time', {
    //   time: (new Date()).toString()
    // });

    // query API for container info
  container.inspect(function (err, data) {
    // console.log(data);
    socket.emit('send:time', {
      time: data.State.Running
    });
  });

  }, 1000);
};



