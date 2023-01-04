var titre1 = document.getElementsByClassName('title');
console.log("Premier H1 -> Contenu : ", titre1[0].textContent);



console.log("-------Récupérer le HTML du premier <li> (3 méthodes)------------");



var firstLi = document.querySelectorAll('li');
console.log("first LI:", firstLi[0].innerHTML);

var firstLi2 = document.querySelector('li');
console.log("first LI2:", firstLi2.innerHTML);

var firstLI3 = document.querySelectorAll('ul');
console.log("first LI3", firstLI3[0].firstElementChild.innerHTML);



console.log("-------Récupérer le HTML du dernier <li> ------------");



var lastLI = document.querySelectorAll('ul');
console.log("last LI:", lastLI[0].lastElementChild.innerHTML);



console.log("-------Récupérer le HTML du troisième <li> ------------");
console.log("Nbre total de LI 4");


var li3 = document.getElementsByTagName('li');
console.log("Troisième LI:", li3[2].innerHTML);





console.log("-------Récupérer le HTML du parent de <ul> ------------");




var ulParent = document.getElementsByTagName('ul');
console.log("HTML du parent de <ul>:", ulParent[0].parentNode.innerHTML);




console.log("-------Récupérer le HTML du parent du quatrième <li> ------------");
console.log("Nbre total de LI 4");



var liParent = document.getElementsByTagName('li');
console.log("Troisième LI:", liParent[3].innerHTML);
console.log("HTML du quatrième <li>:", liParent[3].parentNode.innerHTML);


var liste = document.getElementsByTagName('ul');

liste[0].addEventListener ('mouseover', color);

function color () {
    liste[0].style.color = 'red';
}

liste[0].addEventListener ('mouseout', colorout);

function colorout () {
    liste[0].style.color = 'black';
}