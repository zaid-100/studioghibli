
d3.json("https://ghibliapi.herokuapp.com/films")
var filPromise=d3.json("https://ghibliapi.herokuapp.com/films");
filPromise.then(
function(data)
    {
        nlist(name);
    console.log("works",data);
    })










var function = nlist(name)
{
    var movies = d3.select("body")
    .append("ol")
    .selectAll("li")
    .data(name)
    .enter()
    .append(li)
    .append("span")
    .text (function(d)
          {return d.title})
    }