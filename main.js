const linksSocialMedia = {
  github: 'guilhermergcs',
  youtube: 'tvgob',
  facebook: 'guilhermersilva167',
  instagram: 'guilhermergcs',
  twitter: 'guirsilva'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    // children é os filhos do id solcialLinks que é o id da ul
    const social = li.getAttribute('class') //pegando os atributos da class
    li.children[0].href = `https://${social}.com.br/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fecth(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userProfile.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
