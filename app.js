class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    welcome(){
        console.log(`Welcome ${this.name} ${this.email} you have a User access`)
    }
    logIn(){
        console.log(`${this.email} just log in`);
    }
    logOut(){
        console.log(`${this.email} just log out`)
    }
}
class Admin extends User{
    constructor(name,email,years){
        super(name,email);
        this.yearsOfExperience = years;
    }


    static welcome(){
        console.log(`Welcome ${this.name} ${this.email} you have a Admin access and you have ${this.yearsOfExperience} years of experience`)
    }
    static print(){
        console.log(`static method`);
    }
}
let admin = new Admin('Mim','MIM@gmail.com',3);
let userOne = new User('Nike','nike@gmail.com');
let userTwo = new User('Nike','nike@gmail.com');
let userThree = new User('Nike','nike@gmail.com');
