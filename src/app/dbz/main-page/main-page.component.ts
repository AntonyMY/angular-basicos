import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  defecto : Personaje = {
    nombre : 'Pikoro',
    poder  : 4000
  }


  constructor(private dbzService: DbzService){}

}
