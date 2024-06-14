import { Component } from "@angular/core";
import { Character } from "../interfaces/Character.interface";
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.service';


@Component({
    selector: 'app-dbz-main-pages',
    templateUrl: './main-pages.component.html',
    styleUrls: ['./main-pages.component.css']
})

export class MainPagesComponent {

  constructor(private dbzS: DbzService) {}

  get characters(): Character[] {
    return [... this.dbzS.characters];
  }

  onDeleteCharacter(ID : string): void {
    this.dbzS.onDeleteCharacterByID(ID);
  }

  onNewCharacter(character: Character): void {
    this.dbzS.addCharacter(character);
  }
}
