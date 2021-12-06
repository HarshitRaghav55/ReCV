import React from "react"
const CV1 = () =>{
    return(
        <React.Fragment>

{/* <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    
    <meta name="description" content="CVstrap is another Free minimal CV HTML theme by EvenFly built with Bootstrap 3.3.0. and released under CC-3.0 license." />
    <meta name="keywords" content="curriculum vitae, cv, one page, onepage, bootstrap, responsive, resume, timeline, free cv" />
    <meta name="author" content="Mamun Srizon" />

  
    <title>CV</title>

    <link rel="icon" href="img/favicon.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="img/apple-touch-icon-ipad-retina.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-iphone-retina.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-ipad.png" />
    <link rel="apple-touch-icon" sizes="57x57" href="img/apple-touch-icon-iphone.png" />

  
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/responsive.css" />

    <link href='//fonts.googleapis.com/css?family=Kristi|Alegreya+Sans:300' rel='stylesheet' type='text/css'/>
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"/>


    
        <script src="https://cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://cdn.jsdelivr.net/respond/1.4.2/respond.min.js"></script>
  
</head> */}


    <div className="container">
        <div id="header" className="row">
            <div className="col-sm-2">
                <img className="propic" src="img/bappy.jpg" alt="" />
            </div>
            

            <div className="col-sm-10">
                <div className="cv-title">
                    <div className="row">
                        <div className="col-sm-7">
                            <h1>Towkir A. Bappy</h1>
                        </div>
                        <div className="col-sm-5 text-right dl-share">
                            
                            <a className="a2a_dd btn btn-default" href=""><span className="fa fa-share "></span> Share</a>
                            <script type="text/javascript">
                                var a2a_config = a2a_config || {};
                                a2a_config.linkname = "Minimal CV by EvenFly";
                                a2a_config.num_services = 6;
                                a2a_config.prioritize = ["facebook", "twitter", "google_plus", "linkedin", "pinterest", "email"];
                            </script>
                            <script type="text/javascript" src="//static.addtoany.com/menu/page.js"></script>
                            

                            <a className="btn btn-success" href=""><span className="fa fa-download"></span> Download</a>
                        </div>
                    </div>
                    <h2>UI/UX Designer</h2>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <ul className="list-unstyled">
                            <li><a href=""><span className="social fa fa-home"></span>EvenFly.com</a>
                            </li>
                            <li><a href=""><span className="social fa fa-skype"></span>+88 0123 45678</a>
                            </li>
                            <li><a href="mailto:support@evenfly.com"><span className="social fa fa-envelope-o"></span>me@mail.com</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-sm-4">
                        <ul className="list-unstyled">
                            <li><a href=""><span className="social fa fa-facebook"></span>Facebook</a>
                            </li>
                            <li><a href=""><span className="social fa fa-twitter"></span>Twitter</a>
                            </li>
                            <li><a href=""><span className="social fa fa-linkedin"></span>Linkedin</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-sm-4">
                        <ul className="list-unstyled">
                            <li><a href=""><span className="social fa fa-behance"></span>Behance</a>
                            </li>
                            <li><a href=""><span className="social fa fa-dribbble"></span>Dribbble</a>
                            </li>
                            <li><a href=""><span className="social fa fa-instagram"></span>Instagram</a>
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
                    <p>Hi, I am Bappy from Bangladesh.Adipiscing elit. Nullam dapibus vehicula condimentum. Curabitur elit enim, accumsan vitae tristique ut, mollis at orci. Fusce cursus interdum neque nec aliquam. Proin turpis leo, laoreet non ultricies non, dictum nec nulla. Duis vitae nisi eu odio Adipiscing elit. Nullam dapibus vehicula condimentum. Curabitur elit enim, accumsan.</p>

                    <p>Consectetur adipisicing elit. Hic labore, unde, ratione, itaque ducimus provident error similique qui, recusandae nam dignissimos autem. Sequi quas quis non, odit assumenda similique neque.</p>

                    <p className="signature">TowkirAhmed</p>
                </div>
            </div>

            <hr />

            <div id="education" className="row mobmid">
                <div className="col-sm-1">
                    <span className="secicon fa fa-graduation-cap"></span>
                </div>

                <div className="col-sm-11">
                    <h3>Education &amp; Certification</h3>

                    <div className="row">
                        <div className="col-md-9">
                            <h4>MSc in Design &amp; Fine Art</h4>
                            <p className="sub"><a href="">Ideal Institute of Science and Technology</a>
                            </p>
                            <p>Studying all aspect of Graphic Design Including Advertising Design, Branding, Copy Exhibition Design, Ilustration, Information Design, Packaging Design and Website Design</p>
                        </div>

                        <div className="year col-md-3">
                            <p>2009-2011</p>
                        </div>
                    </div>
                    
                    <hr />
                    
                    <div className="row">
                        <div className="col-md-9">
                            <h4>BSc in Graphic Design</h4>
                            <p className="sub"><a href="">Ideal Institute of Science and Technology</a>
                            </p>
                            <p>Studying all aspect of Graphic Design Including Advertising Design, Branding, Copy Exhibition Design, Ilustration, Information Design, Packaging Design and Website Design</p>
                        </div>

                        <div className="year col-md-3">
                            <p>2006-2009</p>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-md-9">
                            <h4>Diploma in Graphic Design</h4>
                            <p className="sub"><a href="">Ideal Institute of Science and Technology</a>
                            </p>
                            <p>Studying all aspect of Graphic Design Including Advertising Design, Branding, Copy Exhibition Design, Ilustration, Information Design, Packaging Design and Website Design</p>
                        </div>

                        <div className="year col-md-3">
                            <p>2003-2006</p>
                        </div>
                    </div>
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
                            <h4>Lead Graphic Designer</h4>
                            <p className="sub"><a href="">Lifeview Media Ltd.</a>
                            </p>
                            <p>Adipiscing elit. Nullam dapibus vehicula condimentum. Curabitur elit enim, accumsan vitae tristique ut, mollis at orci. Fusce cursus interdum neque nec aliquam. Proin turpis leo, laoreet non ultricies non, dictum nec nulla.</p>
                        </div>

                        <div className="year col-md-3">
                            <p>2008 - present</p>
                        </div>
                    </div>
                    
                    <hr />
                    
                    <div className="row">
                        <div className="col-md-9">
                            <h4>Sr. Graphic Designer</h4>
                            <p className="sub"><a href="">Softech solution ltd.</a>
                            </p>
                            <p>Studying all aspect of Graphic Design Including Advertising Design, Branding, Copy Exhibition Design, Ilustration, Information Design, Packaging Design and Website Design</p>
                        </div>

                        <div className="year col-md-3">
                            <p>2006-2008</p>
                        </div>
                    </div>
                    
                    <hr />
                    
                       <div className="row">
                        <div className="col-md-9">
                            <h4>Jr. Graphic Designer</h4>
                            <p className="sub"><a href="">TwinTwin Design Solution</a>
                            </p>
                            <p>Studying all aspect of Graphic Design Including Advertising Design, Branding, Copy Exhibition Design, Ilustration, Information Design, Packaging Design and Website Design</p>
                        </div>

                        <div className="year col-md-3">
                            <p>2003-2006</p>
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

                <div className="col-sm-11 col-md-10">
                    <h3 className="mobmid">Technical skills </h3>

                    <p>Photoshop</p>
                    <div className="progress">
                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} style= {{width: "65%"}}>
                            <span className="sr-only">65% Complete (success)</span>
                        </div>
                    </div>


                    <p>Illustrator</p>
                    <div className="progress">
                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: "85%"}}>
                            <span className="sr-only">85% Complete</span>
                        </div>
                    </div>

                    <p>InDesign</p>
                    <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style= {{width: "60%" }}>
                            <span className="sr-only">60% Complete (warning)</span>
                        </div>
                    </div>

                    <p>Flash</p>
                    <div className="progress">
                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style = {{width: "30%" }}>
                            <span className="sr-only">30% Complete (danger)</span>
                        
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
                        <h4>Best Designer 2012</h4>
                        <p className="sub"><a href="">Life View Media Ltd.</a></p>
                        <p>Studying all aspect of Graphic Design Including Advertising Design, Branding, Copy Exhibition Design, Ilustration.</p>
                    </div>
                  

                    <div className="award">
                        <h4>Best Designer 2011</h4>
                        <p className="sub"><a href="">Alexa Design Solution</a></p>
                        <p>Studying all aspect of Graphic Design Including Advertising Design, Branding, Copy Exhibition Design, Ilustration, Information Design, Packaging Design and Website Design</p>
                    </div>
                </div>

            </div>
            
            <hr />

            <div className="row ">
                <div className="col-sm-1 col-md-2 mobmid">
                    <span className="secicon fa fa-quote-left"></span>
                </div>

                <div className="col-sm-11 col-md-10 testimonials">
                    <h3 className="mobmid">Testimonials </h3>

                    <div className="row">
                        <blockquote>
                            <p>Sit amet, consectetur adipisicing elit. Fuga quidem ipsum maiores necessitatibus sint, porro temporibus labore, amet officia unde libero eligendi? Porro dolorum itaque, facere harum amet, rem libero.</p>
                        </blockquote>
                        <img src="img/mushfiq.jpg" alt="" />
                        <h4>Mushfiqul Islam</h4>
                        <p>The UX Votch</p>
                    </div>

                    <div className="row">
                        <blockquote>
                            <p>Consectetur adipisicing elit. Fuga quidem ipsum maiores necessitatibus sint, porro temporibus labore, unde libero eligendi? Porro dolorum itaque, facere harum amet, rem libero.</p>
                        </blockquote>
                        <img src="img/siblu.jpg" alt="" />
                        <h4>E.A. Siblu</h4>
                        <p>The Jatir Vobisshot</p>
                    </div>

                    <div className="row">
                        <blockquote>
                            <p>Fuga quidem ipsum maiores necessitatibus sint, porro temporibus labore, amet officia unde libero eligendi? Porro dolorum itaque, facere harum amet, rem libero.</p>
                        </blockquote>
                        <img src="img/nasir.jpg" alt="" />
                        <h4>Nasir Uddin</h4>
                        <p>The Cute Huzur</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   
    

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <script src="js/jquery.nicescroll.min.js"></script>
    <script src="js/evenfly.js"></script>

        </React.Fragment>
    );
}
export default CV1;