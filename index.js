function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return 'Give a free sample!';
  }
  else if (feet <= 199) {
    return 'this one is on me!';
  }
  else if (feet > 400 && feet <= 2000) {
    return 'That will be twenty bucks.';
  }
  else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (feet > 2500) {
    return 'No can do.';
  } 
}

function ternaryCheckCity(city){
  return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip= 0) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}