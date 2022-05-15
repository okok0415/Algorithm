import api from "./api.js";
import { routeChange } from "./router.js";

const ProductListPage = ($target) => {
    let product = []

    const getProduct = () => {
        api.fetchProduct()
            .then(res => {
                product = res
                render()
            })
    }

    const $app = document.createElement('div')
    $app.className = "ProductListPage"
    const $h1 = document.createElement('h1')
    $h1.innerHTML = '상품목록'
    $app.appendChild($h1)
    const $ul = document.createElement('ul')
    $app.appendChild($ul)




    const render = () => {
        if (!product.length) {
            return
        } else {
            $ul.innerHTML = product.map(
                (item) =>
                    `
                        <li class="Product" id="${item.id}">
                            <img src=${item.imageUrl}>
                            <div class="Product__info">
                            <div>${item.name}</div>
                            <div>${item.price}</div>
                            </div>
                        </li>
                    `

            ).join('')
        }
    }

    getProduct()
    render()
    $target.appendChild($app)


    $ul.addEventListener('click', (e) => {
        const $li = e.target.closest('li')
        const id = $li.id
        if (id) {
            routeChange(`/web/products/${id}`)
        }
    })
}

export default ProductListPage;