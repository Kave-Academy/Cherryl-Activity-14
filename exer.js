function run(){
    let str = document.getElementById("input_argument").value;
    let array1 = str.split('');
    let result;

    for(let x=0; x < array1.length; x++){
        ctr =0;

        for(let y = 0; y<array1.length; y++){
            if(array1[x] === array1[y]){
                ctr+=1;
            }
        } 
        if(ctr < 2) {
            result = array1[x];
        }
    }
    document.getElementById("output").innerHTML = result;
    
}


