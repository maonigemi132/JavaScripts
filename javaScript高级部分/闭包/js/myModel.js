function fun(){
    var name="小小猕猴桃"
    function fun2(){
        console.log(name);
    }
    function fun3(){
        name="小明"
        console.log(name);
    }
    /* 向外暴露对象（给外部使用的方法） */
    return {
        fun2:fun2,
        fun3:fun3
    }
}