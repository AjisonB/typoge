inp.onkeyup = function(){
    inp.value = inp.value.toLowerCase().substr(0,15);
}
btn.onclick = function(){
    var keyboard = {"1":["2","q"],"2":["1","q","w","3"],"3":["2","w","e","4"],"4":["3","e","r","5"],"5":["4","r","t","6"],"6":["5","t","y","7"],"7":["6","y","u","8"],"8":["7","u","i","9"],"9":["8","i","o","0"],"0":["9","o","p","-"],"-":["0","p"],"q":["1","2","w","a"],"w":["q","a","s","e","3","2"],"e":["w","s","d","r","4","3"],"r":["e","d","f","t","5","4"],"t":["r","f","g","y","6","5"],"y":["t","g","h","u","7","6"],"u":["y","h","j","i","8","7"],"i":["u","j","k","o","9","8"],"o":["i","k","l","p","0","9"],"p":["o","l","-","0"],"a":["z","s","w","q"],"s":["a","z","x","d","e","w"],"d":["s","x","c","f","r","e"],"f":["d","c","v","g","t","r"],"g":["f","v","b","h","y","t"],"h":["g","b","n","j","u","y"],"j":["h","n","m","k","i","u"],"k":["j","m","l","o","i"],"l":["k","p","o"],"z":["x","s","a"],"x":["z","c","d","s"],"c":["x","v","f","d"],"v":["c","b","g","f"],"b":["v","n","h","g"],"n":["b","m","j","h"],"m":["n","k","j"]};
    out.innerHTML = '';
    var word = inp.value;
    String.prototype.replaceAt=function(index, char) {
        return this.substr(0, index) + char + this.substr(index+char.length);
    }
    var keyboard = {"1":["2","q"],"2":["1","q","w","3"],"3":["2","w","e","4"],"4":["3","e","r","5"],"5":["4","r","t","6"],"6":["5","t","y","7"],"7":["6","y","u","8"],"8":["7","u","i","9"],"9":["8","i","o","0"],"0":["9","o","p","-"],"-":["0","p"],"q":["1","2","w","a"],"w":["q","a","s","e","3","2"],"e":["w","s","d","r","4","3"],"r":["e","d","f","t","5","4"],"t":["r","f","g","y","6","5"],"y":["t","g","h","u","7","6"],"u":["y","h","j","i","8","7"],"i":["u","j","k","o","9","8"],"o":["i","k","l","p","0","9"],"p":["o","l","-","0"],"a":["z","s","w","q"],"s":["a","z","x","d","e","w"],"d":["s","x","c","f","r","e"],"f":["d","c","v","g","t","r"],"g":["f","v","b","h","y","t"],"h":["g","b","n","j","u","y"],"j":["h","n","m","k","i","u"],"k":["j","m","l","o","i"],"l":["k","p","o"],"z":["x","s","a"],"x":["z","c","d","s"],"c":["x","v","f","d"],"v":["c","b","g","f"],"b":["v","n","h","g"],"n":["b","m","j","h"],"m":["n","k","j"]};
    //generate Skip letter typo
    for(var i = 0; i < word.length; i++) {
            var tempWord = '';
            if(i === 0) {
                tempWord = word.substring(i + 1);
            }
            else if((i + 1) === length) {
                tempWord = word.substring(0, i);
            }
            else {
                tempWord = word.substring(0, i);
                tempWord += word.substring(i + 1);
            }
            out.innerHTML += tempWord+'<br>';

        }
    // double typo
    for(var i = 0; i < word.length; i++) {
            var tempWord = word.substring(0, (i + 1));
                tempWord += word[i];

            if(i !== (word.length - 1)) {
                tempWord += word.substring(i + 1);
            }
            out.innerHTML += tempWord+'<br>';
           
        }
    //Reverse letters
    for(var i = 0; i < word.length; i++) {
            if((i + 1) !== word.length) {
                var tempWord = word,
                    tempChar = tempWord[i];
                tempWord = tempWord.replaceAt(i, tempWord[i + 1]);
                tempWord = tempWord.replaceAt((i + 1), tempChar);
                out.innerHTML += tempWord+'<br>';
            }
    }
    //missed key typo generator
    for(var i = 0; i < word.length; i++ ) {
            if(keyboard[word[i]]) {
                var tempWord = word;
                keyboard[word[i]].forEach(function(character) {
                    out.innerHTML += tempWord.replaceAt(i, character).trim()+'<br>';
                   
                });
            }
        }
}