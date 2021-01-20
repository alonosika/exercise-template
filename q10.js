function run() {
    const input = document.getElementById("input").value;
    const input1 = document.getElementById("input1").value;
    const output = document.getElementById("output");  
    let out = "";
    output.innerText = out;
/**/
    // write your code here

   let arr = JSON.parse(input);
   
   for (let i=0 ; i<arr.length; i++) {
      console.log("row " + i);

    
    for (let j=0; j<arr[i].length; j++) {
       console.log(" " + arr[i][j]);
      }
   }

    /**/
output.innerText = out;
}