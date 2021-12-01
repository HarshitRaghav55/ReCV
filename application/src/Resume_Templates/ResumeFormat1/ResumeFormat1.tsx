import React from "react";
const ResumeFormat1 = () => {
    return (
        <React.Fragment>
            {/* <!--cv-template--> */}
            <div className="container" id="cv-template" >
                {/* style="background-color: white; border: black; border-style: solid;" */}

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
                        <h1 id="nameT2" className="text-center" >saksham</h1>
{/* style="font-weight: 980" */}

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
                            <button className="btn background">
                                Print CV
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </React.Fragment>
    );
}
export default ResumeFormat1;