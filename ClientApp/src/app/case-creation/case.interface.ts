export interface ICaseCreateRequest {
  laywer1_afm: number,
  laywer2_afm: number,
  laywer1_email: string,
  laywer2_email: string,
  client_afm: number,
  spouse_afm: number,
  client_amka: number,
  spouse_amka: number,
  client_firstname: string,
  spouse_firstname: string,
  client_surname: string,
  spouse_surname: string,
  marriage_type: string,
  marriage_place: string,
  marriage_date: Date,
  children_number: number,
  children: IMarriageChild[]

}

export interface IMarriageChild {
  firstname: string,
  surname: string,
  birthdate:Date
}

export class Case {
  public afm1: number;
  public afm2: number;
}
