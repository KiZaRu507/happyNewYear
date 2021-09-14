const daysc=document.getElementById('days');
const hoursc = document.getElementById('hours');
const minutesc= document.getElementById('minutes');
const secondsc= document.getElementById('seconds');
const date='1 jan 2022';
function countdown(){
    const newYear=new Date(date);
    const current=new Date();
    const seconds=(newYear-current)/1000;
    const days=Math.floor(seconds/(3600*24));
    const hours=Math.floor((seconds/3600)%24);
    const minutes=Math.floor((seconds/60)%60);
    const secondsac=Math.floor(seconds%60);
    daysc.innerHTML=days;
    hoursc.innerHTML=hours;
    minutesc.innerHTML=minutes;
    secondsc.innerHTML=secondsac;
    
}
countdown();
setInterval(countdown,1000);
