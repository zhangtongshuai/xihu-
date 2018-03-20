function isEmpty(array, explain) {
    for (var i=0; i<array.length; i++){
        if (array[i]==undefined || array[i]=="" || array[i]==null){
            alert('请输入正确的 '+explain[i]);
            return true;
        }
    }
    return false;
}