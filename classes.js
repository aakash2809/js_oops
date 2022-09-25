// classes introduced in ES6 internally classes are converted in constructor function 

/**
 * by useing class whatevere methods we created inside it they are creted inside prototype
 * which are global and access by each object
 * classes are not hoiested
 */

 //const aakashAccount = new BankAccount('aakash', 1000)
class BankAccount {
   customerName;
   accountNumber;
   balance;

   constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();
   }
   
   deposit(amount) {
    this.balance +=  amount;
   }

   withdrow(amount) {
    this.balance -=  amount;
   }
}

const aakashAccount = new BankAccount('aakash', 1000)
console.log('before deposit',aakashAccount);
aakashAccount.deposit(1000);
console.log ("after deposit", aakashAccount);