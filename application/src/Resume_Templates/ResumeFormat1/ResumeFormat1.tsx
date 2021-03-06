import React from "react";
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";
type Props = {
    name: string,
    email: string,
    mobileNumber: number,
    objective: string,
    educationBachelor?: string,
    educationMasters?: string,
    educationHighSchool?: string,
    educationIntermediate?: string,
    internship1?: string,
    internship2?: string,
    internship1Title?: string,
    internship2Title?: string,
    project1?: string,
    project1Title?: string,
    project2?: string,
    project2Title?: string,
    skill1?: string,
    skill2?: string,
    skill3?: string,
    link1?: string,
    link2?: string,
    address?: string
};
const ResumeFormat1: React.FC<Props> = (props: Props) => {
    const printResume = () => {

        const input = document.getElementById('PrintResume');
        html2canvas(input!)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 10, 200, 200);
                pdf.save("download.pdf");
            });
    }

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
                            <p id="nameT1">{props.name}</p>
                            <p id="contactT">{props.mobileNumber}</p>
                            <p id="addressT">{props.address}</p>
                            <hr />

                            <p><a id="linkedT" href="#1">{props.link1}</a></p>
                            <p><a id="gitT" href="#2">{props.link2}</a></p>
                        </div>
                    </div>

                    <div className="col-md-8 py-5" >
                        {/* <!--second column--> */}
                        <h1 id="nameT2" className="text-center" >{props.name}</h1>
                        {/* style="font-weight: 980" */}

                        <div className="card mt-4">
                            <div className="card-header background">
                                <h3>Objective</h3>
                            </div>
                            <div className="card-body">
                                <p id="objectiveT">{props.objective}</p>
                            </div>
                        </div>

                        <div className="card mt-4">
                            <div className="card-header background">
                                <h3>Projects</h3>
                            </div>
                            <div className="card-body">
                                <ul id="weT">
                                    <li>
                                        {props.project1Title}
                                        <ul id="weT">
                                            <li>
                                                {props.project1}
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        {props.project2Title}
                                        <ul id="weT">
                                            <li>
                                                {props.project2}
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-header background">
                                <h3>Internship Experience</h3>
                            </div>
                            <div className="card-body">
                                <ul id="weT">
                                    <li>{props.internship1Title}</li>
                                    <ul id="weT">
                                        <li> {props.internship1} </li>
                                    </ul>
                                    <li>{props.internship2Title}</li>
                                    <ul>
                                        <li>{props.internship2}</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>



                        <div className="card mt-4">
                            <div className="card-header background">
                                <h3>Academic Qualification</h3>
                            </div>
                            <div className="card-body">
                                <ul id="aqT">
                                    <li>{props.educationMasters}</li>
                                    <li>{props.educationBachelor}</li>
                                    <li>{props.educationIntermediate}</li>
                                    <li>{props.educationHighSchool}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card mt-4">
                            <div className="card-header background">
                                <h3>Skills</h3>
                            </div>
                            <div className="card-body">
                                <ul id="skT">
                                    <li> {props.skill1} </li>
                                    <li> {props.skill2} </li>
                                    <li> {props.skill3} </li>
                                </ul>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
            <button className="btn btn-primary" onClick={printResume}>Export To PDF</button>
        </React.Fragment>
    );
}
export default ResumeFormat1;