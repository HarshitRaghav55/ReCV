import React from "react";
const Generate = () => {


    return (
        <React.Fragment>



            <div className = "Format" style={{ backgroundColor: 'aquamarine' }}>

                <div className="container" id="cv-form">
                    <h1 className="text-center">Resume Maker</h1>
                    <p className="text-center"><i>By saksham</i></p>

                    <div className="row">

                        <div className="col-md-6">

                            <h3>Personal Information</h3>

                            <div className="form-group">
                                <label >Your Name</label>
                                <input type="text" id="nameField" placeholder="Enter Here" className="form-control" />
                            </div>


                            <div className="form-group mt-2">
                                <label >Contact Info</label>
                                <input type="text" id="contactField" placeholder="Enter Here" className="form-control" />
                            </div>


                            <div className="form-group mt-2">
                                <label>Address</label>
                                <input type="text" id="addressField" placeholder="Enter Here" className="form-control" />                            </div>

                            <div className="form-group mt-3">
                                <label>Select Your Photo</label>

                                <input id="imgField" type="file" className="form-control" />

                            </div>


                            <p className="text-secondary my-3">Important Links</p>

                            <div className="form-group mt-2">
                                <label >LinkedIn</label >
                                <input type="text" id="linkedField" placeholder="Enter Here" className="form-control" />
                            </div>

                            <div className="form-group mt-2">
                                <label >Github</label>
                                <input type="text" id="gitField" placeholder="Enter Here" className="form-control" />
                            </div>


                        </div>

                        <div className="col-md-6">
                            {/* <!--SECOND COLUMN--> */}
                            <h3>Professional Information</h3>

                            <div className="form-group mt-2">
                                <label >Objective</label>
                                <input id="ObjectiveField" type="text" placeholder="Enter Here" className="form-control" />
                            </div>

                            <div className="form-group mt-2" id="we">
                                <label >Work Experience</label>
                                <input id="weField" type="text" placeholder="Enter Here" className="form-control"></input>
                            </div>

                            <div className="container text-center mt-2 " id="weAddbutton">
                                <button  className="btn btn-dark btn-sm">Add</button>
                            </div>

                            <div className="form-group mt-2" id="aq">
                            <label>Academic Qualifications</label>
                                <input id="aqField" type="text" placeholder="Enter Here" className="form-control"></input>
                            </div>

                            <div className="container text-center mt-2" id="aqAddbutton">
                                <button className="btn btn-dark btn-sm">Add</button>
                            </div>

                            <div className="form-group mt-2" id="sk">
                                <label>Skills</label>
                                <input id="skField" type="text" placeholder="Enter Here" className="form-control"></input>
                            </div>

                            <div className="container text-center mt-2" id="skAddbutton">
                                <button className="btn btn-dark btn-sm">Add</button>
                            </div>

                        </div>

                    </div>

                    <div className="container text-center mt-3">
                        <button className="btn btn-dark btn-lg">Generate Resume</button>
                    </div>
                </div>

               

                
               
        </div>

        </React.Fragment >
    );
}
export default Generate;