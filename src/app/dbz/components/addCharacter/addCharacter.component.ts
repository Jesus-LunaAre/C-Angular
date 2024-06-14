import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'app-dbz-addCharacter',
  templateUrl: './addCharacter.component.html',
  styleUrls: ['./addCharacter.component.css']
})
export class AddCharacterComponent {

  @Output()
  onCharacter : EventEmitter<Character> = new EventEmitter();
  character: Character = {
    name: '',
    power: 0
  }

  emmitCharacter() {
    console.log(this.character);

    if ( this.character.name.trim().length === 0 || this.character.power <= 0) { return;}

    this.onCharacter.emit(this.character);

    this.character = {
      id: '',
      name: '',
      power: 0
    }
  }
}


