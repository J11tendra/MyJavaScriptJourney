function confirmEnding(str, target) {
    let len = target.length;
    let solN = str.split('').reverse();
    if (solN.slice(0, len).join() === target.split('').reverse().join()) {
        return true;
    }
    else {
      return false;
    }
}

