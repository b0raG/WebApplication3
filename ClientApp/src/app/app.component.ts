import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('el');

    //const browserLang = translate.getBrowserLang();
   // translate.use(browserLang.match(/en|el/) ? browserLang : 'en');
    translate.use('el');
  }
}
