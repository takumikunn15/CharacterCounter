let textarea = document.querySelector("textarea");
let inMax = document.querySelector("#in-max");
let logMax = document.getElementById("logMax");
let log1 = document.getElementById("log1");
let log2 = document.getElementById("log2");
let log3 = document.getElementById("log3");
let log4 = document.getElementById("log4");

textarea.oninput = refreshNeko;
inMax.oninput = refreshNeko;

function refreshNeko(e) {
  let lineBreak = textarea.value.split("\n").length - 1;
  let charaSpace = textarea.value.length - lineBreak;
  let chara = textarea.value.replace(/\s+/g, "").length;
  let space = charaSpace - chara;
  log1.textContent = `合計 ${charaSpace} 文字(スペース込み)`;
  log2.textContent = `合計 ${chara} 文字(スペース無し)`;
  log3.textContent = `スペース ${space} 文字`;
  log4.textContent = `改行 ${lineBreak} 回`;

  document.getElementById("in-max").value = inMax.value.replace(/[^0-9]+/i, '');
  let moreLetter = inMax.value - chara;
  logMax.textContent = `あと ${moreLetter} 文字(スペース無し)`;
}
