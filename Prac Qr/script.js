let container=document.getElementById("container");
let qrImage=document.getElementById("qrImage");
 const generateQR=function(){
  qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Hellojee"
  container.classList.add("show-image")
}
  generateQR()