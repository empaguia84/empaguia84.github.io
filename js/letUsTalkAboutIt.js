function letUsTalkAboutIt() {
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        document.getElementById("letUsTalkAboutIt").removeAttribute("height");
    }
    else{
        document.getElementById("letUsTalkAboutIt").setAttribute("height", "400px");
    }
}