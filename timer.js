function clock()
{
    let time = new Date();

    let hour = time.getHours();
    if (hour < 10) hour = "0" + hour;
    let minut = time.getMinutes();
    if (minut < 10) minut = "0" + minut;
    let second = time.getSeconds();   
    if (second < 10) second = "0" + second; 

    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minut;
    document.getElementById("seconds").innerHTML = second;
    setTimeout("clock()", 1000);
}