import { Component, OnInit } from '@angular/core';
import { ICase } from './case.interface';

@Component({
  selector: 'app-case-creation',
  templateUrl: './case-creation.component.html',
  styleUrls: ['./case-creation.component.css']
})
export class CaseCreationComponent implements OnInit {

  constructor() { }

  model: ICase = {
    afm1: null,
    afm2: null

  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit() {
  }

}
