Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
    if (callback(this[i])) {
      return this[i];
    }
  }
  return undefined;
};

let arr = [1, 2, 3, 4, 5, 6];

// console.log(arr.myFind((a) => a > 3));

// myIncludes()

Array.prototype.myPop = function () {
  console.log(this);
  return this.splice(-1).join("");
};

// console.log(arr.myPop());

Array.prototype.myFilter = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) result.push(this[i]);
  }
  return result;
};

// console.log(arr.myFilter((a) => a % 2 !== 0));

Array.prototype.myPush = function (value) {
  this[this.length] = value;
  return this;
};
arr.myPush(99);
console.log(arr);

Array.prototype.myConcat = function (...values) {
  return [...this, ...values];
};

console.log(arr.myConcat(32, 33, 34));

Array.prototype.mySome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) return true;
  }
  return false;
};

console.log(arr.mySome((v, i, arr) => v > 3));
