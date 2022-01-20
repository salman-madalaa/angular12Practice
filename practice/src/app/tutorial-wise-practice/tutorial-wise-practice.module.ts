import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Tutorial12Component } from './tutorial12/tutorial12.component';
import { jqxSplitterModule } from 'jqwidgets-ng/jqxsplitter';
import { Tutorial11Component } from './tutorial11/tutorial11.component';
import { Tutorial13Component } from './tutorial13/tutorial13.component';
import { Tutorial14Component } from './tutorial14/tutorial14.component';
import { Tutorial15Component } from './tutorial15/tutorial15.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { Tutorial16Component } from './tutorial16/tutorial16.component';
import { Tutorial17Component } from './tutorial17/tutorial17.component';
import { Tutorial18Component } from './tutorial18/tutorial18.component';
import { Tutorial19Component } from './tutorial19/tutorial19.component';
import { Tutorial20Component } from './tutorial20/tutorial20.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { Tutorial21Component } from './tutorial21/tutorial21.component';
import { Tutorial22Component } from './tutorial22/tutorial22.component';
import { Tutorial23Component } from './tutorial23/tutorial23.component';
import { Tutorial25Component } from './tutorial25/tutorial25.component';
import { Tutorial24Component } from './tutorial24/tutorial24.component';
import { AngularNgBootstrapModule } from '../angular-ng-bootstrap/angular-ng-bootstrap.module';
import { Tutorial26Component } from './tutorial26/tutorial26.component';
import { Tutorial27Component } from './tutorial27/tutorial27.component';
import { Tutorial28Component } from './tutorial28/tutorial28.component';
import { ChildComponent } from './tutorial27/child/child.component';
import { UserDetailsComponent } from './tutorial28/user-details/user-details.component';
import { Tutorial29Component } from './tutorial29/tutorial29.component';
import { Tutorial30Component } from './tutorial30/tutorial30.component';
import { Tutorial31Component } from './tutorial31/tutorial31.component';
import { Tutorial32Component } from './tutorial32/tutorial32.component';
import { Tutorial33Component } from './tutorial33/tutorial33.component';
import { Child1Component } from './tutorial29/child1/child1.component';
import { Tutorial34Component } from './tutorial34/tutorial34.component';
import { Tutorial35Component } from './tutorial35/tutorial35.component';
import { Tutorial36Component } from './tutorial36/tutorial36.component';
import { USDINRPipe } from '../customePipes/usd-inr.pipe';
import { HttpClientModule } from '@angular/common/http';
import { Tutorial37Component } from './tutorial37/tutorial37.component';
import { Tutorial38Component } from './tutorial38/tutorial38.component';
import { Tutorial39Component } from './tutorial39/tutorial39.component';
import { Tutorial40Component } from './tutorial40/tutorial40.component';
import { Tutorial41Component } from './tutorial41/tutorial41.component';
import { Tutorial42Component } from './tutorial42/tutorial42.component';
import { Tutorial43Component } from './tutorial43/tutorial43.component';
import { Tutorial44Component } from './tutorial44/tutorial44.component';
import { RedElDirective } from './tutorial41/red-el.directive';
import { Tutorial45Component } from './tutorial45/tutorial45.component';
import { Tutorial46Component } from './tutorial46/tutorial46.component';
import { Tutorial47Component } from './tutorial47/tutorial47.component';
import { Tutorial48Component } from './tutorial48/tutorial48.component';
import { Page1Component } from './tutorial45/pages/page1/page1.component';
import { Page2Component } from './tutorial45/pages/page2/page2.component';
import { Page3Component } from './tutorial45/pages/page3/page3.component';
import { Tutorial49Component } from './tutorial49/tutorial49.component';
import { Tutorial50Component } from './tutorial50/tutorial50.component';
import { Tutorial51Component } from './tutorial51/tutorial51.component';
import { Tutorial52Component } from './tutorial52/tutorial52.component';
import { AdminModule } from '../admin/admin.module';
import { Tutorial53Component } from './tutorial53/tutorial53.component';
import { Tutorial54Component } from './tutorial54/tutorial54.component';
import { Tutorial55Component } from './tutorial55/tutorial55.component';
import { Tutorial56Component } from './tutorial56/tutorial56.component';
import { TutorialWisePracticeRoutingModule } from './tutorial-wise-practice-routing.module';
import { Tutorial57Component } from './tutorial57/tutorial57.component';
import { Tutorial58Component } from './tutorial58/tutorial58.component';
import { Tutorial59Component } from './tutorial59/tutorial59.component';
import { Tutorial60Component } from './tutorial60/tutorial60.component';
import { Tutorial61Component } from './tutorial61/tutorial61.component';
import { Tutorial1Component } from './tutorial1/tutorial1.component';
import { Tutorial2Component } from './tutorial2/tutorial2.component';
import { Tutorial3Component } from './tutorial3/tutorial3.component';
import { Tutorial4Component } from './tutorial4/tutorial4.component';
import { Tutorial5Component } from './tutorial5/tutorial5.component';
import { Tutorial6Component } from './tutorial6/tutorial6.component';
import { Tutorial7Component } from './tutorial7/tutorial7.component';
import { Tutorial8Component } from './tutorial8/tutorial8.component';
import { Tutorial9Component } from './tutorial9/tutorial9.component';
import { Tutorial10Component } from './tutorial10/tutorial10.component';
import { InlineStyleExampleComponent } from './tutorial8/inline-style-example/inline-style-example.component';
import { InlineTemplateExampleComponent } from './tutorial8/inline-template-example/inline-template-example.component';
import { BothinlineStyleTemplateComponent } from './tutorial8/bothinline-style-template/bothinline-style-template.component';



@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    Tutorial12Component,
    Tutorial11Component,
    Tutorial13Component,
    Tutorial14Component,
    Tutorial15Component,
    Tutorial16Component,
    Tutorial17Component,
    Tutorial18Component,
    Tutorial19Component,
    Tutorial20Component,
    Tutorial21Component,
    Tutorial22Component,
    Tutorial23Component,
    Tutorial24Component,
    Tutorial25Component,
    Tutorial26Component,
    Tutorial27Component,
    Tutorial28Component,
    ChildComponent,
    UserDetailsComponent,
    Tutorial29Component,
    Tutorial30Component,
    Tutorial31Component,
    Tutorial32Component,
    Tutorial33Component,
    Child1Component,
    Tutorial34Component,
    Tutorial35Component,
    Tutorial36Component,
    Tutorial37Component,
    Tutorial38Component,
    Tutorial39Component,
    Tutorial40Component,
    USDINRPipe,
    Tutorial41Component,
    Tutorial42Component,
    Tutorial43Component,
    Tutorial44Component,
    RedElDirective,
    Tutorial45Component,
    Tutorial46Component,
    Tutorial47Component,
    Tutorial48Component,
    Page1Component,
    Page2Component,
    Page3Component,
    Tutorial49Component,
    Tutorial50Component,
    Tutorial51Component,
    Tutorial52Component,
    Tutorial53Component,
    Tutorial54Component,
    Tutorial55Component,
    Tutorial56Component,
    Tutorial57Component,
    Tutorial58Component,
    Tutorial59Component,
    Tutorial60Component,
    Tutorial61Component,
    Tutorial1Component,
    Tutorial2Component,
    Tutorial3Component,
    Tutorial4Component,
    Tutorial5Component,
    Tutorial6Component,
    Tutorial7Component,
    Tutorial8Component,
    Tutorial9Component,
    Tutorial10Component,
    InlineStyleExampleComponent,
    InlineTemplateExampleComponent,
    BothinlineStyleTemplateComponent,


  ],
  imports: [
    CommonModule,
    TutorialWisePracticeRoutingModule,
    jqxSplitterModule,
    AngularMaterialModule,
    FormsModule,
    RouterModule,
    AngularNgBootstrapModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminModule,
  ],
  bootstrap: [Tutorial24Component],
  exports: [
    Tutorial24Component,
    ChildComponent,
    UserDetailsComponent,
    USDINRPipe,InlineStyleExampleComponent,
    InlineTemplateExampleComponent,
    BothinlineStyleTemplateComponent
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TutorialWisePracticeModule {}
