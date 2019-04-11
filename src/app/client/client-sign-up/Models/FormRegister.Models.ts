export class ClientRegister{
    lastname : string = '';
    firstname : string = '';
    dob : Date = null;
    phone : string = '';
    sexe:string='';
    adresse : Adresse = new Adresse();
    email : string = '';
    pwd : string = '';
    cpwd : string = '';

    constructor(){}

    clear(){
        this.lastname = '';
        this.firstname = '';
        this.dob = null;
        this.phone = '';
        this.adresse = new Adresse();
        this.email = '';
        this.pwd = '';
        this.sexe = '';
        this.cpwd = '';
    }
}

export class Personal{
    lastname : string = '';
    firstname : string = '';
    dob : Date;
    phone : string = '';
    sexe:string = '';

    constructor(){}
}

export class Adresse {
    street : string;
    city : string;
    state : string;
    zipcode : number;
    constructor(){
    }
}

export class Account{
    email : string = '';
    pwd : string = '';
    cpwd : string = '';
    constructor(){

    }
}
