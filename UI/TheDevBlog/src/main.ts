import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component'; // Root component
import { routes } from './app/app.routes'; // Import routes

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provide the routes
    provideHttpClient() // Provide HttpClientModule
  ]
}).catch(err => console.error(err));
