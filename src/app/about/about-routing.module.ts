import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SiteLayoutComponent } from '../shared/components/site-layout/site-layout.component';

const routes: Routes = [
    {
      path: '',
      component: SiteLayoutComponent,
      children: [
        {
          path: 'about',
          component: AboutComponent
        }
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AboutRountingModule {}