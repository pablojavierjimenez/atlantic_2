import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { CommonPageComponent } from './layouts/common-page/common-page.component';



@NgModule({
  declarations: [LandingPageComponent, CommonPageComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
