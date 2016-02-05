//create an array. Give it 8 elements.
var colorlist = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink", "Purple"];


//variables IN functions (function scope), can see global variables)
function testFunction()
{
 
}
var imageListF = new Array();
  imageListF[0] = "images/drawing/thumbs/artwork_1.jpg";
  imageListF[1] = "images/drawing/thumbs/artwork_2.jpg";
  imageListF[2] = "images/drawing/thumbs/artwork_3.jpg";
  imageListF[3] = "images/drawing/thumbs/artwork_4.jpg";
  imageListF[4] = "images/drawing/thumbs/artwork_5.jpg";
  imageListF[5] = "images/drawing/thumbs/artwork_6.jpg";
  imageListF[6] = "images/drawing/thumbs/artwork_7.jpg";
  imageListF[7] = "images/drawing/thumbs/artwork_8.jpg";
  imageListF[8] = "images/drawing/thumbs/artwork_9.jpg";
  imageListF[9] = "images/drawing/thumbs/artwork_10.jpg";
  imageListF[10] = "images/drawing/thumbs/artwork_11.jpg";
  imageListF[11] = "images/drawing/thumbs/artwork_12.jpg";
  imageListF[12] = "images/drawing/thumbs/artwork_13.jpg";
  imageListF[13] = "images/drawing/thumbs/artwork_14.jpg";
  imageListF[14] = "images/drawing/thumbs/artwork_15.jpg";
  imageListF[15] = "images/drawing/thumbs/artwork_16.jpg";
  imageListF[16] = "images/drawing/thumbs/artwork_17.jpg";
  imageListF[17] = "images/drawing/thumbs/artwork_18.jpg";
  imageListF[18] = "images/drawing/thumbs/artwork_19.jpg";
  imageListF[19] = "images/drawing/thumbs/artwork_20.jpg";
  imageListF[20] = "images/drawing/thumbs/artwork_21.jpg";
  imageListF[21] = "images/drawing/thumbs/artwork_22.jpg";
  imageListF[22] = "images/drawing/thumbs/artwork_23.jpg";
  imageListF[23] = "images/drawing/thumbs/artwork_24.jpg";
  imageListF[24] = "images/drawing/thumbs/artwork_25.jpg";

//Oil color art
var imageListG = new Array();
  imageListG[0] = "images/oil/thumbs/artwork_1.jpg";
  imageListG[1] = "images/oil/thumbs/artwork_2.jpg";
  imageListG[2] = "images/oil/thumbs/artwork_3.jpg";
  imageListG[3] = "images/oil/thumbs/artwork_4.jpg";
  imageListG[4] = "images/oil/thumbs/artwork_5.jpg";
  imageListG[5] = "images/oil/thumbs/artwork_6.jpg";
  imageListG[6] = "images/oil/thumbs/artwork_7.jpg";
  imageListG[7] = "images/oil/thumbs/artwork_8.jpg";
 
//Water Color Art
var imageListH = new Array();
  imageListH[0] = "images/watercolor/thumbs/artwork_1.jpg";
  imageListH[1] = "images/watercolor/thumbs/artwork_2.jpg";
  imageListH[2] = "images/watercolor/thumbs/artwork_3.jpg";
  imageListH[3] = "images/watercolor/thumbs/artwork_4.jpg";
  imageListH[4] = "images/watercolor/thumbs/artwork_5.jpg";
  imageListH[5] = "images/watercolor/thumbs/artwork_6.jpg";
  imageListH[6] = "images/watercolor/thumbs/artwork_7.jpg";
  imageListH[7] = "images/watercolor/thumbs/artwork_8.jpg";
  imageListH[8] = "images/watercolor/thumbs/artwork_9.jpg";
  imageListH[9] = "images/watercolor/thumbs/artwork_10.jpg";

//at this point we have 2 lists, a colors list and an imagelist.
//element arrays are the elements inside of arrays.

//create the buildThumbnail function
function buildThumbnails()
{
    //console.log("inside function")
    //hook onto the thumbs div. We are going to create a reference to that element ... ~so that we can add to it
  var thumbsDiv = document.getElementById("thumbs");
    //This declares a variable named imagelist.
    //[] is a hard bracket. Note, below, the imagelist item numbering //starts at zero but the .jpg image file names begin at 1. So the //image list runs from 0 to 5 and the .jpg files from 1 to 6.
    //This populates the first element artwork_01.jpg in the list with an item # of zero.
//imageList[0] = "images/drawing/thumbs/artwork_1.jpg";
//imageList[1] = "images/drawing/thumbs/artwork_2.jpg";
//imageList[2] = "images/drawing/thumbs/artwork_3.jpg";
//imageList[3] = "images/drawing/thumbs/artwork_4.jpg";
//imageList[4] = "images/drawing/thumbs/artwork_5.jpg";
//imageList[5] = "images/drawing/thumbs/artwork_6.jpg";
//imageList[6] = "images/drawing/thumbs/artwork_7.jpg";
//imageList[7] = "images/drawing/thumbs/artwork_8.jpg";
//imageList[8] = "images/drawing/thumbs/artwork_9.jpg";
//imageList[9] = "images/drawing/thumbs/artwork_10.jpg";
//imageList[10] = "images/drawing/thumbs/artwork_11.jpg";
//imageList[11] = "images/drawing/thumbs/artwork_12.jpg";
//imageList[12] = "images/drawing/thumbs/artwork_13.jpg";
//imageList[13] = "images/drawing/thumbs/artwork_14.jpg";
//imageList[14] = "images/drawing/thumbs/artwork_15.jpg";
//imageList[15] = "images/drawing/thumbs/artwork_16.jpg";
//imageList[16] = "images/drawing/thumbs/artwork_17.jpg";
//imageList[17] = "images/drawing/thumbs/artwork_18.jpg";
  
      //create an output variable
  var output = "";
      //the for loop has 3 parts of it's body -- 
      //first part: the counter (we set up 0 to start counting the loop. THis initializes the count)
      //second part: the condition (the loop will continue looping as long as the condition is true)
      //third part: the incrementor (adds 1 to the counter AFTER the code is executed in the brackets)
      //for loops are pretty memory intensive. They are also absolutely great tools.
  for(var i=0; i < imageListF.length; i++)
    {
        //concatenation assignment operator..
      output += '<img src="' + imageListF[i] + '" />';
    }
  
   for(var j=0; j < imageListG.length; j++)
    {
        //concatenation assignment operator..
      output += '<img src="' + imageListG[j] + '" />';
    }
  
  for(var k=0; k < imageListH.length; k++)
    {
        //concatenation assignment operator..
      output += '<img src="' + imageListH[k] + '" />';
    }
  
  //for (var i=0; i < 14; i++)
      //for (var i=0; i < imageList.length; i++)
      //we use this imageList.length when we don't know the number of images available but want to show all that we have.
  //{
      //output += i;//concatenation assignment operator
      //Note that if the for statement i < 7 when we only have 6 images, then we'll see a broken image on the html page and see undefined in the Chrome elements section of the html
  //  output += '<img src="' + imageList[i] + '" />'
  // }
       
  thumbsDiv.innerHTML = output;
  
      //console.log(imageList[1]);
  
      // console.log(thumbsdiv);
  
      //thumbsDiv.innerHTML =
      //'<img src="' + imageList[0] + '" />' +
      //'<img src="' + imageList[1] + '" />' +
      //'<img src="' + imageList[2] + '" />' +
      //'<img src="' + imageList[3] + '" />' +
      //'<img src="' + imageList[4] + '" />' +
      //'<img src="' + imageList[5] + '" />' 
      //;
  }


//we never want a variable within a variable .. but in this case its not. This is our DOM method    document.getElementById

//var thumbsdiv = console.log(thumbs.div)

//var thumbsdiv.innerHTML = imagelist[1];

//"<p>Hi there</p>";


//anytinng that's inside this div will be wiped out be the inner.HTML above
  
window.onload = function()
{
  buildThumbnails();  //use or "fire off" this function
  //or invoke the function
  
};
//git@github.com:GKouhia/week3.git