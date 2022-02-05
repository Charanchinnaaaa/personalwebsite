document.querySelector("button").addEventListener("click",function(){
    var name=prompt("Enter your name:");
    var mail=prompt("Enter your mail id");
    var sentence="Hello!! "+name+" I will get back to you in a while:)";
    document.querySelector("h3").textContent=sentence;
});