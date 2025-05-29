const router=require("express").Router();

const booksmodels=require("../models/booksmodels");


//POST REQUEST
router.post("/add",async (req,res) => {
    try{
        
        const newbook=new booksmodels(req.body);
        await newbook.save().then(()=>{
            res.status(200).json({message:"Book added successfully"});
        });
    }
    catch(error){
        console.log(error);
        
    }

});

//GET requets
router.get("/getBooks",async(req,res)=>
{
    let books;
    try{
        books= await booksmodels.find();
        res.status(200).json(books);

    }catch(error){
        console.log(error);
    }
})

//GET requets with id
router.get("/getBooks/:id",async(req,res)=>{
    let book;
    const id=req.params.id;
    try{
        book=await booksmodels.findById(id);
        res.status(200).json({book});

    }catch(error){
        console.log(error);
    }
});

//update books by id
router.put("/updateBook/:id", async (req, res) => {
    const id = req.params.id;

    // Ensure req.body exists before destructuring
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(200).json({ message: "Data updated successfully" });
    }

    const { bookname, description, author, image, price } = req.body;

    try {
        const book = await booksmodels.findByIdAndUpdate(id, {
            bookname,
            description,
            author,
            image,
            price,
        }, { new: true });

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({ message: "Data updated successfully", book });

    } catch (error) {
        console.error("Error updating book:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


//Delete book by id
router.delete("/deleteBook/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const book = await booksmodels.findByIdAndDelete(id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({ message: "Book deleted successfully" });

    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
module.exports=router;
