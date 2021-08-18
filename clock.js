const hour = document.getElementById('hr');
const min = document.getElementById('mn');
const sec = document.getElementById('sc');

setInterval(()=>
{
    let date= new Date();
   let hr = date.getHours()*30;
   let mn = date.getMinutes()*6;
   let sc = date.getSeconds()*6;

    hour.style.transform = `rotateZ(${(hr) + (mn/12)}deg)`;
    min.style.transform = `rotateZ(${mn}deg)`;
    sec.style.transform = `rotateZ(${sc}deg)`;
})
