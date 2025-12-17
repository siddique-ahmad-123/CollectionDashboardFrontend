import { Component, signal } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Sidebar, RouterOutlet,Header],
  templateUrl: './layoutcomponent.html',
  styleUrls: ['./layoutcomponent.css']
})
export class LayoutComponent {
  sidebarOpen = signal(true);

  toggleSidebar() {
    this.sidebarOpen.update(v => !v);
  }
}
