// window.alert("Seja bem vindo ")
document.title = "Atividade de DOM"

const $section = document.createElement("section")
const $article = document.createElement("article")
const $h1_Section = document.createElement("h1")
const $p_Section = document.createElement("p");
const $h1_Article = document.createElement("h1");
const $p_Article = document.createElement("p");


document.body.appendChild($section)
document.body.appendChild($article)
$section.appendChild($h1_Section)
$section.appendChild($p_Section)
$article.appendChild($h1_Article)
$article.appendChild($p_Article)

$h1_Article.innerHTML = "Titulo do article"
$p_Article.innerHTML = "Paragrafo do article"

$h1_Section.innerHTML = "Titulo da section"
$p_Section.innerHTML = "Paragrafo da section"

