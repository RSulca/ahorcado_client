import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(private http: HttpClient) {
  }

  getWord() {
    return this.http.get(`${environment.url_base}/api/words`);
  }

  createWord(word: String) {
    return this.http.post(`${environment.url_base}/api/words`, { word });
  }

  deleteWord(id: string) {
    return this.http.delete(`${environment.url_base}/api/words/${id}`);
  }

}
