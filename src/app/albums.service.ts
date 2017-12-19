import { Injectable } from '@angular/core';

@Injectable()

export class AlbumsService{

	albumStorage = [];

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
		nom: "Random Access Memories",
		grup: "Daft Punk",
		imatge: "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg",
		any: 2013,
		tipus: "electronica",
		comentaris: "get lucky"

	},
	{
		id: 3,
		nom: "Hybrid theory",
		grup: "Linkin Park",
		imatge: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/PM5544_with_non-PAL_signals.png/384px-PM5544_with_non-PAL_signals.png",
		any: 2000,
		tipus: "rock",
		comentaris: "test comentaris"
	},
	{
		id: 4,
		nom: "Test",
		grup: "Test",
		imatge: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Daft_Punk_-_Discovery.jpg/220px-Daft_Punk_-_Discovery.jpg",
		any: 2001,
		tipus: "disco",
		comentaris: "test"
	}
	];

	constructor(){

		this.albumStorage = JSON.parse(localStorage.getItem('albums'));
	}


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
	}

}