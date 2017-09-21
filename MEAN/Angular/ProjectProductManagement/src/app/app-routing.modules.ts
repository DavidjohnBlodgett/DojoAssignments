import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductsNewComponent } from './products-new/products-new.component'
import { ProductsEditComponent } from './products-edit/products-edit.component';

const routes: Routes = [

    { path: 'home', pathMatch: 'full', component: HomeComponent},
    { path: 'products', pathMatch: 'full', component: ProductsComponent},
    { path: 'products/new', pathMatch: 'full', component: ProductsNewComponent},
    { path: 'products/edit/:id', pathMatch: 'full', component: ProductsEditComponent},
    { path: '', pathMatch: 'full', redirectTo: '/home' }
    // { path: 'seattle', pathMatch: 'full', component: SeattleComponent },
    // { path: 'seattle', pathMatch: 'full', component: SeattleComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
