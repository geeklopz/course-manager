import { CourseService } from './course.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";

@Component({
  templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {

  //courseId: number|null|string;
  course: Course|any;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){ }

  ngOnInit(): void {
    // get course by ID
    this.course = this.courseService.retrieveById(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '')).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error: ', err)
    }); // + convert to number
  }

  // save course
  save(): void {
    this.courseService.save(this.course).subscribe({
      next: course => console.log('Saved with success', course),
      error: err => console.log('Error: ', err)
    });
  }

  // delete course


}
