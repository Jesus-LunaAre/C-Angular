import { Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {


  contador = 0;

  incrementar(value: number): void {
    this.contador = this.contador + value;
  }

  decrementar(value : number): void {
    if (this.contador > 0)
      this.contador = this.contador - value;
  }

  reset() {
    this.contador = 0;
  }
}
