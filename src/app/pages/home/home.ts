import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


interface Review {
  author: string; 
  text: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class HomeComponent {
  menuAperto = false;
  isLoading = true;
  showSplash = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;

      setTimeout(() => {
        this.showSplash = false;
      }, 800);

    }, 3000);
  }

  scrollToSection(event: MouseEvent, sectionId: string): void {
    const section = document.getElementById(sectionId);
    this.menuAperto = false;
    

    if (!section) {
      return;
    }

    event.preventDefault();
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  oggi = this.getDataOggi();

  getDataOggi(): string {

    const oggi = new Date();

    return oggi.toLocaleDateString('it-IT', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      
    });

  }

  currentReview = 0;

  reviews: Review[] = [
    {
      author: 'Matteo R.',
      text: 'Ottima cucina, piatti curati e servizio molto cordiale.'
    },
    {
      author: 'Laura M.',
      text: 'Ambiente accogliente e ingredienti di qualità. Torneremo sicuramente.'
    },
    {
      author: 'Francesco T.',
      text: 'Una bella esperienza, con piatti gustosi e personale gentile.'
    },
    {
      author: 'Laura M.',
      text: 'Ottimo rapporto qualità-prezzo e cucina tradizionale.'
    },
    {
      author: 'Giovanni P.',
      text: 'Tutto molto buono, dall’antipasto al dolce.'
    }
  ];

  get visibleReviews(): Review[] {
    const isMobile = typeof window !== 'undefined'
      && window.innerWidth <= 600;

    const count = isMobile ? 1 : 3;

    return Array.from({ length: Math.min(count, this.reviews.length) }, (_, i) => {
      return this.reviews[(this.currentReview + i) % this.reviews.length];
    });
  }

  nextReview(): void {
    this.currentReview = (this.currentReview + 1) % this.reviews.length;
  }

  prevReview(): void {
    this.currentReview =
      (this.currentReview - 1 + this.reviews.length) % this.reviews.length;
  }

  goToReview(index: number): void {
    this.currentReview = index;
  }
  

  annoCorrente = new Date().getFullYear();

}
