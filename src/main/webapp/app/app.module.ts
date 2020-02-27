import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ScumBoardSharedModule } from 'app/shared/shared.module';
import { ScumBoardCoreModule } from 'app/core/core.module';
import { ScumBoardAppRoutingModule } from './app-routing.module';
import { ScumBoardHomeModule } from './home/home.module';
import { ScumBoardEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ScumBoardSharedModule,
    ScumBoardCoreModule,
    ScumBoardHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ScumBoardEntityModule,
    ScumBoardAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class ScumBoardAppModule {}
