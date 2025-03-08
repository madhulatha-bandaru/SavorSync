import app from "./app.js" // as type is module, extension of file must be mentioned

app.listen(process.env.PORT,() => {
  console.log(`Server running on Port ${process.env.PORT}`)
})