function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "cabecalho__nav") {
      x.className += "__responsivo";
    } else {
      x.className = "cabecalho__nav";
    }
  }