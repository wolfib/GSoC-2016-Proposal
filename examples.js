//Single Sequence
var data1 = {
    "nodes":[
        {"name":"A","group":1},
        {"name":"G","group":2},
        {"name":"C","group":3},
        {"name":"T","group":4},
        {"name":"A","group":1},
        {"name":"G","group":2},
        {"name":"C","group":3},
        {"name":"T","group":4},
        {"name":"A","group":1},
        {"name":"G","group":2},
        {"name":"C","group":3},
        {"name":"T","group":4},
        {"name":"A","group":1},
        {"name":"G","group":2},
        {"name":"C","group":3},
        {"name":"T","group":4}
    ],
    "links":[
        {"source":0,"target":1,"value":9},
        {"source":1,"target":2,"value":9},
        {"source":2,"target":3,"value":9},
        {"source":3,"target":4,"value":9},
        {"source":4,"target":5,"value":9},
        {"source":5,"target":6,"value":9},
        {"source":6,"target":7,"value":9},
        {"source":7,"target":8,"value":9},
        {"source":8,"target":9,"value":9},
        {"source":9,"target":10,"value":9},
        {"source":10,"target":11,"value":9},
        {"source":11,"target":12,"value":9},
        {"source":12,"target":13,"value":9},
        {"source":13,"target":14,"value":9},
        {"source":14,"target":15,"value":9}
]};

//Single nucleotide changes: Insertion, Deletion, Mutation
var data2 = {
    "nodes":[
        {"name":"A","group":1},
        {"name":"G","group":2},
        {"name":"C","group":3},
        {"name":"T","group":4},
        {"name":"A","group":1},
        {"name":"G","group":2},
        {"name":"C","group":3},
        {"name":"T","group":4},
        {"name":"T","group":4},
        {"name":"A","group":1},
        {"name":"G","group":2},
        {"name":"C","group":3},
        {"name":"T","group":4},
        {"name":"A","group":1},
        {"name":"G","group":2},
        {"name":"C","group":3},
        {"name":"T","group":4}
    ],
    "links":[
        {"source":0,"target":1,"value":9},
        {"source":1,"target":2,"value":9},
        {"source":2,"target":3,"value":9},
        {"source":3,"target":4,"value":9},
        {"source":4,"target":5,"value":9},
        {"source":5,"target":6,"value":9},
        {"source":6,"target":7,"value":9},
        {"source":7,"target":8,"value":9},
        {"source":7,"target":9,"value":9},
        {"source":8,"target":10,"value":9},
        {"source":9,"target":10,"value":9},
        {"source":10,"target":11,"value":9},
        {"source":11,"target":12,"value":9},
        {"source":12,"target":13,"value":9},
        {"source":13,"target":14,"value":9},
        {"source":14,"target":15,"value":9},
        {"source":15,"target":16,"value":9},
        {"source":1,"target":3,"value":9}
]};

//indel with length of multiple bps
var data3 = {
    "nodes":[
        {"name":"A","group":1},
        {"name":"G","group":2},
        {"name":"C","group":3},
        {"name":"T","group":4},
        {"name":"A","group":1},
        {"name":"G","group":2},
        {"name":"C","group":3},
        {"name":"T","group":4},
        {"name":"A","group":1},
        {"name":"G","group":2},
        {"name":"G","group":2},
        {"name":"C","group":3},
        {"name":"G","group":2},
        {"name":"T","group":4},
        {"name":"G","group":2},
        {"name":"A","group":1},
        {"name":"G","group":2},
        {"name":"C","group":3},
        {"name":"T","group":4}
    ],
    "links":[
        {"source":0,"target":1,"value":9},
        {"source":1,"target":2,"value":9},
        {"source":2,"target":3,"value":9},
        {"source":3,"target":4,"value":9},
        {"source":4,"target":5,"value":9},
        {"source":5,"target":6,"value":9},
        {"source":6,"target":7,"value":9},
        {"source":7,"target":8,"value":9},
        {"source":8,"target":9,"value":9},
        {"source":9,"target":10,"value":9},
        {"source":9,"target":11,"value":9},
        {"source":10,"target":12,"value":9},
        {"source":11,"target":13,"value":9},
        {"source":12,"target":14,"value":9},
        {"source":13,"target":15,"value":9},
        {"source":14,"target":16,"value":9},
        {"source":15,"target":16,"value":9},
        {"source":16,"target":17,"value":9},
        {"source":17,"target":18,"value":9},
        {"source":2,"target":8,"value":9}
]};

(function() {
    var data = {
        "nodes":[
            {"name":"A","group":1},
            {"name":"G","group":2},
            {"name":"C","group":3},
            {"name":"T","group":4},
            {"name":"A","group":1},
            {"name":"G","group":2},
            {"name":"C","group":3},
            {"name":"T","group":4},
            {"name":"A","group":1},
            {"name":"G","group":2},
            {"name":"C","group":3},
            {"name":"T","group":4},
            {"name":"A","group":1},
            {"name":"G","group":2},
            {"name":"C","group":3},
            {"name":"T","group":4}
        ],
        "links":[
            {"source":0,"target":1,"value":9},
            {"source":1,"target":2,"value":9},
            {"source":2,"target":3,"value":9},
            {"source":3,"target":4,"value":9},
            {"source":4,"target":5,"value":9},
            {"source":5,"target":6,"value":9},
            {"source":6,"target":7,"value":9},
            {"source":7,"target":8,"value":9},
            {"source":8,"target":9,"value":9},
            {"source":9,"target":10,"value":9},
            {"source":10,"target":11,"value":9},
            {"source":11,"target":12,"value":9},
            {"source":12,"target":13,"value":9},
            {"source":13,"target":14,"value":9},
            {"source":14,"target":15,"value":9}
    ]};
    var color = d3.scale.category10();

    var width = 600,
        height = 200;

    var fill = d3.scale.category10();

    var force = d3.layout.force()
        .charge(-100)
        .nodes(data.nodes)
        .links(data.links)
        .size([width, height])
        .on("tick", tick)
        .start();

    var svg = d3.select("#chart0").append("svg")
        .attr("width", width)
        .attr("height", height);

    var link = svg.selectAll(".link")
        .data(data.links)
        .enter().append("line")
        .attr("class", "link");

    var gnodes = svg.selectAll('g.gnode')
        .data(data.nodes)
        .enter()
        .append("g")
        .classed('gnode', true)

    var node = gnodes.append("circle")
        .attr("class", "node")
        .attr("r", 9)
        .style("fill", function(d, i) { return color(d.group); })
        .style("stroke", function(d, i) { return d3.rgb(color(d.group)).darker(2); })
        .call(force.drag)

    var labels = gnodes.append("text")
        .attr("dx", 12)
        .attr("dy", ".35em")
        .attr("x", -16)
        .text(function(d) { return d.name; });

    svg.style("opacity", 1e-6)
        .transition()
        .duration(1000)
        .style("opacity", 1);

    function tick(e) {
        link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        gnodes.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    }
})();

function createSequenceGraph(data, id, height) {

    var color = d3.scale.category10();

    var width = 600;
        //height = 150;

    var fill = d3.scale.category10();

    var force = d3.layout.force()
        .charge(-100)
        .nodes(data.nodes)
        .links(data.links)
        .size([width, height])
        .on("tick", tick)
        .start();

    var svg = d3.select(id).append("svg")
        .attr("width", width)
        .attr("height", height);

    var link = svg.selectAll(".link")
        .data(data.links)
        .enter().append("line")
        .attr("class", "link");

    var gnodes = svg.selectAll('g.gnode')
        .data(data.nodes)
        .enter()
        .append("g")
        .classed('gnode', true)

    var node = gnodes.append("circle")
        .attr("class", "node")
        .attr("r", 9)
        .style("fill", function(d, i) { return color(d.group); })
        .style("stroke", function(d, i) { return d3.rgb(color(d.group)).darker(2); })
        .call(force.drag)

    var labels = gnodes.append("text")
        .attr("dx", 12)
        .attr("dy", ".35em")
        .attr("x", -16)
        .text(function(d) { return d.name; });

    svg.style("opacity", 1e-6)
        .transition()
        .duration(1000)
        .style("opacity", 1);

    function tick(e) {
        link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        // Push different nodes in different directions for clustering.
        var k = 3 * e.alpha;
        data.nodes.forEach(function(o, i) {
            o.x += (i - ((data.nodes.length - 1) / 2.0)) * k;
        });
        gnodes.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    }
};

createSequenceGraph(data1, "#chart1", 60);
createSequenceGraph(data2, "#chart2", 80);
createSequenceGraph(data3, "#chart3", 120);

//inversion
(function() {
    var data = {
        "nodes":[
            {"name":"A","group":1},
            {"name":"G","group":2},
            {"name":"C","group":3},
            {"name":"T","group":4},
            {"name":"A","group":1},
            {"name":"G","group":2},
            {"name":"C","group":3},
            {"name":"T","group":4},
            {"name":"A","group":1},
            {"name":"G","group":2},
            {"name":"C","group":3},
            {"name":"T","group":4},
            {"name":"A","group":1},
            {"name":"G","group":2},
            {"name":"C","group":3},
            {"name":"T","group":4}
        ],
        "links":[
            {"source":0,"target":1,"style":"url(#grey)"},
            {"source":1,"target":2,"style":"url(#grey)"},
            {"source":2,"target":3,"style":"url(#grey)"},
            {"source":3,"target":4,"style":"url(#grey)"},
            {"source":4,"target":5,"style":"url(#grey)"},
            {"source":5,"target":6,"style":"url(#red)"},
            {"source":6,"target":7,"style":"url(#red)"},
            {"source":7,"target":8,"style":"url(#red)"},
            {"source":8,"target":9,"style":"url(#red)"},
            {"source":9,"target":10,"style":"url(#red)"},
            {"source":10,"target":11,"style":"url(#red)"},
            {"source":11,"target":12,"style":"url(#red)"},
            {"source":12,"target":13,"style":"url(#grey)"},
            {"source":13,"target":14,"style":"url(#grey)"},
            {"source":14,"target":15,"style":"url(#grey)"},
            {"source":5,"target":11,"style":"url(#blue)"},
            {"source":11,"target":10,"style":"url(#blue)"},
            {"source":10,"target":9,"style":"url(#blue)"},
            {"source":9,"target":8,"style":"url(#blue)"},
            {"source":8,"target":7,"style":"url(#blue)"},
            {"source":7,"target":6,"style":"url(#blue)"},
            {"source":6,"target":12,"style":"url(#blue)"}
    ]};
    var color = d3.scale.category10();

    var width = 600,
        height = 150;

    var fill = d3.scale.category10();

    var force = d3.layout.force()
        .charge(-100)
        .nodes(data.nodes)
        .linkDistance(40)
        .linkStrength(0.5)
        .links(data.links)
        .size([width, height])
        .on("tick", tick)
        .start();

    var svg = d3.select("#chart4").append("svg")
        .attr("width", width)
        .attr("height", height);

    // build the arrow2
    svg.append("defs").selectAll("marker")
        .data(["grey"])
      .enter().append("marker")
        .attr("id", function(d) { return d; })
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 20)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
      .append("path")
        .attr("d", "M0,-5L10,0L0,5 L10,0 L0, -5")
        .style("stroke", "#666")
        .style("stroke-width", 3)
        .style("opacity", "0.6");

    svg.append("defs").selectAll("marker")
        .data(["red"])
      .enter().append("marker")
        .attr("id", function(d) { return d; })
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 20)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
      .append("path")
        .attr("d", "M0,-5L10,0L0,5 L10,0 L0, -5")
        .style("stroke", "#FF0000")
        .style("stroke-width", 4)
        .style("opacity", "0.6");

    svg.append("defs").selectAll("marker")
        .data(["blue"])
      .enter().append("marker")
        .attr("id", function(d) { return d; })
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 20)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
      .append("path")
        .attr("d", "M0,-5L10,0L0,5 L10,0 L0, -5")
        .style("stroke", "#0000FF")
        .style("stroke-width", 4)
        .style("opacity", "0.6");

    var link = svg.selectAll(".link")
        .data(data.links)
        .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", 1.5)
        .style("marker-end",  function(d) { return d.style; });

    var gnodes = svg.selectAll('g.gnode')
        .data(data.nodes)
        .enter()
        .append("g")
        .classed('gnode', true)

    var node = gnodes.append("circle")
        .attr("class", "node")
        .attr("r", 9)
        .style("fill", function(d, i) { return color(d.group); })
        .style("stroke", function(d, i) { return d3.rgb(color(d.group)).darker(2); })
        .call(force.drag);

    var labels = gnodes.append("text")
        .attr("dx", 12)
        .attr("dy", ".35em")
        .attr("x", -16)
        .text(function(d) { return d.name; });

    svg.style("opacity", 1e-6)
        .transition()
        .duration(1000)
        .style("opacity", 1);

    function tick(e) {
        link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        // Push different nodes in different directions for clustering.
        var k = 2 * e.alpha;
        data.nodes.forEach(function(o, i) {
            o.x += (i - ((data.nodes.length - 1) / 2.0)) * k;
        });
        gnodes.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    }
})();

//translocation
(function() {
    var data = {
        "nodes":[
            {"name":"A","group":1},
            {"name":"C","group":3},
            {"name":"G","group":2},
            {"name":"C","group":3},
            {"name":"C","group":3},
            {"name":"C","group":3},
            {"name":"T","group":4},
            {"name":"C","group":3},
            {"name":"A","group":1},
            {"name":"C","group":3},
            {"name":"G","group":2},
            {"name":"C","group":3},
            {"name":"C","group":3},
            {"name":"C","group":3},
            {"name":"T","group":4},
            {"name":"C","group":3},
            {"name":"A","group":1},
            {"name":"C","group":3},
            {"name":"G","group":2},
            {"name":"C","group":3},
            {"name":"C","group":3},
            {"name":"C","group":3},
            //{"name":"T","group":4},
            //{"name":"C","group":3},
            //{"name":"A","group":1},
            //{"name":"C","group":3},
            //{"name":"G","group":2},
            //{"name":"C","group":3},
            //{"name":"C","group":3},
            //{"name":"C","group":3},
            {"name":"T","group":4},
            {"name":"C","group":3}
        ],
        "links":[
            {"source":0,"target":2,"value":9},
            {"source":2,"target":4,"value":9},
            {"source":4,"target":6,"value":9},
            {"source":6,"target":8,"value":9},
            {"source":8,"target":10,"value":9},
            {"source":10,"target":12,"value":9},
            {"source":12,"target":14,"value":9},
            {"source":14,"target":16,"value":9},
            {"source":16,"target":18,"value":9},
            {"source":18,"target":20,"value":9},
            {"source":20,"target":22,"value":9},
            //{"source":22,"target":24,"value":9},
            //{"source":24,"target":26,"value":9},
            //{"source":26,"target":28,"value":9},
            //{"source":28,"target":30,"value":9},
            {"source":1,"target":3,"value":9},
            {"source":3,"target":5,"value":9},
            {"source":5,"target":7,"value":9},
            {"source":7,"target":9,"value":9},
            {"source":9,"target":11,"value":9},
            {"source":11,"target":13,"value":9},
            {"source":13,"target":15,"value":9},
            {"source":15,"target":17,"value":9},
            {"source":17,"target":19,"value":9},
            {"source":19,"target":21,"value":9},
            {"source":21,"target":23,"value":9},
            //{"source":23,"target":25,"value":9},
            //{"source":25,"target":27,"value":9},
            //{"source":27,"target":29,"value":9},
            //{"source":29,"target":31,"value":9},
            {"source":14,"target":17,"value":9},
            {"source":15,"target":16,"value":9}
    ]};

    var color = d3.scale.category10();

    var width = 600,
        height = 150;

    var fill = d3.scale.category10();

    var force = d3.layout.force()
        .charge(-100)
        .nodes(data.nodes)
        .links(data.links)
        .size([width, height])
        .on("tick", tick)
        .start();

    var svg = d3.select("#chart5").append("svg")
        .attr("width", width)
        .attr("height", height);

    var link = svg.selectAll(".link")
        .data(data.links)
        .enter().append("line")
        .attr("class", "link");

    var gnodes = svg.selectAll('g.gnode')
        .data(data.nodes)
        .enter()
        .append("g")
        .classed('gnode', true)

    var node = gnodes.append("circle")
        .attr("class", "node")
        .attr("r", 9)
        .style("fill", function(d, i) { return color(d.group); })
        .style("stroke", function(d, i) { return d3.rgb(color(d.group)).darker(2); })
        .call(force.drag)

    var labels = gnodes.append("text")
        .attr("dx", 12)
        .attr("dy", ".35em")
        .attr("x", -16)
        .text(function(d) { return d.name; });

    svg.style("opacity", 1e-6)
        .transition()
        .duration(1000)
        .style("opacity", 1);

    function tick(e) {
        link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        // Push different nodes in different directions for clustering.
        var k = 2 * e.alpha;
        data.nodes.forEach(function(o, i) {
            o.x += (2*Math.floor(i/2) - ((data.nodes.length - 1) / 2.0)) * k;
        });
        gnodes.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    }
})();
