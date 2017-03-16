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

	Favorito.findById(favoritoId, function(err,favorito){
		if (err) {
			res.status(500).send({message: `Error al devolver el marcadore`});
		}
		if (!favorito) {
			res.status(404).send({message: `No hay marcadores`});	
		}
		res.status(200).send({favorito});
	});
}

function getFavoritos(req,res){
	Favorito.find({}).sort('-title').exec((err,favoritos) => {
		if (err) {
			res.status(500).send({message: `Error al devolver los marcadores`});
		}
		if (!favoritos) {
			res.status(404).send({message: `No hay marcadores`});	
		}
		res.status(200).send({favoritos});
	});
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
	var favoritoId = req.params.id;
	var update = req.body;

	Favorito.findByIdAndUpdate(favoritoId, update, (err,favoritoUpdated) => {
		if(err) {
			res.status(500).send({message: `Error al actualizar el marcador`});
		}
		res.status(200).send({favorito: favoritoUpdated});
	});
}

function deleteFavorito(req,res){
	var favoritoId = req.params.id;

	Favorito.findById(favoritoId, function(err,favorito){
		if (err) {
			res.status(500).send({message: `Error al devolver el marcador`});
		}
		if (!favorito) {
			res.status(404).send({message: `No hay marcadore`});	
		}
		else {
			favorito.remove(err => {
				if(err) {
					res.status(500).send({message: "Marcador no eliminado: error mongo"});
				}else{
					res.status(200).send({message: "El marcador se ha eliminado"});
				}
			});
		}
	});
}

module.exports = {
	prueba,
	getFavorito,
	getFavoritos,
	saveFavorito,
	getFavoritos, 
	updateFavorito,
	deleteFavorito
}