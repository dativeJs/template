import Dative from 'https://cdn.jsdelivr.net/gh/Tobithedev/DativeJs@main/dist/dative.es.min.js';
Dative.debug(true)
Dative.importstyle('style')
var app = new Dative({
  el: '#root',
  data: () => ({
    msg: 'DativeJs',
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
      <img src="public/logo.png" class="img" />
      </div>
      <h1 class="header fa-spin" bind:html="msg"></h1>
      <div class="link">
     <p class="text">Edit this Page in the <code>app.js</code></p>
     <a class="a" href="https://github.com/Tobithedev/DativeJs">Github</a>
     </div>
     
    `;
  }
})
app.render();