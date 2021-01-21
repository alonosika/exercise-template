function run() {
    const input = document.getElementById("input").value;
    const input1 = document.getElementById("input1").value;
    const output = document.getElementById("output");  
    let out = "";
       out=  duplicate(JSON.parse(input));
       output.innerText = out;
       
       function duplicate(arr) {
        let resultArr = [];
        arr = arr.sort();

        for (let i = 0; i < arr.length; i++) {
        if (arr[i+1] == arr[i]) {
        resultArr.push('' + arr[i+1]);
          }
     }
        return resultArr;
        }

    
   }
