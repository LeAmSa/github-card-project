
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
    const colorUsername = document.querySelector('#username-text').value = '#ffffff'
    const colorFooter = document.querySelector('#footer-info').value = '#ffffff'
    const colorOutside = document.querySelector('#outside').value = '#f4e580'
    const colorBgCard = document.querySelector('#bg-card').value = '#1a1919'
    const colorBgBorderImage = document.querySelector('#bg-border-img').value = '#ffffff'
    const colorGitBorder = document.querySelector('#git-border').value = '#ffffff'

    //elements
    const usernameText = document.querySelector('.username').style.color = '#ffffff'
    const footerGitLogo = document.querySelector('#footer-git-logo').style.fill = '#ffffff'
    const footerTitle = document.querySelector('#footer-title').style.color = '#ffffff'
    const outside = document.querySelector('.card-ct').style.background = '#f4e580'
    const bgCard = document.querySelector('.card-item').style.background = '#1a1919'
    const bgBorderImg = document.querySelector('.profile-img-ct').style.border = `3px solid #ffffff`
    const gitBorder = document.querySelector('.logo-git').style.border = `2px solid #ffffff`
}

function applyColors() {
    //inputs
    const colorUsername = document.querySelector('#username-text').value
    const colorFooter = document.querySelector('#footer-info').value
    const colorOutside = document.querySelector('#outside').value
    const colorBgCard = document.querySelector('#bg-card').value
    const colorBgBorderImage = document.querySelector('#bg-border-img').value
    const colorGitBorder = document.querySelector('#git-border').value
    
    //elements
    const usernameText = document.querySelector('.username').style.color = colorUsername
    const footerGitLogo = document.querySelector('#footer-git-logo').style.fill = colorFooter
    const footerTitle = document.querySelector('#footer-title').style.color = colorFooter
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