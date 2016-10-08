const d3zee = {
  color: d3.scale.category20(),
  rightBar: function(element,data,animate){
    if(animate == true){
      d3.select(element)
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .style("width", function(d){
          return 0;
        })
        .style("height", function(d,i){
          return 100/data.length + "%";
        })
        .style("background-color", function(d,i){
          return d3zee.color(i%20);
        });

        d3.select(element)
          .selectAll("div")
          .data(data)
          .transition()
          .duration(1000)
          .style("width", function(d){
            return d/d3.max(data)*100 +"%";
          });
    } else {
      d3.select(element)
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .style("width", function(d){
          return d/d3.max(data)*100 +"%";
        })
        .style("height", function(d,i){
          return 100/data.length + "%";
        })
        .style("background-color", function(d,i){
          return d3zee.color(i%20);
        });
    }
  },
  leftBar: function(element,data, animate){
    var max = d3.max(data);
    d3.select(element)
        .style("position", "relative")
    if(animate == true){
      d3.select(element)
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .style("position", "absolute")
        .style("right", 0)
        .style("top", function(d,i){
          return i * (100/data.length) + "%";
        })
        .style("width", function(d){
          return 0;
        })
        .style("height", function(d,i){
          return 100/data.length + "%";
        })
        .style("background-color", function(d,i){
          return d3zee.color(i%20);
        });
        d3.select(element)
          .selectAll("div")
          .data(data)
          .transition()
          .duration(1000)
          .style("width", function(d){
            return d/max*100 +"%";
          });
    } else {
      d3.select(element)
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .style("position", "relative")
        .style("left", function(d){
          var l = 100 - (d/max*100) +"%";
          return l;
        })
        .style("width", function(d){
          return d/max*100 +"%";
        })
        .style("height", function(d,i){
          return 100/data.length + "%";
        })
        .style("background-color", function(d,i){
          return d3zee.color(i%20);
        });
    }
  },
  upBar: function(element,data, animate){
    d3.select(element)
      .style("position", "relative");
    if(animate == true){
      d3.select(element)
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .style("position", "absolute")
        .style("bottom", function(){
          return 0;
        })
        .style("left", function(d,i){
          return i * (100/data.length) + "%"
        })
        .style("display", "inline-block")
        .style("width", function(d){
          return 100/data.length + "%";
        })
        .style("height", function(d,i){
          return 0;
        })
        .style("background-color", function(d,i){
          return d3zee.color(i%20);
        });

        d3.select(element)
          .selectAll("div")
          .data(data)
          .transition()
          .duration(1000)
          .style("height", function(d,i){
            return d/d3.max(data)*100 +"%";
          });
    } else {
      d3.select(element)
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .style("display", "inline-block")
        .style("width", function(d){
          return 100/data.length + "%";
        })
        .style("height", function(d,i){
          return d/d3.max(data)*100 +"%";
        })
        .style("background-color", function(d,i){
          return d3zee.color(i%20);
        });
    }
  },
  downBar: function(element,data,animate){
    var max = d3.max(data);
    d3.select(element)
      .style("position", "relative");
    if(animate == true){
      d3.select(element)
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .style("position", "absolute")
        .style("top", 0)
        .style("left", function(d,i){
          return i * (100/data.length) + "%";
        })
        .style("width", function(d){
          return 100/data.length + "%";
        })
        .style("height", function(d,i){
          return 0;
        })
        .style("background-color", function(d,i){
          return d3zee.color(i%20);
        });

        d3.select(element)
          .selectAll("div")
          .data(data)
          .transition()
          .duration(1000)
          .style("height", function(d,i){
            return d/max*100 +"%";
          });
    } else {
      d3.select(element)
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .style("position", "absolute")
        .style("top", 0)
        .style("left", function(d,i){
          return i * (100/data.length) + "%";
        })
        .style("width", function(d){
          return 100/data.length + "%";
        })
        .style("height", function(d,i){
          return d/max*100 +"%";
        })
        .style("background-color", function(d,i){
          return d3zee.color(i%20);
        });
    }
  },
  donut: function(element, data, animate) {
    if(animate == true){
      d3.select(element)
        .selectAll("svg")
        .remove();
      var width = d3.select(element)[0][0].clientWidth;
      var height = d3.select(element)[0][0].clientHeight;
      if(width < height){
        height = width;
      } else {
        width = height;
      }
      var color = d3zee.color;
      var svg = d3.select(element)
          .append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

      var pie = d3.layout.pie()
          .sort(null)
          .value(function(d) {
              return d;
          });

      var donutarc = d3.svg
          .arc()
          .outerRadius(width/2)
          .innerRadius(width/3);

      var fakedata = data.map(function(x){
        return 50;
      });

      d3.select(element)
          .select("g")
          .selectAll("path")
          .data(pie(fakedata.slice(1)))
          .enter()
          .append("path")
          .attr("d", donutarc)
          .style("fill", function(d, i) {
              return color(i % 20);
          });
          var transitiondata = data.map(function(x){
            return Math.sqrt((x-50)*(x-50));
          });
          for (var i = 0; i < 5; i++) {
            d3.select(element)
                .select("g")
                .selectAll("path")
                .data(pie(transitiondata.slice(1)))
                .transition()
                .duration(1000)
                .attr("d", donutarc);
            transitiondata = transitiondata.map(function(x){
              return Math.sqrt((x-50)*(x-50));
            });
          }



    } else {
      d3.select(element)
        .selectAll("svg")
        .remove();
      var width = d3.select(element)[0][0].clientWidth;
      var height = d3.select(element)[0][0].clientHeight;
      if(width < height){
        height = width;
      } else {
        width = height;
      }
      var svg = d3.select(element)
          .append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", "translate(" + width/2 + "," + height/2 + ")");
      var pie = d3.layout.pie()
          .sort(null)
          .value(function(d) {
              return d;
          });
      var donutarc = d3.svg
          .arc()
          .outerRadius(width/2)
          .innerRadius(width/3);
      var color = d3zee.color;
      d3.select(element)
          .select("g")
          .selectAll("path")
          .data(pie(data.slice(1)))
          .enter()
          .append("path")
          .attr("d", donutarc)
          .style("fill", function(d, i) {
              return color(i % 20);
          });
    }
  },
  pie: function(element, data, animate) {
    if(animate == true){
      d3.select(element)
        .selectAll("svg")
        .remove();
      var width = d3.select(element)[0][0].clientWidth;
      var height = d3.select(element)[0][0].clientHeight;
      if(width < height){
        height = width;
      } else {
        width = height;
      }
      var color = d3zee.color;
      var svg = d3.select(element)
          .append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

      var pie = d3.layout.pie()
          .sort(null)
          .value(function(d) {
              return d;
          });

      var arc = d3.svg
          .arc()
          .outerRadius(width/2);

      var fakedata = data.map(function(x){
        return 50;
      });

      d3.select(element)
          .select("g")
          .selectAll("path")
          .data(pie(fakedata.slice(1)))
          .enter()
          .append("path")
          .attr("d", arc)
          .style("fill", function(d, i) {
              return color(i % 20);
          });
          var transitiondata = data.map(function(x){
            return Math.sqrt((x-50)*(x-50));
          });
          for (var i = 0; i < 5; i++) {
            d3.select(element)
                .select("g")
                .selectAll("path")
                .data(pie(transitiondata.slice(1)))
                .transition()
                .duration(1000)
                .attr("d", arc);
            transitiondata = transitiondata.map(function(x){
              return Math.sqrt((x-50)*(x-50));
            });
          }



    } else {
      d3.select(element)
        .selectAll("svg")
        .remove();
      var width = d3.select(element)[0][0].clientWidth;
      var height = d3.select(element)[0][0].clientHeight;
      if(width < height){
        height = width;
      } else {
        width = height;
      }
      var svg = d3.select(element)
          .append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", "translate(" + width/2 + "," + height/2 + ")");
      var pie = d3.layout.pie()
          .sort(null)
          .value(function(d) {
              return d;
          });
      var arc = d3.svg
          .arc()
          .outerRadius(width/2)
          .innerRadius(width/3);
      var color = d3zee.color;
      d3.select(element)
          .select("g")
          .selectAll("path")
          .data(pie(data.slice(1)))
          .enter()
          .append("path")
          .attr("d", arc)
          .style("fill", function(d, i) {
              return color(i % 20);
          });
    }
  },
  forceCircles: function(element, data, animate){
    if(animate == true){
      var width = d3.select(element)[0][0].clientWidth;
      var height = d3.select(element)[0][0].clientHeight;
      var color = d3zee.color;
      d3.select(element)
        .selectAll("svg")
        .remove();
      var nodes = [];
      for(var z = 0; z < data.length; z++){
        nodes.push({
          radius: data[z]/d3.max(data)*width/6
        })
      }

     var force = d3.layout
         .force()
         .gravity(0.025)
         .charge(function(d, i) {
           return d ? 0 : -1000;
         })
         .nodes(nodes)
         .size([width, height]);

     var root = nodes[0];
         root.radius = width/7;
         root.fixed = true;

     force.start();

     var svg = d3.select(element)
         .append("svg")
         .attr("width", width)
         .attr("height", height);

     svg.selectAll("circle")
         .data(nodes.slice(1))
         .enter()
         .append("circle")
         .attr("r", function(d) {
             return 0;
         })
         .style("fill", function(d, i) {
             return color(i % 20);
         });

         svg.selectAll("circle")
             .data(nodes.slice(1))
             .transition()
             .duration(1000)
             .attr("r", function(d) {
                 return d.radius;
             });

     force.on("tick", function(e) {
       var q = d3.geom.quadtree(nodes),
           i = 0,
           n = nodes.length;

       while (++i < n) {
         q.visit(collide(nodes[i]));
       }

       svg.selectAll("circle")
           .attr("cx", function(d) {
             return d.x;
           })
           .attr("cy", function(d) {
             return d.y;
         });
     })

     svg.on("mousemove", function() {
       var p1 = d3.mouse(this);
       root.px = p1[0];
       root.py = p1[1];
       force.resume();
     });

     function collide(node) {
       var r = node.radius + 16,
           nx1 = node.x - r,
           nx2 = node.x + r,
           ny1 = node.y - r,
           ny2 = node.y + r;
       return function(quad, x1, y1, x2, y2) {
         if (quad.point && (quad.point !== node)) {
           var x = node.x - quad.point.x,
               y = node.y - quad.point.y,
               l = Math.sqrt(x * x + y * y),
               r = node.radius + quad.point.radius;
           if (l < r) {
             l = (l - r) / l * .5;
             node.x -= x *= l;
             node.y -= y *= l;
             quad.point.x += x;
             quad.point.y += y;
           }
         }
         return x1 > nx2
             || x2 < nx1
             || y1 > ny2
             || y2 < ny1;
       };
      }
    } else {
      var width = d3.select(element)[0][0].clientWidth;
      var height = d3.select(element)[0][0].clientHeight;
      var color = d3zee.color;
      d3.select(element)
        .selectAll("svg")
        .remove();
      var nodes = [];
      for(var z = 0; z < data.length; z++){
        nodes.push({
          radius: data[z]/d3.max(data)*width/6
        })
      }

     var force = d3.layout
         .force()
         .gravity(0.025)
         .charge(function(d, i) {
           return d ? 0 : -1000;
         })
         .nodes(nodes)
         .size([width, height]);

     var root = nodes[0];
         root.radius = width/7;
         root.fixed = true;

     force.start();

     var svg = d3.select(element)
         .append("svg")
         .attr("width", width)
         .attr("height", height);

     svg.selectAll("circle")
         .data(nodes.slice(1))
         .enter()
         .append("circle")
         .attr("r", function(d) {
             return d.radius;
         })
         .style("fill", function(d, i) {
             return color(i % 20);
         });

     force.on("tick", function(e) {
       var q = d3.geom.quadtree(nodes),
           i = 0,
           n = nodes.length;

       while (++i < n) {
         q.visit(collide(nodes[i]));
       }

       svg.selectAll("circle")
           .attr("cx", function(d) {
             return d.x;
           })
           .attr("cy", function(d) {
             return d.y;
         });
     })

     svg.on("mousemove", function() {
       var p1 = d3.mouse(this);
       root.px = p1[0];
       root.py = p1[1];
       force.resume();
     });

     function collide(node) {
       var r = node.radius + 16,
           nx1 = node.x - r,
           nx2 = node.x + r,
           ny1 = node.y - r,
           ny2 = node.y + r;
       return function(quad, x1, y1, x2, y2) {
         if (quad.point && (quad.point !== node)) {
           var x = node.x - quad.point.x,
               y = node.y - quad.point.y,
               l = Math.sqrt(x * x + y * y),
               r = node.radius + quad.point.radius;
           if (l < r) {
             l = (l - r) / l * .5;
             node.x -= x *= l;
             node.y -= y *= l;
             quad.point.x += x;
             quad.point.y += y;
           }
         }
         return x1 > nx2
             || x2 < nx1
             || y1 > ny2
             || y2 < ny1;
       };
      }
    }

  },
  forceSquares: function(element, data, animate){
    if(animate == true){
      var width = d3.select(element)[0][0].clientWidth;
      var height = d3.select(element)[0][0].clientHeight;
      var color = d3zee.color;
      d3.select(element)
        .selectAll("svg")
        .remove();
      var nodes = [];
      for(var z = 0; z < data.length; z++){
        nodes.push({
          radius: data[z]/d3.max(data)*width/6
        })
      }

     var force = d3.layout
         .force()
         .gravity(0.025)
         .charge(function(d, i) {
           return d ? 0 : -1000;
         })
         .nodes(nodes)
         .size([width, height]);

     var root = nodes[0];
         root.radius = width/7;
         root.fixed = true;

     force.start();

     var svg = d3.select(element)
         .append("svg")
         .attr("width", width)
         .attr("height", height);

     svg.selectAll("rect")
         .data(nodes.slice(1))
         .enter()
         .append("rect")
         .attr("width", function(d) {
           return 0;
         })
         .attr("height", function(d){
           return 0;
         })
         .style("fill", function(d, i) {
             return color(i % 20);
         });

     svg.selectAll("rect")
         .data(nodes.slice(1))
         .transition()
         .duration(1000)
         .attr("width", function(d) {
           return d.radius;
         })
         .attr("height", function(d){
           return d.radius;
         });

     force.on("tick", function(e) {
       var q = d3.geom.quadtree(nodes),
           i = 0,
           n = nodes.length;

       while (++i < n) {
         q.visit(collide(nodes[i]));
       }

       svg.selectAll("rect")
           .attr("x", function(d) {
             return d.x;
           })
           .attr("y", function(d) {
             return d.y;
         });
     })

     svg.on("mousemove", function() {
       var p1 = d3.mouse(this);
       root.px = p1[0];
       root.py = p1[1];
       force.resume();
     });

     function collide(node) {
       var r = node.radius,
           nx1 = node.x - r,
           nx2 = node.x + r,
           ny1 = node.y - r,
           ny2 = node.y + r;
       return function(quad, x1, y1, x2, y2) {
         if (quad.point && (quad.point !== node)) {
           var x = node.x - quad.point.x,
               y = node.y - quad.point.y,
               l = Math.sqrt(x * x + y * y),
               r = node.radius + quad.point.radius;
           if (l < r) {
             l = (l - r) / l * .5;
             node.x -= x *= l;
             node.y -= y *= l;
             quad.point.x += x;
             quad.point.y += y;
           }
         }
         return x1 > nx2
             || x2 < nx1
             || y1 > ny2
             || y2 < ny1;
       };
      }
    } else {
      var width = d3.select(element)[0][0].clientWidth;
      var height = d3.select(element)[0][0].clientHeight;
      var color = d3zee.color;
      d3.select(element)
        .selectAll("svg")
        .remove();
      var nodes = [];
      for(var z = 0; z < data.length; z++){
        nodes.push({
          radius: data[z]/d3.max(data)*width/6
        })
      }

     var force = d3.layout
         .force()
         .gravity(0.025)
         .charge(function(d, i) {
           return d ? 0 : -1000;
         })
         .nodes(nodes)
         .size([width, height]);

     var root = nodes[0];
         root.radius = width/7;
         root.fixed = true;

     force.start();

     var svg = d3.select(element)
         .append("svg")
         .attr("width", width)
         .attr("height", height);

     svg.selectAll("rect")
         .data(nodes.slice(1))
         .enter()
         .append("rect")
         .attr("width", function(d) {
           return d.radius;
         })
         .attr("height", function(d){
           return d.radius;
         })
         .style("fill", function(d, i) {
             return color(i % 20);
         });

     force.on("tick", function(e) {
       var q = d3.geom.quadtree(nodes),
           i = 0,
           n = nodes.length;

       while (++i < n) {
         q.visit(collide(nodes[i]));
       }

       svg.selectAll("rect")
           .attr("x", function(d) {
             return d.x;
           })
           .attr("y", function(d) {
             return d.y;
         });
     })

     svg.on("mousemove", function() {
       var p1 = d3.mouse(this);
       root.px = p1[0];
       root.py = p1[1];
       force.resume();
     });

     function collide(node) {
       var r = node.radius,
           nx1 = node.x - r,
           nx2 = node.x + r,
           ny1 = node.y - r,
           ny2 = node.y + r;
       return function(quad, x1, y1, x2, y2) {
         if (quad.point && (quad.point !== node)) {
           var x = node.x - quad.point.x,
               y = node.y - quad.point.y,
               l = Math.sqrt(x * x + y * y),
               r = node.radius + quad.point.radius;
           if (l < r) {
             l = (l - r) / l * .5;
             node.x -= x *= l;
             node.y -= y *= l;
             quad.point.x += x;
             quad.point.y += y;
           }
         }
         return x1 > nx2
             || x2 < nx1
             || y1 > ny2
             || y2 < ny1;
       };
      }
    }
  }
};
