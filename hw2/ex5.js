function treeMaker(arr, par) {
    let acc = {};

    if (par == undefined) {
        par = null;
    }

    let findChild = arr.filter(o => o.parents === par);

    if (findChild.length == 0) {
        return {};
    }
    findChild.map(o => acc[o.id] = treeMaker(arr, o.id))
    return acc;
}

let array = [{
        parents: null,
        id: 0
    },
    {
        parents: 0,
        id: 1
    },
    {
        parents: 0,
        id: 2
    },
    {
        parents: 0,
        id: 8
    },
    {
        parents: 1,
        id: 3
    },
    {
        parents: 1,
        id: 4
    },
    {
        parents: 2,
        id: 5
    },
    {
        parents: 4,
        id: 6
    }

];

console.log(treeMaker(array));