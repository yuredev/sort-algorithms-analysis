
function selectionSort(array){
    for (let i = 0; i < array.length; i++) {
        let indiceMenor = i;
        for (let j = i; j < array.length; j++) {
            if(array[indiceMenor] > array[j] ){
               indiceMenor = j;
            } 
        }
        if(i != indiceMenor){
            let aux = array[i]
            array[i] =  array[indiceMenor]
            array[indiceMenor] = aux;
        }
    }
    return array
}
