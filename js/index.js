var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
console.log(isMobile);
if(isMobile){
    var element = document.getElementsByClassName('topnav');
    topnav = element.item(0)
    topnav.style.fontSize = "2.8vh";
}