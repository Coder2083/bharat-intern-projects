var op;

function step1() {
    op = true;
}
function step2() {
    op = false;
}

function convertTemp(num) {
    x = parseFloat(num);
    console.log(op);
    if (op == true) {
        document.getElementById('disTemp').innerHTML = ((x*1.8)+32);
        let temp = ((x*1.8)+32);
        if (temp > 113) {
            document.body.style.background = "url('https://wallpaperaccess.com/full/2629319.png') center bottom";
            document.body.style.backgroundSize = "cover";
            document.getElementById("contemp").style.backgroundColor = "#605893"; 
        }
        else if (temp <= 113 && temp > 41) {
            document.body.style.background = "url('https://wallpaperaccess.com/full/1216331.jpg')";
            document.body.style.backgroundSize = "cover";
            document.getElementById("contemp").style.backgroundColor = "#71B187";            
        }
        else if (temp <= 41) {
            document.body.style.background = "url('https://wallpapercave.com/wp/wp7238822.jpg')";
            document.body.style.backgroundSize = "cover";
            document.getElementById("contemp").style.backgroundColor = "#6DACE3"; 
        }
    }
    if (op == false) {
        document.getElementById('disTemp').innerHTML = (((x-32)*5)/9);
        let temp = (((x-32)*5)/9);
        if (temp > 45) {
            document.body.style.background = "url('https://wallpaperaccess.com/full/2629319.png') center bottom";
            document.body.style.backgroundSize = "cover";
            document.getElementById("contemp").style.backgroundColor = "#605893"; 
        }
        else if (temp <= 45 && temp >= 5) {
            document.body.style.background = "url('https://wallpaperaccess.com/full/1216331.jpg')";
            document.body.style.backgroundSize = "cover";
            document.getElementById("contemp").style.backgroundColor = "#71B187";            
        }
        else if (temp <= 4) {
            document.body.style.background = "url('https://wallpapercave.com/wp/wp7238822.jpg')";
            document.body.style.backgroundSize = "cover";
            document.getElementById("contemp").style.backgroundColor = "#6DACE3"; 
        }
    }
}
