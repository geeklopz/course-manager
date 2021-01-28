import { CourseService } from './course.service';
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  //selector: 'app-course-list', // without route
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  filteredCourses: Course[] = [];
  _courses: Course[] = [];
  _filterBy: string;

  ngOnInit(): void {

    this.retrieveAll();

    //this._courses = this.courseService.retrieveAll();
    //this.filteredCourses = this._courses;

    // this.courses = [
    //   {
    //     id: 1,
    //     name: 'Angular: Forms',
    //     imageUrl: '/assets/images/',
    //     price: 99.99,
    //     code: 'XPS-8796',
    //     duration: 120,
    //     rating: 4.5
    //   },
    //   {
    //     id: 2,
    //     name: 'Angular: HTTP',
    //     imageUrl: '/assets/images/',
    //     price: 45.99,
    //     code: 'DLC-8796',
    //     duration: 80,
    //     rating: 4
    //   }
    // ]
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      // callbacks
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: err => console.log('Error: ', err)
    });
  }

  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Deleted with success');
        this.retrieveAll();
      },
      error: err => console.log('Error: ', err)
    })
  }

  // set info
  set filter(value: string) {
    this._filterBy = value;

    // match
    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  };

  // get info
  get filter(){
    return this._filterBy;
  };

}
