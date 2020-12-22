import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { ICaseCreateRequest } from '../case-creation/case.interface';

@Component({
  selector: 'app-create-case-reactive',
  templateUrl: './create-case-reactive.component.html',
  styleUrls: ['./create-case-reactive.component.css']
})
export class CreateCaseReactiveComponent implements OnInit {

  private _http: HttpClient;
  private baseurl: string
  constructor(private fb: FormBuilder, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._http = http;
    this.baseurl = baseUrl;
  }

  disabled = false;


  caseForm = this.fb.group({
    client_afm: [''],
    client_amka: [''],
    client_firstname: [''],
    client_surname: [''],

    //Spouse
    spouse_afm: [''],
    spouse_amka: [''],
    spouse_firstname: [''],
    spouse_surname: [''],

    //Marriage
    marriage_type: [{ value: '', disabled: this.disabled }],
    marriage_place: [''],
    marriage_date: [''],
    children_number: [''],
    children: [],

    lawyer_from_afm: [{ value: 'comes from taxis 12345', disabled: true }, Validators.required],
    lawyer_to_afm: [''],
    lawyer_from_email: [''],
    lawyer_to_email: [''],
  })



  ngOnInit() {
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    this._http.post<ICaseCreateRequest>(this.baseurl + 'api/Cases', this.caseForm.value).subscribe((result: any) => {
      console.log(result);
    });
  }

  get client_afm() { return this.caseForm.get('client_afm'); }
  get client_amka() { return this.caseForm.get('client_amka'); }
  get client_firstname() { return this.caseForm.get('client_firstname'); }
  get client_surname() { return this.caseForm.get('client_surname'); }

  //Spouse
  get spouse_afm() { return this.caseForm.get('spouse_afm'); }
  get spouse_amka() { return this.caseForm.get('spouse_amka'); }
  get spouse_firstname() { return this.caseForm.get('spouse_firstname'); }
  get spouse_surname() { return this.caseForm.get('spouse_surname'); }

  //Marriage  
  get marriage_type() { return this.caseForm.get('marriage_type'); }
  get marriage_place() { return this.caseForm.get('marriage_place'); }
  get marriage_date() { return this.caseForm.get('marriage_date'); }
  get children_number() { return this.caseForm.get('children_number'); }

  get lawyer_from_afm() { return this.caseForm.get('lawyer_from_afm'); }
  get lawyer_to_afm() { return this.caseForm.get('lawyer_to_afm'); }
  get lawyer_from_email() { return this.caseForm.get('lawyer_from_email'); }
  get lawyer_to_email() { return this.caseForm.get('lawyer_to_email'); }
}
