function encode(string1) {
  let novaString = '';
  for(let pos = 0; pos < string1.length; pos += 1){
    if(string1.charAt(pos) == 'a'){
      novaString += '1';
    }else if(string1.charAt(pos) == 'e'){
      novaString += '2';
    }else if(string1.charAt(pos) == 'i'){
      novaString += '3';
    }else if(string1.charAt(pos) == 'o'){
      novaString += '4';
    }else if(string1.charAt(pos) == 'u'){
      novaString += '5';
    }else{
      novaString += string1.charAt(pos);
    }
  }
  // console.log(novaString);
  return novaString
}


function decode(string2) {
  let novaString1 = '';
  for(let pos = 0; pos < string2.length; pos += 1){
    if(string2.charAt(pos) == '1'){
      novaString1 += 'a';
    }else if(string2.charAt(pos) == '2'){
      novaString1 += 'e';
    }else if(string2.charAt(pos) == '3'){
      novaString1 += 'i';
    }else if(string2.charAt(pos) == '4'){
      novaString1 += 'o';
    }else if(string2.charAt(pos) == '5'){
      novaString1 += 'u';
    }else{
      novaString1 += string2.charAt(pos);
    }
  }
  // console.log(novaString1);
  return novaString1
}

module.exports = {
  decode,
  encode,
};
