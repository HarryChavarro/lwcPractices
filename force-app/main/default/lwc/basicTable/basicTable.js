import { LightningElement } from 'lwc';

export default class BasicTable extends LightningElement {
    data = [
        { id: 1, columna1: 'Valor 1', columna2: 'Valor 2', columna3: 'Valor 3' },
        { id: 2, columna1: 'Valor 4', columna2: 'Valor 5', columna3: 'Valor 6' },
        { id: 3, columna1: 'Valor 7', columna2: 'Valor 8', columna3: 'Valor 9' }
        // Agrega más elementos si lo deseas
    ];
}