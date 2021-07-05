import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [BrowserModule, FormsModule, MatButtonModule, MatIconModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
