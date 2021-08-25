import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VolumeComponent } from './components/volume/volume.component';
import { VolumesComponent } from './components/volumes/volumes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule }   from '@angular/forms';
import { VolumeDetalheComponent } from './volume-detalhe/volume-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    VolumeComponent,
    VolumesComponent,
    VolumeDetalheComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
