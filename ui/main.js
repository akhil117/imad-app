console.log('Loaded!');

var chan = document.getElementById('edit');
chan.innerHTML = "good morning";
var img = document.getElementById('boma');
img.onclick = function(){
    img.style.marginRight="100px" ;
};
var count=0;
function m()
{
      count = count + 1; 
      console.log(count);
    document.getElementById("counter").innerHTML = count;
    
}