function sayhello() {

    var name=document.getElementById("name").value;
    var message="<h2>Hello " + name + " !</h2>";
    // document.getElementById("content").textContent=message;
    document.getElementById("content").innerHTML=message;
    if(name==="student")
    {
        var title=document.querySelector("#title").textContent;
        title+=" to coursera";
        document.querySelector("#title").textContent=title;

    }



}