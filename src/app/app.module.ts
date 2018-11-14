import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete/delete.component';
import { AutoFocusComponent } from './delete/auto-focus/auto-focus.component';
import { FormsModule } from '@angular/forms';
import { CapitalizeFirstPipePipe } from './capitalize-first-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    AddComponent,
    DeleteComponent,
    AutoFocusComponent,
    CapitalizeFirstPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [CapitalizeFirstPipePipe],
  bootstrap: [AppComponent],
  entryComponents: [AutoFocusComponent]
})
export class AppModule { }
