const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']


function lowerCaseWords(arr){
    return new Promise((resolve, reject) =>    {
        if (arr.length == 0){
            reject('Failed')
        } else{
            var stringsArr = []         
            for (var word in arr) {
                if (typeof arr[word] == 'string'){
                    stringsArr.push(arr[word])
                }
            }
            var lowerCaseArr = stringsArr.map(word => word.toLowerCase())
            resolve(lowerCaseArr)
            
        }        
    }   
)  
}

console.log(lowerCaseWords(mixedArray))

