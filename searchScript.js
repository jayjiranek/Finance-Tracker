var addInformation = document.getElementById("button-addon1");


addInformation.onclick = function() {
    //first use search endpoint to find name
    var temp = document.getElementById("mySearch").value;
    console.log(temp);
    const d = null;
    var xh = new XMLHttpRequest();

    xh.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var object = JSON.parse(this.responseText);
            //add name to top
            document.getElementById("searchName").innerHTML = object["bestMatches"][0]["2. name"];
            //save ticker name off search
        }   
    });
    xh.open("GET", "https://alpha-vantage.p.rapidapi.com/query?keywords=" + temp + "&function=SYMBOL_SEARCH&datatype=json");
    xh.setRequestHeader("x-rapidapi-key", "a1030aa566msh7440cb2e6ade266p1e3a83jsnad4704a89679");
    xh.setRequestHeader("x-rapidapi-host", "alpha-vantage.p.rapidapi.com");
    xh.send(d);
    
    //fill in the rest
    const xhr = new XMLHttpRequest();
    const data = null;

    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var obj = JSON.parse(this.responseText);
            //first row
            document.getElementById("searchPrice").innerHTML = "Price: " + obj["Global Quote"]["05. price"];
            document.getElementById("searchChange").innerHTML = "Change: " + obj["Global Quote"]["10. change percent"];
            
            //second row
            document.getElementById("searchHigh").innerHTML = "Daily high: " + obj["Global Quote"]["03. high"];
            document.getElementById("searchLow").innerHTML = "Daily low: " + obj["Global Quote"]["04. low"];
            
            //third row
            document.getElementById("searchOpen").innerHTML = "Open: " + obj["Global Quote"]["02. open"];
            document.getElementById("searchClose").innerHTML = "Previous close: " + obj["Global Quote"]["08. previous close"];
        }
    });
    xhr.open("GET", "https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=" + temp + "&datatype=json");
    xhr.setRequestHeader("x-rapidapi-key", "a1030aa566msh7440cb2e6ade266p1e3a83jsnad4704a89679");
    xhr.setRequestHeader("x-rapidapi-host", "alpha-vantage.p.rapidapi.com");
    xhr.send(data);
}
