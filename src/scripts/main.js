
const btnSearch = document.querySelector('#btn-search')
const btnApply = document.querySelector('#btn-apply')
const btnReset = document.querySelector('#btn-reset')

async function getData() {
    const userInput = document.querySelector('#user-search-input')
    const username = userInput.value
    try {
        await fetch(`http://localhost:3000/users/${username}`).then(
            res => {
                if(res.status >= 200 && res.status <= 299) {
                    return res.json()
                } else {
                    throw Error(response.statusText)
                }
            }
        ).then(
            data => {
                showData(data)
            }
        )
    } catch (error) {
        alert('Usuário não encontrado.')        
    }
}

function showData(user) {
    const userName = document.querySelector('.username').innerHTML = user.login
    const profileImg = document.querySelector('.profile-img-ct').style.backgroundImage = `url(${user.avatar_url})`
    const name = document.querySelector('#name').innerHTML = user.name
    const followers = document.querySelector('#followers').innerHTML = user.followers
    const following = document.querySelector('#following').innerHTML = user.following
    const repos = document.querySelector('#repos').innerHTML = user.public_repos
    const location = document.querySelector('#location').innerHTML = user.location
}

btnSearch.addEventListener('click', () => {
    getData()
})

//Customization functions

function resetColors() {
    //inputs
    const colorOutside = document.querySelector('#outside').value = '#fafad2'
    const colorBgCard = document.querySelector('#bg-card').value = '#000000'
    const colorBgBorderImage = document.querySelector('#bg-border-img').value = '#ffffff'
    const colorGitBorder = document.querySelector('#git-border').value = '#ffffff'

    //elements
    const outside = document.querySelector('.card-ct').style.background = '#fafad2'
    const bgCard = document.querySelector('.card-item').style.background = '#000000'
    const bgBorderImg = document.querySelector('.profile-img-ct').style.border = `3px solid #ffffff`
    const gitBorder = document.querySelector('.logo-git').style.border = `2px solid #ffffff`
}

function applyColors() {
    //inputs
    const colorOutside = document.querySelector('#outside').value
    const colorBgCard = document.querySelector('#bg-card').value
    const colorBgBorderImage = document.querySelector('#bg-border-img').value
    const colorGitBorder = document.querySelector('#git-border').value
    
    //elements
    const outside = document.querySelector('.card-ct').style.background = colorOutside
    const bgCard = document.querySelector('.card-item').style.background = colorBgCard
    const bgBorderImg = document.querySelector('.profile-img-ct').style.border = `3px solid ${colorBgBorderImage}`
    const gitBorder = document.querySelector('.logo-git').style.border = `2px solid ${colorGitBorder}`
}

btnApply.addEventListener('click', () => {
    applyColors()
})

btnReset.addEventListener('click', () => {
    resetColors()
})