import { Component, Input } from '@angular/core';
import { Product} from'./../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product!: Product;//Significa que en algun momento lo voy a inicializar (signo de admiracion)

}
