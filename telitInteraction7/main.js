



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
  svg1.setAttribute("height",100);
  svg1.setAttribute("width",100);




  // document.body.appendChild(svg1);
  var circ1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circ1.setAttribute("cx",50);
  circ1.setAttribute("cy",50);
  circ1.setAttribute("r",18);
  circ1.setAttribute("fill","yellow");
  circ1.style.opacity = '0.8';
  // circ1.style.zIndex = '-2';
  circ1.setAttribute('class', "circle1");



  var circ2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circ2.setAttribute("cx",50);
  circ2.setAttribute("cy",50);
  circ2.setAttribute("r",26);
  circ2.setAttribute("fill-opacity","0");
  circ2.style.stroke = "yellow";
  circ2.style.strokeOpacity = "0.8";
  circ2.style.strokeWidth = "2";
  // circ2.style.opacity = '0.6';
  // circ2.style.zIndex = '1';
  circ2.setAttribute('class', "circle0");



  // var pathCont = document.createElement('g');
  // pathCont.setAttribute('fill', "red");

  // var path1 = document.createElement('path');
  // path1.setAttribute('d', "M47.3 33.4H30.9v3.2h16.4");
  // path1.setAttribute('fill', "#FFF");


  // pathCont.appendChild(path1);

  // svg1.appendChild(pathCont);


svg1.appendChild(circ2);
  svg1.appendChild(circ1);
  


  div.appendChild(svg1);

  this.$el=$(div);

  return this.$el;
}


var tab1 = new Tab();
var tab2 = new Tab();
var tab3 = new Tab();


// }
// 

var lvlRadius1 = 14;
var lvlRadius2 = lvlRadius1 + 8;



function pulse(){
  var cir1 = document.getElementsByClassName('circle1');
  var cir2 = document.getElementsByClassName('circle0');


  for(var i=0; i<cir2.length;i++){

    var circleR = cir2[i].getAttribute("r");


    if(circleR == (lvlRadius1+6)){
      cir2[i].setAttribute("r",++circleR);
      cir2[i].id = 'asc';
    }else if(circleR > (lvlRadius2+6)){
      cir2[i].setAttribute("r",--circleR);

      cir2[i].id = 'dec';
    }else if(circleR > (lvlRadius1+6) && cir2[i].id == 'asc'){
      cir2[i].setAttribute("r",++circleR);
    }else if(circleR > (lvlRadius1+6)){
      cir2[i].setAttribute("r",--circleR);
    }
    
  }



  for(var i=0; i<cir1.length;i++){

    var circleR = cir1[i].getAttribute("r");


    if(circleR == lvlRadius1){
      cir1[i].setAttribute("r",++circleR);
      cir1[i].id = 'asc';
    }else if(circleR > lvlRadius2){
      cir1[i].setAttribute("r",--circleR);

      cir1[i].id = 'dec';
    }else if(circleR > lvlRadius1 && cir1[i].id == 'asc'){
      cir1[i].setAttribute("r",++circleR);
    }else if(circleR > lvlRadius1){
      cir1[i].setAttribute("r",--circleR);
    }
    
  }

  
}

setInterval(pulse, 80)



$(document).on('ready', function() {
  $('body').append(tab1.render('800px', '100px'),
                    tab2.render('300px', '300px'),
                      tab3.render('500px', '500px'));


  $('.circle1, .circle0').on('mouseover', function(){
      var class1 = $(this).attr("class");

      $(this).attr("class", "circle2");
      $(this).siblings().attr("class", "circle2");

      

        $('.circle2').on('mouseout', function(){

          if(class1 == 'circle1'){
              $(this).attr("class", class1);
              $(this).siblings().attr("class", "circle0");
          }else if(class1 == 'circle0'){
              $(this).attr("class", class1);
              $(this).siblings().attr("class", "circle1");
          }

          
        
        });


  })

  
});