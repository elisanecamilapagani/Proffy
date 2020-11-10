 const proffys = [ 
     {
         name: "Diego Fernandes", 
         avatar: "https://avatars3.githubusercontent.com/u/2254731?s=96&v=4",
         whatsapp:"899128737495",
         bio:"Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
         subject:"Química",
         const: "20",
         weekday:[ 0 ],
         time_from: [ 720 ],
         time_to: [1220 ]
    
        },
        {
        name: "Daniely Fernandes", 
        avatar: "https://avatars1.githubusercontent.com/u/54600663?s=460&u=a9690b60375dd8dacc372bf9e3905e35d8f37228&v=4",
        whatsapp:"899128737495",
        bio:"Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject:"Química",
        const: "20",
        weekday:[ 0 ],
        time_from: [ 720 ],
        time_to: [1220 ]
     },

     {
        name: "Maike Brito", 
        avatar: "https://avatars3.githubusercontent.com/u/26551306?s=460&u=18446655ccae6c2a29eb177a104ecf32f029aa3a&v=4",
        whatsapp:"899128737495",
        bio:"Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject:"Química",
        const: "20",
        weekday:[ 0 ],
        time_from: [ 720 ],
        time_to: [1220 ]
     }

 ]
 
function pageLanding(req, res) {
    return res.render(__dirname +"/views/index.html")
}
function pageStudy (req, res) {
    const filters = req.query
    return res.render(__dirname +"/views/study.html", { proffys, filters})
}

function pageGiveClasses(req, res) {
    return res.render(__dirname +"/views/give-classes.html" )
}

  const express = require('express')
  const server = express( )
 

 //configurando  nunjucks
 const nunjucks = require('nunjucks')
 nunjucks.configure('src/views', {
     express: server,
     noCache: true,
 })

  //configurando arquivos estáticos (css, scripts,imagens)
  server.use(express.static("public")) 

  //As rotas da minha aplicação
  .get('/', pageLanding)
  .get('/study', pageStudy)
  .get('/give-classes',pageGiveClasses )
    

.listen(5000)

