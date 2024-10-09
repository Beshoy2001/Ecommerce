import { Component } from '@angular/core';
import { MainCategory } from '../../../../Models/MainCategory';
import { CategoryService } from '../../../customer/Service/category.service';
import * as alertify from 'alertifyjs';
import { ProductService } from '../../../customer/Service/product.service';
import { Product } from '../../../../Models/Product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  product = {
    name: '',
    description: '',
    price: 0,

    SubcategoryId: 0,
    rating: 0,
  };

  ImageFile!: File;

  MainCategories: MainCategory[] = [];
  subCategories: any;

  prodList: Product[] = [];
  isLoading = false;

  constructor(private categoryServ: CategoryService, private prodServ: ProductService) {
    this.categoryServ.getMainCategories().subscribe(
      {
        next: (data: MainCategory[]) => {
          this.MainCategories = data;
          //console.log(data)
        },
        error: (e) => { alertify.error('Server is Down !'); console.error(e) },
        complete: () => console.info('complete')
      });

    this.loadProducts();
  }
  loadProducts() {
    this.isLoading = true;
    this.prodServ.getAllProducts().subscribe({
      next: (response: any) => {this.prodList = response; },
      complete: () => { this.isLoading = false; },
      error: (e) => { alertify.error("Error in getting products !.") }
    });
  }
  setRate(rate: number, e: MouseEvent) {

    let element = e.target as HTMLElement;
    if (element.getAttribute('style') != 'color: #fbff00;') { //if star is not yellow then make it yellow and previuos stars.

      element.setAttribute("class", 'fas fa-star fa-lg');
      element.setAttribute("style", "color: #fbff00;");
      let previuosElement = element.previousElementSibling;
      while (previuosElement != null) {
        previuosElement.setAttribute("class", 'fas fa-star fa-lg');
        previuosElement.setAttribute("style", "color: #fbff00;");
        previuosElement = previuosElement.previousElementSibling;
        console.log('While');
      }
    }
    else {// Here star is yellow then make it black and also the next stars.
      //console.log('else');
      element.setAttribute("class", 'far fa-star fa-lg');
      element.setAttribute("style", "color: #000000;");
      let nextElement = element.nextElementSibling;
      //console.log(nextElement);
      rate -= 1;
      while (nextElement != null && nextElement.getAttribute('id') != 'undo') {

        nextElement.setAttribute("class", 'far fa-star fa-lg');
        nextElement.setAttribute("style", "color: #000000;");
        nextElement = nextElement.nextElementSibling;
        console.log('While2');
      }
    }
    this.product.rating = rate;
    console.log('Rate : ' + rate);
  }

  setSubCategories(e: Event) {

    let mainCategoryId = Number((e.target as HTMLSelectElement).value);
    if (mainCategoryId != -1) {
      let index = this.MainCategories.findIndex(mc => mc.id == mainCategoryId);

      this.subCategories = this.MainCategories[index].subcategories;
    } else {
      this.subCategories = [];
    }
  }

  setImgFile(e: Event) {
    if (e.target) {
      const inputElement = e.target as HTMLInputElement;
      if (inputElement.files) {
        this.ImageFile = inputElement.files[0];
      }

    }
  }
  SaveNewProduct() {
    const formData = new FormData;
    formData.append('name', this.product.name);
    formData.append('description', this.product.description);
    formData.append('rating', this.product.rating.toString());
    formData.append('price', this.product.price.toString());
    formData.append('SubcategoryId', this.product.SubcategoryId.toString());
    formData.append('ImageFile', this.ImageFile);
    formData.append('userId', localStorage.getItem('userId') || '');
    console.log(formData.get('name'));
    this.prodServ.saveNewProduct(formData).subscribe({
      next: (response) => {
        console.log(response); alertify.success(response);
        this.product.name = '';
        this.product.price = 0;
        this.product.description = '';
        this.loadProducts();

      },
      error: (e) => { console.log(e); alertify.error(e); }
    });
  }

  DeleteProduct(id: number, name: string) {
    alertify.confirm('Are you Sure to delete this product \"' + name + '\" ?', () => {
      this.isLoading = true;
      this.prodServ.deleteProduct(id).subscribe({
        next: (response) => {
          this.isLoading = false;
          alertify.success("OK : " + response);
          this.loadProducts();
        },
        error: (e) => {
          this.isLoading = false;
          console.log(e);
          alertify.error("Error in Deleting the product !");
        }


      });
    });
  }

}
