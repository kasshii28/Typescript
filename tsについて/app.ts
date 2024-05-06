const a: string = "hoge"
let b: string;
var c: string;

function greet(name: string): string{
    return "hello" + name;
}

class MyClass {
    e: string = ";"
}

//自明なので注釈は必須ではない
const num: number = 123;

//dataの型が自明ではないので注釈がいる
//注釈があると、「長い処理」を書き間違えたときにここでエラーを出せる
//型推論に任せると、違う場所でエラーが出てデバッグが大変になる可能性がある
//const data = hogeArray.map(/*長い処理*/).filter(/*長い処理*/).reduce(/*etc...*/)