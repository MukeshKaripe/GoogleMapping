import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';  // Standalone root component
import { routes } from './app/app.routes';  // Route configuration

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
