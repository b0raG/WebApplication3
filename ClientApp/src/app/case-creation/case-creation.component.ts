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
    //Client
    client_afm: null,
    client_amka: null,
    client_firstname: null,
    client_surname: null,

    //Spouse
    spouse_afm: null,
    spouse_amka: null,
    spouse_firstname: null,
    spouse_surname: null,

    //Marriage
    marriage_type: null,
    marriage_place: null,
    marriage_date: null,
    children_number: null ,
    children: [],

    laywer_from_afm: null,
    laywer_to_afm: null,
    laywer_from_email: null,
    laywer_to_email: null,

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
