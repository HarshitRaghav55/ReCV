import React from "react";
import "../CV1/CV2.css";
const CV2 = () => {
    return (
        <React.Fragment>
            <div className="bg--light-gray cell small-8">
            <div className="paper cv">
                
                <div className="cv__sidebar">
                    <img className="thumbnail sidebar__img" src="logo.png"
                         alt="profile." />
                    <h1 id="cv__name" className="cv__title sidebar__name">Saksham Gupta</h1>
                    <h2 id="cv__job" className="cv__title sidebar__job">Full Stack Developer</h2>
                    <hr />
                    <dl className="sidebar__info">
                        <dd className="cv__info">
                            <i className="fas fa-at"></i>
                            <span id="cv__email">sa123@gmail.com</span>
                            <div className="btn-block">
                                <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                <button className="icon"><i className="fas fa-trash"></i></button>
                            </div>
                        </dd>
                        <dd className="cv__info">
                            <i className="fas fa-phone"></i>
                            <span id="cv__phone">00213777850224 </span>
                            <div className="btn-block">
                                <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                <button className="icon"><i className="fas fa-trash"></i></button>
                            </div>
                        </dd>
                        
                        <dd id="cv__social-media">
                            <div className="cv__info">
                                <i className="fab fa-github"></i> sakshamgupta1802
                                <div className="btn-block">
                                    <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                    <button className="icon"><i className="fas fa-trash"></i></button>
                                </div>
                            </div>
                            
                            <div className="cv__info">
                                <i className="fab fa-linkedin-in"></i> Saksham
                                <div className="btn-block">
                                    <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                    <button className="icon"><i className="fas fa-trash"></i></button>
                                </div>
                            </div>
                        </dd>

                        
                        <dt className="sidebar__title clearfix"><i className="fas fa-wrench"></i> Skills</dt>
                        <dd id="cv__skills">
                            <div className="cv__info">
                                <span>CSS  </span>
                                <div className="btn-block">
                                    <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                    <button className="icon"><i className="fas fa-trash"></i></button>
                                </div>
                                <progress className="secondary float-right" max="100" value="90"> <button className="icon"><i className="fas fa-trash"></i></button></progress>
                            </div>
                            <div className="cv__info">
                                <span>Bootstrap</span>
                                <div className="btn-block">
                                    <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                    <button className="icon"><i className="fas fa-trash"></i></button>
                                </div>
                                <progress className="secondary float-right" max="100" value="85"></progress>
                            </div>
                            <div className="cv__info">
                                <span>Foundation</span>
                                <div className="btn-block">
                                    <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                    <button className="icon"><i className="fas fa-trash"></i></button>
                                </div>
                                <progress className="secondary float-right" max="100" value="85"></progress>
                            </div>
                            <div className="cv__info">
                                <span>PHP</span>
                                <div className="btn-block">
                                    <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                    <button className="icon"><i className="fas fa-trash"></i></button>
                                </div>
                                <progress className="secondary float-right" max="100" value="80"></progress>
                            </div>
                            <div className="cv__info">
                                <span>Symfony</span>
                                <div className="btn-block">
                                    <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                    <button className="icon"><i className="fas fa-trash"></i></button>
                                </div>
                                <progress className="secondary float-right" max="100" value="80"></progress>
                            </div>
                            <div className="cv__info">
                                <span>Python</span>
                                <div className="btn-block">
                                    <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                    <button className="icon"><i className="fas fa-trash"></i></button>
                                </div>
                                <progress className="secondary float-right" max="100" value="80"></progress>
                            </div>
                        </dd>

                        
                        <dt className="sidebar__title"><i className="fas fa-language"></i> Languages</dt>
                        <dd id="cv__languages">
                            <div className="cv__info">
                                English
                                <div className="btn-block">
                                    <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                    <button className="icon"><i className="fas fa-trash"></i></button>
                                </div>
                            </div>
                            <div className="cv__info">
                                French
                                <div className="btn-block">
                                    <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                    <button className="icon"><i className="fas fa-trash"></i></button>
                                </div>
                            </div>
                            <div className="cv__info">
                                Hindi
                                <div className="btn-block">
                                    <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                    <button className="icon"><i className="fas fa-trash"></i></button>
                                </div>
                            </div>
                        </dd>

                        
                        <dt className="sidebar__title"><i className="fas fa-plus"></i> Interests</dt>
                        <dd id="cv__interests">
                            <div className="cv__info">
                                Film and Series
                                <div className="btn-block">
                                    <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                    <button className="icon"><i className="fas fa-trash"></i></button>
                                </div>
                            </div>
                            <div className="cv__info">
                                Drawing
                                <div className="btn-block">
                                    <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                    <button className="icon"><i className="fas fa-trash"></i></button>
                                </div>
                            </div>
                            <div className="cv__info">
                                Cooking
                                <div className="btn-block">
                                    <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                    <button className="icon"><i className="fas fa-trash"></i></button>
                                </div>
                            </div>
                        </dd>
                    </dl>
                </div>

                
                <div className="cv__main">

                    
                    <h1 className="main__title"><i className="fas fa-pencil-alt"></i> Resume</h1>
                    <div className="cv__info" id="cv__resume ">

                        <p>Versatile, motivated and passionate web developer of new technologies.</p>
                        <p>Having gained experience with multiple technologies and completing several development
                            projects, whether in business or freelance.</p>
                        <p>Are actively seeking a Web Developer position within a dynamic team and with technical and
                            professional development opportunities.</p>

                    </div>

                    
                    <div id="cv__experiences">
                        <h1 className="main__title"><i className="fas fa-briefcase"></i> Experiences</h1>

                        <div className="cv__experience cv__info">
                            <h2>
                                Full Stack Developer
                                <div className="btn-block">
                                    <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                    <button className="icon"><i className="fas fa-trash"></i></button>
                                </div>
                                <small> November – December 2020</small>
                            </h2>
                            <h3>Communication</h3>
                            <p>It was my responsibility to :</p>
                            <ul>
                                <li>Perform unit tests under the supervision of the  team on their Platform 
                                    using PHP Unit .
                                </li>
                                <li>Develop websites using Ez-platform technology.</li>
                                <li>Using the YouTrack Task Management Tool.</li>
                                <li>Using Sourcetree for Git</li>
                            </ul>
                            <div className="tags">
                                <span className="label">PHP7.3</span>
                                <span className="label">Symfony</span>
                                <span className="label">Ez-Platform</span>
                                <span className="label">CSS3</span>
                                <span className="label">SASS</span>
                                <span className="label">Git</span>
                                <span className="label">YouTrack</span>
                                <span className="label">SourceTree</span>
                            </div>
                        </div>

                    </div>

                    
                    <div id="cv__projects">
                        <h1 className="main__title"><i className="fas fa-box-open"></i> Projects</h1>

                        <div className="cv__project cv__info">
                            <h2>
                                Image Classification
                                <div className="btn-block">
                                    <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                    <button className="icon"><i className="fas fa-trash"></i></button>
                                </div>
                                <small>January - May 2018 (Master PFE)</small>
                            </h2>
                            <p>Development of a Desktop Application for Image Classification Using Python and the
                                TensorFlow Library for Machine Learning.</p>
                            <div className="tags">
                                <span className="label">Python</span>
                                <span className="label">TensorFlow</span>
                            </div>
                        </div>

                        <div className="cv__project cv__info">
                            <h2>
                                SEOR Web application
                                <div className="btn-block">
                                    <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                    <button className="icon"><i className="fas fa-trash"></i></button>
                                </div>
                                <small>January - May 2016 (License PFE)</small>
                            </h2>
                            <p>Development of a WEB application for the management of equipme for tntshe HSE department
                                of the company SEOR using PHP 5.4 and pure CSS3 for a responsive interface.</p>
                            <div className="tags">
                                <span className="label">PHP5.4</span>
                                <span className="label">CSS3</span>
                            </div>
                        </div>
                    </div>

                    
                    <div id="cv__educations">
                        <h1 className="main__title"><i className=" fa fa-university"></i> Educations</h1>

                        <div className="cv__education cv__info">
                            <h2>
                                Master Degree in Computer Science
                                <div className="btn-block">
                                    <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                    <button className="icon"><i className="fas fa-trash"></i></button>
                                </div>
                                <small>Sept 2013 - Mai 2018</small>
                            </h2>
                            <h3>University of Science and Technologie Mohamed Boudiaf,Oran Algeria</h3>
                            <p></p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

</React.Fragment>
    );
}
export default CV2;