// and ( && ) ( a & b 에서 a,b 값 모두 참이여야 True로 표기됨)
console.log(true && true); // > 'result' : true(1)
console.log(true && false); // > 'result' : false(0)

// or ( || ) ( a | b 에서 a,b 값 하나만 참이여도 True로 표기됨)
console.log(true || true); // > 'result' : true(1)
console.log(true || false); // > 'result' : true(1)
console.log(false || false); // > 'result' : false(0)

// not (!) ('!a=b'로 반댓값을 출력함)
console.log(!true); // > 'result' : false(0)
console.log(!false); // > 'result' : true(1)

const age = 17;
const result = age >= 8 && age <= 19 ? "학생입니다" : "학생이 아닙니다";
console.log(result);

let nickname = null;
console.log(nickname ?? "익명 사용자");
nickname = undefined;
console.log(nickname ?? "익명 사용자");
nickname = "노주호"
console.log(nickname ?? "익명 사용자");