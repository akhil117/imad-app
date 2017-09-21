var button = document.getElementById('counter');


var request = new XMLHttpRequest();

request.onreadystatechange = function()
{
    if(request.readychange==XMLHttpRequest.Done)
    {
        if(request.status==200)
        {
            var counter = request.responseText;
             document.getElementById("count").innerHTML = counter.toString();
        }
    }
};

     request.open('GET','http://akhilbatchu123.imad.hasura-app.io/counter',true);
request.send();