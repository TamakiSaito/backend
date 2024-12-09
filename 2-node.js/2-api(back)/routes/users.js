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
  const useId = _req.params.userId
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

module.exports = router