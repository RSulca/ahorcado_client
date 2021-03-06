import { Component, ElementRef, OnInit } from '@angular/core';
import { WordsService } from './services/words.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ahorcado';

  words: any[] = [];

  constructor(private _word: WordsService) {
  }

  ngOnInit() {
    this.getWords();
  }

  getWords() {
    this._word.getWord().subscribe((res: any) => {
      this.words = res.data;
    })
  }

  createWord(word: any) {
    this._word.createWord(word.value).subscribe(res => {
      this.getWords();
      word.value = "";
    });
  }

  delete(id: string) {
    this._word.deleteWord(id).subscribe(res => {
      this.getWords()
    });
  }

}
