if (annyang) {
  console.log('====== LOADING ANNYANG =====');

  let showMe = function(tag) {
    console.log(tag)
  }
  var commands = {
    '*search': showMe
  };

  annyang.addCommands(commands);
  annyang.start();
}
