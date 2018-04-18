import Icon from './imgs/icon.jpg';
import './css/style.css'
function component() {
    let fn=a=>a**2;
    var element = document.createElement('div');

    console.log(fn(3))
    element.innerHTML = "webpack demo.";
    element.classList.add('hello');
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    return element;
  }

  document.body.appendChild(component());