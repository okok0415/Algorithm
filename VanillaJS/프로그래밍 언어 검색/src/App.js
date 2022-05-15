
import SearchInput from "./SearchInput.js";
import SelectedLanguage from "./SelectedLanguage.js";
import Suggestion from "./Suggestion.js";

function App({ $target }) {
    let state = []
    let Languages = []
    let keyword = ''
    if (localStorage.getItem('language')) {
        Languages = JSON.parse(localStorage.getItem('language'))
    }
    if (localStorage.getItem('value')) {
        keyword = localStorage.getItem('value')
    }

    let $SelectedLanguage = new SelectedLanguage({ $target, Languages })

    SearchInput({
        $target,
        initialKeyword: keyword,
        onChange: keyword => {
            setState(keyword)
        }
    })

    let $Suggestion = new Suggestion({
        $target,
        initialState: state,
        addLanguage: Languages => {
            setLanguage(Languages)
        }

    })



    const setState = (nextData) => {
        keyword = nextData.keyword
        state = nextData.arr
        $Suggestion.setState(nextData)
        localStorage.setItem('value', keyword)
    }

    const setLanguage = (nextData) => {

        if (Languages.length < 5 && !Languages.includes(nextData)) {
            Languages.push(nextData)
        } else if (Languages.includes(nextData)) {
            Languages.splice(Languages.indexOf(nextData), 1)
            Languages.push(nextData)
        } else if (Languages.length >= 5) {
            Languages.shift()
            Languages.push(nextData)
        }
        $SelectedLanguage.setLanguage(Languages)
        localStorage.setItem('language', JSON.stringify(Languages))
    }

}

export default App;