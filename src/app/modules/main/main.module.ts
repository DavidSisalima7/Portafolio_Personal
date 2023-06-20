import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CollaborationsComponent } from './components/collaborations/collaborations.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ItemSkillsComponent } from './components/skills/item-skills/item-skills.component';


@NgModule({
  declarations: [
    MainComponent,
    AboutMeComponent,
    CollaborationsComponent,
    JobsComponent,
    MainViewComponent,
    SkillsComponent,
    ItemSkillsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
