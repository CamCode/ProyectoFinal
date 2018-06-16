import { Component, OnInit, Input } from '@angular/core';//generar input aca
import { Producto } from '../../../../models/producto';
import { checkAndUpdatePureExpressionDynamic } from '@angular/core/src/view/pure_expression';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.scss']
})
export class ProductoItemComponent implements OnInit {
  @Input() producto: Producto; //para llaamrlo acà 
  @Output() anexar : EventEmitter <Producto>();

  AgregarItem() {
    console.log(`Agregado ${this.producto.id}:${this.producto.nombre}`);

    //algun proceso aca...

    //disparar el nuevo evento`
   
  }

  constructor() {

  }

  ngOnInit() {
  }

}
