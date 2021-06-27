// disclose carets within sidebar
let toggler = document.getElementsByClassName("caret");
var i;
for (i = 0; i < toggler.length; i++) {
    console.log("i: " + i)
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
}

// open sidebar
function openNav() {
    if (document.getElementById("mySidebar").style.width === "250px") {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    } else {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
}

function openGitHub() {
    open(
        document
            .URL
            .replace(location.origin, "https://github.com/AndrewSelvia")
            .replace("journal/", "journal/edit/main/")
            .replace(".html", ".md"))
}
