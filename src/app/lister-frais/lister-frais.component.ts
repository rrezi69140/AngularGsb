import { Component } from '@angular/core';
import {GsbFraisService} from "../Models/GsbFraisService";
import{CommonModule} from "@angular/common";

class BlogModule {}
@Component({
  selector: 'app-lister-frais',
  standalone: true,
  imports: [],
  templateUrl: './lister-frais.component.html',
  styleUrl: './lister-frais.component.css'
})
export class ListeFraisComponent {
  constructor(private frais_api: GsbFraisService) {
    this.frais_api.listeFraisDuVisiteur();

  }
  getListeFrais()
  {
    return this.frais_api.appels_termines;
  }
}
