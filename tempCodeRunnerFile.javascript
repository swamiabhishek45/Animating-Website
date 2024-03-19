for(var i = 0; i <3; i++) {
    console.log(i);
    setTimeout(() => console.log(i), 1);
}
for(let i = 0; i <3; i++) {
    setTimeout(() => console.log(i), 1);
}