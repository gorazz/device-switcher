var devices = ["phone", "tablet", "desktop"];
var device = 0;
var interval = 2000;
var ticker = setInterval(animate, interval);

$('.device').click(function() {
  animate();
  clearInterval(ticker);
  ticker = setInterval(animate, interval);
});

function animate() { $('.device').children().toggleClass(devices[device]).toggleClass(devices[(device+1)%devices.length]);
  device = (device+1)%devices.length;
}
