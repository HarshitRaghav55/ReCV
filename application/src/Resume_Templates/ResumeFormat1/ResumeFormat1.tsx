import React from "react";
const ResumeFormat1 = () => {
    function addNewWEField() {

        let newNode = document.createElement('textarea');
        newNode.classNameList.add('form-control');
        newNode.classNameList.add('weField');
        newNode.setAttribute("rows", 3);
        newNode.setAttribute("placeholder", "Enter Here");

        let weOb = document.getElementById("we");
        let weAddButtonOb = document.getElementById("weAddButton");

        weOb.insertBefore(newNode, weAddButtonOb);
    }
    function addNewAQField() {
        let newNode = document.createElement('textarea');
        newNode.classNameList.add('form-control');
        newNode.classNameList.add('aqField');
        newNode.setAttribute("rows", 3);
        newNode.setAttribute("placeholder", "Enter Here");

        let aqOb = document.getElementById("aq");
        let aqAddButtonOb = document.getElementById("aqAddButton");

        aqOb.insertBefore(newNode, aqAddButtonOb);

    }

    function addNewSkField() {

        let newNode = document.createElement('textarea');
        newNode.classNameList.add('form-control');
        newNode.classNameList.add('skField');
        newNode.setAttribute("rows", 3);
        newNode.setAttribute("placeholder", "Enter Here");

        let skOb = document.getElementById("sk");
        let skAddButtonOb = document.getElementById("skAddButton");

        skOb.insertBefore(newNode, skAddButtonOb);
    }
     function addNewAQField() {
                        let newNode = document.createElement('textarea');
                    newNode.classNameList.add('form-control');
                    newNode.classNameList.add('aqField');
                    newNode.setAttribute("rows", 3);
                    newNode.setAttribute("placeholder", "Enter Here");

                    let aqOb = document.getElementById("aq");
                    let aqAddButtonOb = document.getElementById("aqAddButton");

                    aqOb.insertBefore(newNode, aqAddButtonOb);

}

                    function addNewSkField() {

                        let newNode = document.createElement('textarea');
                    newNode.classNameList.add('form-control');
                    newNode.classNameList.add('skField');
                    newNode.setAttribute("rows", 3);
                    newNode.setAttribute("placeholder", "Enter Here");

                    let skOb = document.getElementById("sk");
                    let skAddButtonOb = document.getElementById("skAddButton");

                    skOb.insertBefore(newNode, skAddButtonOb);
}

                    //generating CV
                    function generateCV() {
                        //console.log("generating CV");

                        let nameField = document.getElementById("nameField").value;
                    let nameT1 = document.getElementById("nameT1");

                    nameT1.innerHTML = nameField;

                    //direct

                    document.getElementById('nameT2').innerHTML = nameField;

                    //contact

                    document.getElementById('contactT').innerHTML = document.getElementById("contactField").value;

                    //address
                    document.getElementById('addressT').innerHTML = document.getElementById("addressField").value;
                    document.getElementById('linkedT').innerHTML = document.getElementById("linkedField").value;
                    document.getElementById('gitT').innerHTML = document.getElementById("gitField").value;

                    //Objective
                    document.getElementById('objectiveT').innerHTML = document.getElementById("ObjectiveField").value;

                    //we
                    let wes=document.getElementById('weField').value;
//  let str=''

//  for(let e of wes)
//  {
                        //      console.log(e.value)
                        //      str= str + '<li> ${e.value} </li>'
                        //      console.log(str);
                        //  }

                        document.getElementById('weT').innerHTML = wes;

                    //aq
                    let aqs = document.getElementById('aqField').value;
//  let str1=""

//  for(let e of aqs) {
                        //      str1+='<li> ${e.value} </li>'
                        //  }

                        document.getElementById('aqT').innerHTML = aqs;

                    document.getElementById('skT').innerHTML = document.getElementById('skField').value;

                    //code for setting image
                    let file = document.getElementById('imgField').files[0]

                    console.log(file);

                    let reader = new FileReader()
                    reader.readAsDataURL(file);

                    console.log(reader.result);

                    //set the image to template
                    reader.onloadend = function() {
                        document.getElementById("imgTemplate").src = reader.result;
 };


                    document.getElementById('cv-form').style.display='none';
                    document.getElementById('cv-template').style.display='block';
}

                    //PRINT CV
                    function printCV(){
                        window.print();
}
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
                                <label for="nameField">Your Name</label>
                                <input type="text" id="nameField" placeholder="Enter Here" className="form-control" />
                            </div>


                            <div className="form-group mt-2">
                                <label for="contactField">Contact Info</label>
                                <input type="text" id="contactField" placeholder="Enter Here" className="form-control" />
                            </div>


                            <div className="form-group mt-2">
                                <label for="addressField">Address</label>
                                <textarea type="text" id="addressField" placeholder="Enter Here" className="form-control"></textarea>
                            </div>

                            <div className="form-group mt-3">
                                <label for="">Select Your Photo</label>

                                <input id="imgField" type="file" className="form-control">

                            </div>


                            <p className="text-secondary my-3">Important Links</p>

                            <div className="form-group mt-2">
                                <label for="linkedField">LinkedIn</label>
                                <input type="text" id="linkedField" placeholder="Enter Here" className="form-control">
                            </div>

                            <div className="form-group mt-2">
                                <label for="gitField">Github</label>
                                <input type="text" id="gitField" placeholder="Enter Here" className="form-control" />
                            </div>


                        </div>

                        <div className="col-md-6">
                            {/* <!--SECOND COLUMN--> */}
                            <h3>Professional Information</h3>

                            <div className="form-group mt-2">
                                <label for="">Objective</label>
                                <textarea id="ObjectiveField" type="text" placeholder="Enter Here" className="form-control"></textarea>
                            </div>

                            <div className="form-group mt-2" id="we">
                                <label for="">Work Experience</label>
                                <textarea id="weField" type="text" placeholder="Enter Here" className="form-control"></textarea>
                            </div>

                            <div className="container text-center mt-2 " id="weAddbutton">
                                <button onclick="addNewWEField()" className="btn btn-dark btn-sm">Add</button>
                            </div>

                            <div className="form-group mt-2" id="aq">
                                <label for="">Academic Qualifications</label>
                                <textarea id="aqField" type="text" placeholder="Enter Here" className="form-control"></textarea>
                            </div>

                            <div className="container text-center mt-2" id="aqAddbutton">
                                <button onclick="addNewAQField()" className="btn btn-dark btn-sm">Add</button>
                            </div>

                            <div className="form-group mt-2" id="sk">
                                <label for="">Skills</label>
                                <textarea id="skField" type="text" placeholder="Enter Here" className="form-control"></textarea>
                            </div>

                            <div className="container text-center mt-2" id="skAddbutton">
                                <button onclick="addNewSkField()" className="btn btn-dark btn-sm">Add</button>
                            </div>

                        </div>

                    </div>

                    <div className="container text-center mt-3">
                        <button onclick="generateCV()" className="btn btn-dark btn-lg">Generate Resume</button>
                    </div>
                </div>

                <!--cv-template-->
                <div className="container" id="cv-template" style="background-color: white; border: black; border-style: solid;">

                    <div className="row">
                        <div className="col-md-4 text-center py-5 background">
                            {/* <!--first column--> */}
                            <img src="defaultProfilePicture.jpg" alt="" className="img-fluid my-img" id="imgTemplate" />

                            <div className="container">
                                <p id="nameT1">saksham</p>
                                <p id="contactT">+91-12343545,+91-234235564</p>
                                <p id="addressT">12, sector43, jagriti vihar, saharanpur</p>
                                <hr />

                                <p><a id="linkedT" href="#1">https://www.linkedin.com/home</a></p>
                                <p><a id="gitT" href="#2">https://github.com/</a></p>
                            </div>
                        </div>

                        <div className="col-md-8 py-5" >
                            {/* <!--second column--> */}
                            <h1 id="nameT2" className="text-center" style="font-weight: 980">saksham</h1>


                            <div className="card mt-4">
                                <div className="card-header background">
                                    <h3>Objective</h3>
                                </div>
                                <div className="card-body">
                                    <p id="objectiveT">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur animi ut facere minima sit nobis quo at ullam, modi aliquid corporis dicta. Quidem eveniet, nihil consectetur, dolores reprehenderit provident deleniti quo fugit doloribus repellat est adipisci quae et incidunt, doloremque accusantium beatae placeat! Reprehenderit ratione dignissimos exercitationem ipsa hic.</p>
                                </div>
                            </div>


                            <div className="card mt-4">
                                <div className="card-header background">
                                    <h3>Work Experience</h3>
                                </div>
                                <div className="card-body">
                                    <ul id="weT">
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, doloribus.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, doloribus.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, doloribus.</li>
                                    </ul>
                                </div>
                            </div>



                            <div className="card mt-4">
                                <div className="card-header background">
                                    <h3>Academic Qualification</h3>
                                </div>
                                <div className="card-body">
                                    <ul id="aqT">
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, doloribus.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, doloribus.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, doloribus.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card mt-4">
                                <div className="card-header background">
                                    <h3>Skills</h3>
                                </div>
                                <div className="card-body">
                                    <ul id="skT">
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, doloribus.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, doloribus.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, doloribus.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="container mt-3 text-center">
                                <button onclick="printCV()" className="btn background">
                                    Print CV
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

                
               
        </div>

        </React.Fragment >
    );
}
export default ResumeFormat1;