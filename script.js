import './style.css'
import * as Taxi from './node_modules/@unseenco/taxi'
import CustomRenderer from './CustomRenderer.js'
import MyTransition from './Transition.js'


const taxi = new Taxi.Core(
  {
    renderers: {
      default: CustomRenderer, // Registering a Renderer
    },
    transitions: {
      default: MyTransition // Registering a Transition
    },

    /**
     * In certain situations, you may not have control over the <script /> tags directly. Luckily reloadJsFilter accepts a callback function to filter scripts on the new page and decide which to load.
       Your callback is passed the script element, and must return a boolean indicating whether the script should be reloaded or not (you could check the src or id attributes for example).
     */
    reloadJsFilter: (element) =>
      element.dataset.taxiReload !== undefined || element.src?.match('foo.js'),

    // Load everything css
    reloadCssFilter: (element) => true //
  }
)