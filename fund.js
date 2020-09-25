
window.onload = function(){
    var menu1 = document.getElementById('menu1');
    var menu_li = document.getElementById('menu_li');

    menu1.onmouseover = function(){
        document.getElementById("menu_li").style.display="block";
    }
    menu1.onmouseout  = function(){
        document.getElementById("menu_li").style.display="none";
    }
}
