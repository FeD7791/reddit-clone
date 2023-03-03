import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';

//Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
//Font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  declarations: [AppComponent, ArticleComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FontAwesomeModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
