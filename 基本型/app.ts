//*基本的な型
const Num: number = 123;
const str: string = "hoge"
const bool: boolean = true;
const sym: symbol = Symbol("fuga")
const nullObj: null = null;
const undef: undefined = undefined;
const bigint: bigint = 900719925474099n;


//*リテラル型
const onH: 100 = 100;
const helloMsg: "hello world" = "hello world"
const trueVal:  true = true;
const falseVal: false = false;


//*オブジェクトリテラル型
const obj: { num: number; str: string} = {
    num: 12345,
    str: "piyo",
};


//*配列型
const array1: number[] = [1,2,3];
//または
const array2: Array<number> = [1,2,3]
//*タプル型：配列型の一種
const array3: [number, string, true] = [123, "hello", true]


//*関数型
//?基本の時
//(num: number, bool: boolean) => string

//?引数が無い時
//() => string

//?戻り値が無い時
//(num: number, bool: boolean) =>

//?以下3つは同じ意味のコード
//?下の2つのように書くこともよくある
const fn1:(num: number, bool: boolean) => string =
    (num, bool) => `${num}${bool}`;


const fn2 = (num: number, bool: boolean): string => `${num}${bool}`;

function fn3(num: number, bool: boolean): string {
    return `${num}${bool}`;
}

//*any型
const any1: any = 12345;
const any2: any = "hoge"
const any3: any = (a) =>a;

//静的型検査でおこられない
const msg: any = null;

//実行時エラーになる
console.log("現在のメッセージは" + msg.length + "文字です");


//*型エイリアス
type Myname = string;
const myName: Myname = "kasshii";

type Circle = { pos: { x: number; y: number}; r: number};
const circle: Circle = { pos: { x: 1, y: 2}, r: 3 };