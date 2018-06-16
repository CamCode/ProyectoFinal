import { Component, OnInit, Input } from '@angular/core';//generar input aca
import { Producto } from '../../../../models/producto';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.scss']
})
export class ProductoItemComponent implements OnInit {
  @Input() producto: Producto; //para llaamrlo acà 

  AgregarItem() {
    console.log(`Agregado ${this.producto.id}:${this.producto.nombre}`);

    //algun proceso aca...

    //disparar el nuevo evento
  }

  constructor() {

  }

  ngOnInit() {
  }

}
