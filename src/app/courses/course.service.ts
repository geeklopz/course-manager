import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";


// dependence inject
@Injectable({
  providedIn: 'root' // carrega na inicializacao da app
})

export class CourseService {

  // baseUrl API
  private courseUrl: string = 'http://localhost/api/courses';

  constructor(private httpClient: HttpClient){}

  // method return all courses
  retrieveAll(): Observable<Course[]> {
    //return COURSES;
    // Observable
    return this.httpClient.get<Course[]>(this.courseUrl);
  };

  retrieveById(id: number): Observable<Course> { // : Course
    //return COURSES.find((courseIterator: Course) => courseIterator.id === id);
    return this.httpClient.get<Course>(`${this.courseUrl}/${id}`);
  };

  //save
  save(course: Course): Observable<Course> {
    if(course.id) {
      // const index = COURSES.findIndex((courseIterator: Course) => courseIterator.id === course.id);
      // COURSES[index] = course;
      return this.httpClient.put<Course>(`${this.courseUrl}/${course.id}`, course);
    } else {
      return this.httpClient.post<Course>(`${this.courseUrl}`, course);
    }
  };

  // delete
  // no-content
  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.courseUrl}/${id}`);
  }

}

// data
let COURSES: Course[] = [
  {
    id: 1,
    name: 'Angular: CLI',
    releaseDate: 'January 22, 2021',
    description: 'Principais conhecimentos sobre recursos do CLI.',
    duration: 120,
    code: 'XPS-8700',
    rating: 4,
    price: 15.99,
    imageUrl: '/assets/images'
  },
  {
    id: 2,
    name: 'Angular: Forms',
    releaseDate: 'January 21, 2021',
    description: 'Principais conhecimentos sobre recursos de formulário',
    duration: 80,
    code: 'SKO-5937',
    rating: 5,
    price: 10.99,
    imageUrl: '/assets/images'
  },
  {
    id: 3,
    name: 'Angular: HTTP',
    releaseDate: 'January 20, 2021',
    description: 'Principais conhecimentos sobre recursos de http.',
    duration: 40,
    code: 'NPK-1976',
    rating: 2.5,
    price: 5.99,
    imageUrl: '/assets/images'
  },
];
