function kilo() {
  let Miles = document.getElementById("myInput").value;  
  const results = document.getElementById("myh2");
  results.innerHTML = Miles * 1.60934;
}
function kilometer() {
  const bro = document.getElementById("myInput").value;
  const result = document.getElementById("myInput");
  result.innerHTML = bro * 0.621371;
}
function miles() {
  let Miless = document.getElementById("myInput").value;  
  const resultst = document.getElementById("myh2");
  resultst.innerHTML = Miless * 1.60934;
}
let word = "Kilometer";
function kilometer() {
    word = "Kilometer";
    const el = document.getElementById("mafia");
    const ok = document.getElementById("myInput").value;
    const tada = document.getElementById("myh2");
    el.innerHTML = word;
    tada.innerHTML = ok * 0.621371;
}
function miles() {
    word = "Miles";
    const ele = document.getElementById("mafia"); 
    ele.innerHTML = word;
    const tadah = document.getElementById("myh2");
    const peek = document.getElementById("myInput").value;
    tadah.innerHTML = peek * 1.60934;
    }
