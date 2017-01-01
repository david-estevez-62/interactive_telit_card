var status = 'closed';
var lvlRadius1 = 16;
var lvlRadius2 = lvlRadius1 + 6;


setInterval(pulse, 100);


function pulse(){
  var cir1 = document.getElementsByClassName('circle1');
  var cir2 = document.getElementsByClassName('circle0');


  for(var i=0; i<cir2.length;i++){

    var circleR = cir2[i].getAttribute("r");


    if(circleR == (lvlRadius1+10)){
      cir2[i].setAttribute("r",++circleR);
      cir2[i].id = 'asc';
    }else if(circleR > (lvlRadius2+10)){
      cir2[i].setAttribute("r",--circleR);

      cir2[i].id = 'dec';
    }else if(circleR > (lvlRadius1+10) && cir2[i].id == 'asc'){
      cir2[i].setAttribute("r",++circleR);
    }else if(circleR > (lvlRadius1+10)){
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





// function Tab(){
var Tab = function(){
  console.log(this);
}



Tab.prototype.render = function(left, top, tabId){
  var div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.left=left;
  div.style.top=top;
  div.style.width='360px';
  div.className ='tabCont';
  div.id = tabId;
  div.style.opacity = '0.8';


  var svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg1.setAttribute("height",70);
  svg1.setAttribute("width",70);
  svg1.style.marginLeft = '-5px';
  svg1.style.marginTop = '-5px';




  // document.body.appendChild(svg1);
  var circ1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circ1.setAttribute("cx",35);
  circ1.setAttribute("cy",35);
  circ1.setAttribute("r",18);
  circ1.setAttribute("fill","#F6C600");
  circ1.style.opacity = '0.8';
  circ1.setAttribute('class', "circle1");
  circ1.innerHTML = 'x';



  var circ2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circ2.setAttribute("cx",35);
  circ2.setAttribute("cy",35);
  circ2.setAttribute("r",28);
  circ2.setAttribute("fill-opacity","0");
  circ2.style.stroke = '#F6C600';
  circ2.style.strokeOpacity = "0.8";
  circ2.style.strokeWidth = "4";
  circ2.setAttribute('class', "circle0");

  
  var divTitle = document.createElement('div');
  divTitle.style.background = 'white';
  divTitle.style.width = '150px';
  divTitle.style.height='35px';
  divTitle.style.marginLeft='140px';
  divTitle.style.marginTop='-55px';
  divTitle.innerHTML = 'text';
  divTitle.className='divTitle';



  svg1.appendChild(circ2);
  svg1.appendChild(circ1);
  
div.appendChild(svg1);
div.appendChild(divTitle)
  

  this.$el=$(div);

  return this.$el;
}


Tab.prototype.transform = function(left, top){
  console.log(this)

}

var tab1 = new Tab();
var tab2 = new Tab();
var tab3 = new Tab();









$(document).on('ready', function() {
  $('body').append(tab1.render('800px', '100px', 'tab1'),
                    tab2.render('200px', '480px', 'tab2'),
                      tab3.render('640px', '300px', 'tab3'));


  $('.circle1, .circle0').on('mouseover', function(e){
      e.stopPropagation()
      var class1 = $(this).attr("class");
      // console.log(class1);
      $(this).attr("class", "circle2");
      $(this).siblings().attr("class", "circle2");

      

        $('.circle2').on('mouseout', function(e){
          e.stopPropagation()
          var circA = $(this)[0];
          // console.log('circA ', circA.getAttribute('r'));
          var circAr =circA.getAttribute('r');

          var circB = $(this).siblings()[0];
          var circBr = circB.getAttribute('r');
          // console.log('circB ', circBr);


          if(circAr > circBr){
              if(status == 'closed'){
                circA.setAttribute('class', 'circle0');
                circB.setAttribute('class', 'circle1');
              }
          }else if(class1 == 'circle0'){
              if(status == 'closed'){
                circA.setAttribute('class', 'circle1');
                circB.setAttribute('class', 'circle0');
              }
          }

        
        });


  })


  $('.circle0, .circle1, .circle2, .divTitle, .tabCont').on('click', function(e){
    e.stopPropagation();

   var clas = $(this).attr("class");
   var tabCont = $(this).closest(".tabCont");



    if(status == 'closed'){
      
        tabCont[0].style.height="269px";
        tabCont[0].style.background='#072A41';

        if(clas == 'circle2'){
          console.log('hi1')
          status = 'opened';
          $(this).parent().siblings('.divTitle').css({width: '360px',marginLeft: '0px'});
        }

        // when click twice, on closing still is pulsing
        // when its still mousedover should be stopped
        else if(clas == 'cirle0' || clas == 'circle1'){
          console.log('hi2')
          status = 'opened';
          $(this).parent().siblings('.divTitle').css({width: '360px',marginLeft: '0px'});
        }


        else{
          console.log('hi3')
          status = 'opened';
          console.log($(this).siblings('svg'))
          $(this).siblings('svg').find('.circle0').attr("class", "circle2");
          $(this).siblings('svg').find('.circle1').attr("class", "circle2");
          $(this).css({width: '360px',marginLeft: '0px'});
        }

        
        tabCont[0].style.left = '100px';
        tabCont[0].style.top = '100px';
        

    }else{


      if(clas == 'circle2'){
        console.log('hi4');
        console.log(clas);
          tabCont[0].style.height="0px";
        tabCont[0].style.background='none';

        tabCont.find('.divTitle').css({width:'150px',marginLeft:'140px'})

      }else{

        console.log('hi5')
        tabCont[0].style.height="0px";
        tabCont[0].style.background='none';

        tabCont.find('.divTitle').css({width:'150px',marginLeft:'140px'})
        var circleA = tabCont.find('.circle2')[0];
        var circleB = tabCont.find('.circle2')[1];

        var circleASize = circleA.getAttribute('r');
        var circleBSize = circleB.getAttribute('r');

        console.log(circleASize)

        if(circleASize > circleBSize){
          circleA.setAttribute('class', 'circle0');
          circleB.setAttribute('class', 'circle1');
          console.log(circleA)
        }else{
          circleA.setAttribute('class', 'circle1');
          circleB.setAttribute('class', 'circle0');
          console.log(circleA)
        }
      }
        



          status = 'closed';

          if(tabCont[0].id == 'tab1'){
          tabCont[0].style.left = '800px';
        tabCont[0].style.top = '100px';
      }else if(tabCont[0].id =='tab2'){
tabCont[0].style.left = '200px';
        tabCont[0].style.top = '480px';
      }else if(tabCont[0].id == 'tab3'){
        
tabCont[0].style.left = '640px';
        tabCont[0].style.top = '300px';
    }

    
}


  })


  $('.tabCont').on('click', function(){
var tabCont = $(this).closest(".tabCont");
tabCont[0].style.height="0px";
    tabCont[0].style.background='none';
    $(this).find('.divTitle').css({width:'150px',marginLeft:'140px'})
    
    var circleA = tabCont.find('.circle2')[0];
        var circleB = tabCont.find('.circle2')[1];

        var circleASize = circleA.getAttribute('r');
        var circleBSize = circleB.getAttribute('r');

        console.log(circleASize)

        if(circleASize > circleBSize){
          circleA.setAttribute('class', 'circle0');
          circleB.setAttribute('class', 'circle1');
          console.log(circleA)
        }else{
          circleA.setAttribute('class', 'circle1');
          circleB.setAttribute('class', 'circle0');
          console.log(circleA)
        }


      

    status = 'closed';

    if(tabCont[0].id == 'tab1'){
          tabCont[0].style.left = '800px';
        tabCont[0].style.top = '100px';
      }else if(tabCont[0].id =='tab2'){
tabCont[0].style.left = '200px';
        tabCont[0].style.top = '480px';
      }else if(tabCont[0].id == 'tab3'){
        
tabCont[0].style.left = '640px';
        tabCont[0].style.top = '300px';
    }

  })


  
});