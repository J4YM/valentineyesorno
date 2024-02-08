var nowords = [
  'Are you sure?',
  'Pwede pa naman pag usapan to',
  'Pretty Please',
  'Di ako magnanakaw pramis',
  'Libre pa kita',
  'Edi wag, pero sige na pls',
  'De, okay lang naman',
  'What if pumayag ka na?',
  'Ahh okay, sino ba naman ako',
  'Gwenchana, Tengnengneng',
  'Osige, wag na okay lang naman',
  'Di talaga matatapos to',
  'Wag mo intayin akoy naiinis'
];

function nopress() {
  var rand = nowords[Math.floor(Math.random() * nowords.length)];
  var nobutton = document.getElementById("nobutton");
  
  document.getElementById("nobut").innerHTML = rand;

  var x = window.innerWidth*0.5;
  var y = window.innerHeight*0.5
  
  var i = Math.floor(Math.random()*x);
  var j = Math.floor(Math.random()*y);
  
  nobutton.style.left = i+"px";
  nobutton.style.top = j+"px";
}