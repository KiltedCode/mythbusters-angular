import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ParksService } from './shared/parks.service';
import { ThemeParksComponent } from './theme-parks/theme-parks.component';
import { ThemeParksListComponent } from './theme-parks/theme-parks-list/theme-parks-list.component';
import { ThemeParkDetailsComponent } from './theme-parks/theme-park-details/theme-park-details.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeParksComponent,
    ThemeParksListComponent,
    ThemeParkDetailsComponent,
    AboutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ParksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
