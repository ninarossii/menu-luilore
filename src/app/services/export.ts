import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  async exportToPng(elementId: string, fileName: string) {

    const element = document.getElementById(elementId);

    if (!element) {
      return;
    }

    const canvas = await html2canvas(element, {
      scale: 2
    });

    const link = document.createElement('a');

    link.download = `${fileName}.png`;

    link.href = canvas.toDataURL('image/png');

    link.click();
  }
}