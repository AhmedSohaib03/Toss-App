// console.log(Math.random());

// console.log(Math.ceil(21.444));
// console.log(Math.round(21.5));


// console.log(Math.floor(21.77775));

// function kuch() {
//     console.log("hello")
// }

// kuch()

var output = document.getElementById("output")
var num;
var coin = document.getElementById("coin")
function headBtn() {
    num = Math.ceil(Math.random(num) * 2)
    output.innerHTML = num
    if (num === 1) {
        output.innerHTML = "You got Heads"
        coin.src = "https://miraameditz.github.io/Toss-App/Chaand.png";
    } else {
        output.innerHTML = "You got Tails"
        coin.src="https://miraameditz.github.io/Toss-App/paanch.png"

    }
}

function tailBtn() {
    num = Math.ceil(Math.random(num) * 2)
    output.innerHTML = num
    if (num === 2) {
        output.innerHTML = "You got Tails"
        coin.src="https://miraameditz.github.io/Toss-App/paanch.png"
    } else {
        output.innerHTML = "You got Heads"
        coin.src = "https://miraameditz.github.io/Toss-App/Chaand.png";
    }

    
}

// console.log(Math.ceil( Math.random() * 2));

// console.log(typeof(20));

// var obj = {
//     name: "Honey"
// }

// console.log(obj);
