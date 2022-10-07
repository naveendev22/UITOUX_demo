const mongoose = require("mongoose");
const best_seller = require("./bestSeller.model");
const fs = require("fs");

exports.get_best_seller = async (req, res) => {
  try {
    if (req.query.id === undefined) {
      try {
        let bestSeller = await best_seller.find({ __v: 0 }).lean();

        return res.status(200).json({
          success: true,
          data: bestSeller,
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
          error: "An error occured",
        });
      }
    } else {
      try {
        let bestSeller = await best_seller.findById(req.query.id).lean();
        return res.status(200).json({
          success: true,
          data: bestSeller,
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
          error: "An error occured",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.put_best_seller = async (req, res) => {
  let { id, name, reviews, new_price, old_price } = req.body;
  let profile = await best_seller.find({ _id: id });
  try {
    let updated_best_seller = await best_seller.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        name: name,
        reviews: reviews,
        new_price: new_price,
        old_price: old_price,
        image: {
          data: fs.readFileSync("post_best_seller/" + req.file.filename),
          contentType: "image/png",
        },
      },
      {
        new: true,
      }
    );
    return res.status(200).json({
      success: true,
      data: updated_best_seller,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.post_best_seller = async (req, res) => {
  let { name, reviews, new_price, old_price } = req.body;
  try {
    let new_best_seller = await best_seller.create({
      name: name,
      reviews: reviews,
      new_price: new_price,
      old_price: old_price,
      image: {
        data: fs.readFileSync("post_best_seller/" + req.file.filename),
        contentType: "image/png",
      },
    });
    return res.status(200).json({
      success: true,
      data: new_best_seller,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.delete_best_seller = async (req, res) => {
  if (req.query.id != undefined) {
    try {
      let best_seller_result = await best_seller.deleteOne({
        _id: req.query.id,
      });
      return res.status(200).json({
        success: true,
        data: "Deleted successfully ",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      data: "Please send the ID ",
    });
  }
};
