class Contestant{
    constructor(){
      this.index=null;
      this.name=null;
      this.distance=0;
    }
    getCount(){
        var contestantcountref = database.ref("contestantcount");
        contestantcountref.on('value', function(data){
        contestantcount=data.val();
        })
    }
    update(){
        var pIndex='contestants/contestant'+ this.index;
        database.ref(pIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    updateCount(count){
        database.ref('/').update({
            contestantcount:count
        })
    }
    static getPlayerInfo(){
        var inforef = database.ref("contestants");
        inforef.on('value', function(data){
          allContestant=data.val();
    })
}
display(){
    this.button.mousePressed(()=>
    {
          this.input1.hide();
          this.input2.hide();
         this.button.hide();
         this.title.hide();
          contestant.name=this.input1.value();
          contestant.name=this.input2.value();
          contestantcount = contestantcount+1;
          contestant.index=contestantcount;
          contestant.update();
          contestant.updateCount(contestantcount);
          
      }
  )

}
}