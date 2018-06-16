import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-sliderproducto',
  templateUrl: './sliderproducto.component.html',
  styleUrls: ['./sliderproducto.component.scss']
})
export class SliderproductoComponent implements OnInit {
  productos: Producto[];//Ctrl + space para sugerencias productos es una lista de Producto
  constructor() {
    this.productos = new Array <Producto>();// nuevo arreglo <Template> de (poisiciones)

    for(let i = 0; i< 5; i++){
      let p = new Producto();
      p.nombre = `nombre ${i}`; // comillas inclinadas para hacer una interpolaciòn ${variable}
      p.descripcion = `descripcion ${i}`;
      p.image = `https://loremflickr.com/320/240/cats,dogs`;

      this.productos.push(p);

    }

   }

  ngOnInit() {
  }

}
