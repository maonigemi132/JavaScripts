(function fun(window){
    var name="小小猕猴桃"
    function fun2(){
        console.log(name);
    }
    function fun3(){
        name="小明"
        console.log(name);
    }
    window.methods={
        dofun2:fun2,
        d0fun3:fun3
    }
})(window)