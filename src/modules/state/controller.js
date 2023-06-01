const model = require('./model')

const GET = async (req, res) => {
   try {
      res.json(await model.get())
   } catch (err) {
      console.log(err);
   }
}

const POST = async (req, res) => {
   try {
      res.json({
         message: await model.post(req.body)
      })
   } catch (err) {
      console.log(err);
   }
}

module.exports = {
   GET,
   POST
}