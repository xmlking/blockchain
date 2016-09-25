import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { aboutRouting } from './about.routing';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    aboutRouting
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
