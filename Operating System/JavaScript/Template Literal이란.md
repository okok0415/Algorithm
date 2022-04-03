**모든 질문들은 실제 질문 받은 것이 아닌 저의 뇌피셜로 만든 질문입니다.
**
> Literal이 무엇인지 아시나요?

Literal이란 선언과 동시에 값을 적용해 생성하는 방식입니다.

```
let A; // 왜 const 대신 let을 썼을까요?
const B = 3; // Literal
const C = new Number(3) // Literal
```

> 그렇다면 Template Literal은 무엇인가요?

Template Literal은 ES6에서 적용된 문법으로 백틱과 ${}(딸러중괄호)을 통하여 간편하게 변수를 문자열 안에 삽입할 수 있는 방식입니다.

```
let a = 3;
let b = `a is ${a}`

console.log(b) // a is 3
```

> Template Literal 방식 제외하고는 어떤식으로 문자열 안에 변수를 삽입할 수 있나요?

1. C언어의 방식과 마찬가지로 기본형식에 맞춰 표현할 수 있습니다.
```
let a = 3;

console.log("a is %d", a) // a is 3

```

2. Java의 방식과 마찬가지로 +연산자를 통하여 표현할 수 있습니다.

```
let a = 3;
let b = "a is "

console.log(b + a) // a is 3

```

> 그렇다면 Template Literal에서 줄바꿈은 어떻게 하죠?

```
let b = `a is 
3`

console.log(b)
```

> (지엽적인 질문)Nesting Templates에 대해서 들어본 적이 있나요?

중첩으로 조건을 삽입하여 다른 변수를 저장하고 싶을 때 사용하는 것으로 알고있습니다. 기존에는 괄호를 넣어서 표현하였는데, 백틱과 ${}를 이용하여 중첩할 수 있는 기능입니다.

```
//ES5
var classes = 'header'
classes += (isLargeScreen() ? 
            '' : item.isCollapsed ? 
            ' icon-expander' : ' icon-collapser');
            
//ES6, Not use nesting templates
const classes = `header ${ isLargeScreen() ? '' :
                (item.isCollapesd ? 'icon-expander' : 'icon-collapser')}`;
                
//ES6, Used nesting templates
const classes = `header ${ isLargeScreen() ? '' :
                `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;

```

> (더 지엽적인 질문) OO씨는 Nesting Templates를 사용해본 적이 있나요?

아니요. 기존 ES5방식이 제가 생각했을 때 더 가독성이 높다고 판단하여 사용하지 않습니다.

> **Tagged Templates에 대해서 들어본 적이 있나요?**

네. Tagged Templates는 중간 적용 함수를 적용하여 입력받은 변수 값을 조건에 따라 다른 값으로 변환해 템플릿에 적용할 수 있도록 하는 기능입니다.

```
function myTag(strings, personExp, ageExp) {

  var str0 = strings[0]; // "that "
  var str1 = strings[1]; // " is a "

  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }
  return str0 + personExp + str1 + ageStr;

}

var output = myTag`that ${ person } is a ${ age }`;

console.log(output);
// that Mike is a youngster
```

> OO씨는 Tagged Templates를 사용해본 적이 있나요?

없습니다. 저는 조건에 따라 다른 값을 출력해야 할 때 ${}안에 조건문을 넣어서 표현하는 것이 더욱 가독성이 높다고 판단하여 Tagged Templates 대신 ${a?a:b}와 같은 방식으로 표현하는 것을 선호합니다.

> (당황스러운 질문) 문자열을 출력할 때 이스케이프 문자를 해석하지않고 출력하려면 어떻게 해야할까요?

Raw String을 이용하여 표현할 수 있습니다. String.raw\`\`를 통해 표현할 수 있습니다.

```
let s = String.raw`xy\n${1+1}z`;
console.log(s);     //xy\n2z
```

