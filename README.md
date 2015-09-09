# hexo-filter-fenced-code

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/hexo-filter-fenced-code/blob/master/LICENSE)

[![npm:](https://img.shields.io/npm/v/hexo-filter-fenced-code.svg?style=flat-square)](https://www.npmjs.com/packages/hexo-filter-fenced-code)
[![downloads:?](https://img.shields.io/npm/dm/hexo-filter-fenced-code.svg?style=flat-square)](https://www.npmjs.com/packages/hexo-filter-fenced-code)
[![dependencies:?](https://img.shields.io/david/bubkoo/hexo-filter-fenced-code.svg?style=flat-square)](https://david-dm.org/bubkoo/hexo-filter-fenced-code)


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

