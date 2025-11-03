const handleShowSidebar = () => {
  console.log(event.target);
  const navlink = document.querySelector(".navlink");
  navlink.classList.add("navlinkshown");
  const body = document.querySelector("body");
  /*const section2cardcontainer = document.querySelector("section2cardcontainer");*/
  body.classList.add("bodyunscroll");
  console.log(body);
};
const handleremoveSidebar = () => {
  console.log(event.target);
  const navlink = document.querySelector(".navlink");
  navlink.classList.remove("navlinkshown");
  const body = document.querySelector("body");
  body.classList.remove("bodyunscroll");
};