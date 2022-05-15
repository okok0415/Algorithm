function Suggestion({ $target, initialState, addLanguage }) {
    let state = initialState
    let keyword = ""
    let selectedIndex = 0

    const $Suggestion = document.createElement('div')
    $Suggestion.className = "Suggestion"
    const $ul = document.createElement('ul')
    $Suggestion.appendChild($ul)

    this.setState = (nextData) => {
        state = nextData.arr
        keyword = nextData.keyword
        render()
    }
    const renderMatchedItem = (keyword, item) => {
        if (!item.includes(keyword)) {
            return item
        }

        const matchedText = item.match(new RegExp(keyword, 'gi'))
        return item.replace(new RegExp(matchedText, 'gi'), `<span class="Suggestion__item--matched">${matchedText}</span>`)
    }

    const Select = (value) => {
        alert(value)
        addLanguage(value)
    }

    const render = () => {
        if (!state.length) {
            $Suggestion.style.display = 'none'
        } else {
            $ul.innerHTML = state.map(
                (data, idx) => `
                    <li id = ${idx} class=${idx === selectedIndex ? 'Suggestion__item--selected' : ''}>
                        ${renderMatchedItem(keyword, data)}
                    </li>
                `
            ).join('')
            $Suggestion.style.display = 'block'
        }
    }


    document.addEventListener('keydown', e => {
        if (e.keyCode === 40) { //down
            if (selectedIndex === state.length - 1) {
                selectedIndex = 0
            } else {
                selectedIndex += 1
            }
        } else if (e.keyCode === 38) { // up
            if (selectedIndex === 0) {
                selectedIndex = state.length - 1
            } else {
                selectedIndex -= 1
            }
        } else if (e.keyCode === 8) {
            selectedIndex = 0
        } else if (e.keyCode === 13) {
            if (state.length) {
                Select(state[selectedIndex])
            }
        }

        render()

    })

    $Suggestion.addEventListener('click', e => {
        const $li = e.target.closest('li')
        if ($li) {
            const index = $li.id
            Select(state[index])
            render()
        }
    })

    $target.appendChild($Suggestion)
    render()
}

export default Suggestion;