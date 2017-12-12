import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-llistaalbum',
  templateUrl: './llistaalbum.component.html',
  styleUrls: ['./llistaalbum.component.css'],
  providers: [AlbumsService]
})
export class LlistaalbumComponent implements OnInit {

  albums = [];
  constructor(private llistaAlbumsService: AlbumsService) {
console.log("Constructor LlistaalbumComponent");

  }

  ngOnInit() {
    this.albums = this.llistaAlbumsService.getAlbums();

  }
  ngAfterViewInit(){
  	this.albums = this.llistaAlbumsService.getAlbums();
  	console.log("llistaafer");
  	console.log(this.albums);
  }

}
