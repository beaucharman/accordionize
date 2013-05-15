# Accordionize

> Add accordion behavior to a definition list.

## Usage

### HTML
```html
<dl>
  <dt>Handle one</dt>
  <dd>Hello World!</dd>

  <dt data-state="active">Handle two</dt>
  <dd>Omg! I am so active right now.</dd>

  <dt>Handle three</dt>
  <dd>Hello there!</dd>

  <dt>Handle four</dt>
  <dd>This is some content!</dd>
</dl>
```

### JavaScript

```javascript
;(function ($) {
  $('dl').accordionize();
})(jQuery);
```

### CSS
```
dl dt {
  cursor: pointer;
}
```