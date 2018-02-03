//
// this is just a stub for a function you need to implement
//
function getStats(txt) {

    var nChars1 = nChars(txt);
    var nWords1 = nWords(txt);
    var nLines1 = nLines(txt);
    var nNonEmptyLines1 = nNonEmptyLines(txt);
    var averageWordLength1 = averageWordLength(txt);
    var maxLineLength1 = maxLineLength(txt);
    var palindromes1 = palindromes(txt);
    var longestWords1 = longestWords(txt);
    var mostFrequentWords1 = mostFrequentWords(txt);

    return {
        nChars: nChars1,
        nWords: nWords1,
        nLines: nLines1,
        nNonEmptyLines: nNonEmptyLines1,
        averageWordLength: averageWordLength1,
        maxLineLength: maxLineLength1,
        palindromes: palindromes1,
        longestWords: longestWords1,
        mostFrequentWords: mostFrequentWords1
    };
}



function nChars(argument) {
    var text =0;
    for (var i = 0; i < argument.length; i++) {
        text = text + 1;
    }
    return text;
}


function nWords(argument) {
    var count = 0;
    var text = argument.split(" ");
     for (var i = 0; i < text.length; i++) {
        count +=1;
  }
return count;
}

function nLines(argument) {
  
   var splitted = argument.split('\n');
   // console.log(splitted)
     var text = splitted.length;
    return text;
}


function nNonEmptyLines(argument) {
 
let m;
var text = 0;
var myRe = /\S+\n+/gm;
while (m = myRe.exec(argument)){
 m.forEach((match, groupIndex) => {
        // console.log(`Found match, group ${groupIndex}: ${match}`);
        text +=1;
    });
}
    return text ;
}

function averageWordLength(argument) {

    // var words = argument.split(" ");
    var words = argument.split("\n");
    var array = [];

 for (var i = 0; i < words.length; i++) {

       words[i] = words[i].split(" ");
  }

  words = flatten(words);



    var count = words.length;
    var dict = {};
    var count2 = 0;

    for (var i = 0; i < words.length; i++) {
    

        words[i] = words[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  }

  for (var i = 0; i < words.length; i++) {
        if (words[i] === ""){
            words.splice(i,1);
        }
    }

    for (var i = 0; i < words.length; i++) {

        count2 += nChars(words[i]);
  }

  console.log(words);

  var result = count2 / words.length;
  
  
   
    return result;


}


function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

function maxLineLength(argument) {

  //   var max = 0
  //   for (var i = 0; i < words.length; i++) {
  //       count2 += nChars(words[i]);
  // }
    return 2;
}


function palindromes(argument) {
  
   cleanWord(argument);
    return [
        "12321",
        "kayak",
        "mom"
    ];
}

function longestWords(argument) {
  

    return  [
        "xxxxxxxxx",
        "123444444"
    ];
}


function mostFrequentWords(argument) {
  

    return [
        "hello(7)",
        "world(1)"
    ];
}

function clean(argument,flag){

    // if flag is == to 1
    // clean by words
    // if flag is == to 2
    // clean by newLine
    // if flag is 

}

    

  function cleanWord(argument){

    var words = argument.split("\n");
    var newArray = [];

      for (var i = 0; i < words.length; i++) {
        var test = words[i].split(" ");
  }

  console.log(newArray)


  }




