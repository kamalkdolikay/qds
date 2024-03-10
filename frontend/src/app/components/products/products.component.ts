import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  public prods:any;
  constructor(
    private authService:AuthService) { }

    test_f(){
      this.authService.getProd().subscribe(data=>{
        this.prods = data;
      })
    }

    ngOnInit(): void {
      this.test_f();
    }
}
