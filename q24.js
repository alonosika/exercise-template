function run() {
    const input = document.getElementById("input").value;
    const input1 = document.getElementById("input1").value;
    const output = document.getElementById("output");  
    let out = "";
    out = filterArray(eval(input)); 
    output.innerText = out;
    
    function filterArray(arr) {
        let array = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] !== undefined && arr[i] !== null && arr[i] !== 0 && arr[i] !== '' && arr[i] !==false && !isNaN(arr[i])){
                array.push(arr[i]);
            }
        }
        return array;
    }
}