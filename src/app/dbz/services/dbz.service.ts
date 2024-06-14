import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/Character.interface';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  characters: Character[] = [

    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 500
    }
  ];
  addCharacter(character: Character):void {

    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }


  onDeleteCharacterByID(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }


}
