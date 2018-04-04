import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoverFormComponent } from './rover-form/rover-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
  path: '',
  component: RoverFormComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
