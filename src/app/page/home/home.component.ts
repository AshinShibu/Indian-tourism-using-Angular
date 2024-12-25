import { Component } from '@angular/core';
import { CarouselComponent } from "../../ui/carousel/carousel.component";
import { NavComponent } from "../../ui/nav/nav.component";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CarouselModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    
    dots: false,
    navSpeed: 1000,

    navText: ['<', '>'],
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    
  }
slidesStore= [
 { id:1,
  src:"https://static.toiimg.com/photo/msid-93269258,width-96,height-65.cms",
  alt:"..."
},
{ 
  id: 2, 
  src: "https://static.toiimg.com/photo/msid-92089121,width-96,height-65.cms", 
  alt: "Description of image 2" 
},
{ 
  id: 3, 
  src: "https://static.toiimg.com/thumb/110640892/Vietnam.jpg?width=1200&height=900", 
  alt: "Description of image 3" 
}
];

}
