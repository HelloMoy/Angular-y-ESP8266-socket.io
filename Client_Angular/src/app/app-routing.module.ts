import { NgModule } from '@angular/core';
import{ Routes, RouterModule } from '@angular/router';
import { TemHumComponent } from './components/tem-hum/tem-hum.component';
import { RGBComponent } from './components/rgb/rgb.component';
import { PushBTNComponent } from './components/push-btn/push-btn.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tem-hum', component: TemHumComponent},
  {path: 'rgb', component: RGBComponent},
  {path: 'push', component: PushBTNComponent},
  {path: 'toggle', component: ToggleComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports:[RouterModule]
})

export class AppRoutingModule { }
