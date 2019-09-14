var typed = new Typed(".type", {
    strings: [' accelerate the future.'],
    typeSpeed: 160,
    backSpeed: 60,
    loop: true
});

// function Close(){
//     var a = document.getElementById('dialouge-home');
//     a.style.display = 'none';
// }

function openall(){
    document.getElementById('dialouge-home').style.display = 'block';
}
function blurall(){
    document.getElementById('row-blur').style.filter = 'blur(15px)';
}
function closeall(){
    document.getElementById('dialouge-home').style.display = 'none';
}
function noblurall() {
    document.getElementById('row-blur').style.filter = 'blur(0px)';
}
function myFunction1() {
   openall();
   blurall();
}
function myFunction2() {
    closeall();
    noblurall();
}
