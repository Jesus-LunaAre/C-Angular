import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  @Input()
  characterList : Character[] = [/* Por lo general se deja vacio para que el componente padre mande los datos.*/ ];

  @Output()
  onDeleteID : EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(ID ?: string): void {

    if (ID === undefined) { return; }

    this.onDeleteID.emit(ID);
  }
}
