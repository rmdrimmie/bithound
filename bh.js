fs = require('fs');



var countLetters = function( letters, current, index, array ) {
  var letterIndex = current.charCodeAt(0);


  // less than "a" is garbage (carriage return, space, etc)
  if( letterIndex >= 97 ) {
    // test for accented/unicode characters
    
    if( letterIndex > 122 ) {
      // adjust accented character to base letter
     
    } 
        
    if( isNaN( letters[letterIndex] ) ) {
       letters[letterIndex] = 1;
    } else {
       letters[letterIndex]++;
    }
  }
  
  return letters;
}

fs.readFile( 'breeds.txt', { encoding:'utf8' }, function( err, data ) {
  if( err !== null ) {
    console.log( err );
  } else {
    letters = data.toLocaleLowerCase().split( '' ).reduce( countLetters, [] ); 
    //console.log( letters );
  }
  
  
});