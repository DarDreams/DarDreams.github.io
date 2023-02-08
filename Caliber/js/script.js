'use strict';

// let reader = new FileReader(),
//   file = this.files[0] || null
//   //console.log('file', file)
//   if (file) {
//     file_name.textContent = fileName = file.name
//     file_date.textContent = new Date(file.lastModified) .toLocaleString()
//     file_size.textContent = file.size + ' bytes'
//     reader.readAsText(file, 'windows-1251')
//   }


let clone;
let copy2
  
window.onload = function() {
  var fileInput = document.getElementById('fileInput');
  var fileDisplayArea = document.getElementById('fileDisplayArea');

  fileInput.addEventListener('change', function(e) {
    //e.preventDefault();
    var file = fileInput.files[0];
    console.log(fileInput.files[0]);
    //"C:\\Users\\Администратор\\AppData\\LocalLow\\1CGS\\Caliber\\Replays\\RANKS3.txt"
    
    var textType = /text.*/;

    if (file.type.match(textType)) {
      var reader = new FileReader();
      //return reader
      reader.onload = function(e) {
        fileDisplayArea.innerText = reader.result;
        //console.log(reader.result)

      }

    copy2 =   function () {
        const clone = JSON.parse(reader.result);
        //console.log(clone);
        return(clone)
        //return(reader.result);
      }

      reader.readAsText(file);	
    } else {
      fileDisplayArea.innerText = "File not supported!"
    }
  });
}


