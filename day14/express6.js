var express = require('require');
var bodyParser = require('body-parser');

var multer = require('multer');
var upload = multer();
var app = express();
app.get('/', function(req, res){
	res.render('index');
	});
app.set('view engine', 'ejs');e
app.set('views', './views');
app.use(bodyParser.json());
app.use(upload.array());
app.use(express.static('public'));
app.post('/', function(req,res){
	console.log(req.body);
	res.send("recieved your request");
});
app.listen(5000);