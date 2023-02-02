// std.innerText = window.location.search.replace("?btn=","").toUpperCase() 


const std = document.querySelector("#std");
const txtStd = () =>{
  return document.querySelector("#std").innerText
}


const onchange = function(element, callback) {
    var HTML = element.innerHTML;
    window.setInterval(function() {
        var newHTML = element.innerHTML;
        if(HTML !== newHTML) {
            HTML = newHTML;
            callback(element);
          }
        })
}

onchange(std, function() {
  console.log('change');

  txtStd() === "ON" ? btn_on.style.backgroundColor = "#5dcb2a" : btn_on.style.backgroundColor = "#e8e8e8"
  txtStd() === "OFF" ? btn_off.style.backgroundColor = "#e45640" : btn_off.style.backgroundColor = "#e8e8e8"
});

const btn_on = document.querySelector("#btn-on");
const btn_off = document.querySelector("#btn-off");

btn_on.onclick = () => std.innerText = "ON"
btn_off.onclick = () => std.innerText = "OFF"