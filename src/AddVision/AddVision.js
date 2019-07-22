import React from 'react';
import DemoNav from '../DemoNav/DemoNav';
import './add-vision.css'


class AddVision extends React.Component {
    render() {
        return (
            <>
            <DemoNav/>
            <header>
              <h1>Add Vision</h1>
            </header>
             <section>
               <form id="add-vision">
                <div class="form-section">
                 <label for="upload-image">Upload image</label>
                 <input type="file" name="pic" accept="image/*"/>
              </div>
              <div class="form-section">
                <label for="image-category">Category</label>
                <select>
                  <option value="" selected>Select type</option>
                  <option value="paint">Paint color</option>
                  <option value="flooring">Flooring</option>
                  <option value="Appliances">Applicances</option>
                  <option value="cabinets">Cabinets</option>
                   <option value="lighting">Lighting</option>
                    <option value="furniture">Furniture</option>
                    <option value="counters">Counters</option>
                     <option value="misc">Misc</option>
                </select>
                
                 <label for="room-selection">Room</label>
                <select>
                  <option value="" selected>Select Room</option>
                  <option value="living Room">Living Room</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="bedrooms">Bedrooms</option>
                  <option value="bathrooms">Bathrooms</option>
                   <option value="office">Office</option>
                    <option value="bonus-room">Bonus Room</option>
                    <option value="mud-laundry">Mud & Laundry</option>
                     <option value="Basement">Basement</option>
                </select>
                <label for="image-note">Note</label>
                <textarea name="image-note" rows="8"></textarea>
                <label for="image-link">Link</label>
                 <input type="url" name="image-link"/>
              </div>
             
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </form>
          </section>
        </>
        )
    }
}

export default AddVision;