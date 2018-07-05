



                                                                                         asd.makeAxis();
        asd.makeCircle();


        asd.makeSin();  
        asd.makeCos(); // == same as =  without +0.1
        // asd.makeF(function(e){return Math.cos(e*Math.PI + 0.1)},"orange")

        asd.makeCos(asd.Z*2,asd.Z*2); // == same as = without +0.1
        asd.makeF(function(e){return Math.cos(e/2*Math.PI+0.1)*2},"orange");
        asd.drawNums();
        asd.makeWeb();
        asd.drawAxisDots(5);
        // asd.makeF();
        var az=[];
        az[0] = function(iX){
        return(Math.cos(iX*Math.PI)+1.5)
        }
        az[1] = function(i){
        //     return (Math.cos(Math.PI*i*3)*2);
//             return(Math.sin(i*4*Math.PI)+1)  
            return(i/5);
        }
        var asz = function(i){
        return (Math.sin(i/5*Math.PI)+2);}

        return (Math.exp(-2*Math.PI)/i*125); 
        return(Math.sin(i*Math.PI)+1)  
        }
        var aq = function(i){
            return(az[0](i)+az[1](i)+asz(i));
        }

        asd.makeF(asz,'#0FF');
        asd.makeF(az[0],'#F0F');
        asd.makeF(az[1],'#A21');
        asd.makeCircle(Math.PI*asd.Z,asd.Y,asd.X)
        qq=asd.makeF(aq,'#FF0',qq);
        // for(I=0;I<100;I++)
        // asd.drawVect(Math.exp(2*Math.PI*0.01*I));
        // asd.drawVect(Math.exp(2*Math.PI*1/10))
        asd.drawVect(45,asd.Z*Math.PI);
        // for(i=0;i<360;i++)
        // asd.drawVect(Math.exp(2*Math.PI/i));

//         for(i=0;i<512;i++)
        console.log("n= " +i +"  X = " +qq[i].X + "   Y = " + qq[i].Y );
        var T = 1;
        var W = 1/T;
//         asd.makeF(function(e){return Math.sin(e*2*Math.PI*W)},'#FFF');
        asd.makeF(function(e){return e/5},'#000');
            
}


// pwe();
// qzz();
var qq=[{x:0,y:0}];
pqr();
