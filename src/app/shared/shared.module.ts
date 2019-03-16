import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { SiteLayoutComponent } from './components/site-layout/site-layout.component';
import { SiteLayoutFooterComponent } from './components/site-layout-footer/site-layout-footer.component';
import { SiteLayoutHeaderComponent } from './components/site-layout-header/site-layout-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SiteLayoutComponent, SiteLayoutFooterComponent, SiteLayoutHeaderComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [
    SiteLayoutComponent,
    SiteLayoutFooterComponent,
    SiteLayoutHeaderComponent
  ]
})
export class SharedModule { }
