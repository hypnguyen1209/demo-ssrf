const app = require('express')()
const { apiTracker, getInfo } = require('./get')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0


app.get('/', (req, res) => {
    res.redirect('/covid?url=https://ncov.moh.gov.vn')
})

app.get('/covid', async (req, res) => {
    let { url } = req.query
    let result = await getInfo(url)
    let info = await getInfo()
    let result = await apiTracker(info)
    await res.json(result)
})

app.listen(9900, () => {
    console.log('Running...')
})