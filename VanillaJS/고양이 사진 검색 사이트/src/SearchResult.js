class SearchResult {
    $searchResult = null;
    data = null;
    onClick = null;
    loading = false;

    constructor({ $target, initialData, onClick }) {
        this.$searchResult = document.createElement("div");
        this.$searchResult.className = "SearchResult";
        $target.appendChild(this.$searchResult);

        this.data = initialData;
        this.onClick = onClick;
        this.render();
    }

    setState(nextData) {
        this.data = nextData.data;
        this.loading = nextData.loading
        this.render();
    }

    render() {
        if (!this.loading) {
            if (JSON.stringify(this.data) == '[]') {
                this.$searchResult.innerHTML = `
          <div>
          검색 결과가 없습니다.
          </div>
          `
            } else {
                this.$searchResult.innerHTML = this.data
                    .map(
                        cat => `
            <div class="item">
              <img src=${cat.url} alt=${cat.name} />
            </div>
          `
                    )
                    .join("");

                this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
                    $item.addEventListener("click", () => {
                        this.onClick(this.data[index]);
                    });
                });
            }
        } else {
            this.$searchResult.innerHTML = `
      <div>
      로딩중입니다...
      </div>
      `
        }
    }
}