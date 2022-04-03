**모든 질문들은 실제 질문 받은 것이 아닌 저의 뇌피셜로 만든 질문입니다.**

> Spread Operator가 뭔지 아시나요?

Spread 연산자는 연산자의 대상 배열을 개별 요소로 분리합니다.
```
console.log(...[1, 2, 3]) // 1 2 3
console.log(...'Hello') // H e l l o
```

> Rest parameter가 뭔가요?

Spread 연산자를 사용하여 함수의 파라미터를 작성한 형태를 말합니다. Rest Parameter를 사용하면 함수의 파라미터로 오는 값들을 'Array'로 전달받을 수 있습니다

```
function foo(...rest) {
	console.log(rest) // [1, 2, 3, 4, 5]
    
}
foo(1, 2, 3, 4, 5)

```

> Spread 연산자와 Rest parameter의 차이점은 무엇인가요?

Rest parameter과 Spread 연산자 모두 ...을 통해 표현한다는 공통점이 있지만 
Rest parameter은 함수 선언문의 파라미터에 선언하여 배열로 만들어서 사용하는 것이고 
Spread 연산자는 배열을 각각의 개별 요소로 분리하는 것입니다.

> (지엽적인 질문) arguments 객체에 대해서 알고 계신가요?

ES5에서도 가변 인자 함수의 경우 arguments 객체를 통해 인자값을 확인할 수 있습니다.
이는 유사 배열 객체로 순회가능하고 length값을 알 수 있지만 배열은 아닙니다. 대신 rest parameter은 실제 배열을 반환하기 때문에 rest parameter을 사용하는 것이 더욱 바람직하다고 판단됩니다.

```
var foo = function () {
  console.log(arguments);
};
foo(1, 2); // { '0': 1, '1': 2 }

```
 
 