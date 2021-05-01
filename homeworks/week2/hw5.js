function join(arr, concatStr){
  var ans = ''
  for(var i=0; i<arr.length; i++){
    if(i < arr.length-1){
      ans += arr[i]+concatStr
    }else{
      ans += arr[i]
    }
  }
  return ans
}

console.log(join(['a'], '!'));




function repeat(str, times){
  var str1 = ''
  for(var i=1; i<= times; i++){
    str1 += str
  }
  return str1
}


console.log(repeat('a', 5));
