const router = require("express").Router();
const Order = require("../models/Order");
const Product = require("../models/Product")



//place an Order

router.post('/', async (req, res) => {
    const nerOrder = new Order(req.body);
    try {
        const placeOrder = await nerOrder.save();
        res.status(200).json(placeOrder)
    } catch (err) {
        res.status(500).json(err);
    }
})

// approve order
router.put(`/approve/:id`, async (req, res) => {
    try {
      const order = await Order.findOne({_id:req.params.id});
      if (!order) {
        return res.status(500).send({ message: "order not found" });
      }
      order.status = 'approved'
  
     await order.save()
  
      return res.status(200).json(order);
    } catch (error) {
      return res.status(500).json(error);
    }
  });


// get all orders

router.get("/", async (req, res) => {
    try {
        const orders = await Order.find();

        const populatedOrders = await Promise.all(
            orders.map(async (order) => {
                const populatedItems = await Promise.all(
                    order.items.map(async (item) => {
                        const product = await Product.findById(item.productId);
                        return {
                            ...item.toObject(),
                            product: product.toObject(),
                        };
                    })
                );
                return {
                    ...order.toObject(),
                    items: populatedItems,
                };
            })
        );

        res.status(200).json(populatedOrders);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;