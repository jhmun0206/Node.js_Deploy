const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if (name == "dog"){
        res.json({'sound' : '멍멍'})
    } else if (name == "cat") {
        res.json({'sound' : '야옹'})
    } else if (name == "pig") {
        res.json({'sound' : '꿀꿀'})
    } else {
        res.json({'sound' : '알 수 없음'})
    }

})

app.get('/user/:id', (req, res) => {
    // 변수를 받아오려고 하는 경우 앞에 :을 붙여줘야됨!
    const q = req.params
	console.log(q.id)
    // const b = req.body
    // console.log(b)
    // const q = req.query
    // console.log(q)
    res.send({'user_id' : q.id})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


