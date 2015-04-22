/*
 * Markdown Extra Syntax
 *
 * - Fenced Code with Highlight
 *
 *   ```javascript
 *   var foo = "bar";
 *   ```
 *
 * - Highlight Code with Inserted Code
 *
 *   ````javascript
 *   var foo = "bar";
 *   ````
 *
 * - Just insert code
 *
 *   `````javascript
 *   var foo = "bar";
 *   `````
 * */


var rFenceCode = /(\s*)(`{3,}|~{3,}) *(.*) *\n([\s\S]+?)\s*(\2)(\n+|$)/g;
var rLang = /([^\s]+)\s*(.+)?\s*(.+)?/;

var langMap = {
    'css': 'css',
    'htm': 'html',
    'html': 'html',
    'javascript': 'javascript',
    'js': 'javascript',
    'json': 'javascript'
};

var injectFn = {
    'javascript': function (code) {
        return '<script>' + code + '</script>';
    },
    'css': function (code) {
        return '<style type="text/css">' + code + '</style>';
    },
    'html': function (code) {
        return '<div class="hexo-insert-code">' + code + '</div>';
    }
};

function getLanguage(lang) {
    if (lang && langMap[lang]) {
        lang = langMap[lang];
    }
    return lang;
}

function injectCode(lang, code) {
    if (injectFn[lang]) {
        code = injectFn[lang](code);
    }
    return '\n<escape>' + code + '</escape>\n';
}


module.exports = function (data) {
    var source = data.source;
    var ext = source.substring(source.lastIndexOf('.')).toLowerCase();
    if ('.js.css.html.htm'.indexOf(ext) > -1) {
        return;
    }

    data.content = data.content
        //.replace(/^````([\w\:]+)$/gm, '````$1+')
        //.replace(/^`````([\w\:]+)$/gm, '`````$1-')
        .replace(rFenceCode, function (raw, start, startQuote, args, content, endQuote, end) {
            if (!args) {
                return raw;
            }

            var match;
            if (rLang.test(rLang)) {
                match = args.match(rLang);
            }
            var language = match && match[1] || '';
            if (!language) {
                return raw;
            }

            var quoteCount = startQuote.length;
            var hide = quoteCount >= 5;
            var inject = (quoteCount === 4 || hide);

            if (!inject) {
                return raw;
            }
            //language = language.slice(0, -1);
            language = language.toLowerCase();
            language = getLanguage(language);

            if (['javascript', 'css', 'html'].indexOf(language) !== -1) {
                inject = inject && true;
            }

            if (!inject) {
                return raw;
            }
            // 替换为原生的 3 个反引号
            var native = start + '```' + args + '\n' + content + '\n```' + end;
            var injected = injectCode(language, content);

            return hide ? injected : native + injected;
        });
};
