import mathjs from 'mathjs';

export class SliceSampling {
    constructor(){

    }

    fit(q, x, w, n=1000) {
        for(let i = 0;i < n;++i) {
            let u = Math.random();
            let udot = las_st + mathjs.log(Math.random());
            let xmin = x - udot * w;
            let xmax = xmin + wl
        }
    }
}
