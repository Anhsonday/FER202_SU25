import React from 'react';

// Title Component - Simple text display
const Title = ({ text }) => {
  return <h4 className="text-dark mb-0"  style={{textAlign: 'center'}}>{text}</h4>;
};

// Description Component - Simple text display
const Description = ({ text }) => {
  return <p className="text-muted mb-0" style={{textAlign: 'center'}}>{text}</p>;
};

// Image Component - Single image display
const Image = ({ url, alt = "Card image" }) => {
  return (
    <div className="d-flex align-items-center justify-content-center bg-white text-white h-100" 
         style={{ minHeight: '120px', fontSize: '1.5rem', fontWeight: 'bold' }}>
      <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykmMsVNe2VeaJASpFNljD-CPKDSQS4T4cCARgOiuCxjtgmOE5s0SIK3_NHfILYPkZw44&usqp=CAU'} alt={alt} className="img-fluid" style={{ height: '150px', objectFit: 'cover' }} />
    </div>
  );
};

const SimpleCard = () => {
  const cardData = {
    title: "Hoai Nguyen - FPT DaNang",
    description: "Mobile: 0982827763",
    imageUrl: ""
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <div className="card mb-3" style={{ border: '2px solid #007bff' }}>
        <div className="row g-0">
          <div className="col-md-3">
            <Image url={cardData.imageUrl} alt={cardData.title} />
          </div>
          <div className="col-md-9">
            <div className="card-body p-3">
              <Title text={cardData.title} />
              <hr className="my-2" style={{ borderColor: 'black' }} />
              <Description text={cardData.description} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;