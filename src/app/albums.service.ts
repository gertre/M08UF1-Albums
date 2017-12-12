import { Injectable } from '@angular/core';

@Injectable()

export class AlbumsService{

	constructor(){}

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
		nom: "Test",
		grup: "test",
		imatge: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/PM5544_with_non-PAL_signals.png/384px-PM5544_with_non-PAL_signals.png",
		any: 2017,
		tipus: "test",
		comentaris: "test comentaris"

	},
	{
		id: 3,
		nom: "Test",
		grup: "test",
		imatge: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/PM5544_with_non-PAL_signals.png/384px-PM5544_with_non-PAL_signals.png",
		any: 2017,
		tipus: "test",
		comentaris: "test comentaris"
	}
	];

	public getAlbums() {
		return this.albums;
	}

}