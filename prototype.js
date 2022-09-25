// constructor function
function BankAccount(customerName, balance = 0 ){
    this.customerName = customerName ;
    this.accountNumber = Date.now();
    this.balance = balance;
}

/**
 * prototype ----- by creating methods in this way memory will created in global space
 * not created for each object
 * @param {*} amount 
 */
BankAccount.prototype.deposit = function(amount) {
        this.balance += amount;
}

BankAccount.prototype.withdraw =  function (amount) {
    this.balance -= amount;
}

const accounts = [];
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

const depositForm = document.querySelector('#depositForm');
const accountNumber  = document.querySelector('#accountNumber');
const depositeAmount = document.querySelector('#amount');

accountForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const account = new BankAccount(customerName.value, +balance.value)
    accounts.push(account);
    console.log(accounts)
})


depositForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log(accountNumber.value, depositeAmount.value );
    const account = accounts.find(
        (account) => account.accountNumber === +accountNumber.value ) // +accountNumber.value  here + sign 
        // '+accountNumber.value'  here + sign converts string to number
    account.deposit(+depositeAmount.value)
    console.log(accounts) // account detail with updated account balance
    
} )
