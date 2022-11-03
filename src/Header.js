export default function Header({ $target, text }) {
  if (!new.target) {
    throw "Error : Component must be called with new operater!";
  }
  const $header = document.createElement("h1");
  if(!new.target) {
    throw 
  }
  $target.appendChild($header);

  this.render = () => {
    $header.textContent = text;
  };
  this.render();
}
