function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

delay(3000).then(() => console.log('runs after 3 seconds'));


const body = document.querySelector('body');
function showCircle(t1, t2, t3) {
    const div = document.createElement('div')
  return new Promise((resolve) => {
    setTimeout(() => resolve(div), t1);
    setTimeout(() => resolve(div), t2);
    setTimeout(() => resolve(div), t3);
  });
}

showCircle(150, 150, 100).then((div) => {
  div.classList.add('message-ball');
  div.append('Hello, world!');
  body.appendChild(div);
});
