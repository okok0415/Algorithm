const CartPage = ($target) => {

    const $app = document.createElement('div')
    $app.className = "ProductListPage"
    const $h1 = document.createElement('h1')
    $h1.innerHTML = '상품목록'
    $app.appendChild($h1)


    const render = () => {

    }
    render()
    $target.appendChild($app)
}

export default CartPage;