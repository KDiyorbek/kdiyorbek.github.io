function generateQR() {
  document.querySelector("#qr-image").style.display = "block";
  let QRtext = document.querySelector("#text").value;
  const color = document.getElementById("color").value.substring(1);
  const bgcolor = document.getElementById("bgcolor").value.substring(1);

  if(QRtext.trim().length == 0) {
    document.querySelector("#qr-image .error").innerHTML = "🤨<br>please, enter some text!";
    document.querySelector("#img").style.display = "none";
  } else {
    document.querySelector("#img").style.display = "block";
    document.querySelector("#qr-image .error").innerHTML = "";
    document.querySelector("#img").src = "https://api.qrserver.com/v1/create-qr-code/?size=330x330&data=" + QRtext + "&color=" + color + "&bgcolor=" + bgcolor;
  }
}
