import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HealthcareService } from '../../services/healthcare.service';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-service-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">{{editing ? 'Edit' : 'Add'}} Service</h2>
      <form (ngSubmit)="onSubmit()" #serviceForm="ngForm" class="max-w-lg">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Service Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            [(ngModel)]="service.name"
            required
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            [(ngModel)]="service.description"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            [(ngModel)]="service.price"
            required
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
        </div>
        
        <div class="flex gap-4">
          <button 
            type="submit"
            [disabled]="!serviceForm.form.valid"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {{editing ? 'Update' : 'Add'}} Service
          </button>
          
          <button 
            type="button"
            (click)="cancel()"
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  `
})
export class ServiceFormComponent implements OnInit {
  service: Service = {
    name: '',
    description: '',
    price: 0
  };
  editing = false;
  serviceId: string | null = null;

  constructor(
    private healthcareService: HealthcareService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Check if we're editing an existing service
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.editing = true;
        this.serviceId = params['id'];
        this.loadService(params['id']);
      }
    });
  }

  loadService(id: string): void {
    this.healthcareService.getServices().subscribe({
      next: (services) => {
        const service = services.find(s => s._id === id);
        if (service) {
          this.service = { ...service };
        } else {
          this.router.navigate(['/services']);
        }
      },
      error: (error) => {
        console.error('Error loading service:', error);
        this.router.navigate(['/services']);
      }
    });
  }

  onSubmit(): void {
    if (this.editing && this.serviceId) {
      this.healthcareService.updateService(this.serviceId, this.service).subscribe({
        next: () => {
          this.router.navigate(['/services']);
        },
        error: (error) => console.error('Error updating service:', error)
      });
    } else {
      this.healthcareService.addService(this.service).subscribe({
        next: () => {
          this.router.navigate(['/services']);
        },
        error: (error) => console.error('Error adding service:', error)
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/services']);
  }
}