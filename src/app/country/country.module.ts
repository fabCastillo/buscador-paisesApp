import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ShowCountryComponent } from './pages/show-country/show-country.component';
import { RouterModule } from '@angular/router';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';



@NgModule({
  declarations: [
    ByCountryComponent,
    ByCapitalComponent,
    ByRegionComponent,
    ShowCountryComponent,
    CountryTableComponent,
    CountryInputComponent
  ],
  exports: [
    ByCountryComponent,
    ByCapitalComponent,
    ByRegionComponent,
    ShowCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
