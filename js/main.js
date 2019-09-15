
let result =`/**
*
* Hey. My name's Samuel Reed. I'm CTO of BitMEX.com and an 
* occasional freelance contractor.
*
* I build interactive websites.
*
* How about some live coding?
*/
*{
    margin:0;
    padding:0;
    transition: all 1s;
}
#code{
    color: white;
    background:black;
}
#code{
    box-sizing:border-box;
    /*border: 1px solid red;*/
    padding: 16px;
    width: 500px;
    margin-left: 100px;
}
/*先做一个3D效果吧*/`
let n = 0

console.log(result.length)
let timerId = setInterval(() => {
    n += 1
    code.innerHTML = Prism.highlight(result.slice(0, n), Prism.languages.css, 'css')
    myStyle.innerHTML =  result.slice(0, n)
    if (n >= result.length) {
        window.clearInterval(timerId)
    }   
}, 20)

//那么如何使得你写入的代码的某一部分能够高亮呢?例如：选择器部分、属性部分、注释部分等。
//1.在这里需要使用到一个库来使得代码高亮,Prism.js，具体可以看官网