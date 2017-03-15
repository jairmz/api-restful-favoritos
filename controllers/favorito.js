'use strict'

var Favorito = require('../models/favorito');

function prueba(req,res) {
	if(req.params.nombre){
		var nombre = req.params.nombre;
	} else {
		var nombre = "No Name";
	}

	
	res.status(200).send({
		data: [2,3,4],
		message:"Hola Mundo Con NODEjs " + nombre});
}

function getFavorito(req,res){
	var favoritoId = req.params.id;

	res.status(200).send({data: favoritoId });
}

function getFavoritos(req,res){

}

function saveFavorito(req,res){
	var favorito = new Favorito();
	var params = req.body;

	favorito.title = params.title;
	favorito.description = params.description;
	favorito.url = params.url;

	favorito.save((err, favoritoStored) => {
		if(err) {
			res.status(500).send({message: `Error al guardar el marcador`});
		}
		res.status(200).send({favorito: favoritoStored});
	});
}

function updateFavorito(req,res){
	var params = req.body;

	res.status(200).send({favorito: params});
}

function deleteFavorito(req,res){
	var favoritoId = req.params.id;

	res.status(200).send({favorito: favoritoId});
}

module.exports = {
	prueba,
	getFavorito,
	saveFavorito,
	getFavoritos, 
	updateFavorito,
	deleteFavorito
}