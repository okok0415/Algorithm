let combination = []
function mergeNumbers(arr, str){
    if(arr.length > 0){
        for(let i = 0; i< arr.length;i++){
            const temp = [...arr]
            temp.splice(i, 1)
            mergeNumbers(temp, str+arr[i])
        }
    }

    if(str.length > 0){
        if(!combination.includes(str)){
            combination.push(str)
        }
    }
}