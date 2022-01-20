import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material/angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModules } from './common/common.module';
import { TutorialWisePracticeModule } from './tutorial-wise-practice/tutorial-wise-practice.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AngularNgBootstrapModule } from './angular-ng-bootstrap/angular-ng-bootstrap.module';
import { USDINRPipe } from './customePipes/usd-inr.pipe';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TutorialWisePracticeModule,
    CommonModules,
    AngularMaterialModule,
    FormsModule,
    AngularNgBootstrapModule,
    UserModule
  ],
  providers: [],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  exports: [USDINRPipe]
})
export class AppModule { }
