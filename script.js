var a = "berkay"
var b = "suozer"


function login(){
var username = document.getElementById("username").value 
var password = document.getElementById("password").value

if(username == a && password ==b  ){
    console.log("Başarıyla giriş yapıldı.")
    window.location = "berkay.html"
}

    else{
console.log("Tekrar deneyiniz")
window.alert("TEKRAR DENE.!")

    }
}


