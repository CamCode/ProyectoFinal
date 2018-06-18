import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';//generar input aca
import { Producto } from '../../../../models/producto';
import { checkAndUpdatePureExpressionDynamic } from '@angular/core/src/view/pure_expression';


@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.scss']
})
export class ProductoItemComponent implements OnInit {
  @Input() producto: Producto; //para llaamrlo acà 
  @Output() adicionar = new EventEmitter <Producto>();// nombre del evento 
  constructor() {

  }
  AgregarItem() {
    //console.log(`Agregado ${this.producto.id}:${this.producto.nombre}`);

    //algun proceso aca...

    //disparar el nuevo evento`
    this.adicionar.emit(this.producto);
   
  }

 

  ngOnInit() {
  }

}
