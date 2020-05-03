
'use strict';

// IIFE
(function () {


    var svg = d3.select('#piechart');
      var w = 700,                       
    h = 700,                            
    r = 250,                            
    color = d3.scale.category20c();     


    var data = [{"name":"Company one", "value":20}, 
            {"name":"Company two", "value":50}, 
            {"name":"Company three", "value":30}];
    
    const container = svg.append('g')
            .attr('class', 'container')
            .attr("transform", "translate(" + r + "," + r + ")") ;

    var arc = d3.arc()        
        .outerRadius(r -10)
        .innerRadius(100);

    

    var pie = d3.layout.pie() 
        .value(function(d) { return d.value; });

    var arcs = vis.selectAll("g.slice")
        .data(pie)
        .enter() 
            .append("svg:g") 
                .attr("class", "slice");    

        arcs.append("svg:path")
                .attr("fill", function(d, i) { return color(i); } ) 
                .attr("d", arc);                                    

        arcs.append("svg:text")                                     
                .attr("transform", function(d) {                    
             
                d.innerRadius = 0;
                d.outerRadius = r;
                return "translate(" + arc.centroid(d) + ")";        
            })
            .attr("text-anchor", "middle")     
            .text(function(d, i) { return data[i].name  + '\r\n\n|\r' + data[i].value; }); 



})();

          
           