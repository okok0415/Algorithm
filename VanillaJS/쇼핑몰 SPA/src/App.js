import CartPage from "./CartPage.js"
import ProductDetailPage from "./ProductDetailPage.js"
import ProductListPage from "./ProductListPage.js"
import { init } from "./router.js"



const App = ({ $target }) => {

    const route = () => {
        let pathname = window.location.pathname

        $target.innerHTML = ''
        console.log(pathname)
        if (pathname === '/web/') {
            ProductListPage($target)
        } else if (pathname.indexOf('/web/products') === 0) {
            ProductDetailPage($target)
        } else if (pathname === '/web/cart') {
            CartPage($target)
        }
    }
    init(route)
    window.addEventListener('popstate', route)
    route()

}

export default App;