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

let bodyPart = "";
let description = "";
$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  var dataPath = "../WearableRefresh/assets/data/bhpEquipment1.csv";
        Papa.parse(dataPath, {
            download: true,
            header: true,
            complete: function(results) {
            console.log("Finished:", results.data);
            bodyPart = results.data[14].bodyPart;
            description = results.data[14].description
            console.log(results.data[14].bodyPart);
            console.log(results.data[14].description);
            // equipmentDB = TAFFY(results.data);
            // headArray = equipmentDB({bodyPart:"head"}).get();
            // bodyArray = equipmentDB({bodyPart:"body"}).get();
            // handArray = equipmentDB({bodyPart:"hand"}).get();
            // wristArray = equipmentDB({bodyPart:"wrist"}).get();
            // waistArray = equipmentDB({bodyPart:"waist"}).get();
            // headArrayLength = headArray.length;
            // bodyArrayLength = bodyArray.length;
            // handArrayLength = handArray.length;
            // wristArrayLength = wristArray.length;
            // waistArrayLength = waistArray.length;
          }
        })
    $("#vest-btn").on("click",function(){
        $("#vest").attr("src","../WearableRefresh/assets/images/body.png");
        $("#vest-btn").attr("class","");
        $("#rightNav").attr("class","rightside");
        $("#bodyPart").text(bodyPart);
        $("#description").text(description);


        
      
    })
  });


