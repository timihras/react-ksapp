
export default (text) => {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = text.trim();
  return tmp.textContent || tmp.innerText || "";
}