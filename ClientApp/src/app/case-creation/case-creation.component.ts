import { Component, Inject, OnInit } from '@angular/core';
import { ICaseCreateRequest } from './case.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-case-creation',
  templateUrl: './case-creation.component.html',
  styleUrls: ['./case-creation.component.css']
})
export class CaseCreationComponent implements OnInit {

  private _http: HttpClient;
  private baseurl: string

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._http = http;
    this.baseurl = baseUrl;
  }

  model: ICaseCreateRequest = {
    laywer1afm: null,
    laywer2afm: null

  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this._http.post<ICaseCreateRequest>(this.baseurl + 'api/Cases', this.model).subscribe((result: any) => {
      console.log(result);
    });
  }

  ngOnInit() {
  }

}
