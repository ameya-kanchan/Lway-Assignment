import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HealthcareService } from '../../services/healthcare.service';
import { Service } from '../../models/service.model';


@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">Healthcare Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div *ngFor="let service of services" class="bg-white p-4 rounded-lg shadow">
          <h3 class="text-xl font-semibold">{{service.name}}</h3>
          <p class="text-gray-600">{{service.description}}</p>
          <p class="text-lg font-bold mt-2">{{service.price | currency}}</p>
          <div class="mt-4 space-x-2">
            <button (click)="editService(service)" class="bg-blue-500 text-white px-4 py-2 rounded">
              Edit
            </button>
            <button (click)="deleteService(service._id!)" class="bg-red-500 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ServicesListComponent implements OnInit {
  services: Service[] = [];

  constructor(private healthcareService: HealthcareService,
    private router: Router) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.healthcareService.getServices().subscribe({
      next: (services) => this.services = services,
      error: (error) => console.error('Error loading services:', error)
    });
  }

  deleteService(id: string): void {
    if (confirm('Are you sure you want to delete this service?')) {
      this.healthcareService.deleteService(id).subscribe({
        next: () => this.loadServices(),
        error: (error) => console.error('Error deleting service:', error)
      });
    }
  }

  editService(service: Service): void {
    this.router.navigate(['/edit-service', service._id]);
  }
}