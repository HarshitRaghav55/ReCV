import React from 'react'
import "./CV2.css";
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";
type Props = {
    name: string,
    email: string,
    mobileNumber: number,
    educationBachelor?: string,
    interest1?: string,
    interest2?: string,
    interest3?: string,
    resume?: string,
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
    project1Description?: string,
    project2Description?: string,
    project3Description?: string,
    project1Title?: string,
    project2Title?: string,
    project3Title?: string,
    project1DurationStart?: string,
    project2DurationStart?: string,
    project3DurationStart?: string,
    project1DurationEnd?: string,
    project2DurationEnd?: string,
    project3DurationEnd?: string,
    project1Tech1?: string,
    project2Tech1?: string,
    project3Tech1?: string,
    project1Tech2?: string,
    project2Tech2?: string,
    project3Tech2?: string,
    project1Tech3?: string,
    project2Tech3?: string,
    project3Tech3?: string,
    education_Intermediate_Branch?: string,
    education_Intermediate_date?: number,
    education_Intermediate_School?: string,
    currentWorkPost?: string,

    experience1?: string,
    experience2?: string,
    experience3?: string,
    experience1Tech1?: string,
    experience2Tech1?: string,
    experience3Tech1?: string,
    experience1Tech2?: string,
    experience2Tech2?: string,
    experience3Tech2?: string,
    experience1Tech3?: string,
    experience2Tech3?: string,
    experience3Tech3?: string,
    experience1Tech4?: string,
    experience2Tech4?: string,
    experience3Tech4?: string,

    experience1Start?: string,
    experience2Start?: string,
    experience3Start?: string,

    experience1End?: string,
    experience2End?: string,
    experience3End?: string,

    experience1Post?: string,
    experience2Post?: string,
    experience3Post?: string,

    experience1Company?: string,
    experience2Company?: string,
    experience3Company?: string,


    linkedIn?: string,
    github?: string,
    twitter?: string
    speakingLanguage1?: string,
    speakingLanguage2?: string,
    speakingLanguage3?: string,

}
const CV2: React.FC<Props> = (props: Props) => {
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
            
                <div className="bg--light-gray cell small-8">
                    <div className="paper cv">
                    <div id="printCv">
                        <div className="cv__sidebar">
                            
                            <h1 id="cv__name" className="cv__title sidebar__name"> {props.name} </h1>
                            <h2 id="cv__job" className="cv__title sidebar__job">{props.currentWorkPost}</h2>
                            <hr />
                            <dl className="sidebar__info">
                                <dd className="cv__info">
                                    <i className="fas fa-at"></i>
                                    <span id="cv__email"> {props.email} </span>
                                    <div className="btn-block">
                                        <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                        <button className="icon"><i className="fas fa-trash"></i></button>
                                    </div>
                                </dd>
                                <dd className="cv__info">
                                    <i className="fas fa-phone"></i>
                                    <span id="cv__phone">{props.mobileNumber} </span>
                                    <div className="btn-block">
                                        <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                        <button className="icon"><i className="fas fa-trash"></i></button>
                                    </div>
                                </dd>

                                <dd id="cv__social-media">
                                    <div className="cv__info">
                                        <i className="fab fa-github"> {props.github} </i>
                                        <div className="btn-block">
                                            <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                            <button className="icon"><i className="fas fa-trash"></i></button>
                                        </div>
                                    </div>

                                    <div className="cv__info">
                                        <i className="fab fa-linkedin-in">{props.linkedIn} </i> Saksham
                                        <div className="btn-block">
                                            <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                            <button className="icon"><i className="fas fa-trash"></i></button>
                                        </div>
                                    </div>
                                </dd>


                                <dt className="sidebar__title clearfix"><i className="fas fa-wrench"></i> Skills</dt>
                                <dd id="cv__skills">
                                    <div className="cv__info">
                                        <span>{props.skill1} </span>
                                        <div className="btn-block">
                                            <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                            <button className="icon"><i className="fas fa-trash"></i></button>
                                        </div>
                                        <progress className="secondary float-right" max="100" value={props.skill1Level}> <button className="icon"><i className="fas fa-trash"></i></button></progress>
                                    </div>
                                    <div className="cv__info">
                                        <span>{props.skill2} </span>
                                        <div className="btn-block">
                                            <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                            <button className="icon"><i className="fas fa-trash"></i></button>
                                        </div>
                                        <progress className="secondary float-right" max="100" value={props.skill2Level}></progress>
                                    </div>
                                    {props.skill3 && <>
                                        <div className="cv__info">
                                            <span>{props.skill3} </span>
                                            <div className="btn-block">
                                                <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                                <button className="icon"><i className="fas fa-trash"></i></button>
                                            </div>
                                            <progress className="secondary float-right" max="100" value={props.skill3Level}></progress>
                                        </div>
                                    </>}
                                    {props.skill4 && <>
                                        <div className="cv__info">
                                            <span>{props.skill4}</span>
                                            <div className="btn-block">
                                                <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                                <button className="icon"><i className="fas fa-trash"></i></button>
                                            </div>
                                            <progress className="secondary float-right" max="100" value={props.skill4Level}></progress>
                                        </div>
                                    </>}

                                </dd>


                                <dt className="sidebar__title"><i className="fas fa-language"></i> Languages</dt>
                                <dd id="cv__languages">
                                    <div className="cv__info">
                                        {props.speakingLanguage1}
                                        <div className="btn-block">
                                            <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                            <button className="icon"><i className="fas fa-trash"></i></button>
                                        </div>
                                    </div>
                                    <div className="cv__info">
                                        {props.speakingLanguage2}
                                        <div className="btn-block">
                                            <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                            <button className="icon"><i className="fas fa-trash"></i></button>
                                        </div>
                                    </div>
                                    {props.speakingLanguage3 && <>
                                        <div className="cv__info">
                                            {props.speakingLanguage3}
                                            <div className="btn-block">
                                                <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                                <button className="icon"><i className="fas fa-trash"></i></button>
                                            </div>
                                        </div>
                                    </>}
                                </dd>


                                <dt className="sidebar__title"><i className="fas fa-plus"></i> Interests</dt>
                                <dd id="cv__interests">
                                    <div className="cv__info">
                                        {props.interest1}
                                        <div className="btn-block">
                                            <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                            <button className="icon"><i className="fas fa-trash"></i></button>
                                        </div>
                                    </div>
                                    {props.interest2 && <>
                                        <div className="cv__info">
                                            {props.interest2}
                                            <div className="btn-block">
                                                <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                                <button className="icon"><i className="fas fa-trash"></i></button>
                                            </div>
                                        </div>
                                    </>}
                                    {props.interest3 && <>
                                        <div className="cv__info">
                                            {props.interest3}
                                            <div className="btn-block">
                                                <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                                <button className="icon"><i className="fas fa-trash"></i></button>
                                            </div>
                                        </div>
                                    </>}
                                </dd>
                            </dl>
                        </div>


                        <div className="cv__main">
                            {props.resume && <>

                                <h1 className="main__title"><i className="fas fa-pencil-alt"></i> Resume</h1>
                                <div className="cv__info" id="cv__resume ">

                                    {props.resume}

                                </div>
                            </>}

                            <div id="cv__experiences">
                                <h1 className="main__title"><i className="fas fa-briefcase"></i> Experiences</h1>

                                <div className="cv__experience cv__info">
                                    <h2>
                                        {props.experience1Post}

                                        <small> {props.experience1Start} - {props.experience1End}</small>
                                    </h2>
                                    <h3>{props.experience1Company}</h3>

                                    <ul>
                                        {props.experience1}
                                    </ul>
                                    <div className="tags">
                                        <span className="label">{props.experience1Tech1} </span>
                                        <span className="label">{props.experience1Tech2}</span>

                                        <span className="label">{props.experience1Tech3}</span>
                                        <span className="label">{props.experience1Tech4}</span>

                                    </div>
                                </div>
                                {props.experience2 && <>
                                    <div className="cv__experience cv__info">
                                        <h2>
                                            {props.experience2Post}

                                            <small> {props.experience2Start} - {props.experience2End}</small>
                                        </h2>
                                        <h3>{props.experience2Company}</h3>

                                        <ul>
                                            {props.experience2}
                                        </ul>
                                        <div className="tags">
                                            <span className="label">{props.experience2Tech1} </span>
                                            <span className="label">{props.experience2Tech2}</span>
                                            <span className="label">{props.experience2Tech3}</span>
                                            <span className="label">{props.experience2Tech4}</span>

                                        </div>

                                    </div>
                                </>}
                                {props.experience3 && <>
                                    <div className="cv__experience cv__info">
                                        <h2>
                                            {props.experience3Post}

                                            <small> {props.experience3Start} - {props.experience3End}</small>
                                        </h2>
                                        <h3>{props.experience3Company}</h3>

                                        <ul>
                                            {props.experience3}
                                        </ul>
                                        <div className="tags">
                                            <span className="label">{props.experience3Tech1} </span>
                                            <span className="label">{props.experience3Tech2}</span>
                                            <span className="label">{props.experience3Tech3}</span>
                                            <span className="label">{props.experience3Tech4}</span>

                                        </div>
                                    </div>
                                </>}

                            </div>


                            <div id="cv__projects">
                                <h1 className="main__title"><i className="fas fa-box-open"></i> Projects</h1>

                                <div className="cv__project cv__info">
                                    <h2>
                                        {props.project1Title}
                                        <div className="btn-block">
                                            <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                            <button className="icon"><i className="fas fa-trash"></i></button>
                                        </div>
                                        <small>{props.project1DurationStart} - {props.project1DurationEnd} </small>
                                    </h2>
                                    <p>{props.project1Description} </p>
                                    <div className="tags">
                                        <span className="label"> {props.project1Tech1} </span>
                                        <span className="label">{props.project1Tech2} </span>
                                        <span className="label">{props.project1Tech3} </span>
                                    </div>
                                </div>
                                {props.project2Description && <>
                                    <div className="cv__project cv__info">
                                        <h2>
                                            {props.project2Title}

                                            <small>{props.project2DurationStart} - {props.project2DurationEnd}</small>
                                        </h2>
                                        <p>{props.project2Description}</p>
                                        <div className="tags">
                                            <span className="label">{props.project2Tech1}</span>
                                            <span className="label"> {props.project2Tech2}</span>
                                            <span className="label"> {props.project2Tech3}</span>
                                        </div>
                                    </div>
                                </>}
                                {props.project3Description && <>
                                    <div className="cv__project cv__info">
                                        <h2>
                                            {props.project3Title}

                                            <small>{props.project3DurationStart} - {props.project3DurationEnd}</small>
                                        </h2>
                                        <p>{props.project3Description}</p>
                                        <div className="tags">
                                            <span className="label"> {props.project3Tech1}</span>
                                            <span className="label"> {props.project3Tech2}</span>
                                            <span className="label"> {props.project3Tech3}</span>
                                        </div>
                                    </div>
                                </>}
                            </div>


                            <div id="cv__educations">
                                <h1 className="main__title"><i className=" fa fa-university"></i> Educations</h1>
                                {props.educationMasters && <>
                                    <div className="cv__education cv__info">
                                        <h2>
                                            {props.educationMasters}
                                            <div className="btn-block">
                                                <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                                <button className="icon"><i className="fas fa-trash"></i></button>
                                            </div>
                                            <small>{props.educationMasters_date}</small>
                                        </h2>
                                        <h3>{props.educationMasters_University}</h3>


                                    </div>
                                </>}
                                <div className="cv__education cv__info">
                                    <h2>
                                        {props.educationBachelor}
                                        <div className="btn-block">
                                            <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                            <button className="icon"><i className="fas fa-trash"></i></button>
                                        </div>
                                        <small>{props.educationBachelor_date}</small>
                                    </h2>
                                    <h3>{props.educationBachelor_University}</h3>


                                </div>
                                <div className="cv__education cv__info">
                                    <h2>
                                        Senior Secondary,{props.education_Intermediate_Branch}
                                        <div className="btn-block">
                                            <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                            <button className="icon"><i className="fas fa-trash"></i></button>
                                        </div>
                                        <small>{props.education_Intermediate_date}</small>
                                    </h2>
                                    <h3>{props.education_Intermediate_School}</h3>


                                </div>
                                <div className="cv__education cv__info">
                                    <h2>
                                        Secondary(X)
                                        <div className="btn-block">
                                            <button className="icon"><i className="fas fa-paint-brush"></i></button>
                                            <button className="icon"><i className="fas fa-trash"></i></button>
                                        </div>
                                        <small>{props.education_HighSchool_date}</small>
                                    </h2>
                                    <h3>{props.education_HighSchool}</h3>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" onClick={printCV}>Export To PDF</button>
        </React.Fragment>
    );
}
export default CV2;