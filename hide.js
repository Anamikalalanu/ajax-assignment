function hide() {
    document.getElementById('span1').style.display = 'none'
}
function show() {
    document.getElementById('span1').style.display = 'block'
} 
function welcome(){
var a=document.getElementById('div1');
var b=document.getElementById('btn1');
if(a.style.display=='none'){
b.innerHTML='hide';
a.style.display='block';
}
else{
    a.style.display='none'
    b.innerHTML='show'
}
}