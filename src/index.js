import './style.css';
import { Header } from './components/Header/header.js';
import { Banner } from './components/Banner/banner.js';
import { Menu } from './components/Menu/menu.js';
import { Gallery } from './components/Gallery/gallery.js'
import { Contact } from './components/Contact/contact.js';
import { Footer } from './components/Footer/footer.js';


const pageElement = document.createElement('div');
pageElement.classList.add('page');

const main = document.createElement('main');
main.append(Banner(), Menu(), Gallery(), Contact());

pageElement.append(Header(), main, Footer());

document.querySelector('#app').append(pageElement);

