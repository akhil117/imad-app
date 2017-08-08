var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));





var Content = {
    title:'B.Sai Akhil Articile',
    heading:'Article name',
    date:'Aug 4,2016',
    content:` <p>
                Hi my name is akhil iam from amrita...................................
            </p>
            <p>
                Hi like new things to learn and this my passion too so that is work hard dont try to skip when u meet failures. These are the steps to be success. These will lead to achieve any thing in u r life
            </p>
            <p>
                Simply lets end this session thanks every body
                good day bye bye bye bye :} *****/////
            </p>`
    
};
function createtemplate(data){
    var date =data.date;
    var heading = data.heading;
    var title = data.title;
    var content = data.content;

var htmltemplate=`
      <html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    <body>
        <div>
        <a href="/">home</a>
        </div>
        <hr/>
        <h3>${heading}</h3>
        <div> This is akhil articile</div>
        <div>${date}</div>
        <div class = "Container">
        <div>${content}</div>
        </div>
    </body>
</html>


`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/name', function (req, res) {
  res.send(createtemplate(Content));
});


app.get('/article-2',function(req,res){
    res.send('this is article 2 ');
    
});
app.get('/article-3',function(req,res){
    res.send('this is article 3 ');
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function(req, res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
