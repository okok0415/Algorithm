class ImageInfo {
    $imageInfo = null;
    data = null;

    constructor({ $target, data }) {
        const $imageInfo = document.createElement("div");
        $imageInfo.className = "ImageInfo";
        this.$imageInfo = $imageInfo;
        $target.appendChild($imageInfo);

        this.data = data;

        this.render();
    }

    setState(nextData) {
        this.data = nextData;
        this.render();
    }

    render() {
        if (this.data.visible) {
            const { name, url, temperament, origin } = this.data.image;

            this.$imageInfo.innerHTML = `
          <div class="content-wrapper">
            <div class="title">
              <span>${name}</span>
              <div class="close">x</div>
            </div>
            <img src="${url}" alt="${name}"/>        
            <div class="description">
              <div>성격: ${temperament}</div>
              <div>태생: ${origin}</div>
            </div>
          </div>`;
            this.$imageInfo.style.display = "block";

            document.addEventListener('click', (e) => {
                if (e.target === document.querySelector('.ImageInfo') || e.target === document.querySelector('.close')) {
                    let close = document.querySelector('.close')
                    close.style.animation = 'closed 2s'
                    setTimeout(() => {
                        this.$imageInfo.style.display = 'none'
                    }, 2000)

                }
            })
            document.addEventListener('keydown', (e) => {
                let close = document.querySelector('.close')
                close.style.animation = 'closed 2s'
                setTimeout(() => {
                    this.$imageInfo.style.display = 'none'
                }, 2000)
            })
        } else {
            this.$imageInfo.style.display = "none";
        }
    }
}
