import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [CommonModule,
    importProvidersFrom(HttpClientModule), provideAnimationsAsync(),importProvidersFrom(AppRoutingModule)  // Agrega esta línea
  ],
})
  .catch((err) => {
    console.error('Error during bootstrap:', err);
    alert('An error occurred during application bootstrap. Please check the console for more details.');
  });
