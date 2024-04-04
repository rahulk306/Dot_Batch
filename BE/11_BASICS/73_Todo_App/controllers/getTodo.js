// import model 
const Todo = require("../models/Todo");

exports.getTodo = async(req, res) => {
  try{
        // getch all todo items from the database
        const todos = await Todo.find({});

        // response
        res.status(200)
        .json({
          success:true,
          data:todos,
          message:"Entire Todo Data is fetched"
        });
  }
  catch(err) {
    console.error(err);
    res.status(500)
    .json({
      success:false,
      error:err.message,
      message:'Server Error',
    });
  }
}

exports.getTodoById = async(req,res) => {
  try{
    // extract todo items basiss on id
    const id = req.params.id;
    const todo = await Todo.findById({_id: id})

    // data for given id not found
    if(!todo){
      return res.status(404).json({
        success: false,
        message: "No data found for given id",
      })
    }

    // data for given id found
    res.status(200).json({
      success: true,
      data:todo,
      message:`Todo ${id} data successfully fetched`,
    })
  }

  catch(err) {
    console.error(err);
    res.status(500)
    .json({
      success:false,
      error:err.message,
      message:'Server Error',
    });
  }
}