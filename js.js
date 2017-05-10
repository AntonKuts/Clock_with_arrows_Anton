
var t=setInterval (fTime, 1000)
var s=0;
var m=0;
var sa=0;
var ma=0;
function fTime () {
  s=s+1;
if (s==60) {
  m=m+1;
  s=0;
}

if (m==60) {
  m=0;
}
sa = s*6;
ma = m*6;

document.getElementById('sec').style.transform = "rotate("+sa+'deg)';
document.getElementById('min').style.transform = "rotate("+ma+'deg)';
}
