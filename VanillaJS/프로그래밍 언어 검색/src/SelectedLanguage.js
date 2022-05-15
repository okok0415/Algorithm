function SelectedLanguage({ $target, Languages }) {
    let Language = Languages
    const $SelectedLanguage = document.createElement('div')
    $SelectedLanguage.className = "SelectedLanguage"
    const $ul = document.createElement('ul')
    $SelectedLanguage.appendChild($ul)
    $target.appendChild($SelectedLanguage)

    const render = () => {
        if (Language.length) {
            $ul.innerHTML = Language.map(
                (data) => `
                    <li>${data}</li>
                `
            ).join('')
        }
    }

    this.setLanguage = (nextData) => {
        Language = nextData
        render()
    }


    render()
}

export default SelectedLanguage;