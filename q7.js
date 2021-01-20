         function run() {
        const input = document.getElementById("input").value;
        const input1 = document.getElementById("input1").value;
        const output = document.getElementById("output");  
        let out = "";
        output.innerText = out;
    /**/
        // write your code here
    
       const num = (input);
       const numToArray = eval(num);
       
       const bigToSmall = numToArray.sort((a,b)=> b-a);

       out = bigToSmall;
    
/**/
    output.innerText = out;
}