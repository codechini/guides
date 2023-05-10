function seachGuide() {
  console.log("hi")
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
      console.log(filter.length);
      li[i].style.display = "";
    }
    else {
      li[i].style.display = "none";
    }
    if (filter.length < 1) {
      document.getElementById("myGuides").style.display = "none";
    }
  }
  // document.getElementById("myGuides").style.display = "block";
}