let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("Click", () => {
    console.log("Clicked");
    if(startmenu.style.bottom == "50px") {
        startmenu.style.bottom = "-662px"
    }
    else {
        startmenu.style.bottom = "50px"
    }
})