import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Langue} from "../langue";

@Component({
  selector: 'select-lang',
  templateUrl: './select-lang.component.html',
  styleUrls: ['./select-lang.component.css']
})
export class SelectLangComponent implements OnInit {
  lang: string = '';

  langues: Langue [] = [
    {abbrv: 'ar', nom: 'Arabe'},
    {abbrv: 'fr', nom: 'Francais'},
    {abbrv: 'de', nom: 'Allmand'},
    {abbrv: 'en', nom: 'Anglais'}
  ];

  @Output() langueSelectionne = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this.langueSelectionne.emit(this.lang);
  }
}
