import Eyra from './dist/esm/eyra.es.js';
Eyra.debug(true)
Eyra.importstyle('style')
var app = new Eyra({
  el: '#root',
  data: () => ({
    msg: 'EyraJs',
    style:{
      div:{
        background: '#282828',
        height: '280px'
      }
    }
  }),
  template() {
    return `
     <div :style="style.div">  
      <img src="public/logo.svg" class="img" />
      </div>
      <h1 class="header fa-spin" bind:html="msg"></h1>
      <div class="link">
     <p class="text">Edit this Page in the <code>app.js</code></p>
     <a class="a" href="https://github.com/Tobithedev/EyraJs">Github</a>
     <a class="a" href="https://instagram.com/Tobithedev">Instagram</a>
     </div>
     
    `;
  }
})
app.render();