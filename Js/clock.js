let name = prompt("Enter your name");
document.querySelector("#myName").innerHTML = name;
function showTime(){
    let time = new Date;
    let clock = document.querySelector("#myClock");
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let dayNum = time.getDay();
    let day = ["Gün","Pazartesi","Salı","Çarşamba","Perşempe","Cuma","Cumartesi","Pazar"]
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    clock.innerHTML = h +":"+ m +":"+ s+" "+day[dayNum];
    setTimeout(showTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


