let textarea = document.querySelector("textarea");
let log1 = document.getElementById("log");
let log2 = document.getElementById("log2");
let log3 = document.getElementById("log3");
let log4 = document.getElementById("log4");

textarea.oninput = handleInput;

function handleInput(e) {
  let lineBreak = e.target.value.split("\n").length - 1;
  let charaSpace = e.target.value.length - lineBreak;
  let chara = e.target.value.replace(/\s+/g, "").length;
  let space = charaSpace - chara;

  log.textContent = `合計 ${charaSpace} 文字(スペース込み)`;
  log2.textContent = `合計 ${chara} 文字(スペース無し)`;
  log3.textContent = `スペース ${space} 文字`;
  log4.textContent = `改行 ${lineBreak} 回`;
}
