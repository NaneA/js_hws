let final = [];
 function subset(arr, n, r, index, data, i)
    {
      
        if (index == r) {
            let temp = [];
            for (let j = 0; j < r; j++)
              temp.push(data[j])
            
            final.push(temp);
              
            return; }
  
        if (i >= n)
            return;
  

        data[index] = arr[i];
        subset(arr, n, r, index + 1,
                                data, i + 1);
  
        subset(arr, n, r, index,
                                data, i + 1);
    }
  
    function print(arr,r)
    {
        let data = new Array(r);
        data.fill(0);
        let n = arr.length;
        subset(arr, n, r, 0, data, 0);
        return final;
    }
     
 

    console.log(print([1,2,3,4,5], 3));