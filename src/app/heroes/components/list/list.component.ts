import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroRm: string | undefined;
  HeroNames : string[] = ['Thor', 'Hulk', 'Spiderman', 'Black Widow', 'Superman', 'Captain America', 'Doctor Strange', 'Black Panther'];

  rmHero():void {
    this.heroRm = this.HeroNames.pop();
  }
}
