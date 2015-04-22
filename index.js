'use strict';

hexo.extend.filter.register('before_post_render', require('./lib/extraSyntax'), 9);