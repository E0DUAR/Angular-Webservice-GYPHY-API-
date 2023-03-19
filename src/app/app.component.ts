import { Component } from '@angular/core';

import { GiphyService } from './services/giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularwebservice';

  query: string = '';
  gifs: any[] = [];

  constructor(private giphyService: GiphyService) { }

  buscar() {
    this.giphyService.buscarGIFs(this.query)
      .subscribe((gifs: any[]) => this.gifs = gifs);
  }
}
