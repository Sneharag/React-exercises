

function App(){
  return (
    <div className="container">
      <h1>Registration form</h1>
      <form>
        <div className="form-group">
          <label>Name</label>
        <input type="text" />
        </div>

        <div className="form-group">
          <label>Email</label>
        <input type="email" />
        </div>

        <div className="form-group">
          <label>Age</label>
        <input type="number" />
        </div>

        <div className="form-group">
          <label>Password</label>
        <input type="password" />
        </div>

        <div className="form-group">
          <label htmlFor="">Address</label>
        <textarea name="" id=""></textarea>
        </div>

      <div className="radio-group">
        <label>Gender</label>
              <input type="radio" name="gender"/>Male
              <input type="radio" name="gender"/>Female

      </div>
        
        <div className="form-group">
          <label>Course</label>
        <select>
          <option>Select Course</option>
          <option>Python</option>
          <option>React</option>
          <option>Flutter</option>
        </select>
        </div>



        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;


