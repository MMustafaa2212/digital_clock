function updatetime(){
    var datetime = new Date()
    var hours = datetime.getHours()
    var minutes = datetime.getMinutes ()
    var seconds = datetime.getSeconds ()
    var Am_or_Pm = document.getElementById("Am-or-Pm")
    if(hours >= 12) {
        Am_or_Pm.innerHTML = "Pm";
    } else{Am_or_Pm.innerHTML = "Am";
    }
    if(hours > 13){
        hours = hours -12
    }
    if(hours > 14){
        hours = hours -11
    }
    if(hours > 15){
        hours = hours -10
    }
    if(hours > 16){
        hours = hours -9
    }
    if(hours > 17){
        hours = hours -8
    }
    if(hours > 18){
        hours = hours -7
    }
    if(hours > 19){
        hours = hours -6
    }
    if(hours > 20){
        hours = hours -5
    }
    if(hours > 21){
        hours = hours -4
    }
    if(hours > 22){
        hours = hours -3
    }
    if(hours > 23){
        hours = hours -2
    }
    if(hours > 24){
        hours = hours -1
    }
    
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
        
}

setInterval(updatetime, 1000);