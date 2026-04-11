var jsonpath = "./src/json/scoreboard.json";
function setJson() {
    fetch(jsonpath)
        .then(response => response.json())
        .then(data => displayJson(data))
}

function displayJson(data) {
    setScoreboard(data.scoreboard);
    setDocumentation(data.documentation);
    setGithub(data.github);
    setFigma(data.figma);
    setSpringboot(data.springboot);
    setThymeleaf(data.thymeleaf);
    setPostgresql(data.postgresql);
}

function setScoreboard(scoreboard) {
    let listready = document.getElementById("ready1-list");

    let headerready = document.createElement("li");
    headerready.textContent = "ready";
    headerready.classList.add("listHeader");    
    listready.append(headerready);

    scoreboard.ready1.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listready.append(node);
    });

    let listprogress = document.getElementById("progress1-list");
    
    let headerprogress = document.createElement("li");
    headerprogress.textContent = "progress";
    headerprogress.classList.add("listHeader");    
    listprogress.append(headerprogress);

    scoreboard.progress1.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listprogress.append(node);
    });

    let listreview = document.getElementById("review1-list");
    
    let headerreview = document.createElement("li");
    headerreview.textContent = "review";
    headerreview.classList.add("listHeader");    
    listreview.append(headerreview);

    scoreboard.review1.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listreview.append(node);
    });

    let listproduction = document.getElementById("production1-list");
    
    let headerproduction = document.createElement("li");
    headerproduction.textContent = "production";
    headerproduction.classList.add("listHeader");    
    listproduction.append(headerproduction);
    scoreboard.production1.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listproduction.append(node);
    });
    scoreboard.completed1.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        node.style.textDecoration = "line-through";
        listproduction.append(node);
    });
}

function setDocumentation(documentation) {
    let listready = document.getElementById("ready2-list");

    let headerready = document.createElement("li");
    headerready.textContent = "ready";
    headerready.classList.add("listHeader");    
    listready.append(headerready);

    documentation.ready2.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listready.append(node);
    });

    let listprogress = document.getElementById("progress2-list");
    
    let headerprogress = document.createElement("li");
    headerprogress.textContent = "progress";
    headerprogress.classList.add("listHeader");    
    listprogress.append(headerprogress);

    documentation.progress2.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listprogress.append(node);
    });

    let listreview = document.getElementById("review2-list");
    
    let headerreview = document.createElement("li");
    headerreview.textContent = "review";
    headerreview.classList.add("listHeader");    
    listreview.append(headerreview);

    documentation.review2.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listreview.append(node);
    });

    let listproduction = document.getElementById("production2-list");
    
    let headerproduction = document.createElement("li");
    headerproduction.textContent = "production";
    headerproduction.classList.add("listHeader");    
    listproduction.append(headerproduction);
    documentation.production2.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listproduction.append(node);
    });
    documentation.completed2.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        node.style.textDecoration = "line-through";
        listproduction.append(node);
    });
}



function setGithub(github) {
    let listready = document.getElementById("ready3-list");

    let headerready = document.createElement("li");
    headerready.textContent = "ready";
    headerready.classList.add("listHeader");    
    listready.append(headerready);

    github.ready3.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listready.append(node);
    });

    let listprogress = document.getElementById("progress3-list");
    
    let headerprogress = document.createElement("li");
    headerprogress.textContent = "progress";
    headerprogress.classList.add("listHeader");    
    listprogress.append(headerprogress);

    github.progress3.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listprogress.append(node);
    });

    let listreview = document.getElementById("review3-list");
    
    let headerreview = document.createElement("li");
    headerreview.textContent = "review";
    headerreview.classList.add("listHeader");    
    listreview.append(headerreview);

    github.review3.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listreview.append(node);
    });

    let listproduction = document.getElementById("production3-list");
    
    let headerproduction = document.createElement("li");
    headerproduction.textContent = "production";
    headerproduction.classList.add("listHeader");    
    listproduction.append(headerproduction);
    github.production3.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listproduction.append(node);
    });
    
    github.completed3.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        node.style.textDecoration = "line-through";
        listproduction.append(node);
    });
}

function setFigma(figma) {
    let listready = document.getElementById("ready4-list");

    let headerready = document.createElement("li");
    headerready.textContent = "ready";
    headerready.classList.add("listHeader");    
    listready.append(headerready);

    figma.ready4.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listready.append(node);
    });

    let listprogress = document.getElementById("progress4-list");
    
    let headerprogress = document.createElement("li");
    headerprogress.textContent = "progress";
    headerprogress.classList.add("listHeader");    
    listprogress.append(headerprogress);

    figma.progress4.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listprogress.append(node);
    });

    let listreview = document.getElementById("review4-list");
    
    let headerreview = document.createElement("li");
    headerreview.textContent = "review";
    headerreview.classList.add("listHeader");    
    listreview.append(headerreview);

    figma.review4.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listreview.append(node);
    });

    let listproduction = document.getElementById("production4-list");
    
    let headerproduction = document.createElement("li");
    headerproduction.textContent = "production";
    headerproduction.classList.add("listHeader");    
    listproduction.append(headerproduction);
    figma.production4.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listproduction.append(node);
    });
    
    figma.completed4.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        node.style.textDecoration = "line-through";
        listproduction.append(node);
    });
}

function setSpringboot(springboot) {
    let listready = document.getElementById("ready5-list");

    let headerready = document.createElement("li");
    headerready.textContent = "ready";
    headerready.classList.add("listHeader");    
    listready.append(headerready);

    springboot.ready5.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listready.append(node);
    });

    let listprogress = document.getElementById("progress5-list");
    
    let headerprogress = document.createElement("li");
    headerprogress.textContent = "progress";
    headerprogress.classList.add("listHeader");    
    listprogress.append(headerprogress);

    springboot.progress5.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listprogress.append(node);
    });

    let listreview = document.getElementById("review5-list");
    
    let headerreview = document.createElement("li");
    headerreview.textContent = "review";
    headerreview.classList.add("listHeader");    
    listreview.append(headerreview);

    springboot.review5.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listreview.append(node);
    });

    let listproduction = document.getElementById("production5-list");
    
    let headerproduction = document.createElement("li");
    headerproduction.textContent = "production";
    headerproduction.classList.add("listHeader");    
    listproduction.append(headerproduction);
    springboot.production5.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listproduction.append(node);
    });
    
    springboot.completed5.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        node.style.textDecoration = "line-through";
        listproduction.append(node);
    });
}

function setThymeleaf(thymeleaf) {
    let listready = document.getElementById("ready6-list");

    let headerready = document.createElement("li");
    headerready.textContent = "ready";
    headerready.classList.add("listHeader");    
    listready.append(headerready);

    thymeleaf.ready6.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listready.append(node);
    });

    let listprogress = document.getElementById("progress6-list");
    
    let headerprogress = document.createElement("li");
    headerprogress.textContent = "progress";
    headerprogress.classList.add("listHeader");    
    listprogress.append(headerprogress);

    thymeleaf.progress6.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listprogress.append(node);
    });

    let listreview = document.getElementById("review6-list");
    
    let headerreview = document.createElement("li");
    headerreview.textContent = "review";
    headerreview.classList.add("listHeader");    
    listreview.append(headerreview);

    thymeleaf.review6.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listreview.append(node);
    });

    let listproduction = document.getElementById("production6-list");
    
    let headerproduction = document.createElement("li");
    headerproduction.textContent = "production";
    headerproduction.classList.add("listHeader");    
    listproduction.append(headerproduction);
    thymeleaf.production6.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listproduction.append(node);
    });
    
    thymeleaf.completed6.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        node.style.textDecoration = "line-through";
        listproduction.append(node);
    });
}

function setPostgresql(postgresql) {
    let listready = document.getElementById("ready7-list");

    let headerready = document.createElement("li");
    headerready.textContent = "ready";
    headerready.classList.add("listHeader");    
    listready.append(headerready);

    postgresql.ready7.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listready.append(node);
    });

    let listprogress = document.getElementById("progress7-list");
    
    let headerprogress = document.createElement("li");
    headerprogress.textContent = "progress";
    headerprogress.classList.add("listHeader");    
    listprogress.append(headerprogress);

    postgresql.progress7.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listprogress.append(node);
    });

    let listreview = document.getElementById("review7-list");
    
    let headerreview = document.createElement("li");
    headerreview.textContent = "review";
    headerreview.classList.add("listHeader");    
    listreview.append(headerreview);

    postgresql.review7.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listreview.append(node);
    });

    let listproduction = document.getElementById("production7-list");
    
    let headerproduction = document.createElement("li");
    headerproduction.textContent = "production";
    headerproduction.classList.add("listHeader");    
    listproduction.append(headerproduction);
    postgresql.production7.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        listproduction.append(node);
    });
    
    postgresql.completed7.forEach(element => {
        let node = document.createElement("li");
        node.textContent = element;
        node.style.textDecoration = "line-through";
        listproduction.append(node);
    });
}

document.addEventListener("DOMContentLoaded", setJson);
