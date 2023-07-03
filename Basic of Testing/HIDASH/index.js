module.exports = {
    forEach(arr,fn){
        for(let i =0;i<arr.lenght; i++){
            const value = arr[i];
            fn(value,i);
        }
    }
}