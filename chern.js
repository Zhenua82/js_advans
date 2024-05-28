'use strict';

async function loadlist(q){
    // const resp = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${this.state.offset}`);
    const resp = await fetch(`https://openlibrary.org/search.json?q=${q}&mode=everything`);
    const prod = await resp.json()
    console.log(prod)
    return prod
}

loadlist('dfg')
