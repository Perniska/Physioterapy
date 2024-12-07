
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Physioterapy/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Physioterapy/dashboard",
    "route": "/Physioterapy"
  },
  {
    "renderMode": 2,
    "route": "/Physioterapy/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/Physioterapy/products"
  },
  {
    "renderMode": 2,
    "route": "/Physioterapy/settings"
  },
  {
    "renderMode": 2,
    "route": "/Physioterapy/pages"
  }
],
  assets: {
    'index.csr.html': {size: 1005, hash: '2a951c40db5ed82b8973204106bd1b9ca8dc3849b71f042a817843ed1062a7ac', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1282, hash: '5eeb993e4b376e97be2606f80c293935bebfe5378bc5410fc4c40c2257387bab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 7209, hash: '63908258783974e0c9e71125717b5f4b30c87bed4fe19f4a8c132db72f715184', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'pages/index.html': {size: 7195, hash: '7461ab4e68dd0fe3e1f0d720dc5f6852f5745f2e9d7eaccfd2358e1d0a4b0234', text: () => import('./assets-chunks/pages_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 7184, hash: '4379f8e8aa633438d3f8a947a210481e5f94e2390ce3dc31e571793fe6446c5a', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 7183, hash: '73e6664394541ed3f2ea388a2d5f79f2c29779f3067549ebf28d8ab9516edd7c', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'styles-SLBZOCX4.css': {size: 116, hash: 'GIWTrYGxeOk', text: () => import('./assets-chunks/styles-SLBZOCX4_css.mjs').then(m => m.default)}
  },
};
