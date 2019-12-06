class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(vec) {
        return new Vec((this.x + vec.x), (this.y + vec.y));
    }
    minus(vec) {
        return new Vec((this.x - vec.x), (this.y - vec.y));
    }
    get length() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
}

// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// console.log(new Vec(3, 4).length);

class Group {
    constructor() {
        this.group = [];
    }
    add(val) {
        if (!this.group.includes(val)) return this.group.push(val);
    }
    delete(val) {
        if (this.group.includes(val)) return this.group.splice(this.group.indexOf(val), 1);
    }
    has(val) {
        return this.group.includes(val);
    }
    static from(val) {
        let group = new Group;
        for (let i of val) {
            group.add(i);
        }
        return group;
    }
    [Symbol.iterator]() {
        return new GroupIterator(this);
      }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.pos = 0;
    } 
    next() {
        if (this.pos >= this.group.group.length) {
            return {done: true};
        } else {
            let result = {value: this.group.group[this.pos], done: false};
            this.pos++
            return result;
        }
    }
}
// let group = Group.from([10, 20]);
// console.log(group.group);
// → true
// console.log(group.has(30));
// → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));
// → false
// for (let value of Group.from(["a", "b", "c"])) {
//     console.log(value);
//   }

let map = {one: true, two: true, hasOwnProperty: true};


console.log(Object.hasOwnProperty.call(map, "one"));
// → true