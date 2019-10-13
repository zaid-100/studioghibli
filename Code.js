
d3.json("https://ghibliapi.herokuapp.com/films")
var filPromise=d3.json("https://ghibliapi.herokuapp.com/films");
filPromise.then(
function(data)
    {
        nlist(data);
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
    .on ("mouseover", function(data))
    {
    .append("div")
    .attr("class" ,"films")
    .text (function(data)
          {return d.title})
         }
    }

var infodes = function(data)
{
    d3.selectAll(".films").append("div").attr("class", "infodes")
.text(function(d) {return d.description})
}


var infodir = function(data)
{
    d3.selectAll(".films").append("div").attr("class", "infodir")
.text(function(d) {return d.director})
}


var infopro = function(data)
{
    d3.selectAll(".films").append("div").attr("class", "infopro")
.text(function(d) {return d.producer})
}

var inforel = function(data)
{
    d3.selectAll(".films").append("div").attr("class", "inforel")
.text(function(d) {return d.release_date})
    

}
