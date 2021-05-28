
import '../css/componente.css';

export const crearTexto= (nombre) => {
    const h1=document.createElement('h1');
    console.log('creando un titulo');
    h1.innerText=`Hola ${nombre} este es un titulo super.`;
    document.body.append(h1);
}
