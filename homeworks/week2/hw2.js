function capitalize(str){
  var str1 = str[0].toUpperCase()
  for(var i=1; i<str.length; i++){
    str1 +=str[i]
  }
  return str1
}


console.log(capitalize(',hello'))