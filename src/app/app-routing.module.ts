import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/offline/components/landing/landing.component';
import { LoginComponent } from './pages/offline/components/login/login.component';
import { SignUpComponent } from './pages/offline/components/sign-up/sign-up.component';
import { HomeComponent } from './pages/online/components/home/home.component';
import { LoadingComponent } from './common-components/loading/loading.component';

const routes: Routes = [
  {path: "",  children: [
    {path: "", component: LandingComponent},
    {path: "login", component: LoginComponent},
    {path: "sign_up", component: SignUpComponent},
    {path: "loading", component: LoadingComponent}

  ]},

  {path: "main", children: [
    {path: "", component: HomeComponent}
  ]}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
