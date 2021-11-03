import { mount } from 'products/ProductsIndex';
import {cartMount} from 'cart/CartIndex';

console.log('container!')

mount(document.querySelector('#my-products'));

cartMount(document.querySelector('#my-cart'));
