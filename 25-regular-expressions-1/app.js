let r;
re = /hello/;
re = /hello/i; // literal world

// params enter after the pharse
// i = case insense
// g will search the all paragraph and not only the first one
// exec - return result in an array or null
// const result = re.exec("hello spac eworl");
// console.log(result);

/// test() return true or false

// const result = re.test("hello world hello");

// console.log(result);

// match - return resulst array or null

// const str = 'Hello world i love how hello you are';
// const result = str.match(re)
// console.log(result);

/// search return the index of the first match if not fond return fa-rotate-1
// const str = 'Hello tere';
// const result = str.search(re)
// console.log(result);

// rpelace return new strig with some or all of matches
const str = "Hello tere";
const result = str.replace(re, "hi and hello to youo");
console.log(result);
