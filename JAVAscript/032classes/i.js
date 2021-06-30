
// // pagrindinis metodas - constructor. Jia pasileidzia pats. 

// class tv {

//     constructor(is, kanalai, title) {
//         this.istrizaine = is;
//         this.kanalai = kanalai;
//         this.title = title;
//         this.uuid = 'tv-' + this.rand(1000000, 9999999)
//     }

//     rand(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     save() {
//         localStorage.setItem(this.title, JSON.stringify(this));
 
//     }
// }


// const tv1 = new tv(78, ['LTV', 'TV3', 'LNK']); // 78 patenka i constructor(is)
// const tv2 = new tv(32, ['Discovery', 'GC', 'MTV']);



// console.log(tv1);
// console.log(tv2);

// console.log(tv1.istrizaine);

// //-----neklasiniai-------------------

// const tv3 = {
//     istrizaine: 78,
//     kanalai: ['LTV', 'TV3', 'LNK']
// }

// const tv4 = {
//     istrizaine: 32,
//     kanalai: ['Discovery', 'GC', 'MTV']
// }

// console.log(tv3);
// console.log(tv4);

// localStorage.setItem('tv3', JSON.stringify(tv3));
// let out3 = localStorage.getItem('tv3');
// out3 = JSON.parse(out3);
// out3.istrizaine ++;
// localStorage.setItem('tv3', JSON.stringify(out3));
// out3 = localStorage.getItem('tv3');
// out3 = JSON.parse(out3);


// localStorage.setItem('tv4', JSON.stringify(tv4));
// let out4 = localStorage.getItem('tv4');
// out4 = JSON.parse(out4);
// out4.istrizaine ++;
// localStorage.setItem('tv4', JSON.stringify(out4));
// out4 = localStorage.getItem('tv4');
// out4 = JSON.parse(out4);


// console.log(out3);
// console.log(out4);



//workshop. issortint array ir atspausdinti
class Sorter {

    constructor(ar) {
        this.arr = ar;
    }
    sortByAsc() {
        this.arr.sort();
        return this.arr.slice(); 
    }
    sortByDesc() {
        this.arr.sort((a, b) => a > b ? -1 : 0);
        return this.arr.slice(); 

    }
    sortByDescLength() {// pagal stringo ilgį DESC
        this.arr.sort((a, b) => a.length - b.length);
        return this.arr.slice(); 

    }
    sortByLastLet() { // pagal paskutinį simbolį ASC
        this.arr.sort((a, b) => a[a.length - 1] < b[b.length - 1] ? -1 : 0);
        return this.arr.slice(); 

    }

}

const sorter = new Sorter(['LTV', 'TV3', 'LNK', 'Polonia', 'SAT1']);

console.log(sorter.sortByAsc());
console.log(sorter.sortByDesc());
console.log(sorter.sortByDescLength());
console.log(sorter.sortByLastLet());

// 2. Sukurti klasę SetSorter, kuri turi tuos pačius rūšiavimo metodus, bet jos savybe arr yra Set tipo objektas.

class setSorter {

    constructor(ar) {
        this.arr = ar;
    }
    sortByAsc() {
        this.arr.sort();
        return this.arr.slice(); 
    }
    sortByDesc() {
        this.arr.sort((a, b) => a > b ? -1 : 0);
        return this.arr.slice(); 

    }
    sortByDescLength() {// pagal stringo ilgį DESC
        this.arr.sort((a, b) => a.length - b.length);
        return this.arr.slice(); 

    }
    sortByLastLet() { // pagal paskutinį simbolį ASC
        this.arr.sort((a, b) => a[a.length - 1] < b[b.length - 1] ? -1 : 0);
        return this.arr.slice(); 

    }

}
