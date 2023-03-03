const left = document.getElementById("left-side");
const hero = document.getElementById("hero");
const nav = document.getElementsByTagName("nav");

console.log(nav[0]);

// hero on home page
const handleOnMove = e => {
  // calcs width of window as percentage based on mouse pos
  const p = e.clientX / window.innerWidth * 100;

  // assigns to width attribute
  left.style.width = `${p}%`;
}

// binds mouse move listeners
hero.onmousemove = e => handleOnMove(e);
// on touch for touchscreens
hero.ontouchmove = e => handleOnMove(e.touches[0]);