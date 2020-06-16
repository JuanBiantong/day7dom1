var oldText = document.getElementById('p1').innerHTML; 
console.log(oldText);
var change = oldText.replace('World', 'Juan Biantong');
    document.getElementById("p1").innerHTML = change;
    console.log(change);