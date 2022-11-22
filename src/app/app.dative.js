import Dative from "dativejs";
import { swing } from "dativejs/animation";
import template from "./app.dative.html";

export const App = Dative.extend({
  template,
  animate: {
    swing,
  },
  data: () => ({
    style: {
      color: "blue",
      textSize: "20px",
    },
  }),
  props: {
    name: String,
  },
  css: `
        main {
            text-align: center;
            padding: 1em;
            max-width: 240px;
            margin: 0 auto;
        }

        h1 {
            color: {{style.color}};
            text-transform: uppercase;
            font-size: 4em;
            font-weight: 100;
        }

        @media (min-width: 640px) {
            main {
                max-width: none;
            }
        }
    `,
});