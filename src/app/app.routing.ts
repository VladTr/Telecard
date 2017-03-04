import {Routes, RouterModule} from "@angular/router";
import {ProductComponent} from "./product/product.component";
import {HomeComponent} from "./home/home.component";
import {NewsComponent} from "./news/news.component";
import {SolutionComponent} from "./solution/solution.component";
import {PageNotFoundComponent} from "./page-not-found.component";
import {AboutComponent} from "./about/about.component";
const APP_ROUTES:Routes=[
    { path:'', component:HomeComponent },
    { path:'about/:id', component:AboutComponent },
    { path:'product/:id', component:ProductComponent },
    { path:'solution/:id', component:SolutionComponent },
    { path:'news', component:NewsComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const routing=RouterModule.forRoot(APP_ROUTES);
