  function run() {
    const input = document.getElementById("input").value;
    const input1 = document.getElementById("input1").value;
    const output = document.getElementById("output");  
    let out = "";
    out=  arrFirst(eval(input) , input1);
    output.innerText = out;
/**/
    // write your code here

    function arrFirst(array, n){
        if (n > 0){
            return array.slice(0, n);
        } else{
            return ("[" + array[0] + "]");
        } 

/**/
      }
  }