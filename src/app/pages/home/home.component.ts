import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  
  caros=[
    {
      "id":1,
      "name":"New Delhi",
      "image":"https://static.toiimg.com/thumb/imgsize-23456,msid-109248664,width-600,resizemode-4/109248664.jpg",
    },
    {
      "id":2,
      "name":"assam",
      "image":"https://static.toiimg.com/thumb/imgsize-23456,msid-109248675,width-600,resizemode-4/109248675.jpg",
    },
    {
      "id":3,
      "name":"gujarat",
      "image":"https://static.toiimg.com/thumb/imgsize-23456,msid-109248720,width-600,resizemode-4/109248720.jpg",
    },
    {
      "id":4,
      "name":"himachal pradesh",
      "image":"https://static.toiimg.com/thumb/imgsize-23456,msid-109248751,width-600,resizemode-4/109248751.jpg",
    },
    {
      "id":5,
      "name":"rajasthan",
      "image":"https://static.toiimg.com/thumb/imgsize-23456,msid-109248780,width-600,resizemode-4/109248780.jpg",
    },
    {
      "id":6,
      "name":"kerala",
      "image":"https://static.toiimg.com/thumb/imgsize-23456,msid-109248813,width-600,resizemode-4/109248813.jpg",
    },
    {
      "id":7,
      "name":"Goa",
      "image":"https://static.toiimg.com/thumb/imgsize-23456,msid-109248838,width-600,resizemode-4/109248838.jpg",
    }
  ]
data: any;
  

}
