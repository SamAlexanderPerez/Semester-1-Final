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
    let set1=this.privtekey.substring(0,4);
    let set2=this.privatekey.substring(5,9);
    let set3=this.privatekey.substring(10,14);
    if(this.privatekey.charAt(4)=="-" && this.privatekey.charAt(9)=="-"){
      return true;
    }
    if()
    else{
      return false;
    }

  }


  //Static function below this comment.
  static makePrivateKey(){
    let key="";
    let limit=14;
    let group1="";
    let group2="";
    let group3="";
    for(let r=0;r<4;r++){
      group1+=String(Math.floor(Math.random()*10));
      group2+=String(Math.floor(Math.random()*10));
      group3+=String(Math.floor(Math.random()*10));
    }
    key=group1+"-"+group2+"-"+group3;
    return key;
    }

  }
}
