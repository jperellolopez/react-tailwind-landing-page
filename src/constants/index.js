import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#about-us", label: "Sobre Nosotros" },
    { href: "#products", label: "Productos" },
    { href: "#contact-us", label: "Contacto" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Marcas' },
    { value: '500+', label: 'Tiendas' },
    { value: '250k+', label: 'Clientes' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Kine Air Jordan-01",
        price: "200.20€",
        rating: 4.3
    },
    {
        imgURL: shoe5,
        name: "Kine Air Jordan-10",
        price: "210.20€",
        rating: 4.7
    },
    {
        imgURL: shoe6,
        name: "Kine Air Jordan-100",
        price: "220.20€",
        rating: 4.4
    },
    {
        imgURL: shoe7,
        name: "Kine Air Jordan-001",
        price: "230.20€",
        rating: 4.8
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Envío gratis",
        subtext: "Disfruta de una gran experiencia de compra gracias a nuestros envíos gratuitos."
    },
    {
        imgURL: shieldTick,
        label: "Pagos Seguros",
        subtext: "No te preocupes por tu seguridad en tus transacciones con nuestras opciones de pago seguras."
    },
    {
        imgURL: support,
        label: "Nos encanta ayudarte",
        subtext: "Nuestro equipo de profesionales está aquí para ayudarte en cualquier duda que se te plantee."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "La atención al detalle y la calidad del producto ha superado mis expectativas. Totalmente recomendado."
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.7,
        feedback: "El producto y el trato al cliente han sido excepcionales. Volveré a comprar aquí."
    }
];


export const footerLinks = [
    {
        title: "Productos",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Kine Waffle Racer", link: "/" },
            { name: "Kine Cortez", link: "/" },
        ],
    },
    {
        title: "Ayuda",
        links: [
            { name: "Sobre Nosotros", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "Cómo Funciona", link: "/" },
            { name: "Política de Privacidad", link: "/" },
            { name: "Política de Pagos", link: "/" },
        ],
    },
    {
        title: "Contacto",
        links: [
            { name: "customer@kine.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];