const someone = {
  name: "Someone",
  sayHello: function (otherName) {
    console.log(this.name + " says hello to " + otherName);
  },
};

someone.sayHello("thomson");
// 결과 > 'Someone says hello to thomson'
const alex = {
  name: "Alex",
};

someone.sayHello.call(alex, "thomson");
// 'Alex says hello to thomson'

someone.sayHello.apply(alex, ["thomson"]);
// 'Alex says hello to thomson'

/*

*/
