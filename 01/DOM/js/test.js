
window.onload=function(){
    var buttons=document.getElementById("btn01");
    var a=document.getElementsByTagName("a");
    var ul=document.getElementById("u1");
    var link=document.getElementById("link");

    buttons.onclick=function(){
        var add=document.createElement("li");
        add.innerHTML='<a href="javascript:;" class="link">超链接一</a></li>'
        ul.appendChild(add);
    }


    /* 
        为每一个超链接绑定一个单机响应函数
        这里我们为每一个超链接都绑定了一个单击响应函数，这种操作会比较麻烦
        而且这些操作只能为已有的超链接设置事件，而新添加的超链接必须重新绑定

    */
    /* for (var i = 0; i < a.length; i++) {
      a[i].onclick=function(){
            alert("触发了a事件"+a[i]);
      }              
    } */


    /* 
        我们主要希望是，只绑定一次事件,即可应用到多个元素上，即使是后添加的元素也可以
        我们可以舱室将其绑定给元素的共同的祖先元素
        
        事件委派
            -指将事件统一绑定给元素的共同祖先元素，这样后代元素上的事件触发时，会一直冒泡到祖先元素上
            从而通过祖先元素的响应函数来处理事件
            -事件委派是利用了冒泡，通过委派可以减少事件绑定的次数，提高程序的性能
    */

    ul.onclick=function(event){
       event=event||window.event;
        //如果触发的事件的对象是我们期望的对象，则执行否则不执行
        /* 
            event中target表示的触发事件的对象，谁点击触发就返回谁
        */    
       if(event.target.className==){
        alert("触发事件委派")   
       }
                          
    }


