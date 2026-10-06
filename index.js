function clicked(){
    document.title = document.getElementById("textbox").value;
}

function local(){
    if(localStorage.getItem("localbutton") !== null) {
        let copy = JSON.parse(localStorage.getItem("localbutton"));
        const stringCopy = JSON.stringify(copy + 1);
        localStorage.setItem("localbutton", stringCopy);
    }
    loading();
}

function session() {
    if(sessionStorage.getItem("sessionbutton") !== null) {
        let copys = JSON.parse(sessionStorage.getItem("sessionbutton"));
        const stringCopys = JSON.stringify(copys + 1);
        sessionStorage.setItem("sessionbutton", stringCopys);
    }
    loading();
}

function loading() {
    if(localStorage.getItem("localbutton") !== null) {
        document.getElementById("localbutton").innerText = localStorage.getItem("localbutton");
    }
    else {
        localStorage.setItem("localbutton", 0);
    }
    if(sessionStorage.getItem("sessionbutton") !== null) {
        document.getElementById("sessionbutton").innerText = sessionStorage.getItem("sessionbutton");
    }
    else {
        sessionStorage.setItem("sessionbutton", 0);
    }
}