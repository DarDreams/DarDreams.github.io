  "use strict";


  function readFile(object) {
    //var file = object.files[0]
    var file = object;
    var reader = new FileReader()
    reader.onload = function() {
      console.log(reader.result);
    }
    reader.readAsText(file)
  }

readFile('G:\\data\\DarDreams_Temp\\caliber\\allgames\\28_01_23.txt');

  