import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { RecomComponent } from './components/recom/recom.component';
import { LogsignComponent } from './components/logsign/logsign.component';
import { FavsComponent } from './components/favs/favs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatsComponent } from './components/Stats/stats/stats.component';
import { StatOpenerComponent } from './components/Stats/stat-opener/stat-opener.component';
import { RouteguardService } from './services/routeguard.service';
import { LoginguardService } from './services/loginguard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LogsignComponent,
    canActivate: [LoginguardService]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [RouteguardService]
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [RouteguardService]
  },
  {
    path: 'stats',
    component: StatsComponent,
    canActivate: [RouteguardService]
  },
  {
    path: 'favs',
    component: FavsComponent,
    canActivate: [RouteguardService]
  },
  {
    path: 'recom',
    component: RecomComponent,
    canActivate: [RouteguardService]
  },
  {
    path: 'statOpener/:pid/view',
    component: StatOpenerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
