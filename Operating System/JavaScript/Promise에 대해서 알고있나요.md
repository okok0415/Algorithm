**모든 질문들은 실제 질문 받은 것이 아닌 저의 뇌피셜로 만든 질문입니다.**


> **Promise에 대해서 알고있나요?**

프로미스는 자바스크립트 비동기 처리에 사용되는 객체입니다. 일반적으로 fetch 함수를 통해 데이터를 받아올 때 사용됩니다.

> 그렇다면 Promise는 왜 생긴것일까요? 그냥 받아오면 되는데

서버에 데이터를 요청하고 데이터를 받아오는 과정에서 데이터를 다 받아온 것처럼 데이터를 표시하려고 하면 오류가 발생하거나 빈 화면이 뜹니다. 이를 해결하기 위해 나온 것이 Promise입니다.

> 비동기 처리가 뭔가요?

동기식(Synchronous) : 작업이 끝날 때 까지 다른 작업을 시작하지 않고 기다리는 방식
비동기식(Asynchronous) : 작업의 완료 여부와 상관없이 새로운 작업을 시작하는 방식

> 자바스크립트에서는 어떤 비동기 처리 방식이 있나요?

1. CallBack 함수 사용
2. Promise
3. async/await

> 어떤 경우에 비동기 처리를 해야할까요?

1. 사용자 이벤트 처리 시
2. 네트워크 응답 처리 시
3. 파일을 읽고 쓰는 등의 파일 시스템 작업 시
4. 의도적으로 시간 지연을 사용할 때

> CallBack 함수는 뭔가요?

나중에 호출되는 함수를 말합니다. 개발자는 함수를 등록하기만 하고 어떤 이벤트가 발생하거나 특정 시점이 도달했을 때 시스템에서 호출하는 함수입니다. 대표적으로 EventHandler가 있습니다.

> CallBack 함수가 있는 상태인데 Promise와 async/await는 왜 생겼을까요?

CallBack 함수가 중첩되어 있는 경우에 코드가 복잡해지고 가독성이 떨어지기 때문입니다.

```
// 가장 간단한 CallBack 함수 중첩
function first(callback) {
  let value;

  setTimeout(() => {
    value = { name: "임정민", age: 26 };
    callback(null, value);
  }, 4000);
}

first(function callbackOne(error, value) {
  if (error) {
    // ErrorHandling
  } else {
    second(value, function callbackTwo(error, value) {
      if (error) {
        // ErrorHandling
      } else {
        third(value, function callbackThree(error, value) {
          if (error) {
            // ErrorHandling
          } else {
            console.log(
              `Final value is ${value}. Here is end of Callback hell...`
            );
          }
        });
      }
    });
  }
});
```



> Promise는 어떤식으로 그 문제를 해결하나요?

Promise는 생성되고 종료될 때까지 3가지 상태를 갖습니다. 

• Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태

• Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태

• Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

Promise가 Pending 상태라면 콜백 함수 인자로 resolve(성공), reject(실패)를 사용할 수 있습니다. resolve를 호출하면 Fulfilled 상태가 되고, reject를 호출하면 Reject 상태가 됩니다.
Promise가 Fulfilled 상태가 되면 then()을 이용하여 처리 결과 값을 받을 수 있습니다.
Promise가 Rejected 상태가 되면 catch()를 통하여 실패 이유를 받을 수 있습니다.

```
function async(num) {
    return new Promise((resolve, reject) => {
      if (num > 20) resolve();
      else reject();
    });
}
  

setTimeout(() => {
    const promise1 = async(25);
    promise1
        .then(() => {
        console.log("1 then!");
        })
        .catch(() => {
        console.log("1 catch!");
        });
    const promise2 = async(15);
    promise2
        .then(() => {
        console.log("2 then!");
        })
        .catch(() => {
        console.log("2 catch!");
        });
}, 3000);
```

> async/await 과 Promise는 무슨 연관이 있죠?

async/await를 사용하면 위에서 사용하던 new Promise()를 리턴하는 함수를 손쉽게 만들 수 있습니다. 그 말은 async 함수의 리턴값은 무조건 Promise가 된다는 뜻이기도 합니다.

```
async function async(num) {
    if(num> 20) return `Success`
    else throw new Error()
}
  

setTimeout(() => {
    const promise1 = async(25);
    promise1
        .then(() => {
        console.log("1 then!");
        })
        .catch(() => {
        console.log("1 catch!");
        });
    const promise2 = async(15);
    promise2
        .then(() => {
        console.log("2 then!");
        })
        .catch(() => {
        console.log("2 catch!");
        });
}, 3000); // 위의 함수와 동일하게 작동합니다.
```

await는 Promise가 끝날 때 까지 기다리는 함수입니다. async 함수 안에서만 사용할 수 있습니다.

```

async function async(num) {
    if(num> 20) return `Success`
    else throw new Error('ERROR!!!')
}
  
function setTimeoutPromise(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), ms);
    });
  }
  

const startAsync = async () => {
    await setTimeoutPromise(1000);
    try{
        const promise1 = await async(25)
        console.log(promise1)
    }catch(e){
        console.log(e)
    }
    try{
        const promise2 = await async(15);
        console.log(promise2)
    }catch(e){
        console.log(e)
    }
}

startAsync()
```
다음과 같이 사용할 수 있습니다. await를 사용하면 resolve 값을 리턴합니다. reject가 발생하면 예외가 발생하기 때문에 try, catch문으로 예외처리를 해야합니다.

> Promise와 async/await의 차이점이 뭔가요?

Promise를 활용할 때에는 .catch()를 통해 에러 핸들링이 가능하지만 async/await는 try-catch문을 이용해야 합니다.

async/await은 비동기 코드가 동기 코드처럼 읽히게 해주어 코드가 길어질수록 async/await를 이용한 코드가 가독성이 좋다.

> **여러 비동기 동작을 한꺼번에 기다리는 건 어떻게 해야할까요?**

Promise.all을 통해서 여러 비동기 동작을 한꺼번에 해결할 수 있습니다.
예를들어 밑과 같은 예시로는 여러 비동기 동작을 한꺼번에 해결할 수 없습니다. for문을 통해서 한개씩 기다리기 때문입니다.

```
function setTimeoutPromise(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), ms);
    });
  }
  
  async function fetchAge(id) {
    await setTimeoutPromise(1000);
    console.log(`${id} 사원 데이터 받아오기 완료!`);
    return parseInt(Math.random() * 20, 10) + 25;
  }
  
  async function startAsyncJobs() {
    let ages = [];
    for (let i = 0; i < 10; i++) {
      let age = await fetchAge(i);
      ages.push(age);
    }
  
    console.log(
      `평균 나이는? ==> ${
        ages.reduce((prev, current) => prev + current, 0) / ages.length
      }`
    );
  }
  
  startAsyncJobs();

```

위와 같은 코드는 어떨까요? 1초만에 모든 사원의 정보를 모두 가져올 수 있습니다.
```
async function startAsyncJobs() {
  let promises = [];
  for (let i = 0; i < 10; i++) {
    promises.push(fetchAge(i));
  }
  
  let ages = await Promise.all(promises);

  console.log(
    `평균 나이는? ==> ${
      ages.reduce((prev, current) => prev + current, 0) / ages.length
    }`
  );
}

startAsyncJobs();
```

[출처](https://elvanov.com/2597) : https://elvanov.com/2597