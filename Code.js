var url = "https://ghibliapi.herokuapp.com/films";
d3.json("url", function(json))

filPromise.then(
function(data)
    {
        nlist(name);
        

    
    console.log("works",data);
    }

)










var nlist = function (name)
{
    var movies = d3.select("body")
    .append"ol"
    .selectAll("li")
    .data(name)
    .enter()
    .append(li)
    .append("span")
    .text (function(d)
          {return d.title})
    
}


