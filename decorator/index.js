/**
 * 装饰器模式，又名装饰者模式。它的定义是“在不改变原对象的基础上，通过对其进行包装拓展，
 * 使原有对象可以满足用户的更复杂需求”。
 */


// 定义打开按钮
class OpenButton {
  // 点击后展示弹框（旧逻辑） 不改变
  onClick() {
    const modal = new Modal()
    modal.style.display = 'block'
  }
}

// 定义按钮对应的装饰器
class Decorator {
  // 将按钮实例传入
  constructor(open_button) {
    this.open_button = open_button
  }

  onClick() {
    this.open_button.onClick() // 不改变原有的逻辑
    //  “包装”了一层新逻辑
    this.changeButtonStatus()
  }

  changeButtonStatus() {
    this.changeButtonText()
    this.disableButton()
  }

  disableButton() {
    const btn =  document.getElementById('open')
    btn.setAttribute("disabled", true)
  }

  changeButtonText() {
    const btn = document.getElementById('open')
    btn.innerText = '快去登录'
  }
}

const openButton = new OpenButton()
const decorator = new Decorator(openButton)

document.getElementById('open').addEventListener('click', function() {
  // openButton.onClick()
  // 此处可以分别尝试两个实例的onClick方法，验证装饰器是否生效
  decorator.onClick()
})
