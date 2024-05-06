interface Hoge {
    c?: number;
}

type Fuga = {
    d?: string;
}

function fn(c?: boolean){
    return c;
}

//*Unionで同じようなことができる
//? ?記法の方が短く簡単
type maybeNum = number | undefined;


function fn3(a?: number){
    //?ここではaはnumber | undefined型で怒られる
    Math.sqrt(a);


    if(a === undefined) return;
    //?ここではnumber型で怒られない
    Math.sqrt(a);
}