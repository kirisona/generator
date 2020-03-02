let addText = document.querySelector('.logo span');

function previewFile() {
  let preview = document.querySelector('img');
  let file    = document.querySelector('input[type=file]').files[0];
  let reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
    addText.innerHTML = '';
  } else {
    preview.src = "";
  }
}

let removeLogo = document.querySelector('.logo-remove');

removeLogo.addEventListener('click', function(e) {
  let logoImg = document.getElementById('logo-img');
  logoImg.src = '';
  addText.innerHTML = `
  <i class="icon icon-plus"></i>
                  Add your logo
  `
});

// current date

let date = document.getElementById('date');
let today = new Date().toISOString().substr(0, 10);
date.value = today;
