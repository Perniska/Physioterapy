
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/dashboard",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/products"
  },
  {
    "renderMode": 2,
    "route": "/settings"
  },
  {
    "renderMode": 2,
    "route": "/pages"
  }
],
  assets: {
    'index.csr.html': {size: 992, hash: 'a2a3af46dc65b5fae9d830a37706fedd3a7dffa37d37f6305e186683133191fd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1269, hash: '58f57edfdc8344499ee7370020c8b5ed8fcd752fe5d02585c7458f8ed8d20fbf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'products/index.html': {size: 7119, hash: '3fb17b08919758a7323fed1f20b642b00fd384eaece64acd037aa80dfa1faa09', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'pages/index.html': {size: 7130, hash: 'e62db777fff03eda8d43ad1c2632f7fbf7f7d9477da7ae9cc7a39f0c289801d5', text: () => import('./assets-chunks/pages_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 7144, hash: '32823a5b0b676044a1f04e9f78793f62a33e45515e7b14c0346dc45297fc2949', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 7118, hash: '2036221081d934efe80a3bd003a3d6b48f3159f409d7b05cbfa1764117314b19', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'styles-SLBZOCX4.css': {size: 116, hash: 'GIWTrYGxeOk', text: () => import('./assets-chunks/styles-SLBZOCX4_css.mjs').then(m => m.default)}
  },
};
