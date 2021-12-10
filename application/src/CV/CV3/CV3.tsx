import React from "react";
import "./style.css";
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";
type Props = {
    name: string,
    email: string,
    mobileNumber: number,
    educationBachelor?: string,
    achievement?: string,
    skill1?: string,
    skill2?: string,
    skill3?: string,
    skill4?: string,
    skill1Level?: number,
    skill2Level?: number,
    skill3Level?: number,
    skill4Level?: number,
    educationBachelor_date?: number,
    educationBachelor_University?: string,
    educationMasters?: string,
    educationMasters_date?: number,
    educationMasters_University?: string,
    education_HighSchool?: string,

    education_HighSchool_date?: number,
    educationBachelorAbout?: string,
    education_Intermediate_Branch?: string,
    education_Intermediate_date?: number,
    education_Intermediate_School?: string,
    currentWorkPost?: string,
    personalStatement?: string,
    experience1?: string,
    experience2?: string,
    experience3?: string,

    experience1Start?: number,
    experience2Start?: number,
    experience3Start?: number,

    experience1End?: number,
    experience2End?: number,
    experience3End?: number,

    experience1Post?: string,
    experience2Post?: string,
    experience3Post?: string,
    educationMastersAbout?: string,
    experience1Company?: string,
    experience2Company?: string,
    experience3Company?: string,
    facebook?: string,
    linkedIn?: string,
    twitter?: string,
    github?: string,
    award1?: string,
    award3?: string,
    award2?: string,
    award1Title?: string,
    award3Title?: string,
    award2Title?: string,
    award1Company?: string,
    award3Company?: string,
    award2Company?: string,
}
const CV3: React.FC<Props> = (props: Props) => {
    const printCV = () => {

        const input = document.getElementById('printCv');
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




            <div className="container">
                <div id="printCv">
                    <div id="header" className="row">
                        <div className="col-sm-2">
                            <img className="propic" src="img/bappy.jpg" alt="" />
                        </div>


                        <div className="col-sm-10">
                            <div className="cv-title">
                                <div className="row">
                                    <div className="col-sm-7">
                                        <h1>{props.name}</h1>
                                    </div>
                                    <div className="col-sm-5 text-right dl-share">


                                        <script type="text/javascript">
                                            var a2a_config = a2a_config || ;
                                            a2a_config.linkname = "Minimal CV by EvenFly";
                                            a2a_config.num_services = 6;
                                            a2a_config.prioritize = ["facebook", "twitter", "google_plus", "linkedin", "pinterest", "email"];
                                        </script>
                                        <script type="text/javascript" src="//static.addtoany.com/menu/page.js"></script>



                                    </div>
                                </div>
                                <h2>{props.currentWorkPost}</h2>
                            </div>

                            <div className="row">
                                <div className="col-sm-4">
                                    <ul className="list-unstyled">

                                        <li><a href=""><span className="social fa fa-skype"></span>{props.mobileNumber}</a>
                                        </li>
                                        <li><a href="mailto:support@evenfly.com"><span className="social fa fa-envelope-o"></span>{props.email}</a>
                                        </li>
                                        <li><a href="mailto:support@evenfly.com"><span className="social fa fa-envelope-o"></span>{props.github}</a>
                                        </li>

                                    </ul>
                                </div>

                                <div className="col-sm-4">
                                    <ul className="list-unstyled">
                                        <li><a href=""><span className="social fa fa-facebook"></span>{props.facebook}</a>
                                        </li>
                                        <li><a href=""><span className="social fa fa-twitter"></span>{props.twitter}</a>
                                        </li>
                                        <li><a href=""><span className="social fa fa-linkedin"></span>{props.linkedIn}</a>
                                        </li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>

                    <hr className="firsthr" />


                    <div className="col-md-8 mainleft">
                        <div id="statement" className="row mobmid">
                            <div className="col-sm-1">
                                <span className="secicon fa fa-user"></span>
                            </div>

                            <div className="col-sm-11">
                                <h3>Personal statement </h3>
                                <p> {props.personalStatement} </p>




                            </div>
                        </div>

                        <hr />

                        <div id="education" className="row mobmid">
                            <div className="col-sm-1">
                                <span className="secicon fa fa-graduation-cap"></span>
                            </div>

                            <div className="col-sm-11">
                                <h3>Education</h3>

                                <div className="row">
                                    <div className="col-md-9">
                                        <h4>{props.educationMasters}</h4>
                                        <p className="sub"><a href="">{props.educationMasters_University}</a>
                                        </p>
                                        <p>{props.educationMastersAbout}</p>
                                    </div>

                                    <div className="year col-md-3">
                                        <p>{props.educationMasters_date}</p>
                                    </div>
                                </div>

                                <hr />

                                <div className="row">
                                    <div className="col-md-9">
                                        <h4>{props.educationBachelor}</h4>
                                        <p className="sub"><a href="">{props.educationBachelor_University}</a>
                                        </p>
                                        <p>{props.educationBachelorAbout}</p>
                                    </div>

                                    <div className="year col-md-3">
                                        <p>{props.educationBachelor_date}</p>
                                    </div>
                                </div>

                                <hr />


                            </div>
                        </div>

                        <hr />


                        <div id="job" className="row mobmid">
                            <div className="col-sm-1">
                                <span className="secicon fa fa-briefcase"></span>
                            </div>

                            <div className="col-sm-11">
                                <h3>Job Experiences</h3>

                                <div className="row">
                                    <div className="col-md-9">
                                        <h4> {props.experience1Post}</h4>
                                        <p className="sub"><a href="">{props.experience1Company}</a>
                                        </p>
                                        <p>{props.experience1}</p>
                                    </div>

                                    <div className="year col-md-3">
                                        <p>{props.experience1Start} - {props.experience1End}</p>
                                    </div>
                                </div>

                                <hr />

                                <div className="row">
                                    <div className="col-md-9">
                                        <h4>{props.experience2Post}</h4>
                                        <p className="sub"><a href="">{props.experience2Post}</a>
                                        </p>
                                        <p>{props.experience2}</p>
                                    </div>

                                    <div className="year col-md-3">
                                        <p>{props.experience2Start}-{props.experience2End}</p>
                                    </div>
                                </div>

                                <hr />

                                <div className="row">
                                    <div className="col-md-9">
                                        <h4>{props.experience3Post}</h4>
                                        <p className="sub"><a href="">{props.experience3Company}</a>
                                        </p>
                                        <p>{props.experience3}</p>
                                    </div>

                                    <div className="year col-md-3">
                                        <p>{props.experience3Start}-{props.experience3End}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mainright">
                        <div className="row">
                            <div className="col-sm-1 col-md-2 mobmid">
                                <span className="secicon fa fa-magic"></span>
                            </div>
                            <hr />

                            <div className="col-sm-11 col-md-10">
                                <h3 className="mobmid">Technical skills </h3>

                                <p>{props.skill1} </p>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={props.skill1Level} aria-valuemin={0} aria-valuemax={100} style={{ width: "65%" }}>
                                        <span className="sr-only">{props.skill1Level}%  </span>
                                    </div>
                                </div>


                                <p>{props.skill2}</p>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={props.skill2Level} aria-valuemin={0} aria-valuemax={100} style={{ width: "85%" }}>
                                        <span className="sr-only">{props.skill2Level}%</span>
                                    </div>
                                </div>

                                <p>{props.skill3}</p>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={props.skill3Level} aria-valuemin={0} aria-valuemax={100} style={{ width: "60%" }}>
                                        <span className="sr-only">{props.skill3Level}% </span>
                                    </div>
                                </div>

                                <p>{props.skill4}</p>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={props.skill4Level} aria-valuemin={0} aria-valuemax={100} style={{ width: "30%" }}>
                                        <span className="sr-only">{props.skill4Level} </span>

                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className="row mobmid">
                                <div className="col-sm-1 col-md-2">
                                    <span className="secicon fa fa-trophy"></span>
                                </div>

                                <div className="col-sm-11 col-md-10 ">
                                    <h3>Awards</h3>

                                    <div className="award">
                                        <h4>{props.award1Title}</h4>
                                        <p className="sub"><a href="">{props.award1Company}</a></p>
                                        <p>{props.award1}</p>
                                    </div>


                                    <div className="award">
                                        <h4>{props.award2Title}</h4>
                                        <p className="sub"><a href="">{props.award2Company}</a></p>
                                        <p>{props.award2}</p>
                                    </div>
                                </div>

                            </div>

                            <hr />

                            <div className="row ">
                                <div className="col-sm-1 col-md-2 mobmid">
                                    <span className="secicon fa fa-quote-left"></span>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" onClick={printCV}>Export To PDF</button>



            <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
            <script src="js/jquery.nicescroll.min.js"></script>
            <script src="js/evenfly.js"></script>

        </React.Fragment>
    );
}
export default CV3;