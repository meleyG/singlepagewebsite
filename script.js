function addRecommendation() {
  // Get the message of the new recommendation
  let recommend = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  //if recommendation.value is not null or empty
  if (recommend.value != null && recommend.value.trim() != "") {
    //this is set to true so that the popup box will appear
    showPopup(true)

    // Create a new 'recommendation' element and set it's value to the user's message then let it get added to your list of recommendation
    //add this new recommendation the same order as the other ones added directly to the html code

    //create the element and set the element tag to a <div>
    var ele = document.createElement("div");
    //set the attribute of that div tag/element that you just created to be class = recommendations..just like the other recommendations you created in the actual html code for recommendation section
    ele.setAttribute("class","recommendation");
    //add the <span> just like in the html code, then call on the message value that was gotten from the form
    ele.innerHTML = "\<span\>&#8220;\</span\>" + recommend.value + "\<span\>&#8221;\</span\>";
    // After creating this div/element , add it to the end of the list of all recommendations and to the main div with id = all_recom, that holds all recommendations div
    document.getElementById("all_recom").appendChild(ele); 
    
    // Reset the value of the textarea
    recommend.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('pop').style.visibility = 'visible'
  } else {
    document.getElementById('pop').style.visibility = 'hidden'
  }
}
