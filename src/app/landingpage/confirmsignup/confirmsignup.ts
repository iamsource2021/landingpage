export class Confirmsignup {
  constructor(
    public email: string,
    public code:string
  ){}

  setEntities(entity){
    this.email = entity.email;
    this.code = entity.code;
  }
}
