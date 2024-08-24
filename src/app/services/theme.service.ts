import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode: boolean = false;

  constructor() { }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
  }

  updateTheme() {
    const body = document.getElementsByTagName('body')[0];
    if(this.isDarkMode) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    }
    else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    }
  }
}
