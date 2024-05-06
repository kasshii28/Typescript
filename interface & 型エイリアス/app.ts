interface ObjI {
    prop: 123;
}

const obji: ObjI = { prop: 123};

type ObjT = {
    prop: 123;
}

const objt: ObjT = { prop: 123};

//?interfaceは拡張できる
interface Hoge {
    a: number;
}

interface Hoge { 
    b: string
}

//?上と同じ
interface Hoge {
    a: number;
    b: string;
}