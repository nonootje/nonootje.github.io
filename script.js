sidebar = document.getElementsByClassName("sidebar")[0];
async function getSideBar() {
    const response = await fetch("sidebar.html");
    const stuff = await response.text();
    console.log(stuff);
    sidebar.innerHTML = stuff;
  }
getSideBar();