export interface ICaseCreateRequest {

  client_afm: number,
  client_amka: number,
  client_firstname: string,
  client_surname: string,

  spouse_afm: number,
  spouse_amka: number,
  spouse_firstname: string,
  spouse_surname: string,

  marriage_type: string,
  marriage_place: string,
  marriage_date: Date,

  laywer_from_afm: number,
  laywer_to_afm: number,
  laywer_from_email: string,
  laywer_to_email: string,
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
