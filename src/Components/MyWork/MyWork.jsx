import React, { useState } from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import OIP from '../../assets/OIP.jpeg';

const MyWork = () => {
  // State to handle showing more works and additional text
  const [showAll, setShowAll] = useState(false);

  // Toggle the visibility of more works and additional text
  const handleShowMore = () => {
    setShowAll(prevState => !prevState);
  };

  return (
    <div>
      <div id='work' className='mywork'>
        <div className="mywork-title">
          <h1>My Latest Work</h1>
          <img src={OIP} alt="Work Thumbnail" height="20px" width="20px"/>
        </div>
        <div className="mywork-container">
          {mywork_data.slice(0, showAll ? mywork_data.length : 6).map((work, index) => (
            <img
              key={index}
              src={work.w_img}
              alt={`Work ${index + 1} image`}
              className="work-img"
            />
          ))}
        </div>
        <div className='mywork-showmore' onClick={handleShowMore}>
          <p>{showAll ? 'Show less' : 'Show more'}</p>
          <img src={OIP} alt="Show more icon" height="20px" width="20px" />
        </div>
        {showAll && (
          <div className="additional-info">
            <p>
              Thank you for taking the time to view my work. Each project reflects my dedication to delivering high-quality results. Whether it's designing a visually appealing website, developing a robust application, or optimizing a digital marketing strategy, I strive to exceed expectations. I am passionate about continuous learning and improving my skills to keep up with the latest industry trends.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWork;
