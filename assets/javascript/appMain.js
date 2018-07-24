
let bodyPart = "";
let name = "";
let description = "";
var equipmentDB;
var headArray;
var bodyArray;
var wristArray;
var waistArray;
var headArrayLength;
var bodyArrayLength;
var handArrayLength;
var wristArrayLength;
var waistArrayLength;
var saveHtml;
var sourceData


$(document).ready(function () {
 $(".tooltipped").tooltip(
    {
        html: true,
    }
            
);//tool tip feature 

$('.modal').modal({

    preventScrolling: true
}
    
);

    var dataPath = "../WearableRefresh/assets/data/bhpEquipment2.csv";
    var name1 = "";
    var name2 = "";
    var name3 = "";
    Papa.parse(dataPath, {
        download: true,
        header: true,
        complete: function (results) {
            console.log("Finished:", results.data);

            console.log(results.data[14].bodyPart);
            console.log(results.data[14].description);
            equipmentDB = TAFFY(results.data);
            
            headArray = equipmentDB({bodyPart:"head"}).get();
            console.log(headArray);
            bodyArray = equipmentDB({bodyPart:"body"}).get();
            handArray = equipmentDB({bodyPart:"hand"}).get();
            wristArray = equipmentDB({bodyPart:"wrist"}).get();
            waistArray = equipmentDB({bodyPart:"waist"}).get();
            headArrayLength = headArray.length;
            bodyArrayLength = bodyArray.length;
            handArrayLength = handArray.length;
            wristArrayLength = wristArray.length;
            waistArrayLength = waistArray.length;
        }
    })

//Hover Feature Starts

$("a.johntooltip").each(function(){ //johntooltip is unique calss that makes this element unique
        $(this).hover(function(){
        var sourceData = eval($(this).attr('data-source'));
        var listHtml = "";
                      for(var i = 0; i < sourceData.length; i++){
                        listHtml += "<li>"+sourceData[i].name+"</li>";
                      }
      $(this).attr("data-tooltip",listHtml);
    },function(){
        $(this).attr("data-tooltip","")
      });
        
});
  //Hover Feature Ends

//code for headButton click starts
//     $("#headBtn").on("click", function () {
//         $('.tooltipped').tooltip('close');
//         $("#close").text("close");
//         $("#rightside").attr("class", "rightside");
//         $("#rightside").addClass("animated slideInRight");
//         $(".categoryTitle").text("Head Gear");
//         $(".categoryCount").text("6 Devices Available");
//         $('.device-list').empty();
//         $('.device-desc').empty();
    
//         var listHtml = "";
//         for(i=0; i<headArrayLength ; i++){
//             listHtml += '<li>';
//             listHtml += '<div class="thumbnail">';
//             listHtml += '<div class="hoverStyle"><i class="fa fa-angle-double-right"></i> </div>';
//             listHtml += '<table cellpadding="0" cellspacing="0" border="0"><tr><td device-id="';
//             listHtml += headArray[i].image;
//             listHtml += '">'
//             listHtml += '<img src="../WearableRefresh/assets/images/'+headArray[i].image+'.jpg?v7" alt="" class="preview"/>';
//             listHtml += '<div class="itemName">';
//             listHtml += headArray[i].name;
//             listHtml += '</div>';
//             listHtml += '<div class="itemDesc">';
//             listHtml += headArray[i].description;
//             listHtml += '</div>';
//             listHtml += '</td></tr></table></div>';
//             listHtml += '</li>';

//         }
//         // console.log(listHtml);
//         saveHtml = listHtml;

//         $('.device-list').html(listHtml);
//     })
// //code for headButton click ends

// //code for bodyButton click starts
// $("#bodyBtn").on("click", function () {
//     $('.tooltipped').tooltip('close');
//     $("#close").text("close");
//     $("#rightside").attr("class", "rightside");
//     $("#rightside").addClass("animated slideInRight");
//     $(".categoryTitle").text("Wearable");
//     $(".categoryCount").text("2 Available");
//     $('.device-list').empty();
//     $('.device-desc').empty();
//     var listHtml = "";
//     for(i=0; i<bodyArrayLength ; i++){
//         listHtml += '<li>';
//         listHtml += '<div class="thumbnail">';
//         listHtml += '<div class="hoverStyle"><i class="fa fa-angle-double-right"></i> </div>';
//         listHtml += '<table cellpadding="0" cellspacing="0" border="0"><tr><td device-id="';
//         listHtml += bodyArray[i].image;
//         listHtml += '">'
//         listHtml += '<img src="../WearableRefresh/assets/images/'+bodyArray[i].image+'.jpg?v7" alt="" class="preview"/>';
//         listHtml += '<div class="itemName">';
//         listHtml += bodyArray[i].name;
//         listHtml += '</div>';
//         listHtml += '<div class="itemDesc">';
//         listHtml += bodyArray[i].description;
//         listHtml += '</div>';
//         listHtml += '</td></tr></table></div>';
//         listHtml += '</li>';

//     }
//     console.log(listHtml);
//     saveHtml = listHtml;

//     $('.device-list').html(listHtml);
// })
// //code for bodyButton click ends

// //code for handButton click starts
// $("#handBtn").on("click", function () {
//     $('.tooltipped').tooltip('close');
//     $("#close").text("close");
//     $("#rightside").attr("class", "rightside");
//     $("#rightside").addClass("animated slideInRight");
//     $(".categoryTitle").text("Hand Gear");
//     $(".categoryCount").text("3 Available");
//     $('.device-list').empty();
//     $('.device-desc').empty();
//     var listHtml = "";
//     for(i=0; i<handArrayLength ; i++){
//         listHtml += '<li>';
//         listHtml += '<div class="thumbnail">';
//         listHtml += '<div class="hoverStyle"><i class="fa fa-angle-double-right"></i> </div>';
//         listHtml += '<table cellpadding="0" cellspacing="0" border="0"><tr><td device-id="';
//         listHtml += handArray[i].image;
//         listHtml += '">'
//         listHtml += '<img src="../WearableRefresh/assets/images/'+handArray[i].image+'.jpg?v7" alt="" class="preview"/>';
//         listHtml += '<div class="itemName">';
//         listHtml += handArray[i].name;
//         listHtml += '</div>';
//         listHtml += '<div class="itemDesc">';
//         listHtml += handArray[i].description;
//         listHtml += '</div>';
//         listHtml += '</td></tr></table></div>';
//         listHtml += '</li>';

//     }
//     console.log(listHtml);
//     saveHtml = listHtml;

//     $('.device-list').html(listHtml);
// })
// //code for handButton click ends

// //code for waistButton click starts
// $("#waistBtn").on("click", function () {
//     $('.tooltipped').tooltip('close');
//     $("#close").text("close");
//     $("#rightside").attr("class", "rightside");
//     $("#rightside").addClass("animated slideInRight");
//     $(".categoryTitle").text("Waist Gear");
//     $(".categoryCount").text("5 Available");
//     $('.device-list').empty();
//     $('.device-desc').empty();
//     var listHtml = "";
//     for(i=0; i<waistArrayLength ; i++){
//         listHtml += '<li>';
//         listHtml += '<div class="thumbnail">';
//         listHtml += '<div class="hoverStyle"><i class="fa fa-angle-double-right"></i> </div>';
//         listHtml += '<table cellpadding="0" cellspacing="0" border="0"><tr><td device-id="';
//         listHtml += waistArray[i].image;
//         listHtml += '">'
//         listHtml += '<img src="../WearableRefresh/assets/images/'+waistArray[i].image+'.jpg?v7" alt="" class="preview"/>';
//         listHtml += '<div class="itemName">';
//         listHtml += waistArray[i].name;
//         listHtml += '</div>';
//         listHtml += '<div class="itemDesc">';
//         listHtml += waistArray[i].description;
//         listHtml += '</div>';
//         listHtml += '</td></tr></table></div>';
//         listHtml += '</li>';

//     }
//     console.log(listHtml);
//     saveHtml = listHtml;

//     $('.device-list').html(listHtml);
// })
//code for waistButton click ends

//code for wristButton click starts

$("a.johntooltip").each(function(){ 
$(this).on("click", function () {
    $('.tooltipped').tooltip('close');
    $("#close").text("close");
    $("#rightside").attr("class", "rightside");
    $("#rightside").addClass("animated slideInRight");
    // $(".categoryTitle").text("Wrist Gear");
    // $(".categoryCount").text("1 Available");
    $('.categoryTitle').html($(this).attr('data-title'));
    $('.categoryCount').html(eval($(this).attr('data-count')));
    $('.device-list').empty();
    $('.device-desc').empty();
    sourceData = eval($(this).attr('data-source'));
    var listHtml = "";
    for(i=0; i<sourceData.length ; i++){
        listHtml += '<li>';
        listHtml += '<div class="thumbnail">';
        listHtml += '<div class="hoverStyle"><i class="fa fa-angle-double-right"></i> </div>';
        listHtml += '<table cellpadding="0" cellspacing="0" border="0"><tr><td device-id="';
        listHtml += sourceData[i].image;
        listHtml += '">'
        listHtml += '<img src="../WearableRefresh/assets/images/'+sourceData[i].image+'.jpg?v7" alt="" class="preview"/>';
        listHtml += '<div class="itemName">';
        listHtml += sourceData[i].name;
        listHtml += '</div>';
        listHtml += '<div class="itemDesc">';
        listHtml += sourceData[i].description;
        listHtml += '</div>';
        listHtml += '</td></tr></table></div>';
        listHtml += '</li>';

    }
    console.log(listHtml);
    saveHtml = listHtml;

    $('.device-list').html(listHtml);
})
});
//code for wristButton click ends




    $("#close").on("click", function () {
        $("#rightside").removeClass("animated slideInRight");
        $("#rightside").addClass("animated slideOutRight");
       
       
    })

   
    // $(staticAncestors).on(eventName, dynamicChild, function() {});

    $(".device-list").on("click", "td", function() {
        $('.device-desc').empty();
        $('.device-list').empty();
        console.log($(this).attr("device-id"));
        var deviceId = $(this).attr("device-id");
        console.log('SourceData from device list:'+sourceData);

        var elementPos = sourceData.map(function(x) {return x.image; }).indexOf(deviceId);//returns index for the specific deviceID passed

        console.log(elementPos);

        var fullDesc = "";

        fullDesc += '<div class = "animated slideInRight slide">'
        fullDesc += '<img src="../WearableRefresh/assets/images/'+sourceData[elementPos].image+'.jpg?v7" alt="" class="closeUp"/>'
        // fullDesc += '<a class="waves-effect waves-light btn-small" id="rtnBtn">Back</a>';
        fullDesc += '<div></div>';
        fullDesc += '<a href="#" id="rtnBtn">Return to results</a>';
        fullDesc += '</div>';
        $('.device-desc').html(fullDesc);  

        // start of deprecated code of click event on device

        // if (deviceId == "head01"){
        //   fullDesc += '<div class = "animated slideInRight slide">'
        // fullDesc += '<img src="../WearableRefresh/assets/images/'+headArray[0].image+'.jpg?v7" alt="" class="closeUp"/>'
        // // fullDesc += '<a class="waves-effect waves-light btn-small" id="rtnBtn">Back</a>';
        // fullDesc += '<div></div>';
        // fullDesc += '<a href="#" id="rtnBtn">Return to results</a>';
        // fullDesc += '</div>';
        // $('.device-desc').html(fullDesc);  
        // } else if (deviceId == "head02"){
        //     fullDesc += '<div class = "animated slideInRight">'
        // fullDesc += '<img src="../WearableRefresh/assets/images/'+headArray[1].image+'.jpg?v7" alt="" class="closeUp"/>'
        // // fullDesc += '<a class="waves-effect waves-light btn-small" id="rtnBtn">Back</a>';
        // fullDesc += '<div></div>';
        // fullDesc += '<a href="#" id="rtnBtn">Return to results</a>';
        // fullDesc += '</div>';
        // $('.device-desc').html(fullDesc); 

        // } else if (deviceId == "head03"){
        //     fullDesc += '<div class = "animated slideInRight">'
        // fullDesc += '<img src="../WearableRefresh/assets/images/'+headArray[2].image+'.jpg?v7" alt="" class="closeUp"/>'
        // // fullDesc += '<div class="btn" id="rtnBtn">Back</div>';
        // fullDesc += '<div></div>';
        // fullDesc += '<a href="#" id="rtnBtn">Return to results</a>';
        // fullDesc += '</div>';
        // $('.device-desc').html(fullDesc); 
        // } else if (deviceId == "head04"){
        //     fullDesc += '<div class = "animated slideInRight">'
        // fullDesc += '<img src="../WearableRefresh/assets/images/'+headArray[3].image+'.jpg?v7" alt="" class="closeUp"/>'
        // // fullDesc += '<div class="btn" id="rtnBtn">Back</div>';
        // fullDesc += '<div></div>';
        // fullDesc += '<a href="#" id="rtnBtn">Return to results</a>';
        // fullDesc += '</div>';
        // $('.device-desc').html(fullDesc); 
        // } else if (deviceId == "head05"){
        //     fullDesc += '<div class = "animated slideInRight">'
        // fullDesc += '<img src="../WearableRefresh/assets/images/'+headArray[4].image+'.jpg?v7" alt="" class="closeUp"/>'
        // // fullDesc += '<div class="btn" id="rtnBtn">Back</div>';
        // fullDesc += '<div></div>';
        // fullDesc += '<a href="#" id="rtnBtn">Return to results</a>';
        // fullDesc += '</div>';
        // $('.device-desc').html(fullDesc); 
        // } else if (deviceId == "head06"){
        //     fullDesc += '<div class = "animated slideInRight">'
        // fullDesc += '<img src="../WearableRefresh/assets/images/'+headArray[5].image+'.jpg?v7" alt="" class="closeUp"/>'
        // // fullDesc += '<div class="btn" id="rtnBtn">Back</div>';
        // fullDesc += '<div></div>';
        // fullDesc += '<a href="#" id="rtnBtn">Return to results</a>';
        // fullDesc += '</div>';
        // $('.device-desc').html(fullDesc); 
        // }

        // end of deprecated code of click event on device
        
    });

    $(".device-desc").on("click","a", function(){
        $('.device-desc').empty();
        $('.device-list').html(saveHtml);

        // console.log(saveHtml);
    })

});



