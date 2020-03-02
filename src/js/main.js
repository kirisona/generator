let addText = document.querySelector(".logo span");

function previewFile() {
  let preview = document.querySelector("img");
  let file = document.querySelector("input[type=file]").files[0];
  let reader = new FileReader();

  reader.onloadend = function() {
    preview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
    addText.innerHTML = "";
  } else {
    preview.src = "";
  }
}

let removeLogo = document.querySelector(".logo-remove");

removeLogo.addEventListener("click", function(e) {
  let logoImg = document.getElementById("logo-img");
  logoImg.src = "";
  addText.innerHTML = `
  <i class="icon icon-plus"></i>
                  Add your logo
  `;
});

// current date

let date = document.getElementById("date");
let today = new Date().toISOString().substr(0, 10);
date.value = today;

// add line

let addBtn = document.getElementById("addLine");

addBtn.addEventListener("click", function(e) {
  let removeLine = document.querySelectorAll(".removeItem");
  let line = document.querySelectorAll(".positions__item");
  let template = `
  <div class="row positions__item">
            <div class="col-6">
              <input type="text" name="workName" placeholder="Description of service or product..." class="workName">
            </div>
            <div class="col-2">
              <input type="number" placeholder="Quantity" name="quantity" class="quantity">
            </div>
            <div class="col-2 positions__price">
              <span class="note">$</span>
              <input type="number" name="price" class="price" placeholder="Price">
            </div>
            <div class="col-2 row positions__amount">
              <span class="note">$</span>
              <span class="amount">00.00</span>
              <span class="removeItem">
                <i class="icon icon-close"></i>
              </span>
            </div>
          </div>
  `;
  this.insertAdjacentHTML("beforebegin", template);

  for (let i = 0; i < removeLine.length; i++) {
    removeLine[i].addEventListener("click", function() {
      line[i].remove();
    });
  }

});

// amount

let amount = document.querySelectorAll('.amount');
let price = document.querySelectorAll('.quantity');
let count = document.querySelectorAll('.count');

for (let i = 0; i < amount.length; i++) {
  amount[i] = price[i].value * count[i].value;
}
