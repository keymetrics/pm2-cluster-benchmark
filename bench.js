var async = require('async');

var a = [{
  port : 8001,
  name : 'Raw node app.js'
}, {
  port : 8005,
  name : 'Cluster mode PM2 3 instances'
}, {
  port : 3053,
  name : 'Haproxy 3 instances'
}, {
  port : 3004,
  name : 'Nginx 3 HTTP upstream'
}, {
  port : 9999,
  name : 'Nginx 3 TCP stream'
}];

async.forEachLimit(a, 1, function(test, next) {
  const exec = require('child_process').exec;
  console.log('Testing %s', test.name);
  exec('wrk -c 1000 -t 1000 -d 10 http://localhost:' + test.port + '/100b', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
    }
    console.log(`stdout: ${stdout}`);
    setTimeout(next, 1300);
  });
}, function(err) {
  console.log('Done');
});
