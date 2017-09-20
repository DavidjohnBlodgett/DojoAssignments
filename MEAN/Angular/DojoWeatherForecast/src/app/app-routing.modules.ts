import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', pathMatch: 'full', component: SeattleComponent },
    { path: 'seattle', pathMatch: 'full', component: SeattleComponent },
    { path: 'sanjose', pathMatch: 'full', component: SanjoseComponent },
    // { path: 'seattle', pathMatch: 'full', component: SeattleComponent },
    // { path: 'seattle', pathMatch: 'full', component: SeattleComponent },
    // { path: 'seattle', pathMatch: 'full', component: SeattleComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
