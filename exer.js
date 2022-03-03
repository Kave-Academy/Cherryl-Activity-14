
function run() {
    let str = document.getElementById("input_argument").value;

    for(let i = 0; i < str.length; i++){
        if(str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))){
            document.getElementById("output").innerHTML = (str.charAt(i));
            break;
        }else{
            document.getElementById("output").innerHTML = `No repeated chracter`;
        }
       
    }
}