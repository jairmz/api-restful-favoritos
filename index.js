'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3678;


/*mongoose.connect('mongodb://localhost:27017/cursofavoritos',(err,res) => {*/
/*mongoose.connect('mongodb://root:testmongo@ds131510.mlab.com:31510/apifavoritos',(err,res)*/
mongoose.connect('mongodb://root:testmongo@jair-test-shard-00-00-u9jao.mongodb.net:27017,jair-test-shard-00-01-u9jao.mongodb.net:27017,jair-test-shard-00-02-u9jao.mongodb.net:27017/test?ssl=true&replicaSet=jair-test-shard-0&authSource=admin',(err,res) => {
	if(err) {
		throw err;
	} else {

		console.log('Conexion a MongoDB correcta');		
		app.listen(port,function(){
			console.log(`API REST FAVORITOS funcionando den http://localhost:${port}`);
		});
	}
});