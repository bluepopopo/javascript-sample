//1. 函数的默认参数, 使用callback函数
function sayHello(
  callback = {
    name: "default",
    succeed: () => {}
  }
) {
  console.log("hello, " + callback.name);
  callback.succeed("very good");
}

var ok = () => {
  var obj = {
    name: "java",
    succeed: e => {
      console.log("succeed [" + e + "]");
    }
  };
  sayHello(obj);
};

//ok();

// 2. 解构函数
function sayHello2(
  values = {
    gender,
    address
  },
  callback = {
    name: "default",
    succeed: () => {}
  }
) {
  console.log("hello, " + callback.name+', gender = '+values.gender+', address = '+values.address);
  callback.succeed("that's great");
}

var ok2 = () => {
  var obj = {
    name: "go",
    succeed: e => {
      console.log("succeed [" + e + "]");
    }
  };

  let fields = {
    gender: "man",
    age: 15,
    address: "苏州",
    country: "中国"
  };

  sayHello2(fields, obj);
};

ok2();
