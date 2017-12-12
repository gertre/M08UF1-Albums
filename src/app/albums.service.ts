import { Injectable } from '@angular/core';

@Injectable()

export class AlbumsService{

	albumStorage = [];
	constructor(){

		console.log("Constructor AlbumsService");
		this.albumStorage = JSON.parse(localStorage.getItem('albums'));
	}

	albums = [
	{
		id: 1,
		nom: "Discovery",
		grup: "Daft Punk",
		imatge: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Daft_Punk_-_Discovery.jpg/220px-Daft_Punk_-_Discovery.jpg",
		any: 2001,
		tipus: "electronica",
		comentaris: ""
	},
	{
		id: 2,
		nom: "Test1",
		grup: "test1",
		imatge: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/PM5544_with_non-PAL_signals.png/384px-PM5544_with_non-PAL_signals.png",
		any: 2017,
		tipus: "test1",
		comentaris: "test comentaris"

	},
	{
		id: 3,
		nom: "Test2",
		grup: "test2",
		imatge: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/PM5544_with_non-PAL_signals.png/384px-PM5544_with_non-PAL_signals.png",
		any: 2017,
		tipus: "test2",
		comentaris: "test comentaris"
	}
	];

	add({id: id, nom: nom, grup: grup, imatge: imatge, any: any, tipus: tipus, comentaris: comentaris}){
		this.albums.push({id: id, nom: nom, grup: grup, imatge: imatge, any: any, tipus: tipus, comentaris: comentaris});
		localStorage.setItem('albums', JSON.stringify(this.albums));
	} 
	getAlbums() {
		return this.albums;
	}

	deleteAlbum(album: any){
		let albums_tmp = this.albums.filter(item => item !==  album);
		this.albums = albums_tmp;

		console.log(this.albums);
	}

}