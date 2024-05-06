type User = {
    firstName: string, 
    lastName: string, 
    age: Number,
    favoriteFoods: string[],
    hasProgrammingExp: boolean
}

const user : User = {
    firstName: "太郎",
    lastName: "山田",
    age: 24,
    favoriteFoods: ["寿司","ラーメン","カレー"],
    hasProgrammingExp: true,
};

console.log(user)

function getSelfIntroduction(userObj: User) :string {
    const { firstName,lastName,age,favoriteFoods,hasProgrammingExp} = userObj;
    const foodList = favoriteFoods.join("と");
    const ProgrammingExp = hasProgrammingExp ? "があります" : "はありません";
    return `私の名前は${lastName}${firstName}です。年齢は${age}歳です。好きな食べ物は${foodList}です。プログラミング経験${ProgrammingExp}。`;
}

console.log(getSelfIntroduction(user));