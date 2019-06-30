import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';

//added hammerjs for touch animationss
import 'hammerjs';
import { EventManagerModule } from './app/event/event-manager.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(EventManagerModule)
  .catch(err => console.error(err));
