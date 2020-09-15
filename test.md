# Frameworks are dead,
# long live the compiler

Mike Hartington | [@mhartington](https://twitter.com/mhartington)

---

# or

---

# The never ending ebb and flow of the front end ecosystem

---

## I love JavaScript
_I kind of have to say this..._

---

## I love the Web

_Obviously_

This goes without saying, but the future and success of the web as a platform depends on what our current tools decide to do next

---

## The web as a platform is bloated

---

##  Kind of our fault 😬
- MBs of JS  to create...A DIV?
- Devs throw too much at the browser

---

## How did we get here?
- The history of the web platform
- How have framework evolved
- What does the future bring us?

---

## _Compilers may or may not save the web_

---

# Chapter 1

The rise of the frontend

---
### In the beginning...
- HTML ('93)
- JavaScript ('95)
- CSS ('96)

---

#### Same building blocks we have today

---

### But the web was hostile
- Internet Explorer was a thing
- Difference in implementations
- Varying degrees of support for features
- INTERNET EXPLORER

---

### The Web was a bad bet

- Java applets
- Flash & Actionscript
- Silverlight

---

### 2006-2010: The Web-Renaissance
- Ajax and Google Maps
- Jquery became a thing
- ES5 shipped (First since '99)
- Backbone, AngularJS, Knockout, etc

---

### The web started to get better
- Libs eased over browser differences
- Frameworks built better apps
- Apps on the web seemed like they could be a thing!

---

# Chapter 2

JavaScript Libraries, ES6, and mobile

---

### Frameworks and Libraries
- Ease of development, but at a cost
- Each had it's own micro-syntax
- What are modules? Classes?
- And mobile became a thing

---

### Enter ES2015 (née ES6)
- ✓ Classes
- ✓ Modules
- ✓ Promises
- ✓ Great all around

---

### Frameworks Kept building
- Custom syntax for "components"
- Templating languages
- Alternatives to native DOM
- CSS-in-JS

---

## Woah...the web got...big

---

### Meanwhile, in mobile
- Devices haven't changed much
- Less memory/resources than desktop
- Slower parse/compile process than JS

---

### JS for everything
- Runtime templating
- Runtime styling
- Runtime diffing

---

>Scientists were so preoccupied with whether or not they could, they didn’t stop to think if they should.

---

- Should JavaScript do everything?
- Is this a good experience?
- Will anyone think about mobile users?

---

# Chapter 3

Enter the Compiler

---

### The Status Quo
- Frameworks and JS are everywhere
- Average JS bundle keeps going up
- Up 47% from 2019

---

#### All this runtime logic is hurting actual users

---

### Enter a compiler

---

### Compilers are not new
- Most low level languages have them
- Move framework internals to build time
- Reduce the overall JavaScript sent down the wire

---

## Let's take an example

---

```html
<div>
  Hello, {{name}}
</div>
<!-- If true, render below -->
<div>Should I show?</div>
```
---

```javascript
class Component {
  name = "world"
  shouldShow = true
}
```

---

What should the output be?

---

## Angular

Pre 9.0

---


```typescript
@Component({
  selector: 'app-root',
  template: `
    <div>
      Hello, {{ title }}
    </div>
    <div *ngIf="shouldShow">
      Should I show?
    </div>
  `
})
export class AppComponent {
  title = 'world';
  shouldShow = true
}
```

---


```javascript
function View_AppComponent_1(_l) {
  return _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵvid']( 0,
    [
      (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵeld']( 0, 0, null, null, 1, 'div', [], null, null, null, null, null)),
      (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵted'](-1, null, [ 'Should I show?', ])),
    ], null, null);
}
function View_AppComponent_0(_l) {
  return _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵvid']( 0,
    [
      (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵeld']( 0, 0, null, null, 1, 'div', [], null, null, null, null, null)),
      (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵted'](1, null, [ ' Hello, ', '\n', ])),
      (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵand']( 16777216, null, null, 1, null, View_AppComponent_1)),
      _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵdid']( 3, 16384, null, 0,
      _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgIf'],
        [
          _angular_core__WEBPACK_IMPORTED_MODULE_0__[ 'ViewContainerRef' ],
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['TemplateRef'],
        ],
        { ngIf: [0, 'ngIf'] }, null),
    ],
    function (_ck, _v) {
      var _co = _v.component;
      var currVal_1 = _co.shouldShow;
      _ck(_v, 3, 0, currVal_1);
    },
    function (_ck, _v) {
      var _co = _v.component;
      var currVal_0 = _co.title;
      _ck(_v, 1, 0, currVal_0);
    }
  );
}
```


---

- Difficult to understand
- Difficult to debug
- **Difficult to TREESHAKE**

---

#### _An aside_

> Treeshaking: The removal of code not used by a program at build time.

---

### Angular 8.x
- Not easy to treeshake
- Tightly coupled-rendering
- Passes the cost down to users

---

## Angular

Post 9.0

---

- New compiler: Ivy
- Decouples internals
- More easily treeshaken

---

```typescript
@Component({
  selector: 'app-root',
  template: `
    <div>
      Hello, {{ title }}
    </div>
    <div *ngIf="shouldShow">
      Should I show?
    </div>
  `
})
export class AppComponent {
  title = 'world';
  shouldShow = true
}
```

---

```javascript
function AppComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart']( 0, 'div');
    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext']( 1, 'Should I show?');
    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
  }
}
class AppComponent {
  constructor() {
    this.title = 'world';
    this.shouldShow = true;
  }
}
function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart']( 0, 'div');
    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate']( 2, AppComponent_div_2_Template, 2, 0, 'div', 0);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1']( ' Hello, ', ctx.title, '\n');
    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']( 'ngIf', ctx.shouldShow);
  }
},
```

---

### With Ivy
- ✓ Easier to understand
- ✓ Compiler simplifies renderer
- ✓ Easier to treeshake


---

**An Idea so great, others had it too**

---

### Glimmerjs: Ember
- Underlying API for ember components
- Templates ship as bytecode
- Linear sequence of instructions

---

### StencilJS: Ionic
- Compiler for web components
- Treeshake-able feature set

---

### SvelteJS
- "Write less code"
- Every aspect of Svelte is treeshake-able
- Super compelling

---

```html
<script>
  export let title = 'World';
  export let shouldShow = true
</script>

<div>
  Hello, {title}
</div>
{#if shouldShow}
  <div>Should I show?</div>
{/if}

```

---

<img src="imgs/svelte.png" alt="" />

---

- 245 LOC
- 3KB
- No instructions, just JS

---

_The most extreme case_

---

_intentionally left blank_


---

# Epliouge
  There and back again

---

### Compilers are the future?
- Offer smarter apps
- Reduce overall JS sent to user
- Simplifies framework architecture

---

### But...
- There are trade-offs
- Not common place, yet
- Offsets complexity to build tools

---


<img src="imgs/alex-russle.png" style="width: 800px; height: auto" alt="" />

He's not wrong


---

#### But with time, there is hope

---
#### Computer, build me an app

<img src="https://img.youtube.com/vi/qqt6YxAZoOc/maxresdefault.jpg"  style="width: 800px; height: auto" />

<small>https://youtu.be/qqt6YxAZoOc</small>

---

### Thank you

[Mike Hartington | @mhartington](https://twitter.com/mhartington)

#### `</html>`
