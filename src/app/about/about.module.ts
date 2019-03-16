import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { AboutRountingModule } from './about-routing.module';


@NgModule({
    imports:[CommonModule, AboutRountingModule],
    declarations: [AboutComponent]
})

export class AboutModule {}