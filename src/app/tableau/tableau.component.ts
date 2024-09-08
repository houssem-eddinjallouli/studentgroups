import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-tableau',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css'] // Corrected to styleUrls
})
export class TableauComponent implements OnInit {
  students: any[] = [];
  groupedStudents: { [key: string]: any[] } = {}; // Object to hold grouped students
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    const url = 'https://hamed-jallouli-418eee7bda96.herokuapp.com/credit/show-all-customers';
    this.http.get<any[]>(url).subscribe({
      next: (data) => {
        const uniqueStudents = new Map();
console.log(data)
        data.forEach(student => {
          if (!uniqueStudents.has(student.name)) {
            uniqueStudents.set(student.name, student);
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
      if (!this.groupedStudents[student.email]) {
        this.groupedStudents[student.email] = []; // Initialize if class doesn't exist
      }
      this.groupedStudents[student.email].push(student); // Add student to the class
    });
  }
}