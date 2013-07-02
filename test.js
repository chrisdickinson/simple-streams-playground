function myself() {
  while(x = process.stdin.read()) console.log(x) 

  setImmediate(myself)
}

myself()
