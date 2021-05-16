// eslint-disable-next-line
const request = require('request')
// eslint-disable-next-line
const action = process.argv[2]

switch (action) {
  case 'list':
    listBooks()
    break
  case 'read':
    readBook(process.argv[3])
    break
  case 'delete':
    deleteBook(process.argv[3])
    break
  case 'create':
    createBook(process.argv[3])
    break
  case 'update':
    updateBook(process.argv[3], process.argv[4])
    break
  default:
    console.log('unknown action')
}

function listBooks() {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20', (err, res, body) => {
    if (err) {
      return console.log('err', err)
    }
    const data = JSON.parse(body)
    for (let i = 0; i < data.length; i += 1) {
      console.log(`${data[i].id} ${data[i].name}`)
    }
  })
}

function readBook(id) {
  request(`https://lidemy-book-store.herokuapp.com/books/${id}`, (err, res, body) => {
    if (err) {
      return console.log('err', err)
    }
    const data = JSON.parse(body)
    console.log(data)
  })
}

function deleteBook(id) {
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${id}`, (err, res, body) => {
    if (err) {
      return console.log('err', err)
    }
    console.log('刪除成功！')
  })
}

function createBook(name) {
  request.post({
    url: 'https://lidemy-book-store.herokuapp.com/books',
    form: {
      name
    }
  }, (err, res) => {
    if (err) {
      return console.log('err', err)
    }
    console.log('新增成功！')
  })
}

function updateBook(id, name) {
  request.patch({
    url: `https://lidemy-book-store.herokuapp.com/books/${id}`,
    form: {
      name
    }
  }, (err, res) => {
    if (err) {
      return console.log('更新失敗', err)
    }
    console.log('更新成功！')
  })
}
