var myFullpage = new fullpage('#fullpage', {
    verticalCentered: false,

    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage'],
    menu: '#menu',
    continuousVertical: true,
    afterLoad: function(anchorLink, index){
          console.log("AFTER LOAD - anchorLink:" +anchorLink + " index:" +index );
      },
      onLeave: function(index, nextIndex, direction){
          console.log("ONLEAVE - index:" +index + " nextIndex:" +nextIndex  + " direction:" + direction);

      },

    //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
    css3:false
});


$(document).ready(function(){
    $('.scrollspy').scrollSpy();

    $("#vest-btn").on("click",function(){
        $("#vest").attr("src","../WearableRefresh/assets/images/body.png");
        $("#vest-btn").attr("class","");
        $("#rightNav").attr("class","rightside");
    })
  });


