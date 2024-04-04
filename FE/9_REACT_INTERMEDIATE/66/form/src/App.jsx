import "./App.css";
import { useState } from "react";

function App() {

  const[formData, setFormData] = useState({firstName:"", lastName:"", email:"", country:"India", streetAddress:"", city:"", state:"", postalCode:"", comment:false, candidates:false, offers:false, pushNotification:""});

  //console.log(formData);

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]: type === "checkbox" ? checked : value}))
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the value of form data")
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>

        <label htmlFor="firstName">First Name</label> <br/>
        <input 
        type="text" 
        id="firstName"
        name = "firstName"
        placeholder="Rahul"
        value={formData.firstName}
        onChange={changeHandler}
        className="border-2"
        />

        <br/>

        <label htmlFor="lastName">Last Name</label> <br/>
        <input 
        type="text"
        id="lastName"
        name = "lastName"
        placeholder="Kumar"
        value={formData.lastName}
        onChange={changeHandler}
        className="border-2"
        />

        <br/>

        <label htmlFor="email">Email Address</label> <br/>
        <input 
        type="email"
        id="email"
        name = "email"
        placeholder="rahulkumar89867@gmail.com"
        value={formData.email}
        onChange={changeHandler}
        className="border-2"
        />

        <br/>

        <label htmlFor="country">Country</label> <br/>
        <select 
        id="country"
        name = "country"
        value={formData.country}
        onChange={changeHandler}
        className="border-2"
        >
          <option value = "India">India</option>
          <option value = "USA">USA</option>
          <option value = "SriLanka">SriLanka</option>
          <option value = "Nepal">Nepal</option>
        </select>

        <br/>

        <label htmlFor="streetAddress">Street Address</label> <br/>
        <input 
        type="text"
        id="streetAddress"
        name = "streetAddress"
        placeholder="Rajrajeshwari Enclave phase 4 1B"
        value={formData.streetAddress}
        onChange={changeHandler}
        className="border-2"
        />

        <br/>

        <label htmlFor="city">City</label> <br/>
        <input 
        type="text"
        id="city"
        name = "city"
        placeholder="Kolkata"
        value={formData.city}
        onChange={changeHandler}
        className="border-2"
        />

        <br/>

        <label htmlFor="state">State / Province</label> <br/>
        <input 
        type="text"
        id="state"
        name = "state"
        placeholder="West Bengal"
        value={formData.state}
        onChange={changeHandler}
        className="border-2"
        />

        <br/>

        <label htmlFor="postalCode">ZIP / Postal Code</label> <br/>
        <input 
        type="number"
        id="postalCode"
        name = "postalCode"
        placeholder="700102"
        value={formData.postalCode}
        onChange={changeHandler}
        className="border-2"
        />

        <br/>

        <fieldset>
          <div className="mt-2">By Email</div>
          <div className="mt-2">
            <input
              type="checkbox"
              id = "comment"
              name = "comment"
              className="mr-2"
              checked={formData.comment}
              onChange={changeHandler}
            />
            <label htmlFor="comment">Comments</label>
            <div className="ml-5">
            <p className="text-gray-500">Get notified when someone posts a comment on posting.</p>
            </div>
          </div>

          <div>
            <input
              type="checkbox"
              id = "candidates"
              name = "candidates"
              className="mr-2"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <label htmlFor="candidates">Candidates</label>
            <div className="ml-5">
            <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div>
            <input
              type="checkbox"
              id = "offers"
              name = "offers"
              className="mr-2"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <label htmlFor="offers">Offers</label>
            <div className="ml-5">
            <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>

        </fieldset>

        <fieldset>
        <div className="mt-2">Push Notification</div>
        <p className="text-gray-500">These are delivered via SMS to your mobile phone</p>

        <input type="radio"
        id="pushEverything"
        name="pushNotification"
        value="Everything"
        onChange={changeHandler}
        />

        <label htmlFor="pushEverything"> Everything</label> <br/>

        <input type="radio"
        id="pushEmail"
        name="pushNotification"
        value="Same as Email"
        onChange={changeHandler}
        />

        <label htmlFor="pushEverything"> Same as Email</label> <br/>

        <input type="radio"
        id="pushNothing"
        name="pushNotification"
        value="No push Notification"
        onChange={changeHandler}
        />

        <label htmlFor="pushNothing"> No Push Notification</label>
        </fieldset>

        <button className=" bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>

      </form>
    </div>  
  );
}

export default App;
