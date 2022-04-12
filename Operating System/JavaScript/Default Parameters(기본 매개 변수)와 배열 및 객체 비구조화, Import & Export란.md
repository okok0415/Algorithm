**모든 질문들은 실제 질문 받은 것이 아닌 저의 뇌피셜로 만든 질문입니다.**

> JavaScript는 기본 매개 변수를 선언할 수 있나요?

네. ES6에서 제공한 문법으로 기본 매개 변수를 선언할 수 있습니다.

```
const People = (name, age = 26) => {
	return `hi my name is ${name}, ${age} years old`
}

console.log(People('정민')
//hi my name is 정민, 26 years old

```

> 기본 매개 변수를 선언할 때 주의해야 할 점은 무엇이 있죠?

다른 언어에서는 디폴트 파라미터의 값을 오른쪽 파라미터부터 순서대로 채워야 하지만 JavaScript는 순서 상관없이 선언할 수 있습니다.

JavaScript에서 기본 매개 변수를 사용하는 경우는 오직 값이 undefined인 경우입니다.
따라서 false나 NaN, Null값 모두 기본 매개 변수가 사용되지 않습니다.

```
const Test =(num = 1) => {
    console.log(num)
}

Test() // 1
Test(undefined) // 1
Test('') // '' 
Test(null) //null
Test(NaN) // NaN

```

> 왜 C++와 같은 다른 언어에서는 기본 매개 변수를 선언할 때 오른쪽에서부터 선언하죠?

그 이유는 매개변수를 왼쪽에서 부터 오른쪽으로 넣기 때문입니다. 예를 들어 매개변수를 3개 넣는다고 가정해봅시다. (num1 = 1, num2 = 2, num3) 이런식으로 선언하는 것이 의미가 없다는 것을 금방 눈치 챌 수 있습니다. 매개변수는 왼쪽부터 채워지기때문에 위와 같은 기본 매개 변수는 사용될 일이 없습니다. num3을 무조건 채워야 하니까요.

> 그렇다면 JavaScript에서는 왜 순서와 상관없이 선언할 수 있나요?

JavaScript에서는 undefined라는 타입 값을 직접 넣어서 표현할 수 있기 때문에 허용하는 거라고 생각합니다.

```
const Test =(num1 = 1, num2 = 2, num3) => {
    console.log(num1, num2, num3)
}

Test(, ,3) // error!
Test(3) // 3, 2, undefined
Test(undefined, undefined, 3) // 1, 2, 3
```

> (지엽적인 질문) 배열 및 객체 비구조화에 대해서 알고 있나요?

값을 보다 편리하게 받아올 수 있게 하는 문법으로 let 이후에 중괄호 혹은 대괄호를 넣어 편리하게 값을 할당받을 수 있는 방식입니다.

```
//ES5
const contacts = {
	name : '임정민',
	age: 26
};

let name = contacts.name
let age = contacts.age

//ES6
const contacts = {
	name : '임정민',
	age: 26
};

let {name, age} = contacts;
//혹은
let { a : name, b : age} = contacts;

//배열도 마찬가지
const contacts = ['임정민', 26]

let [name, age] = contacts
```

> Import와 Export를 사용하면 어떤 이점이 있죠?

1. 코드 관리가 쉽고 가독성이 좋아진다.
2. 필요 함수만 import할 수 있다.

