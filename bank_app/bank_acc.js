//Define a class for Bank Account

class bankAccount{

    // balance=500;
 
     constructor(accountNumber, ownerName, balance){
         this.accountNumber = accountNumber;
         this.ownerName = ownerName;
         this.balance = balance
     }
 
     displayAccountInfo(){
         console.log(`Owner Name: ${this.ownerName}`);
         console.log(`Account Number: ${this.accountNumber}`);
         console.log(`Balance: ${this.balance}`);
     }
     getBalance(){
         return this.balance;
     }
 
     deposit(amount){
         this.balance += amount
         console.log(`Deposited ${amount} CAD. New balance: ${this.balance}`)
     }
 
     withdraw(amount){
         if(this.balance >= amount,
             this.balance -= amount){
             console.log(`Withdrew ${amount} CAD. New balance: ${this.balance}`)
         }
         else(this.balance <= amount)
             console.log(`Insufficient funds. Cannot withdraw ${this.balance} CAD.`)
         }
 }
 
 //Create a Bank Account
 const account =new bankAccount("1000101", "John Doe", 1000)
 
 //Show account details
 account.displayAccountInfo();
 
 //Deposit money
 account.deposit(500)
 
 //Withdraw money
 account.withdraw(200)
 
 //Show balance
 account.getBalance()
 