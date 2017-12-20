import { Component, OnInit } from '@angular/core';
import { AlbumsService } from "../albums.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-crearalbum',
  templateUrl: './crearalbum.component.html',
  styleUrls: ['./crearalbum.component.css']
})




export class CrearalbumComponent implements OnInit {
// inicialitzem els altributs
  id=5;
  nom="";
  grup="";
  imatge="";
  any=0;
  tipus="";
  comentaris="";

	
  constructor(private router: Router, private crearalbumsService: AlbumsService) { }

  ngOnInit() {
  }
 // Creem la funció per retornar al menu principal
  goBack() {
  this.router.navigate(['/llista']);
  }
// Creem la funció per guardar l'album que creem
  guardarAlbum(){

  	this.crearalbumsService.add({id: this.id, nom: this.nom, grup: this.grup, imatge: this.imatge, any: this.any, tipus: this.tipus, comentaris: this.comentaris}); // 
  	this.goBack();

  }


}
