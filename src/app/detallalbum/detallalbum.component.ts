import { Component, OnInit } from '@angular/core';
import { AlbumsService } from "../albums.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detallalbum',
  templateUrl: './detallalbum.component.html',
  styleUrls: ['./detallalbum.component.css']
})
export class DetallalbumComponent implements OnInit {
  // El component permet veure en detall les dades del album concret i esborrarlo
	id = 0;
	album = {};
 
	ngOnInit() {
  	
  }
  // En el constructor declarem un router i també el necessari per a 
  // obtenir una dada del enllaç que porta a el detall.
  constructor(private router: Router, private detallAlbumsService : AlbumsService, private route : ActivatedRoute) { 
  	this.id=this.route.snapshot.params['id']
  	this.album = this.detallAlbumsService.getAlbums().find(o => o.id == this.id);
  }

  // Permet borrar el album i retorna inmediatament a la llista
    deleteAlbumDetall(){
     this.detallAlbumsService.deleteAlbum(this.album);
     
      this.router.navigate(['/llista']);

    }
 	
}
