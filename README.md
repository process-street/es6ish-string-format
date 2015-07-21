# ES6-ish String formatter

An JavaScript string formatter that is mostly compatible with [ES6 template strings](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings).

## Installation

In a browser:

```html
<script src="format.js"></script>
```

Via [bower](http://bower.io/):

```bash
bower install es6ish-string-format
```

## Notes

This method will attach itself to the String prototype. That means that once you include it, you can use it like this:

```javascript
var test = 'test';
console.log('this is a ${test}'.format({ test: test }));
// = 'this is a test'
```

It can also access object attributes, like so:

```javascript
var user = { username: 'cdmckay' };
console.log('hello, ${user.username}'.format({ user: user }));
// = 'hello, cdmckay'
```

This format method was designed to have a migration path to ES6 template strings. So, if you wanted to convert
the above example to an ES6 template string, simple replace the quotes with backticks and delete the `.format(...)` part:

```javascript
var user = { username: 'cdmckay' };
console.log(`hello, ${user.username}`);
// = 'hello, cdmckay'
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/b181c028e6b51d408450e12ab68bf25c?s=70)](https://twitter.com/cdmckay "Follow @cdmckay on Twitter") |
|---|
| [Cameron McKay](https://cdmckay.org/) |

## License

This library is available under the [MIT](http://opensource.org/licenses/mit-license.php) license.
