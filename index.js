/* globals hexo: true */
hexo.extend.filter.register('before_post_render', require('./lib/filter'), 9);
