# hexo-filter-fenced-code

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/hexo-filter-fenced-code/blob/master/LICENSE)

[![npm:](https://img.shields.io/npm/v/hexo-filter-fenced-code.svg?style=flat-square)](https://www.npmjs.com/packages/hexo-filter-fenced-code)
[![Package Quality](http://npm.packagequality.com/shield/hexo-filter-fenced-code.svg)](http://packagequality.com/#?package=hexo-filter-fenced-code)

> Extend syntax for the native fenced code block.

Feature:

- Extend syntax for the native fenced code block.
- Use tag-plugins as fenced code block.

## Markdown Extra Syntax

### The Native Fenced Code Block

    ```javascript
    var foo = "bar";
    ```

### Highlight and Insert Code

    ```javascript+
    var foo = "bar";
    ```

or

    ````javascript
    var foo = "bar";
    ````




The code will be inserted as a `script` block:

```html
<script>
var foo = "bar";
</script>
```

### Just Insert Code

    ```javascript-
    var foo = "bar";
    ```

or

    `````javascript
    var foo = "bar";
    `````


**Note: Only JavaScript, CSS and HTML code can be inserted into a post. This feature is handily for building a quick demo.**


## Tag Plugins' Syntax Sugar

The native tag plugin looks like this:

- block

  ```swig
  {% tagname [option1] [option2] ... %}
  content
  {% endblockquote %}
  ```

- inline

  ```swig
  {% tagname [option1] [option2] ... %}
  ```
  
Use the syntax sugar as follow:

- block

        ```tagname [option1] [option2] ... 
        content
        ```


- inline

        ```tagname [option1] [option2] ...
        ```

## Related

- [hexo-toc](https://github.com/bubkoo/hexo-toc) Insert a markdown TOC before posts be rendered.
- [hexo-filter-flowchart](https://github.com/bubkoo/hexo-filter-flowchart) Generate flowchart diagrams for Hexo.
- [hexo-filter-sequence](https://github.com/bubkoo/hexo-filter-sequence) Generate UML sequence diagrams for Hexo.
- [hexo-filter-sub](https://github.com/bubkoo/hexo-filter-sub) Generate subscript (`<sub>`) tag for Hexo.
- [hexo-filter-sup](https://github.com/bubkoo/hexo-filter-sup) Generate superscript (`<sup>`) tag for Hexo.
- [hexo-theme-formula](https://github.com/bubkoo/hexo-theme-formula) Hexo theme base on jade and less.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/hexo-filter-fenced-code/issues/new).
