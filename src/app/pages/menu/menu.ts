import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class MenuComponent {


currentView: 'home' | 'editor' = 'home';

openMenu() {
  this.currentView = 'editor';
}

goBack() {
  this.currentView = 'home';
}

}

