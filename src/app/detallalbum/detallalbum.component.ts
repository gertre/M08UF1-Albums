import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detallalbum',
  templateUrl: './detallalbum.component.html',
  styleUrls: ['./detallalbum.component.css']
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

    // creem la funcio que utilitzarem per eliminar albums 

    deleteAlbumDetall(){
     this.detallAlbumsService.deleteAlbum(this.album); // eliminem l'album
     
      this.router.navigate(['/llista']); // tornem a la pagina principal

    }
 	
}
