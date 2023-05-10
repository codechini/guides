function seachGuide() {
  // console.log("hi")
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myGuides");
  li = ul.getElementsByTagName("li");

  document.getElementById("myGuides").style.display = "block";
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      // console.log(filter.length);
      li[i].style.display = "";
    }
    else {
      li[i].style.display = "none";
    }
    // Checks if string less than 1 don't display the "ul"
    // and make border-radius of the input to rounded corners
    // else have border-radius of the input for right-top and left-top
    if (filter.length < 1) {
      document.getElementById("myGuides").style.display = "none";
      document.getElementById("myInput").style.borderRadius = "25px";
    }
    else {
      document.getElementById("myInput").style.borderRadius = "10px 10px 0px 0px";
    }
  }
  // document.getElementById("myGuides").style.display = "block";
}