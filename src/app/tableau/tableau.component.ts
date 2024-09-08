import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Route } from '@angular/router';


@Component({
  selector: 'app-tableau',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tableau.component.html',
  styleUrl: './tableau.component.css'
})
export class TableauComponent {
  students: any[] = [];
  groupedStudents: { [key: string]: any[] } = {}; // Object to hold grouped students
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    const url = 'https://ca5e9a773c385a7210fe.free.beeceptor.com/api/users/';
    this.http.get<any[]>(url).subscribe({
      next: (data) => {
        const uniqueStudents = new Map();

        data.forEach(student => {
          if (!uniqueStudents.has(student.id)) {
            uniqueStudents.set(student.id, student);
          }
        });

        this.students = Array.from(uniqueStudents.values());
        this.groupStudentsByClass(); // Call method to group students
      },
      error: (err) => {
        console.error('Error fetching students:', err);
      }
    });
  }

  groupStudentsByClass(): void {
    this.students.forEach(student => {
      if (!this.groupedStudents[student.class]) {
        this.groupedStudents[student.class] = []; // Initialize if class doesn't exist
      }
      this.groupedStudents[student.class].push(student); // Add student to the class
    });
  }
}
