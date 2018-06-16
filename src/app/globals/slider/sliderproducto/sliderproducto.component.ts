import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-sliderproducto',
  templateUrl: './sliderproducto.component.html',
  styleUrls: ['./sliderproducto.component.scss']
})
export class SliderproductoComponent implements OnInit {
  @Output() anexar = new EventEmitter <Producto>();
  anexar(producto:Producto){

  }

  productos: Producto[];//Ctrl + space para sugerencias productos es una lista de Producto
  constructor() {
    this.productos = new Array <Producto>();// nuevo arreglo <Template> de (poisiciones)

    for(let i = 0; i< 5; i++){
      let p = new Producto();

      p.id= i;
      p.nombre = `nombre ${i}`; // comillas inclinadas para hacer una interpolaciòn ${variable}
      p.descripcion = `descripcion ${i}`;
      p.precio = 0;
      p.image = `https://loremflickr.com/320/240/cats`;

      this.productos.push(p);
    }
   }
  
  


  ngOnInit() {
  }

}
