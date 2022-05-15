import api from "./api.js"

function SearchInput({ $target, initialKeyword, onChange }) {
    let state = []

    if (initialKeyword) {

        api.fetchKeywords(initialKeyword)
            .then(res => {
                onChange({
                    keyword: initialKeyword,
                    arr: res
                })
            })

    }

    const $SearchInput = document.createElement('form')
    $SearchInput.class = 'SearchInput'

    const $SearchInput__input = document.createElement('input')
    $SearchInput__input.className = 'SearchInput__input'
    $SearchInput__input.type = "text"
    $SearchInput__input.placeholder = '프로그램 언어를 입력하세요.'
    if (initialKeyword) {
        $SearchInput__input.value = initialKeyword
    } else {
        $SearchInput__input.value = ''
    }

    $SearchInput__input.autofocus = true

    $SearchInput__input.addEventListener('input', (e) => {
        if (e.target.value) {
            api.fetchKeywords(e.target.value)
                .then(res => {
                    onChange({
                        keyword: e.target.value,
                        arr: res
                    })
                })
        } else {
            onChange({
                keyword: '',
                arr: []
            })
        }
    })
    $SearchInput.addEventListener('submit', e => {
        e.preventDefault()
    })


    $SearchInput.appendChild($SearchInput__input)
    $target.appendChild($SearchInput)
}

export default SearchInput;