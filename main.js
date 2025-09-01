

// Main Variable

let input = document.querySelector('header  input')

let button = document.querySelector('header .get-button')

let data = document.querySelector('.data')

button.onclick = function() {

        getRepos()

}

// Get Repos Function

function getRepos(){

    if(input.value.trim()  == ''){
        data.innerHTML = " <p>Please Enter a GitHub Username</p> "
    }else{
        fetch(`https://api.github.com/users/${input.value}/repos`)
        .then(res => {
            return res.json()
        })
        .then(repos => {
            data.innerHTML = " "
            if (repos.length == 0){
                data.innerHTML = ` <p> Please Enter a Valid GitHub Username</p>  <p> ${input.value} is not a valid Username </p>  `
            }
            else{
            repos.forEach(repo => {
                // Main Div

                let mainDiv = document.createElement('div')
                mainDiv.classList.add('box')

                let heading = document.createElement('h3')
                heading.textContent = repo.name

                let subDiv =  document.createElement('div')

                // Url 
                let url = document.createElement('a')
                url.setAttribute('href' , repo.html_url)
                url.setAttribute('target' , '_blank')
                url.textContent = 'Visit'

                //Stars count

                let starsSpan = document.createElement('span')
                starsSpan.innerHTML = `Stars ${repo.stargazers_count}`

                mainDiv.appendChild(heading)
                subDiv.appendChild(url)
                subDiv.appendChild(starsSpan)
                mainDiv.appendChild(subDiv)
                data.appendChild(mainDiv)
            });           }
        })
    }



}