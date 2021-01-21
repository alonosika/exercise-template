let library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

function run() {
    const input = document.getElementById("input").value;
    const input1 = document.getElementById("input1").value;
    const output = document.getElementById("output");  

    let out = "";
    out = extractValue(eval(input),eval(input1)); 
    output.innerText = out;
    
    
    function extractValue(arr, prop) {
        let extractedValue = arr.map(item => item[prop]);
        
        return extractedValue;
        
    }
    
}