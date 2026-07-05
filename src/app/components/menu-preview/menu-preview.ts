import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportService } from '../../services/export';

@Component({
  selector: 'app-menu-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-preview.html',
  styleUrls: ['./menu-preview.scss']
})
export class MenuPreviewComponent implements OnInit {

  constructor(private exportService: ExportService) {}

  ngOnInit(): void {
    this.randomBackground();
  }

  @Input() primi = '';

  @Input() secondi = '';

  @Input() contorni = '';

  @Output() back = new EventEmitter<void>();

  private lastIndex = -1;

  background = '';

  backgrounds = [
    'immagini/bg1.png',
    'immagini/bg2.png',
    'immagini/bg3.png'
  ];

  oggi = this.getDataOggi();

  randomBackground() {

  if (this.backgrounds.length === 0) {
    return;
  }

  let index: number;

  do {

    index = Math.floor(Math.random() * this.backgrounds.length);

  } while (index === this.lastIndex && this.backgrounds.length > 1);

  this.lastIndex = index;

  this.background = this.backgrounds[index];

}

  goBack() {
    this.back.emit();
  }

  async downloadPng() {

    await this.exportService.exportToPng(
      'menu-preview',
      'menu-del-giorno'
    );

  }

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