var words = ["pannekoek", "patat", "toetsenboord" , "school" , "corona"];
var randomWord = words[getRndInteger(0,words.length)];

var wordString = "";
var i;
for(i = 0; i < randomWord.length; i++){
    wordString += "_";
}
document.getElementById("GalgjeOutput").innerHTML = wordString;
document.getElementById("amountOfChars").innerHTML = randomWord.length;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

var tries = 0;
document.getElementById("Tries").innerHTML = tries;
function calcInput(){
    var input = document.getElementById("GalgjeInput").value;
    tries++;
    document.getElementById("Tries").innerHTML = tries;
    if(input){
        if(input == randomWord){
            document.getElementById("GalgjeOutput").innerHTML = input;
        }
        else if(randomWord.includes(input)){
            getPositionFromLetter(input).forEach(pos => 
                changeOutput(pos,input)
            );
        }
    }
}
document.getElementById("GalgjeButton").addEventListener("click", calcInput);

function getPositionFromLetter(letter){
    var pos = [];
    for(i = 0; i < randomWord.split("").length; i++){
        if(randomWord.charAt(i) == letter){
            pos.push(i);
        }
    }
    return pos;
}

function changeOutput(pos,letter){
    for(i = 0; i < wordString.split("").length; i++){
        if(i == pos){
            wordString = setCharAt(wordString,pos,letter);
            document.getElementById("GalgjeOutput").innerHTML = wordString;
        }
    }
}


function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}