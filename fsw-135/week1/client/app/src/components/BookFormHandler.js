import {useState} from 'react'



function BookFormHandler({submit, btnText, title, genre, _id, author, release_year}) {

const initialInputs = {title: title || '' , genre: genre || ''};
const [inputs, setInputs] = useState(initialInputs)


const handleChange = (e) => {
 const {name, value} = e.target;
 setInputs(prevInputs => ({...prevInputs, [name]: value}))

}


const handleSubmit = (e) => {
  e.preventDefault();

  //POST
submit(inputs, _id)
  setInputs(initialInputs)
}

  return (
    <form onSubmit = {handleSubmit}>
      <input 
      type="text"
      name = 'title'
      value = {inputs.title}
      onChange = { handleChange}
      placeholder = 'Title'      
      
      />
      {/* <input 
      type="text"
      name = 'genre'
      value = {inputs.genre} 
      onChange = {handleChange }
      placeholder = 'Genre'
      /> */}
     

     <select name="genre" onChange={handleChange}>
       <option value="reset">Choose Genre</option>
       <option value="Fiction">Fiction</option>
       <option value="Non-Fiction">Non-Fiction</option>
       <option value="Romance">Romance</option>
       <option value="Comedy">Comedy</option>
       <option value="Adventure">Adventure</option>
     </select>

      <input 
      type="text"
      name = 'author'
      value = {inputs.author} 
      onChange = {handleChange }
      placeholder = 'Author'
      />
      <input 
      type="number"
      name = 'release_year'
      value = {inputs.release_year} 
      onChange = {handleChange }
      placeholder = 'Release Year'
      />
      <button>Add Book</button>
    </form>
  )
}

export default BookFormHandler
