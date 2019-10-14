import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
   private categories;
   private currentCategory;
   private 
  constructor(private catService:CatalogueService,private router:Router) { }

  ngOnInit() {
    this.catService.getAllcategories()
    .subscribe(data=>{
      this.categories=data;
    },err=>{
      console.log(err);
    })
  }
  onGetProducts(cat)
  {
    this.currentCategory=cat;
    //console.log(cat._links.products.href);
    //this.catService.getRessource(cat._links.products.href)
    let url=cat._links.products.href;
    this.router.navigateByUrl("/products/"+btoa(url));

  }

}
