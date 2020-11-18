console.log("start");
setTimeout(() => {
  console.log("1");
  Promise.resolve().then((v) => console.log("2"));
});

setTimeout(() => {
  console.log("3");
  Promise.resolve().then((v) => console.log("4"));
});
console.log("end");
