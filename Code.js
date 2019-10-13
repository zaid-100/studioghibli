
d3.json("https://ghibliapi.herokuapp.com/films")
var filPromise=d3.json("https://ghibliapi.herokuapp.com/films");
filPromise.then(
function(data)
    {
        nlist(data);
        movtitle(data);
        infodes(data);
        infodir(data);
        infopro(data);
        inforel(data);
    console.log("works",data);
    })


var nlist = function(data)
{
    var movies = d3.select("body")
    .append("ol")
    .selectAll("li")
    .data(data)
    .enter()
    .append("li")
    .append("div")
    .attr("class" ,"films")
    }

var movtitle = function(data)
{
    d3.selectAll(".films").append("div").attr("class", "movietitle")
.text(function(d) {return d.title})
}



var infodes = function(data)
{
    d3.selectAll(".films").append("div").attr("class", "infodes")
.text (function(d) {return "Description: " + d.description}
)}


var infodir = function(data)
{
    d3.selectAll(".films").append("div").attr("class", "infodir")
.text(function(d) {return "Director: " + d.director})
}


var infopro = function(data)
{
    d3.selectAll(".films").append("div").attr("class", "infopro")
.text(function(d) {return "Producer: " + d.producer})
}

var inforel = function(data)
{
    d3.selectAll(".films").append("div").attr("class", "inforel")
.text(function(d) {return "Release Date: " + d.release_date})
    

}





d3.json("https://ghibliapi.herokuapp.com/people/")
var filPromise=d3.json("https://ghibliapi.herokuapp.com/people/");
filPromise.then(
function(data)
    {
        displaypeople(data)
        console.log("gothere")
    })

var displaypeople = function(data)
    { 
        d3.select("film")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "people")
        .text(function(data) {return data.name})
    }
    
    
    