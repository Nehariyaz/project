import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  vegetarian: boolean;
  spicy: boolean;
}

interface MenuCategory {
  id: number;
  name: string;
  description: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: MenuCategory[] = [];
  selectedCategory: MenuCategory | null = null;
  
  constructor() { }

  ngOnInit(): void {
    this.loadMenu();
    // Set the first category as selected by default
    if (this.menuItems.length > 0) {
      this.selectedCategory = this.menuItems[0];
    }
  }

  selectCategory(category: MenuCategory): void {
    this.selectedCategory = category;
  }

  private loadMenu(): void {
    this.menuItems = [
      {
        id: 1,
        name: 'Appetizers',
        description: 'Start your meal with these delicious options',
        items: [
          {
            id: 101,
            name: 'Bruschetta',
            description: 'Grilled bread rubbed with garlic and topped with olive oil, salt, tomato, and basil',
            price: 350,
            image: 'https://www.allrecipes.com/thmb/QSsjryxShEx1L6o0HLer1Nn4jwA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/54165-balsamic-bruschetta-DDMFS-4x3-e2b55b5ca39b4c1783e524a2461634ea.jpg',
            vegetarian: true,
            spicy: false
          },
          {
            id: 102,
            name: 'Calamari',
            description: 'Crispy fried squid served with lemon and marinara sauce',
            price: 450,
            image: 'https://media.istockphoto.com/id/478735844/photo/homemade-breaded-fried-calamari.jpg?s=612x612&w=0&k=20&c=1FBLKYjUZgbCVU7aXn4FfZ-nXRnhhpNB_Q7_-SKJaCs=',
            vegetarian: false,
            spicy: false
          },
          {
            id: 103,
            name: 'Spicy Buffalo Wings',
            description: 'Crispy chicken wings tossed in our signature buffalo sauce',
            price: 300,
            image: 'https://media.istockphoto.com/id/835903320/photo/baked-chicken-wings-with-sesame-seeds-and-sweet-chili-sauce-on-white-wooden-board.jpg?s=612x612&w=0&k=20&c=SH8ZCkEKuWD_wxulpntIJ0uD4yRnUf9UXovQwSwrmmA=',
            vegetarian: false,
            spicy: true
          }
        ]
      },
      {
        id: 2,
        name: 'Main Courses',
        description: 'Our chef\'s special entrées',
        items: [
          {
            id: 201,
            name: 'Grilled Salmon',
            description: 'Fresh Atlantic salmon with lemon herb butter, served with seasonal vegetables',
            price: 500,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwZuHZ9DotDcdH68sbI00zKJKFVShw8pMEg&s',
            vegetarian: false,
            spicy: false
          },
          {
            id: 202,
            name: 'Filet Mignon',
            description: '8oz tender beef filet, cooked to perfection, with mashed potatoes and asparagus',
            price: 550,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoa5TbiwJfR4hGDZtdHWAjorhCmSLu0n_A7A&s',
            vegetarian: false,
            spicy: false
          },
          {
            id: 203,
            name: 'Eggplant Parmesan',
            description: 'Layers of breaded eggplant, marinara sauce, and melted mozzarella cheese',
            price: 250,
            image: 'https://media.istockphoto.com/id/1168662503/photo/tradicional-parmigiana-di-melanzane-baked-eggplant-italy-sicily-cousine-baked-eggplant-with.jpg?s=612x612&w=0&k=20&c=CmtPfKW0VlXTXspGr-__TQWiRiUGVNbxhky_y2PaI9g=',
            vegetarian: true,
            spicy: false
          }
        ]
      },
      {
        id: 3,
        name: 'Pasta',
        description: 'Handmade pasta dishes from our Italian kitchen',
        items: [
          {
            id: 301,
            name: 'Spaghetti Carbonara',
            description: 'Classic pasta with eggs, cheese, pancetta, and black pepper',
            price: 540,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsMDOhnwuBvl0pcN14PofKJWPFM0tJHWfJg&s',
            vegetarian: false,
            spicy: false
          },
          {
            id: 302,
            name: 'Fettuccine Alfredo',
            description: 'Fettuccine pasta in a rich, creamy Parmesan sauce',
            price: 280,
            image: 'https://media.istockphoto.com/id/612246764/photo/pasta-with-chicken.jpg?s=612x612&w=0&k=20&c=c_gZbA4DXcLGWLng58D2B9Od_do4xpGe1JXyUjstz0A=',
            vegetarian: true,
            spicy: false
          },
          {
            id: 303,
            name: 'Spicy Arrabbiata',
            description: 'Penne pasta in a spicy tomato sauce with garlic and red chili peppers',
            price: 350,
            image: 'https://media.istockphoto.com/id/482964545/photo/arrabiata-pasta.jpg?s=612x612&w=0&k=20&c=-PGU3gilnAEq1EccWXzdIvG18y9LsvegUX6ggt9Nk7w=',
            vegetarian: true,
            spicy: true
          }
        ]
      },
      {
        id: 4,
        name: 'Desserts',
        description: 'Sweet endings to perfect your meal',
        items: [
          {
            id: 401,
            name: 'Tiramisu',
            description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese',
            price: 300,
            image: 'data:image/jpeg;base64,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',
            vegetarian: true,
            spicy: false
          },
          {
            id: 402,
            name: 'Chocolate Lava Cake',
            description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
            price: 250,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9rW23PHOmUfwvoWJnhljrbJpDA1iwYfm1A&s',
            vegetarian: true,
            spicy: false
          },
          {
            id: 403,
            name: 'New York Cheesecake',
            description: 'Creamy cheesecake with a graham cracker crust, topped with fresh berries',
            price: 8.99,
            image: 'data:image/jpeg;base64,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',
            vegetarian: true,
            spicy: false
          }
        ]
      }
    ];
  }
}