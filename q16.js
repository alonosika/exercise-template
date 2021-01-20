 function run() {
     const input = document.getElementById("input").value;
     const input1 = document.getElementById("input1").value;
     const output = document.getElementById("output");  
     let out = "";
        out= leapYear(Number(input) , Number(input1));
        output.innerText = out;
        
        function leapYear(strYear , endYear){
            let leapArray = [];
            
            for(let i = strYear; i <= endYear; i++){
            
                if((i % 4 === 0 && i % 100 !== 0) || (i% 100 === 0 && i % 400 === 0)) {
                    leapArray.push(i);
                }
            
            }
            return leapArray;      
            
    }
} 