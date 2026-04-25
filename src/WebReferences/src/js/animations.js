var navtoggle = document.getElementsByClassName("icon-rightChevron")[0];
var navtogglebool = true;
var navlegends = document.getElementsByClassName("navtexts");
navtoggle.addEventListener('click', displayLegend);

function displayLegend(){
    if(navtogglebool){
    navtoggle.style.transform= "rotate(90deg)";
        Array.from(navlegends).forEach(element => {
            element.style.display = "flex";
        });
    }
    if(!navtogglebool){
    navtoggle.style.transform= "rotate(180deg)";
        Array.from(navlegends).forEach(element => {
            element.style.display = "none";
        });
    }
    navtogglebool = !navtogglebool;
}