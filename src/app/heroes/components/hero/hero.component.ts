import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name : string = 'Ironman';
  age : number = 45;
  listHeroes : string[] = ['Thor', 'Hulk', 'Spiderman', 'Black Widow', 'Superman', 'Captain America', 'Doctor Strange', 'Black Panther'];


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  newHero():void{
    const index = Math.floor(Math.random() * this.listHeroes.length);
    this.name = this.listHeroes[index];
  }

  newAge():void{
    this.age = Math.floor(Math.random() * 100);
  }
   // Recargar la pagina
  reset():void{
    window.location.reload();
  }
}
