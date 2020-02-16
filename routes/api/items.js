const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

// @route GET api/items

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route POST api/items
router.post("/", (req, res) => {
  const newItem = new Item({
    question: req.body.question,
    answer: req.body.answer,
    author: req.body.author,
    votes: req.body.votes
  });
  newItem.save().then(item => res.json(item));
});

// @route DELETE api/items
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route DELETE api/items
router.post("/:id", (req, res) => {
  Item.findByIdAndUpdate(req.params.id, {
    question: req.body.question,
    answer: req.body.answer,
    author: req.body.author,
    $inc: { votes: req.body.votes }
  }).then(item => res.json(item));
});

module.exports = router;
