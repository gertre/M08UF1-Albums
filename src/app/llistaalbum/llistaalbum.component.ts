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
  	this.albums = this.llistaAlbumsService.getAlbums();
  }

  ngOnInit() {
  }

}
