> Arrow Function이 뭔지 아시나요?

Arrow Function은 ES6에 도입된 문법으로 화살표를 이용하여 간편하게 함수를 선언할 수 있는 방식입니다.

```
//다양한 함수 선언 방식
// 1.
function Function(){
    return 1
}
// 2.
const generalFunction = function(){
    return 1
}
// 3. ArrowFunction
const arrowFunction = () => {
    return 1
}
```

> **Arrow Function 선언 방식과 기존 선언 방식에는 무슨 차이가 있을까요?**

1. **Arrow Function을 사용하면 this값을 외부에 있는 this값을 그대로 가져옵니다.**
2. 매개변수가 하나라면 소괄호를 생략할 수 있습니다.
3. return문만 있다면 중괄호와 return을 생략할 수 있습니다.

```
const one = () => {
    console.log(this) // {}
}
const oneFunction = function () {
    console.log(this) // <ref *1> Object [global] { ... }
}
const Two = x => {return x*2}
const Three = (x) => x*2;
```

> 그렇다면 어떨 때 Arrow Function을 사용하는 것이 적절하겠습니까?

함수를 이용한 객체지향 프로그래밍을 할 때 상위 함수의 this를 사용해야 하는 경우 Arrow Function을 사용하는 것이 적절합니다.

```
function Person () {
    this.age = 0;

    setInterval(function growUp(){
        this.age++;
        console.log(this.age)
    }, 1000)
}

var p1 = new Person(); // NaN NaN NaN ...

function Person2 () {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age)
    }, 1000)
}

var p2 = new Person2(); // 1 2 3 ...

```
혹은 매개변수가 하나이거나 간단하게 return만 하는 경우에 코드 간소화를 위해 사용하는 것이 적절해보입니다.(2, 3)

> OO씨는 일반적인 함수 선언 방식과 Arrow 함수 선언 방식 중 어떤 것을 선호하시나요? 그리고 그 이유를 알려주세요.

저는 Arrow Function을 일관적으로 사용하는 것을 좋아합니다.
1. 다른 언어에서는 단 한번도 Arrow 함수 선언 방식으로 선언하는 것을 본 적이 없어 JavaScript만의 특별한 함수 선언 방식이라 선호하게 된 경향이 있습니다. 
2. 대부분의 Frontend 개발자 혹은 Javascript를 이용하는 개발자는 일반적인 함수 선언 방식 보다 Arrow Function 선언 방식을 선호한다고 생각하기 때문입니다.

>  많은 사람들이 사용하는 것과 OO씨가 사용하는 것과는 무슨 관계가 있죠?

많은 사람들이 선호하는 방식으로 선언하는 것이 코드의 가독성을 높인다고 생각합니다. 같은 일을 하는 팀원들이 선호하는 방식으로 통일하는 것이 서로의 코드를 이해하기 더 쉽다고 생각합니다.

