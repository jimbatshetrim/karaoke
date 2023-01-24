import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SongListingComponent } from './song-listing/song-listing.component';
import { AudioComponent } from './player/audio/audio.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SongListingComponent,
    AudioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
