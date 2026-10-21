import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';   
import { MenuPreviewComponent } from '../../components/menu-preview/menu-preview';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule, RouterLink, MenuPreviewComponent],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class MenuComponent {

  currentView: 'home' | 'editor' | 'preview' = 'home';
  currentPage: 'home' | 'storico' = 'home';

  primi = '';
  secondi = '';
  contorni = '';
  dolci = '';
  note = '';
  prezzi = '';

  mostraDolci = false;
  mostraNote = false;
  mostraPrezzi = false;

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

getTotalRows(): number {

  let totale = 0;

  totale += this.countRows(this.primi);
  totale += this.countRows(this.secondi);
  totale += this.countRows(this.contorni);

  if (this.mostraDolci) {
    totale += this.countRows(this.dolci);
  }

   if (this.mostraNote) {
    totale += this.countRows(this.note);
  }

  return totale;
}

countRows(text: string): number {

  if (!text.trim()) {
    return 0;
  }

  return text
    .split('\n')
    .filter(riga => riga.trim() !== '').length;
}

oggi = this.getDataOggi();


  getDataOggi(): string {

    const oggi = new Date();

    return oggi.toLocaleDateString('it-IT', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

  }
}