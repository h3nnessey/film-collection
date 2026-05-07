import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Breadcrumbs } from './components/breadcrumbs/breadcrumbs';
import { AppRoutes } from './routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Breadcrumbs],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly username = 'h3nnessey';
  protected readonly year = 2026;
  protected readonly title = 'Films Collection';
  protected readonly navItems = Object.values(AppRoutes);
}
