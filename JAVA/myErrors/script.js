'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'rw',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
]

try {
    data.forEach((blockObj,i) => {
        const block = document.createElement(blockObj.tag);
        
        if (blockObj.id) throw new SyntaxError(`В данных под номером ${i+1} нет уникального идентификатора`)
    
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    })
} catch (e) {
    if (e.name === 'SyntaxError') {
        console.error(e.message);
    } else throw e;
}

const err = new Error('dfgdfgdfg');
console.log(err.name, err.message, err.stack);