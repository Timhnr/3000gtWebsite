import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

type LinkItem = {
  label: string;
  url: string;
  icon: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
  ],
  templateUrl: './startseite.html',
  styleUrl: './startseite.scss',
})
export class Startseite {
  private readonly snackBar = inject(MatSnackBar);

  title = 'GT-Driver e.V.';
  showScrollTop = false;

  communityLinks: LinkItem[] = [
    { label: 'Forum (DE)', url: 'https://forum.3000gt.org', icon: 'forum' },
    { label: 'Forum (EN)', url: 'https://www.3sgto.org', icon: 'language' },
    { label: 'Facebook Gruppe', url: 'https://www.facebook.com/GtDriverEv', icon: 'groups' },
    { label: 'Wiki', url: 'https://wiki.3000gt.org', icon: 'menu_book' },
    { label: 'my3kgt', url: 'http://my3kgt.insel.de', icon: 'info' },
    {
      label: 'Dokumentation für Schrauber',
      url: 'http://www.my3kgt.insel.de/gt-files/techdocs/',
      icon: 'build',
    },
    { label: 'Stealth316', url: 'http://www.stealth316.com', icon: 'bolt' },
    { label: 'Mehrleistung mit Gutachten', url: 'https://www.facebook.com/ottecgt', icon: 'speed' },
    {
      label: 'Spyder Registry',
      url: 'http://www.3000gtspyderregistry.com',
      icon: 'directions_car',
    },
    { label: 'Spyder-Infos (DE)', url: 'http://spyder.3000gt.org', icon: 'description' },
    {
      label: 'Bilder',
      url: 'http://www.my3kgt.insel.de/gt-files/galerie1/gt-files_bilder/content/index.html',
      icon: 'photo_library',
    },
    { label: 'Archiv', url: 'http://www.gt-driver.de', icon: 'archive' },
  ];

  boardMembers: string[] = [
    'Stefan Brunthaler (Vorsitzender)',
    'Sandra Grunow (Schriftführerin)',
    'Jens Kuschrank (Finanzen)',
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showScrollTop = window.scrollY > 260;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async copyEmail(event: Event): Promise<void> {
    event.preventDefault();
    const email = 'vorstand@3000gt.org';
    try {
      await navigator.clipboard.writeText(email);
      this.snackBar.open('E-Mail-Adresse wurde in die Zwischenablage kopiert.', 'OK', {
        duration: 2600,
      });
    } catch {
      this.snackBar.open(`Bitte manuell kopieren: ${email}`, 'OK', { duration: 3200 });
    }
  }
}
