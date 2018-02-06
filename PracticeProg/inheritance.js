class mind
{
    
    constructor(MID, name, track)
    {
        this.MID=MID;
        this.name=name;
        this.track=track;
    }

    getdetails()
    {
        console.log(this.name+" having the MID "+this.MID+"has been allocated to "+this.track);
    }


    static countminds()
    {
        console.log("there are 25 minds in WT");
    }

}
    let minds=new mind('M1042946','Anirudh','WT');
minds.getdetails();
mind.countminds();

class mindsplus extends mind{
   constructor(MID, name, track,subtrack)
   {
       super(MID, name, track);
       this.subtrack=subtrack;
   }
   
   getsubtrack()
   {
       console.log(this.MID+" has got "+this.subtrack);
   }
}

   let m=new mindsplus('M1042946','Anirudh','WT','react&angular');
m.getsubtrack();
m.getdetails();
mind.countminds();
