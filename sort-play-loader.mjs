fetch("https://api.github.com/repos/drizzy-solutions/sort-play/contents/sort-play.js")
    .then(res => res.json())
    .then(json => atob(json.content))
    .then(content => new Blob([content], { type: "application/javascript" }))
    .then(URL.createObjectURL)

    .then(url => import(url))
