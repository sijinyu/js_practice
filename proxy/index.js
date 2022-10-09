let user = {
  name: "시진아",
  _password: "***",
};
const protected = (value) => {
  if (typeof value === "string") {
    return value.startsWith("_");
  } else {
    return false;
  }
};
user = new Proxy(user, {
  get(target, prop) {
    if (protected(value)) {
      throw new Error("접근이 제한 되어있습니다.");
    }
    let value = target[prop];
    return typeof value === "function" ? value.bind(target) : value;
  },
  set(target, prop, val) {
    if (protected(prop)) {
      throw new Error("접근이 제한 되어있습니다.");
    } else {
      target[prop] = val;
      return true;
    }
  },
  deleteProperty(target, prop) {
    if (protected(value)) {
      throw new Error("접근이 제한 되어있습니다.");
    } else {
      delete target[prop];
      return true;
    }
  },
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  },
});


let handlers = Symbol('handlers');
function makeObservable(target) {
    //1. 핸들러를 저장할 곳을 초기화!
    target[handlers] = [];

    // 나중에 호출될 것을 대비하여 핸들러 함수를 배열제 저앙
    target.observe = function(handler) {
        this[handlers].push(handler);
    }

    //2. 변경을 처리할 프락시를 만든다.
    return new Proxy(target, {
        set(target, property, value, receiver) {
            let success = Reflect.set(...arguments);
             //동작을 객체에 전달합니다.
        }
    })
}
this._elem = elem;
elem.onclick = this.onclick.bind(this);

for(let li of tree) {
    querySelectorAll('li')) {
        let span = document.createElement('span');
        li.prepend(span)
        span.append(span.nextSibling)
    }
}

