import { Component, OnInit, Input } from '@angular/core';//generar input aca
import { Producto } from '../../../../models/producto';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.scss']
})
export class ProductoItemComponent implements OnInit {
  @Input() producto: Producto; //para llaamrlo acà 
  constructor() {

   }

  ngOnInit() {
  }

}
