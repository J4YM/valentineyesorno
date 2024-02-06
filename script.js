var nowords = ['Are you sure?',
'Pwede pa naman pag usapan to',
'Pretty Please',
'Di ako magnanakaw pramis',
'Libre pa kita',
'Edi wag, pero sige na pls',
'De, okay lang naman'
];

function nopress() {
  var rand = nowords[Math.floor(Math.random() * nowords.length)];
  var nobutton = document.getElementById("nobutton");
  
  document.getElementById("nobut").innerHTML = rand;

  var i = Math.floor(Math.random()*500)+1;
  var j = Math.floor(Math.random()*300)+1;
  
  nobutton.style.left = i+"px";
  nobutton.style.top = j+"px";
}