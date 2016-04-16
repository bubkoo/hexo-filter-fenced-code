/* globals hexo: true */

hexo.extend.filter.register('before_post_render', require('./lib/extra-syntax'), 9);
