class Slack {
  constructor(){
    this.data = [];
    this.top = 0;
    this.bottom = 0;
  }
}

push(element){
  for(i = this.data.length-1, i >= 0; i--){
    this.data[i + 1] = this.data[i];
  }
  this.data[0] = element;
}

length(){
  return this.top
}

peek(){
  return this.data[this.top - 1]
}

isEmpty() {}

pop() {}

print() {}

console.log(Slack);