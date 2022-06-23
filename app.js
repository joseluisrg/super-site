const express = require('express')
const app = express()
const PORT = process.env.PORT==null?8080:process.env.PORT
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Tienda en línea lista en puerto ${PORT}`)
})