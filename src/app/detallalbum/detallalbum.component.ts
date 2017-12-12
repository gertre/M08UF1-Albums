import { Component, OnInit } from '@angular/core';
import { AlbumsService } from "../albums.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detallalbum',
  templateUrl: './detallalbum.component.html',
  styleUrls: ['./detallalbum.component.css'],
  providers: [AlbumsService]
})
export class DetallalbumComponent implements OnInit {
	id = 0;
	album = {};
 
	ngOnInit() {
  	
  }
  constructor(private router: Router, private detallAlbumsService : AlbumsService, private route : ActivatedRoute) { 
  	this.id=this.route.snapshot.params['id']
  	this.album = this.detallAlbumsService.getAlbums().find(o => o.id == this.id);
  }

    deleteAlbumDetall(){
     this.detallAlbumsService.deleteAlbum(this.album);
     
      this.router.navigate(['/llista']);

    }
 	
}
