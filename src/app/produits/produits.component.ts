import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { ActivatedRoute, Route, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
private products;
  constructor(private catalogueService:CatalogueService,
    private route:ActivatedRoute,router:Router) { 
      router.events.subscribe(event=>{
     
     if(event instanceof NavigationEnd)
     {
      console.log(route.snapshot.params.urlProds)
      let url=atob(route.snapshot.params.urlProds);
      console.log(url);
      this.getProducts(url);
     }
    })
   
    }

  ngOnInit() {
  }
  getProducts(url)
  {
this.catalogueService.getRessource(url)
.subscribe(data=>{
 this.products=data;
},err=>{
console.log(err);
})
  }

}
