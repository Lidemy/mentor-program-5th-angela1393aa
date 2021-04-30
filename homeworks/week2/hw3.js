function reverse(str){  
  var str1 = ''
  var length =str.length    
  for(var i = length-1; i>=0; i--){
    str1 = str1 + str[i]
  }
  console.log(str1)
}

reverse('hello');
