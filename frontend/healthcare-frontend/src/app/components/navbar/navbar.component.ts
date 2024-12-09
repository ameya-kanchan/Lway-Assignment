import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="bg-primary p-4">
      <div class="container mx-auto flex justify-between items-center">
        <a routerLink="/" class="text-black text-xl font-bold">Healthcare Services</a>
        <div class="space-x-4">
          <a routerLink="/services" class="text-black hover:text-red-200">Services</a>
          <a routerLink="/add-service" class="text-black hover:text-red-200">Add Service</a>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {}