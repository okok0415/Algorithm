import api from "./api.js"

const ProductDetailPage = ($target) => {
    let product = null
    let id = window.location.pathname.split('/')
    let selectedOptionId = []


    const getProductDetail = (id) => {
        api.fetchProductDetail(id)
            .then(res => {
                console.log(res)
                product = res
                console.log(product)
                render()
            })
    }

    const $app = document.createElement('div')
    $app.className = "ProductDetailPage"
    const $h1 = document.createElement('h1')
    $h1.innerHTML = ''
    $app.appendChild($h1)
    const $ProductDetail = document.createElement('div')
    $ProductDetail.className = 'ProductDetail'
    $app.appendChild($ProductDetail)


    $ProductDetail.addEventListener('change', e => {
        console.log(e.target)
        if (e.target.tagName === 'SELECT') {
            if (!selectedOptionId.includes(parseInt(e.target.value))) {
                selectedOptionId.push(parseInt(e.target.value))
                render()
                console.log(selectedOptionId)
            }
        }
    })

    const render = () => {
        if (product === null) {
            $ProductDetail.innerHTML = `Loading...`
        } else {


            $h1.innerHTML = `${product.name}`
            $ProductDetail.innerHTML = `
            <img src="${product.imageUrl}">
            <div class="ProductDetail__info">
            <h2>${product.name}</h2>
            <div class="ProductDetail__price">${product.price}원~</div>
            <select>
                <option>선택하세요.</option>
                ${product.productOptions.map(option =>
                `
                            <option value = "${option.id}">
                                ${option.stock === 0 ? '(품절)' : ''} ${product.name} ${option.name} ${option.price > 0 ? `(+${option.price}원)` : ''}
                            </option>
                        `
            ).join('')}
            </select>
            <div class="ProductDetail__selectedOptions">
                <h3>선택된 상품</h3>
                <ul>
                    ${product.productOptions.map(option =>
                selectedOptionId.map(item => option.id === item ? `
                        
                        <li>
                            ${product.name} ${option.name} ${option.price > 0 ? `(+${option.price}원)` : ''} <div><input type="number" value="10">개</div>
                        </li>
                        
                        ` : '').join('')
            ).join('')}
                </ul>
                <div class="ProductDetail__totalPrice">175,000원</div>
                <button class="OrderButton">주문하기</button>
            </div>
            </div>
            `

            document.querySelector('.OrderButton').addEventListener('click', (e) => {
                localStorage.setItem('p')
            })
        }
    }
    getProductDetail(id[id.length - 1])
    render()
    $target.appendChild($app)
}

export default ProductDetailPage;