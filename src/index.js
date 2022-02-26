import { defineApp } from "dativejs";
import { swing } from 'dativejs/animation'
import template from './index.dative.html'

var app = defineApp({
    el: '#app',
    data() {
        return {
            name: 'Dativejs'
        }
    },
    template,
    animate: {
        swing
    }
})
app.render()
