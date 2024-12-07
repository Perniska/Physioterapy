
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://perniska.github.io/Physioterapy/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/https://perniska.github.io/Physioterapy/dashboard",
    "route": "/https://perniska.github.io/Physioterapy"
  },
  {
    "renderMode": 2,
    "route": "/https://perniska.github.io/Physioterapy/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/https://perniska.github.io/Physioterapy/products"
  },
  {
    "renderMode": 2,
    "route": "/https://perniska.github.io/Physioterapy/settings"
  },
  {
    "renderMode": 2,
    "route": "/https://perniska.github.io/Physioterapy/pages"
  }
],
  assets: {
    'index.csr.html': {size: 1031, hash: '89f9bed1062cc278d8f3889b445e5c648a021c68c8c23cdafb13196a34347d60', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1307, hash: 'e683302bcb66b95c2b4d578e81b6c273b3c926af94ba23abbfc367cc06458fd7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 7228, hash: '1ae4b82cf5a2d40260b92a72fd55da58ee8570c9361771380a0ab9a12f61f732', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 7228, hash: '1ae4b82cf5a2d40260b92a72fd55da58ee8570c9361771380a0ab9a12f61f732', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 7228, hash: '1ae4b82cf5a2d40260b92a72fd55da58ee8570c9361771380a0ab9a12f61f732', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'pages/index.html': {size: 7228, hash: '1ae4b82cf5a2d40260b92a72fd55da58ee8570c9361771380a0ab9a12f61f732', text: () => import('./assets-chunks/pages_index_html.mjs').then(m => m.default)},
    'styles-SLBZOCX4.css': {size: 116, hash: 'GIWTrYGxeOk', text: () => import('./assets-chunks/styles-SLBZOCX4_css.mjs').then(m => m.default)}
  },
};
