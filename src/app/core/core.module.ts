import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonPageComponent } from './layouts/common-page/common-page.component';
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrandTopColorBarComponent } from './components/brand-top-color-bar/brand-top-color-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CommonPageComponent,
    LandingPageComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    BrandTopColorBarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LandingPageComponent,
    CommonPageComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    BrandTopColorBarComponent,
  ],
})
export class CoreModule {}
