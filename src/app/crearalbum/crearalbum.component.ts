import { Component, OnInit } from '@angular/core';
import { AlbumsService } from "../albums.service";

@Component({
  selector: 'app-crearalbum',
  templateUrl: './crearalbum.component.html',
  styleUrls: ['./crearalbum.component.css'],
  providers: [AlbumsService]
})
export class CrearalbumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
