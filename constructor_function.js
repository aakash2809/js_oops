// constructor function
function BankAccount(customerName, balance = 0 ){
    this.customerName = customerName ;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = (amount) =>{
        console.log(typeof amount, typeof this.amount);
        this.balance += amount;
    }

    this.withdraw = (amount) =>{
        this.balance -= amount;
    }

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
        (account) => account.accountNumber === +accountNumber.value )

        console.log('bankaccount',account)
    account.deposit(+depositeAmount.value)
    console.log(accounts)
    
} )
