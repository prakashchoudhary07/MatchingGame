const cardsArray = ['X', 'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd'];

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

shuffle(cardsArray);
console.log(cardsArray);

var h1 = document.createElement("h1");
var node = document.createTextNode("Matching Game");
h1.setAttribute("id", "h1");
h1.style.fontSize = "3rem";
h1.style.color = "maroon";
h1.appendChild(node);


var p = document.createElement("p");
var node = document.createTextNode("MOVES: ");
p.setAttribute("id", "info");
p.appendChild(node);
p.style.fontSize = "2rem";

var span = document.createElement("span");
var node = document.createTextNode("0");
span.setAttribute("id", "score");
span.appendChild(node);


var element = document.getElementById("heading");
element.appendChild(h1);
element.appendChild(p);
var element = document.getElementById("info");
element.appendChild(span);



cardsArray.forEach(card => {
    var div = document.createElement("div");
    var node = document.createTextNode("");
    div.appendChild(node);
    div.setAttribute("class", "cards");
    div.setAttribute("id", "card" + card);
    div.setAttribute("data-name", card);


    var span1 = document.createElement("span");
    var node = document.createTextNode("" + card.toUpperCase());
    span1.setAttribute("class", "front");
    span1.appendChild(node);


    var span2 = document.createElement("span");
    var node = document.createTextNode("0");
    span2.setAttribute("class", "back");
    span2.appendChild(node);

    var element = document.getElementById("memoryGame");
    element.appendChild(div);
    var element = document.getElementById("card" + card);
    element.appendChild(span1);
    var element = document.getElementById("card" + card);
    element.appendChild(span2);
});



var button = document.createElement("button");
var node = document.createTextNode("Restart Game");
button.setAttribute("onClick", "window.location.href=window.location.href");
button.setAttribute("class", "restart");
button.appendChild(node);

var element = document.getElementById("heading");
element.appendChild(button);



// <div class="cards" data-name="A">
// <span class="front">A</span>
// <span class="back">0</span>
// </div>Z





// var tree = document.createDocumentFragment();

// var div = document.createElement("div");
// div.setAttribute("class", "score");
// var p = document.createElement("p");
// p.appendChild(document.createTextNode("Moves"));
// var span = document.createElement("span");
// span.setAttribute("id", "score");


// tree.appendChild(p);
// tree.appendChild(span);
// document.getElementById("heading").appendChild(tree);