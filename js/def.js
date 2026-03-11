//漢堡選單動態
let nav = document.querySelectorAll("nav")[0];
let menu = document.querySelectorAll("menu")[0];
let menuH = menu.scrollHeight;
let boolNav = true;
nav.addEventListener("click",function(){
    // menu.classList.toggle("none");
        
    if(boolNav){
            menu.style.height = menuH + "px";
    }else{
            menu.style.height = 0 + "px";
    }
     boolNav = !boolNav;

    for (const bar of nav.children) {
            bar.classList.toggle("none");
    }
})
for (const li of menu.children[0].children) {
    li.addEventListener("click",function(){
        // menu.classList.toggle("none");

        if(boolNav){
                menu.style.height = menuH + "px";
        }else{
                menu.style.height = 0 + "px";
        }
        boolNav = !boolNav;

        for (const bar of nav.children) {
                bar.classList.toggle("none");
        }
    })
}
//year 自動更新年分
document.getElementById("year").textContent = new Date().getFullYear();
    
//goTop
let goTop = document.createElement("a");
goTop.id = "goTop";
goTop.textContent = "TOP";
goTop.href = "#";
goTop.style.position = "fixed";
goTop.style.width = "4em";
goTop.style.height = "4em";
goTop.style.backgroundColor = "#6da52dd8";
goTop.style.color= "#FFF";
goTop.style.fontFamily = "noto sans tc";
goTop.style.fontWeight = "400";
goTop.style.textAlign = "center";
goTop.style.lineHeight = "4em";
goTop.style.bottom = "1em";
goTop.style.right = "1em";
goTop.style.borderRadius = "50%";
document.getElementsByTagName("body")[0].appendChild(goTop);
window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        goTop.style.display = "block";
    } else {
        goTop.style.display = "none";
    }
});
