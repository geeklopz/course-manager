import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { Error404Component } from './component/error404/error.404.component';

@NgModule({
  declarations: [
    NavbarComponent,
    Error404Component
  ],
  imports: [
    RouterModule.forChild([
      {
        // 404
        path: '**', component: Error404Component
      }
    ])
  ],
  exports: [
    NavbarComponent
  ]
})

export class CoreModule {}
