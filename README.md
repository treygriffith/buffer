## buffer

```js
var hello = buffer(function () {
	console.log("hello!");
}, 100);

for(var i = 0; i<1000; i++) {
	hello();
}

// prints "hello!" once.

```