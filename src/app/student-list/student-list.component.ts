import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

//create sample data
 studentList : Student[] = [
new Student("Hieu","Ngo","cpu1@mail",20),
new Student("Adf","Jhg","cpu2@mail",22),
new Student("Dks","Su","cpu3@mail",30),
new Student("Trang","Ha","cpu4@mail",40)
];

  constructor() { }

  ngOnInit(): void {
  }

}
