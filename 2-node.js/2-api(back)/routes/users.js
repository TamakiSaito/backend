// get : google検索する時のURLのように全てurl上で
// post : 機密情報が入っている場合、隠している

const express = require("express")

// API URLのRouter
const router = express.Router()

// Mock DB
const User = require("../models/User")

// API Routes List

// [GET] /users/:userId : IDに該当するユーザー照会
router.get("/:userId?", (_req, res) => {
  const userId = _req.params.userId
  if (userId) {
    for (let i = 0; i < User.length; i++) {
      if (userId === User[i].userId) {
        return res.send(User[i])
      }
    }
    return res.status(404).send("User not found")
  }
  // [GET] /users : ユーザーリスト照会
  return res.send(User)
})

  // [POST] /create : ユーザー登録
  // req : userId, password, nameの本体をbodyという
  router.post("/create", (req, res) => {
    const userId = req.body.userId
    const password = req.body.password
    const name = req.body.name
    const newUser = { userId, password, name }
    User.push(newUser)
    return res.send(User)
  })

  // [PUT] /update/:userId : IDに該当すつユーザー情報更新
  router.put("/update/:userId", (req, res) => {
    const userId = req.params.userId
    const password = req.body.userId
    const name = req.body.name
    for (let i = 0; i < User.length; i++) {
      if (userId === User[i].userId) {
        User[i] = { userId, password, name }
        return res.send(User[i])
      }
    }
    return res.send(User[i])
  })

  // [DELETE] /delete/:userId : IDに該当するユーザー削除
  router.delete("/delete/:userId", (req, res) => {
    const userId = req.params.userId
    for (let i = 0; i < User.length; i++) {
      if (userId === User[i].userId) {
        User.splice(i, i)
        return res.send(User)
      }
    }
    return res.status(404).send("User not found")
  })

module.exports = router