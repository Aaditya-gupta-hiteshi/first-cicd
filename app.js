var express = require('express');
// var sqladmin = require('node-mysql-admin');
// var mysql = require('mysql');
// var formidable = require('formidable');
// var formfile = require('express-fileupload');
// // var nodemailer = require('nodemailer');
// var session = require('express-session');
// var conn = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "",
// 	port:"3307"
// });
// conn.connect(function(err){
// 	if(err) throw err;
// 	console.log("connection estabilished");
// });

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'aadityame46@gmail.com',
//     pass: '5232585658'
//   }
// });

var app = express();
// app.use(sqladmin(app));
app.use(express.static('public'));
// app.use(session({secret: 'sh its a secret'}));
// app.use(formfile({
//   limits: { fileSize: 50 * 1024 * 1024 },
//   useTempFiles : true,
// 	tempFileDir : '/tmp/'
// }));

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

app.get('/', function(req, res){
	res.write('hello world');
	// if(req.session.page_views){
	// 	req.session.page_views++;
	// 	res.write('your view count = '+req.session.page_views);
	// }else{
	// 	req.session.page_views = 1;
	// 	res.write('your view count = '+req.session.page_views);
	// }
	// res.write(JSON.stringify(req.session));
	res.end();
});
// app.get('/index', function(req,res){
// 	// var form = new formidable.IncomingForm();
// 	// form.parse(req, function(err, fields, files){
// 	// 	res.write(JSON.stringify(fields) + req.query.title);
// 	// 	res.end();
// 	// 	// res.render('index.html', {data:fields});
// 	// });
// 	res.render('index.html', {data:req.query});
// });
// app.get('/signup', function(req,res){
// 	res.render('signup.html');
// });
// app.post('/signup', function(req, res){
// 	console.log(req.files);
// 	res.send(JSON.stringify(req.body));
// 	// var form = new formidable.IncomingForm();
// 	// form.parse(function(err, fields, files){
// 	// 	// conn.query("INSERT INTO users (name, email, password) VALUES ('"+fields.+"')");
// 	// });
// })
// // app.get('/sendmail', function(req, res){
// // 	var mailOptions = {
// // 	  from: 'youremail@tester.com',
// // 	  to: 'aadityame46@gmail.com',
// // 	  subject: 'Sending Email using Node.js',
// // 	  text: 'That was easy!'
// // 	};
// // 	transporter.sendMail(mailOptions, function(err, info){
// // 		if(err) throw err;
// // 		res.send('mail sent '+info.response);
// // 	});
// // });
// app.get('/:id([0-9]{3})', function(req, res){
// 	res.write('first'+req.params.id);
// 	res.end();
// });
// app.get('/:id([0-9]{5})', function(req, res){
// 	res.write('second'+req.params.id);
// 	res.end();
// });
app.listen(5000);