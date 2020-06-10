let input = document.querySelector("input");
let log = document.getElementById("log");

input.oninput = handleInput;

function handleInput(e) {
    log.textContent = `今入力されている文字は
      ${e.target.value.length} 文字です。`;
}
