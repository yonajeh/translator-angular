import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'my-content',
  templateUrl: './my-content.component.html',
  styleUrls: ['./my-content.component.css']
})
export class MyContentComponent implements OnInit {

  text: string = '';
  textTraduit: string = '';
  langFrom: string = '';
  langTo: string = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }


  traduire() {
    // text a traduire + langFrom + langTo
    // call au backend
    const url = "https://just-translated.p.rapidapi.com/?lang=" + this.langFrom + "-" + this.langTo + "&text=" + this.text
    console.log('URL : ', url);

    const headers = new HttpHeaders()
      .set('X-Rapidapi-Key', '3628e260bcmshca4d6a45f5e4aa2p1c994bjsne41d8ea97ec0');

    this.http.get(url, {headers: headers}).subscribe(
      data => this.showResult(data),
      error => console.log(error),
      () => console.log("done")
    )

  }


  showResult(data: any) {
    this.textTraduit = data.text;
  }

}
