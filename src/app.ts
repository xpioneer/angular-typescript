import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import '@angular/compiler';
import { AppModule } from './app/app.module';
// import './assets/less/index.less';
import './styles/index.less';
import '@/styles/tailwind.css'
import 'ng-zorro-antd/ng-zorro-antd.css';
// import 'quill/dist/quill.bubble.css';
// import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import registerServiceWorker from './registerServiceWorker'

// declare var module: any;
// if (module.hot) {
//     module.hot.accept();
// }

if (import.meta.env.PROD) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule).catch((e) => console.error(e));
registerServiceWorker()