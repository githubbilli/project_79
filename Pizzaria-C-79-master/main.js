var menu_list = ["Chicken chesse pizza","Veg supreme pizza","Deluxe veggie pizza","Veg extravaganza pizza"]
function getmenu() {
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list.sort();
    for(var i=0; i<menu_list.length;i++){
        htmldata=htmldata+'<li>' + menu_list[i] + '<li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML= htmldata;
}
function additem() {
    var htmldata2;
    var item =document.getElementById("additem").value;
    menu_list_array.push(item);
    menu_list_array.sort(item);
    htmldata2=<section class='cards'>
    for(var i=0;i<menu_list.length;i++){
      htmldata=htmldata+"<div class="card">" +'<img src = "81077084-pepperoni-pizza-italian-pizza-on-white-background-.jpg"/>' + menu_list[i] + '</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML= htmldata;
}
    
    
    