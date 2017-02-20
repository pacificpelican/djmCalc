//  isThisPrime.js
//  Function should return true if argument nu is a prime number
//  danmckeown.info 1/5/2017

function isThisPrime(nu) {
  if ((nu === 1) || (nu === 2)) {
    return true;
  }
  else if (nu % 2 === 0) {
    return false;
  }
  else if (nu % 3 === 0) {
    return false;
  }
  else if (nu % 4 === 0) {
    return false;
  }
  else if (nu % 5 === 0) {
    return false;
  }
  else
    {
      return true;
    }
}

if (isThisPrime(991) == true) {
  console.log(true);
}
else {
  console.log(false);
}
