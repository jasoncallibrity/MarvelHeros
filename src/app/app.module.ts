import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroService } from './services/hero.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingAlert } from './components/loading-alert/loading-alert';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroPaneComponent } from './components/hero-pane/hero-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroDetailComponent,
    LoadingAlert,
    HeroListComponent,
    HeroPaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [HeroService],
  bootstrap: [AppComponent],
  entryComponents: [HeroPaneComponent]
})
export class AppModule { }
