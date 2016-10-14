
function smallestCommons(arr) {
  var max =Math.max(arr[0],arr[1]);
  var min=Math.min(arr[0],arr[1]);
  var r = max-min;
  var pl =[];
  var right =[min,max]; 
  var n =right[0];
  for(var i = 0;i<r+1;i++){
    pl[i]=n;
     n++; 
  }
  var prost =[2,3,5,7];
 
  
 var pto=[];
  
  var tp=[];
  for(var m=0;m<pl.length;m++){
  var t =0;
  var pt=pl[m];
  var score=0;
  var test =[];
    var obj={};
    while(t<prost.length){

   var p = pt%prost[t];  
  
    if(p===0){
    test.push(prost[t]);
    score++;  
    obj[prost[t]]=score;
    pt= pt/prost[t];
    }else{t++;score=0;}
     
 if(pt/prost[t]===1){test.push(prost[t]);
           score++;       
    obj[prost[t]]=score; break;}  

  if(pt%2!==0&&pt%3!==0&&pt%5!==0&&pt%7!==0){test.push(pt);score++;
    obj[pt]=1;break;}
     
  }//end while
    tp.push(test); 
    pto.push(obj);
 }//end for
var tpl=tp.reduce(function(a,b){//all numbers
  return a.concat(b);
});
  var tl=[];// то что искать
    for(var nl =0;nl<tpl.length;nl++){
    if(tl.indexOf(tpl[nl])===-1 ){
      tl.push(tpl[nl]);
    }
  }
  var ari=0;
  var result =[];
  
  for(var zx=0;zx<tl.length;zx++){
    
   var ind=0;
   var searchRes =0;
   var round=0;//для того чтобы считать числа в каждом множестве
    for(var we =0;we<tp.lenght;we++){//вход в множество
      
      for(var as=0;as<tp[we];as++){//вход во второе множество
        if(tp[we][as]==tl[zx]){
            searchRes++;
        
          result[zx]= 1;
        }
        
       }//выход из второго множества
       round=searchRes;
    }
    
  }
  
  return result;
}


smallestCommons([23,18]);
