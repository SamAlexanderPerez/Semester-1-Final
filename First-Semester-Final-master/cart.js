class Cart{
  //What is the first part of every class? Type it below.
  constructor(il,iq){
    this.itemList=il;//array
    this.itemQuantity=iq;//array
  }

  //Type the instance functions below this comment.

  addItem(i,q){
    this.itemList.push(i);
    this.itemQuantity.push(q);
  }

  totalCart(){
    let total=0;
    for(let t=0;t<this.itemList.length;t++){
      total=this.itemList[t].price*this.itemQuantity[t];
    }
    return total;
  }

  subcart(days){
    let subCart=new Cart([],[]);
    for(let s=0;s<this.itemList.length;s++){
      if(this.itemList[s].shipping==days){
        subCart.push(this.itemList[s]);
      }
    }
    return subCart;
  }


}
