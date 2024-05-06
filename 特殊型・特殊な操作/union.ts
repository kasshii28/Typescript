//* Union型
type NumOrStr = string | number;
type MaybeStr = string | null | undefined;

//*リテラル型
//?Stringのリテラル型と併用すると、列挙型のように扱える
type Colors = "red" | "green" | "yellow" | "blue" ;