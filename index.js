class Slack {
  constructor(){
    this.data = [];
    this.data1 = [];
    this.top = 0;
    this.bottom = 0;
  }
}

push(element){
  this.data[this.top] = element;
  this.top = this.top + 1;
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