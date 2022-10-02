import React, { useState } from 'react'
import './Form.css';
import axios from 'axios';
import spring from '../../images/spring.jpeg';

    const Form= () => {

       const [state, update]= useState ([])


      const handleSubmit= (e) =>
  {
    e.preventDefault();
    const title=e.target.title.value;
    const location=e.target.location.value;
    const description=e.target.description.value;
    const addImage=e.target.description.value; 
    axios.post("http://localhost:3001/api/addData", {title, location, description, addImage}) //post request
    //console.log("title: "+title, "\n", "location: "+location,"\n", "Description: "+description );
    //  axios.get('http://localhost:3001/api/addData')
   

    // const [posts, setPosts]= useState([])
    //  useEffect(()=> {
    //   axios.get('http://localhost:3001/')
    //   .then (res=> {
    //        console.log(res)
    //        setPosts(res.data)
    //    })
    //  }, [])




     axios.get('http://localhost:3001/api/addData')
     .then((res) => {
        update(res.data)
       console.log(res.data);
      
        });



        
  
  }

    return (
      <> 
        <form className='form' onSubmit={handleSubmit}>
          <h3  style={{color:'brown', textAlign:'center', fontSize:'30px', padding:'25px'}}> Add you memory</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Title" required/>
        </div>
        <div className="form-group">
          <label>Location</label>
          <input type="text" name="location" className="form-control" id="exampleInput" placeholder="Location" required/>
        </div>
        
        <div className="form-group">
          <label >Description</label>
          <input type="textarea" name="description" className="form-control" id="exampleInput" placeholder="Describe this memory"  style={{height:'90px', padding:'0'}} required/>
        </div>

        <div className="form-group">
          <label>Add your image</label>
          <input type="file" name="addImage" className="form-control" id="exampleInput" placeholder="Your image"  style={{height:'35px'}} required/>
        </div>
        
        <button className="btn btn-primary">Submit</button>
        </form>

        


        {/* <div>
          
          {JSON.stringify(state)}
        </div> */}





        {/* <div className="card " style={{width: '18rem', height:'24rem'}}>
          <div className='card-body'>
            <h5 className='card-title' style={{fontSize:'24px'}}>Title</h5>
            <img src={spring} style={{margin:'0', width:'250px',height:'180px',justifyContent:'center'}} />
            <p className='card-text py-3'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className='card-link'>LOCATION</a>
          
          </div>
        </div> */}

       
        {state.length>0 && state.map((element) => <div className="card " key={element.id} style={{width: '18rem', height:'24rem'}}>
          <div  className='card-body'>
            <h5 className='card-title' name="title" style={{fontSize:'24px'}}>{element.title}</h5>
            <img src={spring} style={{margin:'0', width:'250px',height:'180px',justifyContent:'center'}} />
            <p className='card-text py-3' name="description">{element.description}</p>
              <a href="#" className='card-link' name="location" >{element.location}</a>
             
          </div> </div>)}
        
        

  
    </>




       

      );
};
export default Form;