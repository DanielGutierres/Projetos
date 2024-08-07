import { NewMomentsComponent } from './components/pages/new-moments/new-moments.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [
   {path: '', component: HomeComponent},  //'' significa Home 
   {path: 'about', component: AboutComponent},
   {path: 'moments/new', component: NewMomentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
