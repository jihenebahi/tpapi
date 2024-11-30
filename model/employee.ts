export class Employee {
  constructor(
    public id: number,
    public firstName: string,   // Renommer 'name' en 'firstName'
    public lastName: string,    // Ajouter 'lastName' si nécessaire
    public emailId: string,     // Assurez-vous que ces champs existent
    public status: string       // Ajouter la propriété 'status'
  ) {}
}