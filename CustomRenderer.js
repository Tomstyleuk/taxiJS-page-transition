import { Renderer } from '@unseenco/taxi';

const inViewEle = document.querySelector('.inView')

export default class CustomRenderer extends Renderer {
    /**
     * Run code that should only happen once for your site
     */
    initialLoad() {
        console.log('Initial load');
        this.onEnter()
        this.onEnterCompleted()
    }

    onEnter() {
        console.log('onEnter');

        if (inViewEle.classList.contains("loaded") == false) {
            inViewEle.classList.add('loaded')
        }

        // A reference to the data-taxi inViewElement
        // console.log(this.wrapper);

        // A reference to the data-taxi-view element which is being added to the DOM
        // console.log(this.content);

        // run after the new content has been added to the Taxi container
    }

    onEnterCompleted() {
        console.log('onEnter completed');
        // run after the transition.onEnter has fully completed
    }

    onLeave() {
        console.log('onLeave');
        // run before the transition.onLeave method is called
    }

    onLeaveCompleted() {
        console.log('onLeave completed');
        // run after the transition.onleave has fully completed
    }
}
