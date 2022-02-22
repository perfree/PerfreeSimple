//加载代码高亮js
loadscript("/static/public/libs/highlight/highlight.pack.js",function () {
    hljs.initHighlighting();
});
//加载js
function loadscript(url, callback){
    var script = document.createElement ("script")
    script.type = "text/javascript";
    if (script.readyState){
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" || script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function(){
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}