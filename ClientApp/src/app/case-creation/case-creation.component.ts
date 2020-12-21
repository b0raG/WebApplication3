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
    laywer1_afm: null,
    laywer2_afm: null,
    laywer1_email: null,
    laywer2_email: null,
    client_afm: null,
    spouse_afm: null,
    client_amka: null,
    spouse_amka: null,
    client_firstname: null,
    spouse_firstname: null,
    client_surname: null,
    spouse_surname: null,
    marriage_type: null,
    marriage_place: null,
    marriage_date: null,
    children_number: null ,
    children: []

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
