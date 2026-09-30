function clicked(){
    document.title = document.getElementById("textbox").value;
    onclick= "clicked()";
}

function local(){
    if(localStorage.getItem("localbutton") !== null) {
        let copy = JSON.parse(localStorage.getItem("localbutton"));
        localStorage.setItem("localbutton", JSON.stringify(copy + 1));
    }
}

function session() {
    if(localStorage.getItem("sessionbutton") !== null) {
        let copy = JSON.parse(sessionStorage.getItem("sessionbutton"));
        sessionStorage.setItem("sessionbutton", JSON.stringify(copy + 1));
    }
}

function loading() {
    if(localStorage.getItem("localbutton") !== null) {
        document.getElementById("localbutton").innerText = localStorage.getItem("localbutton");
    }
    if(sessionStorage.getItem("sessionbutton") !== null) {
        document.getElementById("sessionbutton").innerText = sessionStorage.getItem("sessionbutton");
    }
}