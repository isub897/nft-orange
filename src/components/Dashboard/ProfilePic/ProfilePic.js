import React from "react";
import './ProfilePic.css'
import image from './ens.png'

class ProfilePic extends React.Component {

    uploadImage (pic) {
        var formData = new FormData();
        formData.append('photo', pic);
        fetch('http://localhost:3000/upload/', {
            method:'POST',
            body: formData
        })
        .then(response=> response.json())
        .then(data=> console.log(data))
        ;
      }

    componentDidMount() {
        this.uploadImage(image);
    }

    

    render() {
        return (
          <div className="profilepic">
            <img src={image} alt="profile" />
          </div>
        )
      }

}

export default ProfilePic;


{/* <form action="http://localhost:3000/upload" method="POST" encType="multipart/form-data">
                <input 
                    type="file" 
                    name="avatar" 
                    // value="Give it"
                />
                <button>Submit</button>
            </form> */}

// fetch a photograph from the database
// send the users email
// check if this email has a photo attached to it
// if yes, send this image to the front end
// display it to the screen