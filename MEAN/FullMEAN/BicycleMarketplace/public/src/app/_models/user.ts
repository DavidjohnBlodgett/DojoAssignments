export class User {
    constructor(
    public _id: any = "",
    public first_name: string = "",
    public last_name: string = "",
    public email: string = "",
    public password: string = "",
    public conf_pass: string = ""
    // public created_at: Date = new Date(),
    // public updated_at: Date = new Date()
  ){}
}
