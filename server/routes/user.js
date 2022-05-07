const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");
// controllers
const {addToWishlist,wishlist,removeFromWishlist,orders,createOrder, userCart,getUserCart,emptyCart,saveAddress,applyCouponToUserCart } = require("../controllers/user");

router.post("/user/cart", authCheck, userCart); // save cart
router.get("/user/cart",authCheck, getUserCart);
router.delete("/user/cart",authCheck,emptyCart);
router.post("/user/address",authCheck,saveAddress);

//coupon
router.post("/user/cart/coupon",authCheck,applyCouponToUserCart);


//orders
router.post("/user/order",authCheck,createOrder);
router.get("/user/orders", authCheck, orders);

// wishlist
router.post("/user/wishlist", authCheck, addToWishlist);
router.get("/user/wishlist", authCheck, wishlist);
router.put("/user/wishlist/:productId", authCheck, removeFromWishlist)
module.exports = router;
