



// function Tab(){
var Tab = function(){
  console.log(this);
}



Tab.prototype.render = function(left, top){
  var div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.left=left;
  div.style.top=top;
  // div.setAttribute("height",60);
  // div.setAttribute("width",70);

    var svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg1.setAttribute("height",65);
  svg1.setAttribute("width",65);




  // document.body.appendChild(svg1);
  var circ1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circ1.setAttribute("cx",32);
  circ1.setAttribute("cy",32);
  circ1.setAttribute("r",20);
  circ1.setAttribute("fill","yellow");
  circ1.style.opacity = '0.6';
  circ1.style.zIndex = '2';
  circ1.setAttribute('class', "circle1");



  var circ2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circ2.setAttribute("cx",32);
  circ2.setAttribute("cy",32);
  circ2.setAttribute("r",35);
  // circ2.setAttribute("fill","white");
  circ2.style.stroke = "red";
  circ2.style.strokeWidth = "2";
  // circ2.style.opacity = '0.6';
  circ2.style.zIndex = '1';
  circ2.setAttribute('class', "circle1");


  // svg1.appendChild(circ1);
  svg1.appendChild(circ2);


  div.appendChild(svg1);

  this.$el=$(div);

  return this.$el;
}


var tab1 = new Tab();
var tab2 = new Tab();
var tab3 = new Tab();
// }
// 




function pulse(){
  var circ = document.getElementsByClassName('circle1');

  for(var i=0; i<circ.length;i++){

    var circleX = circ[i].getAttribute("cx");
    var circleY = circ[i].getAttribute("cy");
    var circleR = circ[i].getAttribute("r");


    if(circleR == 10){
      circ[i].setAttribute("r",++circleR);
      circ[i].id = 'asc';
    }else if(circleR > 35){
      circ[i].setAttribute("r",--circleR);

      circ[i].id = 'dec';
    }else if(circleR > 10 && circ[i].id == 'asc'){
      circ[i].setAttribute("r",++circleR);
    }else if(circleR > 10){
      circ[i].setAttribute("r",--circleR);
    }
    
  }

  
}

setInterval(pulse, 30)



$(document).on('ready', function() {
  $('body').append(tab1.render('800px', '100px'),
                    tab2.render('300px', '300px'),
                      tab3.render('500px', '500px'));


  $('.circle1').on('mouseover', function(){
      $(this).attr("class", "circle2");
      console.log($(this).attr("class"))

      $('.circle2').on('mouseout', function(){
    console.log('hi')
      $(this).attr("class", "circle1");
  })
  })

  
});