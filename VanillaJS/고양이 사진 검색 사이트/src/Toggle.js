class Toggle {
    constructor({ $target }) {
        const $toggle = document.createElement('div')
        const $input = document.createElement('input')
        $input.type = 'button'
        $input.id = 'toggle'
        if (window.matchMedia('(prefers-color-scheme: dark').matches) {
            document.documentElement.setAttribute('color-theme', 'dark')
            $input.value = 'Light'
        } else {
            document.documentElement.setAttribute('color-theme', 'light')
            $input.value = 'Dark'
        }

        $input.style.margin = '10px'
        $toggle.appendChild($input)
        $target.appendChild($toggle)

        $input.addEventListener('click', () => {
            if ($input.value === 'Dark') {
                $input.value = 'White'
                document.documentElement.setAttribute('color-theme', 'dark')
            } else {
                $input.value = 'Dark'
                $target.background = 'white'
                document.documentElement.setAttribute('color-theme', 'light')

            }
        })
        this.render()
    }

    render() { }
}
