function swapObj(a){
    
    let keys = Object.keys(a);
    let values = Object.values(a);
    
    let final = {}
    
    for(let i=0; i< keys.length; i++){
      if(final.hasOwnProperty(values[i])){
              final[values[i]] = [... final[values[i]],keys[i]];
      }
      else{
          final[values[i]] = keys[i];
      }
    }
    return final;
}


console.log(swapObj({ a: '1', b: '2', c:'2'}));
