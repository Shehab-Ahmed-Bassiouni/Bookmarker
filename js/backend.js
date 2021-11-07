//when localstorage empty data = "[]"
var bookmarkName = document.getElementById("Bname");
var websitURL = document.getElementById("Burl");

var sites = [];

if (
  localStorage.getItem("BookmarkData") == "[]" ||
  localStorage.getItem("BookmarkData") == null
) {
  alert("No Data");
} else {
  sites = JSON.parse(localStorage.getItem("BookmarkData"));
  fill();
}

function submit() {
  if (bookmarkName.value == "" || websitURL.value == "") {
    alert("Please Enter values");
  } else {
    if (existence(bookmarkName.value) == true) {
      document.getElementById("alerting").className =
        "alert alert-danger w-75 mx-auto my-3 d-block";
      clear();
    } else {
      document.getElementById("alerting").className =
        "alert alert-danger w-75 mx-auto my-3 d-none";
      oneSite = {
        name: bookmarkName.value,
        url: websitURL.value,
      };
      sites.push(oneSite);
      localStorage.setItem("BookmarkData", JSON.stringify(sites));
      fill();
      clear();
    }
  }
}

// prettier-ignore
function fill() {
    htmlInjection = "";
    for (var i = 0; i < sites.length; i++) {
        htmlInjection += ` <div class="d-flex w-75 m-auto py-3">
        <h2 class="w-50 overflow-auto ml-5 mr-5 py-2">
          `+sites[i].name+`
        </h2>
        <a href="https://`+sites[i].url+`"  target ="_blank" class="btn btn-primary px-5 py-3" >Visit</a>
        <button class="btn btn-danger ml-3 px-5" onclick="deleteData(`+i+`)">Delete</button>
      </div>`;
    }
    document.getElementById("main").innerHTML = htmlInjection;
}

function clear() {
  bookmarkName.value = "";
  websitURL.value = "";
}

function deleteData(index) {
  sites.splice(index, 1);
  localStorage.setItem("BookmarkData", JSON.stringify(sites));
  fill();
}

function existence(name) {
  for (var i = 0; i < sites.length; i++) {
    if (sites[i].name == name) {
      return true;
    }
  }
  return false;
}
