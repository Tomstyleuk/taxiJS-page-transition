import { Transition } from '@unseenco/taxi'
import gsap from 'gsap';

const overlay = document.querySelector('.overlay')
const blocks = document.querySelectorAll('.block')
let inViewEle
let tl = gsap.timeline()

const getRandomDelay = () => Math.random() * 0.5;


// https://taxi.js.org/transitions/
export default class MyTransition extends Transition {

    /**
     * Handle the transition leaving the previous page.
     * @param { { from: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
     * from = HTML elements of the leaving page
     */
    onLeave({ from, trigger, done }) {
        inViewEle = document.querySelector('.inView')

        tl = gsap.timeline({
            onStart: function () {
                overlay.style.zIndex = "2"
            },
            onComplete: function () {
                overlay.style.zIndex = "-1";
            }
        });

        tl.to(blocks, {
            duration: 1,
            height: '100%',
            stagger: getRandomDelay,
            ease: "power3.inOut",
        })

        setTimeout(() => {
            inViewEle.classList.remove('loaded')
            done()
        }, 1000);
    }

    /**
     * Handle the transition entering the next page.
     * @param { { to: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
     * * to = HTML elements of the entering page(new page)
    */
    onEnter({ to, trigger, done }) {

        inViewEle = document.querySelector('.inView')

        tl.to(blocks, {
            duration: 1,
            height: '0',
            stagger: getRandomDelay,
            ease: "power3.inOut"
        })

        setTimeout(() => {
            inViewEle.classList.add('loaded')
            done()
        }, 1000);
    }
}