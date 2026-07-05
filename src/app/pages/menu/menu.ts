import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuPreviewComponent } from '../../components/menu-preview/menu-preview';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule, MenuPreviewComponent],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class MenuComponent {

  currentView: 'home' | 'editor' | 'preview' = 'home';

  primi = '';
  secondi = '';
  contorni = '';

  openMenu() {
    this.currentView = 'editor';
  }

  goBack() {
    this.currentView = 'home';
  }

  showPreview() {
    this.currentView = 'preview';
  }

  backToEditor() {
  this.currentView = 'editor';
}
}