import { Component, HostListener, OnInit, signal, Inject, PLATFORM_ID } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(0); // Inicializujeme na 0
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    // Kontrolujeme, či bežíme v prehliadači
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.isBrowser) {
      this.screenWidth.set(window.innerWidth);
      if (this.screenWidth() < 768) {
        this.isSidebarCollapsed.set(true);
      }
    }
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.screenWidth.set(window.innerWidth);
      this.isSidebarCollapsed.set(this.screenWidth() < 768);
    }
  }

  changeIsSidebarCollapsed(isSidebarCollapsed: boolean): void {
    this.isSidebarCollapsed.set(isSidebarCollapsed);
  }
}
