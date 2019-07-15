var button = $("button");
var inputPhoto = $(".photo");
var inputCap = $(".caption");

button.on("click", appendPhoto);
button.on("click", appendCaption);

function appendCaption(){
  var postedPics = $(".posted");
  postedPics.append(`
      <div class ="pic-info"
        <p> ${inputCap.val()}</p>
        <button class="delete"> Delete </button>

      </div>`);
  $(".pic-info").on("click", ".delete", deleteCap);

}

function appendPhoto(){
  var postedPics = $(".posted");
  postedPics.append(`<div class="img-info"> <img src=${inputPhoto.val()}>
  <button class="delete"> Delete </button> </div>`);
  $(".img-info").on("click", ".delete", deleteCap);

}

function deleteCap(event){
  event.target.parentNode.remove();
  // where event was heard, target that element, find its parent, and delete that div
}
