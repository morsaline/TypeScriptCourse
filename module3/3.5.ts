{
  // access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number; // private/protected

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    public addDeposite(amount: number) {
      this._balance = this._balance + amount;
    }
    public getBalance() {
      return this._balance;
    }
  }

  // class StudentAccount extends BankAccount{
  //   test(){
  //       this.
  //   }
  // }

  const goribManushAcccount = new BankAccount(11, "mr.gorid", 120);

  goribManushAcccount.addDeposite(55);
  //
}
