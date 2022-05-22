const TEMPLATE = '<input type="text">';

class SearchInput {
    keyword = []
    $keyword = null
    onSearch = null

    constructor({ $target, onSearch }) {
        const $searchInput = document.createElement("input");
        this.$searchInput = $searchInput;
        this.$searchInput.placeholder = "고양이를 검색해보세요.|";
        this.$searchInput.autofocus = true
        this.$searchInput.addEventListener('click', (e) => {
            e.target.value = ''
        })
        $searchInput.className = "SearchInput";

        this.$keyword = document.createElement('div')
        this.$keyword.className = 'keyword'
        $target.appendChild($searchInput);
        $target.appendChild(this.$keyword)

        $searchInput.addEventListener("keyup", e => {
            if (e.keyCode === 13) {
                if (e.target.value) {
                    onSearch(e.target.value);
                    if (this.keyword.length < 5) {
                        this.keyword.unshift(e.target.value)
                    } else {
                        this.keyword.pop()
                        this.keyword.unshift(e.target.value)
                    }
                    this.render()
                    e.target.value = ''
                }

            }
        });
        this.onSearch = onSearch
        this.render()
        console.log("SearchInput created.", this);
    }

    render() {
        this.$keyword.innerHTML = this.keyword.map(
            (key, id) => `<div id=${id} class='word'>${key}</div>`
        ).join('')
        for (let i = 0; i < this.keyword.length; i++) {
            document.getElementById(i).addEventListener('click', () => {
                this.onSearch(this.keyword[i])
            })
        }
    }
}
