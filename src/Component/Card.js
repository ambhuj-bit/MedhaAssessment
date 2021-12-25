import "./Card.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SchoolIcon from "@material-ui/icons/School";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";


export default function Card(props) {
  const user = props.user;

  return (
    <div className="div">
    <div className="wrapper">
      <div className="product-img">
        <img src={user.user_image_url} height="420" width="380" />
      </div>
      <div className="product-info">
        <div className="product-text">
          <div className="inline-div">
             <h3 >
                {user.jobseeker_name}
            </h3>
            
            <h4 style={{  marginBottom: "20px" }}>  
                <LocationOnIcon
                  style={{ fontSize: "17px" }}
                  className="icons"
                />
              
              {user.area}, {user.city}
            </h4>
          </div>

          <div className="inline-div">
            <h3  className="name">
              <BusinessCenterIcon
                className="icons"

              />{" "}
              experience
            </h3>
            <h3 className="exprs">{user.total_months_exp} months</h3>
          </div>
          <div className="experiences">
            {user.user_experiences.map((exp) => (
              <div className="experience">
                <div>
                  <img class="brand_logo" src={exp.company_logo} />
                </div>
                <div className="experience_details">
                  <h5>
                    {exp.user_post}
                  </h5>
                  <p >
                    {exp.company_name}
                  </p>
                  <p style={{ color:"gray"  }}>
                    {exp.company_starting_date} - {exp.company_ending_date}
                  </p>
                  <p 
                  style={{ fontSize: "12px" }}>
                    {exp.role_discription}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="education">
            <h3  className="name">
              
                <SchoolIcon
                 
                  className="icons"
                />
              {" "}
              Education
            </h3>
            <h5>
              {user.user_qualifications[0].course_type} -{" "}
              {user.user_qualifications[0].course_abbreviation}
            </h5>
            <p>{user.user_qualifications[0].user_college} {user.user_qualifications[0].user_passing_year}</p>
           
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
}
