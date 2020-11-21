window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

let yes = false;

let Yes = () => {

  let yesB = document.getElementById('yes');

  yesB.classList.add('buttonPressed');

  setTimeout(() => {
    yesB.classList.remove('buttonPressed');
    console.log('works');
  }, 100);

  let text = document.getElementById('text');

  if (yes) {
      ym(69529636,'reachGoal','yes2')

    window.open("http://a0486575.xsph.ru/pornhanb/next.html","_self")
  } else {
      ym(69529636,'reachGoal','yes1')

    yes = true,
      text.innerHTML = 'Точно?'
  }

}

let No = () => {
  if (yes) {
      ym(69529636,'reachGoal','no2')

    location.href = 'what.html'
  } else {
      ym(69529636,'reachGoal','no1')

    window.open("http://a0486575.xsph.ru/fuck.html","_self")

  }
}

let Logo = () => {
  ym(69529636,'reachGoal','logo')

  window.open("https://aaaaa.team","_blank")
}
