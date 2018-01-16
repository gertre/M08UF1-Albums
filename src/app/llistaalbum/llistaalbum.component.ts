import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-llistaalbum',
  templateUrl: './llistaalbum.component.html',
  styleUrls: ['./llistaalbum.component.css']
})
export class LlistaalbumComponent implements OnInit {

  albums = []; // creem un array on guardarem els albums
  constructor(private llistaAlbumsService: AlbumsService) {

  }

  ngOnInit() {
    this.albums = this.llistaAlbumsService.getAlbums(); // incialitzem l'array albums

  }
  ngAfterViewInit(){
<<<<<<< HEAD
  	this.albums = this.llistaAlbumsService.getAlbums();
    console.log(this.albums);
=======
  	this.albums = this.llistaAlbumsService.getAlbums(); 
>>>>>>> 8508cc7eb46d400d69e32e81affc0f358e66461d
  }

}
