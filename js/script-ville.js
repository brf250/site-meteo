var recup_ville=document.getElementsByClassName("ville_page");
fetch("https://prevision-meteo.ch/services/json/"+recup_ville[0].innerHTML)
    .then(response=>response.json())
    .then(affiche_jour=>{
        for (var i = 0; i <5 ; i++) {
            if (i===0) {
                var div_info=document.getElementsByClassName("info_jour1");
                var tab_info = [affiche_jour.fcst_day_0.day_long,
                    affiche_jour.current_condition.date,
                    affiche_jour.current_condition.condition,
                    affiche_jour.current_condition.icon_big,
                    affiche_jour.current_condition.tmp,
                    affiche_jour.fcst_day_0.tmin,
                    affiche_jour.fcst_day_0.tmax];
                for (var j = 0; j < tab_info.length; j++) {
                    div_info[j].innerHTML=tab_info[j];
                    if (j===3){
                        div_info[j].innerHTML= "<img alt='iconeNancy' src='"+tab_info[j]+"'>";
                    }
                    if (j===4){
                        div_info[j].innerHTML="Température : "+tab_info[j]+" °C"
                    }
                    if (j===5){
                        div_info[j].innerHTML="Temp min : "+tab_info[j]+" °C"
                    }
                    if (j===6){
                        div_info[j].innerHTML="Temp max : "+tab_info[j]+" °C"
                    }
                }
            }
            if (i===1){
                var div_jour=document.getElementsByClassName("info_jour2");
                var tab_jour = [affiche_jour.fcst_day_1.day_long,
                    affiche_jour.fcst_day_1.date,
                    affiche_jour.fcst_day_1.condition,
                    affiche_jour.fcst_day_1.icon_big,
                    affiche_jour.fcst_day_1.tmin,
                    affiche_jour.fcst_day_1.tmax];
                for (var k = 0; k < tab_jour.length; k++) {
                    div_jour[k].innerHTML=tab_jour[k];
                    if (k===3){
                        div_jour[k].innerHTML= "<img alt='iconeNancy' src='"+tab_jour[k]+"'>";
                    }
                    if (k===4){
                        div_jour[k].innerHTML="Temp min : "+tab_jour[k]+" °C"
                    }
                    if (k===5){
                        div_jour[k].innerHTML="Temp max : "+tab_jour[k]+" °C"
                    }
                }
            }
            if (i===2){
                var div_jour2=document.getElementsByClassName("info_jour3");
                var tab_jour2 = [affiche_jour.fcst_day_2.day_long,
                    affiche_jour.fcst_day_2.date,
                    affiche_jour.fcst_day_2.condition,
                    affiche_jour.fcst_day_2.icon_big,
                    affiche_jour.fcst_day_2.tmin,
                    affiche_jour.fcst_day_2.tmax];
                for (var l = 0; l < tab_jour2.length; l++) {
                    div_jour2[l].innerHTML=tab_jour2[l];
                    if (l===3){
                        div_jour2[l].innerHTML= "<img alt='iconeNancy' src='"+tab_jour2[l]+"'>";
                    }
                    if (l===4){
                        div_jour2[l].innerHTML="Temp min : "+tab_jour2[l]+" °C"
                    }
                    if (l===5){
                        div_jour2[l].innerHTML="Temp max : "+tab_jour2[l]+" °C"
                    }
                }
            }
            if (i===3){
                var div_jour3=document.getElementsByClassName("info_jour4");
                var tab_jour3 = [affiche_jour.fcst_day_3.day_long,
                    affiche_jour.fcst_day_3.date,
                    affiche_jour.fcst_day_3.condition,
                    affiche_jour.fcst_day_3.icon_big,
                    affiche_jour.fcst_day_3.tmin,
                    affiche_jour.fcst_day_3.tmax];
                for (var m = 0; m < tab_jour3.length; m++) {
                    div_jour3[m].innerHTML=tab_jour3[m];
                    if (m===3){
                        div_jour3[m].innerHTML= "<img alt='iconeNancy' src='"+tab_jour3[m]+"'>";
                    }
                    if (m===4){
                        div_jour3[m].innerHTML="Temp min : "+tab_jour3[m]+" °C"
                    }
                    if (m===5){
                        div_jour3[m].innerHTML="Temp max : "+tab_jour3[m]+" °C"
                    }
                }
            }
            if (i===4){
                var div_jour4=document.getElementsByClassName("info_jour5");
                var tab_jour4 = [affiche_jour.fcst_day_4.day_long,
                    affiche_jour.fcst_day_4.date,
                    affiche_jour.fcst_day_4.condition,
                    affiche_jour.fcst_day_4.icon_big,
                    affiche_jour.fcst_day_4.tmin,
                    affiche_jour.fcst_day_4.tmax];
                for (var n = 0; n < tab_jour4.length; n++) {
                    div_jour4[n].innerHTML=tab_jour4[n];
                    if (n===3){
                        div_jour4[n].innerHTML= "<img alt='iconeNancy' src='"+tab_jour4[n]+"'>";
                    }
                    if (n===4){
                        div_jour4[n].innerHTML="Temp min : "+tab_jour4[n]+" °C"
                    }
                    if (n===5){
                        div_jour4[n].innerHTML="Temp max : "+tab_jour4[n]+" °C"
                    }
                }
            }
        }
    });