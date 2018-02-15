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
  let text = 0;
  for (let i = 0; i < argument.length; i++) {
    text = text + 1;
  }
  return text;
}


function nWords(argument) {

  let count = 0;
  let text = argument.trim().split(/[+/\u0020/\t.,\/#!$%\^&\*;:{}=\-_`~()\"/\r\n?']+/);

  for (let i = 0; i < text.length; i++) {
    count += 1;
  }
  return count;
}

function nLines(argument) {

  let splitted = argument.split('\n');

  let text = splitted.length;
  return text;
}


function nNonEmptyLines(argument) {

  
  let count = 0;

   let splitted = argument.split(/[\n\r\n\r\t]+/);
  
  let text = splitted.length;
  for( let item of splitted){
    
    if (item.trim() !== "" ){
      count += 1;
      console.log(item);
    }
  }
  return count;
}

function averageWordLength(argument) {


    let words = argument.trim().replace().split(/[+/\u0020/\t.,\/#!$%\^&\*;:{}=\-_`~()\"/\r\n?'\\]+/);

  let count = words.length;
  let count2 = 0;
  let flag = false;


  for (let i = 0; i < count; i++) {

    if(words[i] !== ""){

     count2 += words[i].length;
   }
   else {
    flag = true;
   
   }

  }

  if (flag) {
    count -= 1;
  }
  let result = (count2) / count;

  return result;


}




function maxLineLength(argument) {
  let words = argument.split("\n");
  let max = 0;
  let count2 = 0;
  // console.log(words);

  for (let i = 0; i < words.length; i++) {
    count2 += nChars(words[i]);
    // console.log(count2 + "line " +(i+1));
    if (count2 > max) {
      // console.log(max);
      max = count2;

    }
    count2 = 0;
  }
  return max;
}


function palindromes(argument) {
  let words = cleanAndSeperate2(argument.trim());
  let pallindromesResult = [];

  for (let i = 0; i < words.length; i++) {

    if (words[i].length > 1) {

      let pal = checkPalWord(words[i].toLowerCase());

      if (pal !== false) {

        pallindromesResult.push(pal);
      }
    }
  }


  return pallindromesResult;
}

function longestWords(argument) {

  let words = cleanAndSeperate2(argument.trim().toLowerCase());

  let largestWordLength = 0;
  


    words.sort(function(a, b) {
  return a.length - b.length || b.localeCompare(a);
});

  words = words.filter(function(word, index, self) {
    return self.indexOf(word) == index;
})
  return words.splice(-10,words.length).reverse();
}


function mostFrequentWords(argument) {

  let words = cleanAndSeperate(argument.trim());
  // console.log(words);
  let largestWordLength = 0;
  let largestWord = {};
  let currentWord = ""
  // \r\n|\n|\r
  for (let i = 0; i < words.length; i++) {
    currentWord = words[i].toLowerCase().replace(/[/\u0020.,\/#!$%\^&\*;:{}=\-_`~()\"?\r\t]/g, "");

    if (currentWord in largestWord) {

      largestWord[currentWord] = largestWord[currentWord] + 1;
      // console.log();
    } else {
      if (currentWord.localeCompare("") !== 0 || currentWord.localeCompare(" ") !== 0) {

        // console.log(currentWord);

        largestWord[currentWord] = 1;
      }
    }

  }


  var sortable = [];
  for (var wod in largestWord) {
    sortable.push([wod, largestWord[wod]]);
  }

  sortable.sort(function(a, b) {
  return a[1] - b[1] || b[0].localeCompare(a[0])
});
   let z= sortable.map(function(a) {
    let re = a[0] + "(" + a[1] + ")";
    return re;
 
  });
  return z.splice(-10,z.length).reverse();
}



function cleanGrammer(argument) {

  let temp1 = Object.assign([], argument);
  let temp2 = [];
  for (var i = 0; i < temp1.length; i++) {

    let qw = temp1[i].replace(/[/\u0020/\t.,\/#!$%\^&\*;:{}=\-_`~()\"]/g, "");
    if (qw === "") {


    } else {
      temp2.push(qw);
    }

  }


  return temp2;
}

function evenOrOdd(argument) {

  if (argument.length % 2 === 0) {

    return (true);
  } else {
    return (false);
  }
}


function checkPalWord(argument) {

  if (evenOrOdd(argument)) {
    let pointer1 = (argument.length / 2) - 1;
    let pointer2 = (argument.length / 2);
    return lookForPal(pointer1, pointer2, argument);
  } else {
    let pointer1 = Math.floor((argument.length / 2)) - 1;
    let pointer2 = Math.floor((argument.length / 2)) + 1;
    return lookForPal(pointer1, pointer2, argument);


  }


}


function lookForPal(pointer1, pointer2, word) {

  for (var j = pointer2; j < word.length; j++) {
    if (word[pointer1].localeCompare(word[j]) !== 0) {
      return false;
    }

    pointer1--;

  }
  return word;

}

function cleanAndSeperate(argument) {
  let temp1 = new String(argument);
  let test32 = temp1.match(/\S+/g);
  test32 = cleanGrammer(test32);
  return test32;
}


function cleanAndSeperate2(argument) {
  let temp1 = new String(argument);
  let words = argument.split(/[?\t.,\/#!$%\^&\*;:{}=\-_`'~()/\n\u0020+\+]/);

  test32 = cleanGrammer(words);
  return test32;
}

function removeWhiteSpace(test) {

  let obd = []
  for (item in test) {
    if (item !== "") {
      obd.push(item);
    }
  }

  return obd;
}



//https://stackoverflow.com/questions/38089208/how-to-flatten-a-clamped-array
function flatten(arr) {
  return arr.reduce(function(flat, toFlatten) {
    // console.log(flat);
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}