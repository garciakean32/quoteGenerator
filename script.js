const quote = [
    "“If life were predictable it would cease to be life, and be without flavor.”",
    "“Life is what happens when you're busy making other plans.”",
    "“When you reach the end of your rope, tie a knot in it and hang on.”",
    "“Always remember that you are absolutely unique. Just like everyone else.”",
    "“The way to get started is to quit talking and begin doing.”"
];

const author = [
    "- Elanor Roosevelt",
    "- John Lennon",
    "- Franklin D. Roosevelt",
    "- Margaret Mead",
    "- Walt Disney"
];

function new_quote(){
    setTimeout(generator, 700);
}

function generator(){
    const random = Math.floor(Math.random()*5);
    
    if(random === 0){
        document.getElementById('quote').innerHTML = quote[0];
        document.getElementById('author').innerHTML = author[0];
    }else if(random === 1){
        document.getElementById('quote').innerHTML = quote[1];
        document.getElementById('author').innerHTML = author[1];
    }else if(random === 2){
        document.getElementById('quote').innerHTML = quote[2];
        document.getElementById('author').innerHTML = author[2];
    }else if(random === 3){
        document.getElementById('quote').innerHTML = quote[3];
        document.getElementById('author').innerHTML = author[3];
    }else if(random === 4){
        document.getElementById('quote').innerHTML = quote[4];
        document.getElementById('author').innerHTML = author[4];
    }
}