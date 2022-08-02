import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { assetUrl } from 'src/single-spa/asset-url';


@Component({
  selector: 'mf-sidenav-izquierdo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild("list") list!: ElementRef;

  title = 'admin-panel-layout';
  sideBarOpen = false;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  mostrarLista(){
   this.list.nativeElement.classList.toggle('newlist');
  }

  selectedLanguage = 'en';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
}

toogleLanguage(lang: string) {
  this.translateService.use(lang);
}


}
