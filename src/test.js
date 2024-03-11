let arr = [
  { name:"string 1", value:1, other: "that" },
  { name:"string 2", value:"rhis", other: "that" }
];
function a(){
let obj = arr.find((o, i) => {
  if (o.name === 'string 1') {
      arr[i] = { name: 'new string', value: o.value+1, other: 'that' };
      return true; // stop searching
  }
});
}
for(let i = 0 ; i<=5 ; i++ ){
  let b =a();
  console.log(b);
}