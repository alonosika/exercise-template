function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    const num=input;
    const arr = num.toString();
    const sum = [arr[0]];
      
    for(let i=1; i<arr.length; i++)
      {
        if((arr[i-1]%2 === 0)&&(arr[i]%2 === 0))
         {
          sum.push('-', arr[i]);
         }
        else
         {
          sum.push(arr[i]);
         }
      }
      out= sum;
    
/**/
    output.innerText = out;
}