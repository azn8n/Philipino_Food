function changeNext() {
    let nextR = document.getElementById("nextR");
    nextR.style.fontSize = "40px";
  }
  function changePrevious() {
    let previousR = document.getElementById("previousR");
    previousR.style.fontSize = "40px";
  }
  function changeNext2() {
    let nextR = document.getElementById("nextR");
    nextR.style.fontSize = "30px";
  }
  function changePrevious2() {
    let previousR = document.getElementById("previousR");
    previousR.style.fontSize = "30px";
  }
  document.getElementById("nextR").onmouseover = changeNext;
  document.getElementById("previousR").onmouseover = changePrevious;
  document.getElementById("nextR").onmouseout = changeNext2;
  document.getElementById("previousR").onmouseout = changePrevious2;
