import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../services/words.service';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {

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
    if(word.value===""){
      return;
    }
    this._word.createWord(word.value.toLowerCase()).subscribe(res => {
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
