import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  isSidePanelVisible: boolean = false;
  productObj: any = {
    productId: 0,
    productSku: '',
    productName: '',
    productPrice: null,
    productShortName: '',
    productDescription: '',
    createdDate: new Date(),
    deliveryTimeSpan: '',
    categoryId: null,
    productImageUrl: '',
  };
  categoryList: any[] = [];
  constructor(private productSrv: ProductService) {}
  ngOnInit(): void {
    this.getAllCategory();
  }
  getAllCategory() {
    this.productSrv.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }
  onSave() {}
  openSidePane() {
    this.isSidePanelVisible = true;
  }
  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}
