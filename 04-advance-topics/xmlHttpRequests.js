const requestUrl = "https://api.github.com/users/hiteshchoudhary"
const container = document.querySelector('.cardContainer')
const xhr = new XMLHttpRequest()
xhr.open('GET',requestUrl)
xhr.onreadystatechange = function(){
    // console.log(xhr.readyState)
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        console.log(data);
        const imgUrl = data.avatar_url
        container.innerHTML = `
            <h1> Meet ${data.name} </h1>
            <img src="${imgUrl} length=30px width=30px">

        `
    }
}
xhr.send()