import { Component, ElementRef, HostListener } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userName: string = 'fabio.strumegger05@htl-salzburg.ac.at';
  constructor(
    private themeService: ThemeService,
    private router: Router,
    private elementRef: ElementRef
  ) {}

  toggleTheme(): void {
    this.themeService.toggleThemeService();
  }

  getThemeStatus(): boolean {
    return this.themeService.getThemeStatus();
  }

  directHome(): void {
    //checking if user is on those urls
    if (
      this.router.url === '/homepage' ||
      this.router.url === '/matches' ||
      this.router.url === '/tutor' ||
      this.router.url === '/student' ||
      this.router.url === '/settings'
    ) {
      this.router.navigate(['/homepage']);
    } else {
      this.router.navigate(['']);
    }
  }

  getUserInitials(): string {
    //algorithm to get students initials from htl e-mail must be with a dot
    const username = this.userName.split('@')[0];
    const initials = username
      .split('.')
      .map((part) => part.charAt(0))
      .join('');

    return initials.toUpperCase();
  }

  //dropdown Menü
  isDropdownOpen: boolean = false;

  openDropdown() {
    this.isDropdownOpen = true;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  logout() {
    console.log('logging out...');
    this.isDropdownOpen = false;
  }

  openSettings() {
    console.log('Open Settings');
    this.isDropdownOpen = false;
  }

  shouldShowDropdown(): boolean {
    const allowedURLs = ['/homepage', '/matches', '/tutor', '/student' , '/settings'];
    return allowedURLs.includes(this.router.url);
  }

  // @HostListener('document:click', ['$event'])
  // handleDocumentClick(event: Event): void {
  //   const clickedElement = event.target as HTMLElement;
  //   if (!this.elementRef.nativeElement.contains(clickedElement)) {
  //     this.isDropdownOpen = false;
  //   }
  // }
}
