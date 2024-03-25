import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private themeKey = 'app-theme';
  private theme: boolean = false;

  constructor() {
    const storedTheme = localStorage.getItem(this.themeKey);
    this.theme = storedTheme ? JSON.parse(storedTheme) : false;
    this.updateTheme();
  }


  toggleThemeService(): void {  //for local storage and to toggle theme
    this.theme = !this.theme;
    localStorage.setItem(this.themeKey, JSON.stringify(this.theme));
    this.updateTheme();
  }

  getThemeStatus(): boolean {
    return this.theme;
  }

  private updateTheme(): void {
    if (this.theme) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }
}
