const sidebar=document.getElementById("Sidebar")
const Menu=document.getElementById("Menu")
const closes=document.getElementById("remove")
Menu.addEventListener("click",function(){
    sidebar.style.display="flex"
})
closes.addEventListener("click",function(){
    sidebar.style.display="none"
})