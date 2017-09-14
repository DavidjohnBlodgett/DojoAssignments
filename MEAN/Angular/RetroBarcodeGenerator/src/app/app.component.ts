import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';

  arr = [
  '#' + Math.floor(Math.random()*16777215).toString(16),
  '#' + Math.floor(Math.random()*16777215).toString(16),
  '#' + Math.floor(Math.random()*16777215).toString(16),
  '#' + Math.floor(Math.random()*16777215).toString(16),
  '#' + Math.floor(Math.random()*16777215).toString(16),
  '#' + Math.floor(Math.random()*16777215).toString(16),
  '#' + Math.floor(Math.random()*16777215).toString(16),
  '#' + Math.floor(Math.random()*16777215).toString(16),
  '#' + Math.floor(Math.random()*16777215).toString(16),
  '#' + Math.floor(Math.random()*16777215).toString(16),
  ];
}
