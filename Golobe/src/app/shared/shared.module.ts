import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterSubscribeComponent } from './components/footer-subscribe/footer-subscribe.component';

const ExportableModules = [
  CommonModule,
  SharedRoutingModule,
  AngularMaterialModule
]
const ExpotableComponents = [
  HeaderComponent,
  FooterComponent,
  FooterSubscribeComponent,
  
]

@NgModule({
  declarations: ExpotableComponents,
  imports: ExportableModules,
  exports: [ExportableModules, ExpotableComponents],
})
export class SharedModule { }
