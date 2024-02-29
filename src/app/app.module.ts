import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { TemplateComponent } from './template/template.component';
import { FirstPageComponent } from './shared/first-page/first-page.component';
import { SecondPageComponent } from './shared/second-page/second-page.component';
import { ThirdPageComponent } from './shared/third-page/third-page.component';
import { FourthPageComponent } from './shared/fourth-page/fourth-page.component';
import { FifthPageComponent } from './shared/fifth-page/fifth-page.component';
import { SixthPageComponent } from './shared/sixth-page/sixth-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SeventhPageComponent } from './shared/seventh-page/seventh-page.component';
import { MainComponent } from './shared/main/main.component';
import {MatMenuModule} from '@angular/material/menu';
import { WhyUsComponent } from './why-us/why-us.component';
import { LandPageComponent } from './shared/land-page/land-page.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { FullVsWealthComponent } from './components/full-vs-wealth/full-vs-wealth.component';
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
import {MatExpansionModule} from '@angular/material/expansion';
// import {MatDividerModule} from '@angular/material/divider';


// import { OwlModule } from 'ngx-owl-carousel-o';
// import {OwlModule} from 'ngx-owl-carousel-o';
// import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    TemplateComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    SixthPageComponent,
    FooterComponent,
    SeventhPageComponent,
    MainComponent,
    WhyUsComponent,
    LandPageComponent,
    HomeDashboardComponent,
    FullVsWealthComponent,
    FullVsWealth2Component,
    AccountingForHireComponent,
    FinancialManagementComponent,
    FinComponent,
    BusinessAnalysisComponent,
    TaxConsulationComponent,
    SoftwareComponent,
    AboutUsComponent,
    FullVsWealth3Component,
    FAQComponent,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatExpansionModule
    // CarouselModule
    // OwlOptions
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
