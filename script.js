'use strict'
// 1行目に記載している 'use strict' は削除しないでください

document.querySelector(".button").addEventListener("click", function() {
  let inputValue = document.getElementById("input").value;
  output.innerHTML = `<img src=me.JPG>`.repeat(inputValue)
})
