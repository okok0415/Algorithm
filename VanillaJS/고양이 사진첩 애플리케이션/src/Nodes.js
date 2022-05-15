class Nodes {
    data = []
    $data = null
    onClick = null
    arr = []

    constructor({ $target, onClick }) {
        this.onClick = onClick
        this.$data = document.createElement('div')
        this.$data.className = 'Nodes'
        $target.appendChild(this.$data)

    }


    setState(nextData) {
        console.log(nextData)
        this.data = nextData
        this.render()
    }


    render() {
        if (this.data) {
            console.log(this.data)
            console.log(this.arr)
            if (this.arr.length !== 0) {

                this.$data.innerHTML = `
                <div class="Node" id='back'>
                    <img src="./assets/prev.png">
                </div>
            `

            } else {
                this.$data.innerHTML = ``
            }

            this.$data.innerHTML += this.data.map(
                (data) => {
                    if (data.type === 'DIRECTORY') {

                        return `
                <div class="Node" id= ${data.id}>
                    <img src="./assets/directory.png">
                    <div>${data.name}</div>
                </div>`
                    } else if (data.type === 'FILE') {
                        return (`
                <div class="Node" id= ${data.id}>
                    <img src="./assets/file.png">
                    <div>${data.name}</div>
                </div>`)
                    }
                }
            ).join('')

            if (document.getElementById('back')) {
                document.getElementById('back').addEventListener('click', () => {
                    this.arr.pop()
                    console.log(this.arr)
                    this.onClick({
                        id: 'back',
                        arr: this.arr,
                        parent: this.data[0].parent.id
                    })
                })
            }

            for (let i = 0; i < this.data.length; i++) {
                document.getElementById(this.data[i].id).addEventListener('click', () => {
                    if (this.data[i].type === 'DIRECTORY') {
                        this.arr.push(this.data[i].name)
                        this.onClick(this.data[i])
                    } else if (this.data[i].type === 'FILE') {
                        this.onClick(this.data[i])
                    }
                })
            }

        } else {
            this.$data.innerHTML = `
        <div class="Modal Loading">
            <div class="content">
            <img src="./assets/nyan-cat.gif">
            </div>
        </div> 
        `
        }
    }

}