"use strict"
var ville=['nancy','paris','strasbourg','metz','lyon','marseille'];
function mise_page(tab) {
    for (var i = 0; i < tab.length; i++) {
        fetch('https://prevision-meteo.ch/services/json/'+tab[i])
            .then(response => response.json())
            .then(meteoVille => {
                var tab_info = [meteoVille.city_info.name,
                    meteoVille.current_condition.date,
                    meteoVille.current_condition.condition,
                    meteoVille.current_condition.icon_big,
                    meteoVille.current_condition.tmp,
                    meteoVille.fcst_day_0.tmin,
                    meteoVille.fcst_day_0.tmax];
                var optville=document.getElementsByClassName("opt"+meteoVille.city_info.name);
                for (var j = 0; j < tab_info.length; j++) {
                    optville[j].innerHTML=tab_info[j];
                    if (j>0){
                        optville[j].style.display="none";
                    }
                    if (j===3) {
                        optville[j].innerHTML= "<img alt='iconeNancy' src='"+tab_info[j]+"'>";
                    }
                    if (j===4){
                        optville[j].innerHTML="Température : "+tab_info[j]+" °C"
                    }
                    if (j===5){
                        optville[j].innerHTML="Temp min : "+tab_info[j]+" °C"
                    }
                    if (j===6){
                        optville[j].innerHTML="Temp max : "+tab_info[j]+" °C"
                    }
                    optville[0].addEventListener("mouseover", function (){
                        for (var j = 1; j < tab_info.length; j++) {
                            optville[j].style.display = "flex";
                        }
                    });
                    optville[0].addEventListener("mouseout", function (){
                        for (var j = 1; j < tab_info.length; j++) {
                            optville[j].style.display = "none";
                        }
                    });
                }
            });
    }
}
mise_page(ville);


