
console.log("hello world!")
let currentPage = "";
const wireframe = {
    "about": {
        "html": `
        <h1>About SRK</h1>
        <p>TMAS Academy (The Math and Science Academy), previously known as Explore Math, was started in 2020. Ritvik Rustagi wanted to spread his passion for contest math through his youtube channel.</p> 
        <p>He hosted an AMC 10/12 seminar in January of 2021 along with making a 50+ page handout to go along with it. </p>
        <p>Not only did this allow him to teach other students, but it allowed him to learn the concepts for himself.</p>
        
        ​<br>
        
        <p>The mission is to simply educate people including those who are disadvantaged. </p>
        <p>The primary focus will be on math and the science subjects for now. One of my recent notable creations is the book: ACE The AMC 10 and AMC 12. </p>
        <p>The book is over 200 pages and contains 250 problems with fully written solutions. </p>
        <p>The book will serve as a great resource for aynone aspiring to do well in math competitions. </p>
        
        ​<br>
        
        <p>High quality AP content is also coming soon. As of now, you can expect the AP Calculus AB/BC, AP Physics 1, AP Physics C Mechanics, and AP Statistics resources to be out by March of 2024.</p>
        
        ​<br>
        `,
        "script": `doesntExist.js`
    },
    "help": {
        "html": `
        <h1>Help</h1>
        Script.js -> Wireframe Variable -> wireframe.help.html 
        <h1>BIG text</h1>
        <p>regular text</p>
        <a href="https://tmasacademy.com">fun link</a>
        <br>
        <code>
            code block
        </code>
        `,
        "script": "doesntExist.js"
    },
    "home": {
        "html": `
        <h1>Home</h1>
        Script.js -> Wireframe Variable -> wireframe.home.html`,
        "script": "doesntExist.js"
    },
    "forums": {
        "html": `
        <h1>Forums</h1>
        <div id = "createPost">
            <input placeholder="Title" id = "postCreateTitle"></input>
            <br>
            <br>
            <textarea id = "postCreateContent" placeholder="Your text here..."></textarea>
        </div>
        <button id = "sendPost">Post</button>
        <div id = "postDivs">
            Fetching...
        </div>
        `,
        "script": "forums.js"
    }
}

function setPage(page) {
    document.getElementById("main").innerHTML = wireframe[page].html;
    let script = document.createElement('script');
    script.src = wireframe[page].script;
    script.type="module"
    script.async=true;
    document.getElementById("scriptContainer").innerHTML = "";
    document.getElementById("scriptContainer").appendChild(script);
}

setPage("about");