
d3.json("https://ghibliapi.herokuapp.com/films")
var filPromise=d3.json("https://ghibliapi.herokuapp.com/films");
filPromise.then(
function(data)
    {
        nlist(data);
        titlee(data);
        //infodes(data);
        //infodir(data);
        //infopro(data);
        //inforel(data);
    console.log("works",data);
    })


var nlist = function(data)
{
    d3.select("body")
    .append("ol").attr ("id", "movieOl");
    
    d3.select("#movieOl").selectAll("li")
    .data(data)
    .enter()
    .append("li")
    .append("div")
    .attr("class" ,"films")
    .on("click" , function(d)
        {makeWhole(d, d3.select(this))
     })
    .on("mouseout", function(d)
         {
        makeSmall(d,d3.select(this))
    })
} 

var maketitle = function(movie) 
{

    
}

var makeWhole= function(movie, div) 
{
   div.selectAll("*").remove()
    
    div//d3.select(div)
.append("div").attr("class", "movietitle")
.text(function(d) {return d.title})

    div
    .append("div").attr("class", "infodes")
.text (function(d) {return "Description: " + d.description})
    
    div
     .append("div").attr("class", "infodir")
.text(function(d) {return "Director: " + d.director})
    
    div
    
    .append("div").attr("class", "infopro")
.text(function(d) {return "Producer: " + d.producer})
    
    div
        .append("div").attr("class", "inforel")
.text(function(d) {return "Release Date: " + d.release_date})
}



var makeSmall = function(div)
{
    div.selectAll("*").remove()
    
    
}

var allmovies = function(movies)
{
    d3.selectAll(".films").append("div").attr("class", "movietitle")
.text(function(d) {return d.title})
}
    


var movtitle = function(div)
{
    div.append("div").attr("class", "movietitle")
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
var titlee = function(data)
{
    d3.selectAll(".films").append("div").attr("class","title")
    .text(function(d) {return d.title})
}

    
