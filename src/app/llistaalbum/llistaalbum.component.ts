import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-llistaalbum',
  templateUrl: './llistaalbum.component.html',
  styleUrls: ['./llistaalbum.component.css']
})
export class LlistaalbumComponent implements OnInit {

	// Aquest component mostra una llista dels albums que conté el
	// array del servei albumsService
  albums = [];
  constructor(private llistaAlbumsService: AlbumsService) {

  }

  // Actualitza cada cop que s'accedeix a la pagina o hi ha cambis.
  ngOnInit() {
    this.albums = this.llistaAlbumsService.getAlbums();

  }

  ngAfterViewInit(){
  	this.albums = this.llistaAlbumsService.getAlbums();
  }

}
