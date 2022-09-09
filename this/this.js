const someone = {
  name: "시진아",
  sayHello: function (otherName) {
    console.log(this.name + " says hello to " + otherName);
  },
};

someone.sayHello("행배야");
// 결과 > '시진아 says hello to 행배야'
const sijin = {
  name: "유시진아",
};

someone.sayHello.call(sijin, "thomson");
// '유시진아 says hello to 행배야'

someone.sayHello.apply(sijin, ["thomson"]);
// '유시진아 says hello to 행배야'
