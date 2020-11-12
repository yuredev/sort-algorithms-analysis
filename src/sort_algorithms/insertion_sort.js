
let vetor = [5,4,8,1,467,2,6,7,3];

module.exports = function insertionSort(array){
    for (let i = 1; i < array.length; i++) {
        let escolhido =  array[i];

        j = i-1;

        while(j >= 0 && array[j] > escolhido){
            array[j+1] = array[j];
            j = j-1;
        }
        array[j+1] = escolhido;
    }
    return array;
}