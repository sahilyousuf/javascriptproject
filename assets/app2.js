var sump=function(){
  
  var number = prompt("How many pairs do you want to sum up?")
  var num = Number(number);
  var arr = new Array(num);
  
  for (var i=0; i<num; i++){
    var counter = 1;
    counter = counter + i;
    var a=prompt("First number of pair N°" + counter);
    var b=prompt("Second number of pair N°" + counter);
    var aa = Number(a);
    var bb = Number(b);
    var c = aa+bb;
    arr[i]=c;
    alert("Sum N°" +counter +" is " +arr[i]);
  };
  alert("All sums are: " +arr);
  
};