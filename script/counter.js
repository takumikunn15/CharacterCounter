let input = document.querySelector("input");
let log = document.getElementById("log");
let log2 = document.getElementById("log2");
let log3 = document.getElementById("log3");

input.oninput = handleInput;

function handleInput(e) {
  log.textContent = `合計 ${e.target.value.length} 文字(スペース込み)`;
  log2.textContent = `合計 ${e.target.value.replace(/\s+/g, "").length} 文字(スペース無し)`;
  log3.textContent = `スペース ${e.target.value.length - e.target.value.replace(/\s+/g, "").length} 文字`;
}
