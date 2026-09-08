import { useState } from "react";
import "./index.css";


function App(){


  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState("");
  const [password,setPassword] = useState("");
  const [gender,setGender] = useState("");
  const [course,setCourse] = useState("");
  const [skills,setSkills] = useState([]);

  function handleskills(e) {
    const skill = e.target.value;
    const checked = e.target.checked;

    if(checked){
      setSkills([...skills,skill]);
    }else{
      setSkills(skills.filter((item) => item !== skill));
    }
  }

  function handlesubmit(e) {
    e.preventDefault();
    console.log(e);
    
    console.log("Name: ",name);
    console.log("Email: ",email);
    console.log("Age: ",age);
    console.log("Password: ",password);
    console.log("Gender: ",gender);
    console.log("Course: ",course);
    console.log("Skills: ",skills);
  }

  return (
    
    <div className="container">
      <h1>Registration form</h1>
      <form onSubmit={handlesubmit}>
        <div className="form-group">
          <label>Name</label>
        <input type="text" value={name} onChange={(e) => {
          console.log(e.target);
    console.log(e.target.value);
     setName(e.target.value)} }
     />
        <p>Your name is: {name}</p>
        </div>

        <button type="button" onClick={() => setName("Test")}>
  Change Name
</button>

        <div className="form-group">
          <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Age</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
        </div>

        <div className="form-group">
          <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="">Address</label>
        <textarea name="" id=""></textarea>
        </div>

      <div className="radio-group">
        <label>Gender</label>
              <input type="radio" name="gender" value="Male" checked={gender === "Male"} 
              onChange={(e) => setGender(e.target.value)} />Male

              <input type="radio" name="gender" value="Female" checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)} />Female

      </div>
        
        <div className="form-group">
          <label>Course</label>
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="">Select Course</option>
          <option value="python">Python</option>
          <option value="react">React</option>
          <option value="flutter">Flutter</option>
        </select>
        </div>

        <div className="form-group">
          <label>Skills</label>
          <div>
            <label>
              <input type="checkbox" value="Python" checked={skills.includes("Python")} onChange={handleskills} />Python
            </label>

            <label>
              <input type="checkbox" value="React" checked={skills.includes("React")} onChange={handleskills}/>React
            </label>

            <label>
              <input type="checkbox" value="Flutter" checked={skills.includes("Flutter")} onChange={handleskills}/>Flutter
            </label>
          </div>
          <p>Selected skills: {skills.join(", ")}</p>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;


