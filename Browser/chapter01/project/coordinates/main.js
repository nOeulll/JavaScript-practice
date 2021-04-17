// const target = document.querySelector('.target');
// const horizontal = document.querySelector('.horizontal');
// const vertical = document.querySelector('.vertical');
// const tag = document.querySelector('.tag');

// const onMouseMove = (e) => {

//   const x = e.clientX;
//   const y = e.clientY;

//   target.style.left = `${x}px`;
//   target.style.top = `${y}px`;
//   horizontal.style.top = `${y}px`;
//   vertical.style.left = `${x}px`;
//   tag.style.left = `${x}px`;
//   tag.style.top = `${y}px`;
//   tag.innerHTML = `X: ${x}px, Y: ${y}px`;
// }
// document.addEventListener('mousemove', onMouseMove);

addEventListener('load', () => {
  const target = document.querySelector('.target');
  const horizontal = document.querySelector('.horizontal');
  const vertical = document.querySelector('.vertical');
  const tag = document.querySelector('.tag');
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  const onMouseMove = (e) => {

    const x = e.clientX;
    const y = e.clientY;

    target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;
    tag.style.transform = `translate(${x + 25}px, ${y + 25}px)`;
    tag.innerHTML = `X: ${x}px, Y: ${y}px`;
  }
  
  document.addEventListener('mousemove', onMouseMove);
});