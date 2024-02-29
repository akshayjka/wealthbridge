import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { MainComponent } from './shared/main/main.component';
import { LandPageComponent } from './shared/land-page/land-page.component';
import { FullVsWealth2Component } from './components/full-vs-wealth2/full-vs-wealth2.component';
import { AccountingForHireComponent } from './service-offered/accounting-for-hire/accounting-for-hire.component';
import { FinancialManagementComponent } from './service-offered/financial-management/financial-management.component';
import { FinComponent } from './service-offered/fin/fin.component';
import { BusinessAnalysisComponent } from './service-offered/business-analysis/business-analysis.component';
import { TaxConsulationComponent } from './service-offered/tax-consulation/tax-consulation.component';
import { SoftwareComponent } from './service-offered/software/software.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FullVsWealth3Component } from './components/full-vs-wealth3/full-vs-wealth3.component';
import { FAQComponent } from './components/faq/faq.component';

const routes: Routes = [
  {
    path:'', redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'top-bar', component:TopbarComponent
  },
  {
    path:'main', component:MainComponent
  },
  {
    path:'land', component:LandPageComponent
  },
  {
    path:'full-vs-wealth', component:FullVsWealth2Component
  },
  {
    path:'acc-for-hire', component:AccountingForHireComponent
  },
  {
    path:'fin-management', component:FinancialManagementComponent
  },
  {
    path:'fin', component: FinComponent
  },
  {
    path:'business', component:BusinessAnalysisComponent
  },
  {
    path:'tax', component:TaxConsulationComponent
  },
  {
    path:'software', component:SoftwareComponent
  },
  {
    path:'about-us', component:AboutUsComponent
  },
  {
    path:'full' , component:FullVsWealth3Component
  },
  {
    path : 'faq', component:FAQComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top', // Add this option
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
