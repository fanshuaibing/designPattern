class SingleDog {
  show(){
    console.log("show")
  }
  static getInstance(){
    if(!SingleDog.instance){
      SingleDog.instance = new SingleDog()
    }
    return SingleDog.instance
  }
}

const first = SingleDog.getInstance()
const second = SingleDog.getInstance()

console.log(first === second);


// 实现Storage，使得该对象为单例，基于 localStorage 进行封装。
// 实现方法 setItem(key,value) 和 getItem(key)。

class Storage {
  static getInstance(){
    if(!Storage.instance){
      Storage.instance = new Storage()
    }
    return Storage.instance
  }

  getItem(key){
    return localStorage.getItem(key)
  }
  setItem(key, value){
    return localStorage.setItem(key, value)
  }
}


const storage1 = Storage.getInstance()
const storage2 = Storage.getInstance()

storage1.setItem('name', '李雷')
storage1.getItem('name')
storage2.getItem('name')

console.log(storage1 === storage2);


// 用闭包

{
  function StorageBase () {}
  StorageBase.prototype.getItem = function (key){
    return localStorage.getItem(key)
  }
  StorageBase.prototype.setItem = function (key, value) {
    return localStorage.setItem(key, value)
  }

  const Storage = (function (){
    let instance = null
    return function (){
      if(!instance){
        instance = new StorageBase()
      }
      return instance
    }
  })()


  const first = new Storage()
  const second = new Storage()
  console.log(first === second);
}


