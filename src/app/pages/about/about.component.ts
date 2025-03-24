
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  appName: string = 'Royal Spice';
  version: string = '1.0.0';
  releaseDate: string = 'March 2025';
  
  constructor() { }
}