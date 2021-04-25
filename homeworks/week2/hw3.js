function reverse(str){  
  var box = ''
  var length =str.length    
  for(var i = length-1; i>=0; i--){
    box = box + str[i]
  }
  console.log(box)
}

reverse('hello');
