// This is main code


var lastObj = resources[Object.keys(resources)[Object.keys(resources).length - 1]]

var script = [];
index = 0;
for (var key in resources) {
  script[index] = document.createElement('script');
  if (lastObj === resources[key]) {
    script[index].onload = function() {
    
    };
  }
  script[index].src = sources[key];
  document.getElementsByTagName('head')[0].appendChild(script[index]);
  index++;
}
