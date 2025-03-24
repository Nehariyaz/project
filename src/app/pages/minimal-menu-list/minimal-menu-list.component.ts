// minimal-menu-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuListItems {
  id: number;
  name: string;
  price: number;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  category: string;
}

@Component({
  selector: 'app-minimal-menu-list',
  templateUrl: './minimal-menu-list.component.html',
  styleUrls: ['./minimal-menu-list.component.scss']
})
export class MinimalMenuListComponent implements OnInit {
  MenuListItemss: MenuListItems[] = [
    // Appetizers (expanded)
    { id: 101, name: 'Paneer Tikka', price: 199, isVegetarian: true, category: 'Appetizers' },
    { id: 102, name: 'Vegetable Spring Rolls', price: 149, isVegetarian: true, category: 'Appetizers' },
    { id: 103, name: 'Chicken 65', price: 249, isSpicy: true, category: 'Appetizers' },
    { id: 104, name: 'Masala Papad', price: 79, isVegetarian: true, category: 'Appetizers' },
    { id: 105, name: 'Onion Bhaji', price: 129, isVegetarian: true, category: 'Appetizers' },
    { id: 106, name: 'Fish Amritsari', price: 289, category: 'Appetizers' },
    { id: 107, name: 'Chilli Potato', price: 169, isVegetarian: true, isSpicy: true, category: 'Appetizers' },
    { id: 108, name: 'Chicken Tikka', price: 279, category: 'Appetizers' },
    { id: 109, name: 'Hara Bhara Kabab', price: 179, isVegetarian: true, category: 'Appetizers' },
    { id: 110, name: 'Prawns Crispy', price: 349, isSpicy: true, category: 'Appetizers' },
    { id: 111, name: 'Aloo Tikki', price: 119, isVegetarian: true, category: 'Appetizers' },
    { id: 112, name: 'Mutton Seekh Kabab', price: 299, isSpicy: true, category: 'Appetizers' },
    
    // Main Course (expanded)
    { id: 201, name: 'Butter Chicken', price: 299, category: 'Main Course' },
    { id: 202, name: 'Palak Paneer', price: 249, isVegetarian: true, category: 'Main Course' },
    { id: 203, name: 'Chicken Biryani', price: 279, isSpicy: true, category: 'Main Course' },
    { id: 204, name: 'Vegetable Biryani', price: 219, isVegetarian: true, category: 'Main Course' },
    { id: 205, name: 'Dal Makhani', price: 199, isVegetarian: true, category: 'Main Course' },
    { id: 206, name: 'Kadai Chicken', price: 289, isSpicy: true, category: 'Main Course' },
    { id: 207, name: 'Paneer Butter Masala', price: 259, isVegetarian: true, category: 'Main Course' },
    { id: 208, name: 'Chole Bhature', price: 189, isVegetarian: true, category: 'Main Course' },
    { id: 209, name: 'Rogan Josh', price: 329, category: 'Main Course' },
    { id: 210, name: 'Fish Curry', price: 309, category: 'Main Course' },
    { id: 211, name: 'Mix Vegetable', price: 199, isVegetarian: true, category: 'Main Course' },
    { id: 212, name: 'Chicken Korma', price: 299, category: 'Main Course' },
    { id: 213, name: 'Malai Kofta', price: 269, isVegetarian: true, category: 'Main Course' },
    { id: 214, name: 'Mutton Curry', price: 349, category: 'Main Course' },
    { id: 215, name: 'Shahi Paneer', price: 279, isVegetarian: true, category: 'Main Course' },
    { id: 216, name: 'Prawn Masala', price: 379, isSpicy: true, category: 'Main Course' },
    { id: 217, name: 'Aloo Gobi', price: 189, isVegetarian: true, category: 'Main Course' },
    { id: 218, name: 'Egg Curry', price: 199, category: 'Main Course' },
    
    // Breads (expanded)
    { id: 301, name: 'Tandoori Roti', price: 35, isVegetarian: true, category: 'Breads' },
    { id: 302, name: 'Butter Naan', price: 49, isVegetarian: true, category: 'Breads' },
    { id: 303, name: 'Garlic Naan', price: 59, isVegetarian: true, category: 'Breads' },
    { id: 304, name: 'Laccha Paratha', price: 55, isVegetarian: true, category: 'Breads' },
    { id: 305, name: 'Missi Roti', price: 45, isVegetarian: true, category: 'Breads' },
    { id: 306, name: 'Cheese Naan', price: 79, isVegetarian: true, category: 'Breads' },
    { id: 307, name: 'Pudina Paratha', price: 65, isVegetarian: true, category: 'Breads' },
    { id: 308, name: 'Bhatura', price: 45, isVegetarian: true, category: 'Breads' },
    { id: 309, name: 'Rumali Roti', price: 40, isVegetarian: true, category: 'Breads' },
    { id: 310, name: 'Stuffed Kulcha', price: 69, isVegetarian: true, category: 'Breads' },
    
    // Rice (expanded)
    { id: 401, name: 'Steamed Rice', price: 99, isVegetarian: true, category: 'Rice' },
    { id: 402, name: 'Jeera Rice', price: 129, isVegetarian: true, category: 'Rice' },
    { id: 403, name: 'Veg Pulao', price: 159, isVegetarian: true, category: 'Rice' },
    { id: 404, name: 'Egg Fried Rice', price: 179, category: 'Rice' },
    { id: 405, name: 'Kashmiri Pulao', price: 189, isVegetarian: true, category: 'Rice' },
    { id: 406, name: 'Chicken Biryani', price: 249, category: 'Rice' },
    { id: 407, name: 'Mushroom Rice', price: 169, isVegetarian: true, category: 'Rice' },
    { id: 408, name: 'Lemon Rice', price: 139, isVegetarian: true, category: 'Rice' },
    
    // Desserts (expanded)
    { id: 501, name: 'Gulab Jamun', price: 99, isVegetarian: true, category: 'Desserts' },
    { id: 502, name: 'Rasmalai', price: 129, isVegetarian: true, category: 'Desserts' },
    { id: 503, name: 'Kulfi', price: 89, isVegetarian: true, category: 'Desserts' },
    { id: 504, name: 'Rabri', price: 99, isVegetarian: true, category: 'Desserts' },
    { id: 505, name: 'Jalebi', price: 79, isVegetarian: true, category: 'Desserts' },
    { id: 506, name: 'Rasgulla', price: 89, isVegetarian: true, category: 'Desserts' },
    { id: 507, name: 'Gajar Halwa', price: 119, isVegetarian: true, category: 'Desserts' },
    { id: 508, name: 'Phirni', price: 109, isVegetarian: true, category: 'Desserts' },
    { id: 509, name: 'Shahi Tukda', price: 129, isVegetarian: true, category: 'Desserts' },
    { id: 510, name: 'Mango Phirni', price: 139, isVegetarian: true, category: 'Desserts' },
    
    // Beverages (expanded)
    { id: 601, name: 'Mango Lassi', price: 79, isVegetarian: true, category: 'Beverages' },
    { id: 602, name: 'Masala Chai', price: 49, isVegetarian: true, category: 'Beverages' },
    { id: 603, name: 'Fresh Lime Soda', price: 69, isVegetarian: true, category: 'Beverages' },
    { id: 604, name: 'Buttermilk', price: 59, isVegetarian: true, category: 'Beverages' },
    { id: 605, name: 'Cold Coffee', price: 99, isVegetarian: true, category: 'Beverages' },
    { id: 606, name: 'Fresh Juice', price: 89, isVegetarian: true, category: 'Beverages' },
    { id: 607, name: 'Badam Milk', price: 109, isVegetarian: true, category: 'Beverages' },
    { id: 608, name: 'Rose Sharbat', price: 69, isVegetarian: true, category: 'Beverages' },
    { id: 609, name: 'Paan Shots', price: 99, isVegetarian: true, category: 'Beverages' },
    { id: 610, name: 'Thandai', price: 119, isVegetarian: true, category: 'Beverages' },
    
    // Added new category - Soups
    { id: 701, name: 'Tomato Soup', price: 99, isVegetarian: true, category: 'Soups' },
    { id: 702, name: 'Sweet Corn Soup', price: 119, isVegetarian: true, category: 'Soups' },
    { id: 703, name: 'Hot & Sour Soup', price: 129, isVegetarian: true, isSpicy: true, category: 'Soups' },
    { id: 704, name: 'Manchow Soup', price: 139, isVegetarian: true, isSpicy: true, category: 'Soups' },
    { id: 705, name: 'Chicken Soup', price: 149, category: 'Soups' },
    { id: 706, name: 'Mushroom Soup', price: 129, isVegetarian: true, category: 'Soups' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Sort alphabetically by name
    this.MenuListItemss.sort((a, b) => a.name.localeCompare(b.name));
  }

  getUniqueCategories(): string[] {
    return [...new Set(this.MenuListItemss.map(item => item.category))];
  }

  getItemsByCategory(category: string): MenuListItems[] {
    return this.MenuListItemss.filter(item => item.category === category);
  }
}