import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'studentgroups';
  students: any[] = []; // Changed to an array to hold multiple student records
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    const url = 'https://ca5e9a773c385a7210fe.free.beeceptor.com/api/users/';
    this.http.get<any[]>(url).subscribe({
      next: (data) => {
        this.students = data; // Store the fetched data
      },
      error: (err) => {
        console.error('Error fetching students:', err);
      }
    });
  } 
}
