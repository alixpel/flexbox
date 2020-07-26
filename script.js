// FLEX DIRECTION

function makeRow() {
  document.querySelector('body').classList.add('flex-direction-row');
  document.querySelector('body').classList.remove('flex-direction-col');
}

function makeCol() {
  document.querySelector('body').classList.remove('flex-direction-row');
  document.querySelector('body').classList.add('flex-direction-col');
}

// WRAP

function makeWrap() {
  document.querySelector('body').classList.add('wrap');
  document.querySelector('body').classList.remove('no-wrap');
}

function makeNoWrap() {
  document.querySelector('body').classList.remove('wrap');
  document.querySelector('body').classList.add('no-wrap');
}

// JUSTIFY CONTENT

function makeFlexStart() {
  document.querySelector('body').classList.add('flex-start');
  document.querySelector('body').classList.remove('flex-end');
  document.querySelector('body').classList.remove('center');
  document.querySelector('body').classList.remove('space-between');
  document.querySelector('body').classList.remove('space-around');
  document.querySelector('body').classList.remove('space-evenly');
}

function makeFlexEnd() {
  document.querySelector('body').classList.remove('flex-start');
  document.querySelector('body').classList.add('flex-end');
  document.querySelector('body').classList.remove('center');
  document.querySelector('body').classList.remove('space-between');
  document.querySelector('body').classList.remove('space-around');
  document.querySelector('body').classList.remove('space-evenly');
}

function makeCenter() {
  document.querySelector('body').classList.remove('flex-start');
  document.querySelector('body').classList.remove('flex-end');
  document.querySelector('body').classList.add('center');
  document.querySelector('body').classList.remove('space-between');
  document.querySelector('body').classList.remove('space-around');
  document.querySelector('body').classList.remove('space-evenly');
}

function makeSpaceBetween() {
  document.querySelector('body').classList.remove('flex-start');
  document.querySelector('body').classList.remove('flex-end');
  document.querySelector('body').classList.remove('center');
  document.querySelector('body').classList.add('space-between');
  document.querySelector('body').classList.remove('space-around');
  document.querySelector('body').classList.remove('space-evenly');
}

function makeSpaceAround() {
  document.querySelector('body').classList.remove('flex-start');
  document.querySelector('body').classList.remove('flex-end');
  document.querySelector('body').classList.remove('center');
  document.querySelector('body').classList.remove('space-between');
  document.querySelector('body').classList.add('space-around');
  document.querySelector('body').classList.remove('space-evenly');
}

function makeSpaceEvenly() {
  document.querySelector('body').classList.remove('flex-start');
  document.querySelector('body').classList.remove('flex-end');
  document.querySelector('body').classList.remove('center');
  document.querySelector('body').classList.remove('space-between');
  document.querySelector('body').classList.remove('space-around');
  document.querySelector('body').classList.add('space-evenly');
}

// ALIGN-ITEMS

function makeAlignFlexStart() {
  document.querySelector('body').classList.add('align-flex-start')
  document.querySelector('body').classList.remove('align-flex-end')
  document.querySelector('body').classList.remove('align-center')
  document.querySelector('body').classList.remove('align-stretch')
  document.querySelector('body').classList.remove('align-baseline')
}

function makeAlignFlexEnd() {
  document.querySelector('body').classList.remove('align-flex-start')
  document.querySelector('body').classList.add('align-flex-end')
  document.querySelector('body').classList.remove('align-center')
  document.querySelector('body').classList.remove('align-stretch')
  document.querySelector('body').classList.remove('align-baseline')
}

function makeAlignCenter() {
  document.querySelector('body').classList.remove('align-flex-start')
  document.querySelector('body').classList.remove('align-flex-end')
  document.querySelector('body').classList.add('align-center')
  document.querySelector('body').classList.remove('align-stretch')
  document.querySelector('body').classList.remove('align-baseline')
}

function makeAlignStretch() {
  document.querySelector('body').classList.remove('align-flex-start')
  document.querySelector('body').classList.remove('align-flex-end')
  document.querySelector('body').classList.remove('align-center')
  document.querySelector('body').classList.add('align-stretch')
  document.querySelector('body').classList.remove('align-baseline')
}

function makeAlignBaseline() {
  document.querySelector('body').classList.remove('align-flex-start')
  document.querySelector('body').classList.remove('align-flex-end')
  document.querySelector('body').classList.remove('align-center')
  document.querySelector('body').classList.remove('align-stretch')
  document.querySelector('body').classList.add('align-baseline')
}

// document.querySelector('.flex-direction-row-button').addEventListener(makeRow);
document.querySelector('.flex-direction-row-button').addEventListener('click', makeRow);
document.querySelector('.flex-direction-col-button').addEventListener('click', makeCol);

document.querySelector('.wrap-button').addEventListener('click', makeWrap);
document.querySelector('.no-wrap-button').addEventListener('click', makeNoWrap);

document.querySelector('.flex-start-button').addEventListener('click', makeFlexStart);
document.querySelector('.flex-end-button').addEventListener('click', makeFlexEnd);
document.querySelector('.center-button').addEventListener('click', makeCenter);
document.querySelector('.space-between-button').addEventListener('click', makeSpaceBetween);
document.querySelector('.space-around-button').addEventListener('click', makeSpaceAround);
document.querySelector('.space-evenly-button').addEventListener('click', makeSpaceEvenly);

document.querySelector('.align-flex-start-button').addEventListener('click', makeAlignFlexStart)
document.querySelector('.align-flex-end-button').addEventListener('click', makeAlignFlexEnd)
document.querySelector('.align-center-button').addEventListener('click', makeAlignCenter)
document.querySelector('.align-stretch-button').addEventListener('click', makeAlignStretch)
document.querySelector('.align-baseline-button').addEventListener('click', makeAlignBaseline)
