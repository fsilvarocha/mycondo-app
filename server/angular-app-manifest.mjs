
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/mycondo-app"
  },
  {
    "renderMode": 2,
    "route": "/mycondo-app/cadastros/condominios"
  },
  {
    "renderMode": 2,
    "route": "/mycondo-app/cadastros/blocos"
  },
  {
    "renderMode": 2,
    "route": "/mycondo-app/cadastros/apartamentos"
  },
  {
    "renderMode": 2,
    "route": "/mycondo-app/cadastros/moradores"
  }
],
  assets: new Map([
['index.csr.html', {size: 27080, hash: '40c66fd5f2736a05ef978dee32cd536e7f3cb303abd1525b90f29beb7ccd72cf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 23213, hash: 'd8379627a55525615765aa418cbc51c7727a0fb106bf972567ad021321214ba8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 56233, hash: '03c103372aa49f1053a7cf1c6918728b4c4ab391d7d8e604257e6766fc361989', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['cadastros/apartamentos/index.html', {size: 56366, hash: '4a93c914342bc5707ed06c59c4c5163a9dfd44bc191cd86ab65258c0eb8805e3', text: () => import('./assets-chunks/cadastros_apartamentos_index_html.mjs').then(m => m.default)}], 
['cadastros/blocos/index.html', {size: 56348, hash: '4d0ab1ef881359cf12345a795710ec578b6d3208f8ddb3df5f3d4246ee825bcd', text: () => import('./assets-chunks/cadastros_blocos_index_html.mjs').then(m => m.default)}], 
['cadastros/moradores/index.html', {size: 56356, hash: 'd1fb601b1a0f47f80fe6bd732c4d1ee5dd397251014a544b36f4991c3d78b669', text: () => import('./assets-chunks/cadastros_moradores_index_html.mjs').then(m => m.default)}], 
['cadastros/condominios/index.html', {size: 65523, hash: '6cc52295a18846787891ddc7b27dcf77108574d5deb08b238d58058677ed35f4', text: () => import('./assets-chunks/cadastros_condominios_index_html.mjs').then(m => m.default)}], 
['styles-4K6PRQTT.css', {size: 236993, hash: 'VqQP0FmIQM8', text: () => import('./assets-chunks/styles-4K6PRQTT_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
