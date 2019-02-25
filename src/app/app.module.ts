import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { BlogComponent } from './blog/blog.component';
import { DocsComponent } from './docs/docs.component';
import { ResourcesComponent } from './resources/resources.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    BlogComponent,
    DocsComponent,
    ResourcesComponent,
    BlogPostComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
