import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private giphyApiUrl = 'https://api.giphy.com/v1/gifs';
  private giphyApiKey = 'SLp7HQClQ5YRE29MrGQLrienqz4FSwpC';

  constructor(private http: HttpClient) { }



  buscarGIFs(query: string): Observable<any> {
    const url = `${this.giphyApiUrl}/search?api_key=${this.giphyApiKey}&q=${query}&limit=10`;
    return this.http.get(url).pipe(
      map((response: any) => response.data)
    );
  }
}
