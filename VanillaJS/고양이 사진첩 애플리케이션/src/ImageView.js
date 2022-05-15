class ImageView {
    $imageInfo = null
    data = null

    constructor({ $target, data }) {
        this.$imageInfo = document.createElement('div')
        this.$imageInfo.className = 'Modal ImageViewer'

        $target.appendChild(this.$imageInfo)

        this.data = data
        this.render()
    }

    setState(nextData) {
        console.log(nextData)
        this.data = nextData;
        this.render()
    }

    render() {

        if (this.data.visible) {
            let filePath = this.data.image.filePath
            this.$imageInfo.innerHTML = `
            <div class="content">
                <img src='https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public${filePath}'>
            </div>
            `
            this.$imageInfo.style.display = 'block'

            document.addEventListener('keydown', e => {
                if (e.keyCode === 27) {
                    this.$imageInfo.style.display = 'none'
                }
            })
            document.addEventListener('click', e => {
                if (e.target === document.querySelector('.Modal')) {
                    this.$imageInfo.style.display = 'none'
                }
            })
        } else {
            this.$imageInfo.style.display = 'none';
        }
    }
}