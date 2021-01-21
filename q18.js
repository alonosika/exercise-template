
function run() {
    const input = document.getElementById("input").value;
    const input1 = document.getElementById("input1").value;
    const output = document.getElementById("output");  
    let out = "";

    out= binarySearch(JSON.parse(input), Number(input1)); 
    output.innerText = out;
    
    function binarySearch(array, key) {
        for(let i=0;i<=array.length;i++){
            if(array[i]==key){
            return i;
            }
         }
    }   
}
