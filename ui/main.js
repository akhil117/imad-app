var button = document.getElementById('counter');

button.onclick = function()
{
var request = new XMLHttpRequest();

request.onreadystatechange = function()
{
    if(request.readystate===XMLHttpRequest.Done)
    {
        if(request.status==200)
        {
            var counter = request.responseText;
             document.getElementById("count").innerHTML = counter.toString();
        }
    }
};
request.open('GET','http://akhilbatchu123.imad.hasura-app.io/counter',true);
request.send(null);
};



var a = document.getElementById('name').innerHTML;
var submit = document.getElementById('SubmitBox');
submit.onclick = function()
{
var names = ['name1','name2','name3'];
var list = "";
for(var i=0 ; i<names.length;i++)
{
    list +=  "<li>"+names[i]+"</li>"; 
}
document.getElementById('list').innerHTML = list;
};