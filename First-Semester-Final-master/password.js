class Password{
  //The first part of the class.
  constructor(p,pk){
    this.publickey=p;//string of characters or numbers
    this.privatekey=pk;//string of numbers
  }


  //Instance functions below this comment.
  validPublicKey(){
    if(this.publickey.length>7 && this.publickey<26){
      return true;
    }
    else{
      return false;
    }
  }

  validPrivateKey(){

  }


  //Static function below this comment.
  static makePrivateKey(){
    let key=
    let limit=14;
  }
}
