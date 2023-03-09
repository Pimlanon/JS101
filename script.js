function hello(){
    // Alert Text
    alert("Hello World");
    // Show Console log
    console.log("The button has been clicked");
    // Change Text in id text 
    // document.getElementById('text').innerHTML = "The button has been clicked";
    // Variable = id text
    const text = document.getElementById("text");
    // setText = text
    text.innerHTML = "The button has been clicked";
}