type ObjR = {
    readonly prop: string;
}

const objr: ObjR = {
    prop: "hello",
}

//?怒られる
//objr.prop = "goodbye"