import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import Category from './Category';

const CategoriesBoxContainer = styled.div`
  background-color: white;
  height: 427px;
  padding: 50px 0;

  @media (max-width: 768px) {
    /* Mobile size styles */
    height: 410px;
    padding: 5% 0;
  }
`;
const TextTopBox = styled.div`
  height: 25px;
  margin: 10px 0 40px 0;
  font-size: 21px;
  display: flex;
  justify-content: center;
  color: #747474;
  font-weight: 300;

  @media (max-width: 768px) {
    /* Mobile size styles */
    font-size: 18px;
    margin: 10px 0px 20px 0px;
  }
`;

const CategoriesContainer = styled.div`
  height: 282px;
  margin: 30px auto;
  padding: 0 12%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the boxes horizontally */
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
const CategoriesContainerMobile = styled.div`
display: none;

  @media (max-width: 768px) {
    /* Mobile size styles */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: auto;
    margin: 30px auto;
    padding: 0 5%;
  }
`;
// const CategoriesIcons = styled.div`
// display: none;

//   @media (max-width: 768px) {
//     /* Mobile size styles */
//   height: 232px;
//   margin: 25px auto;  
//     padding: 0 5%;
//     display: flex;
//     flex-wrap: wrap;
//   justify-content: center; /* Center the boxes horizontally */
//   align-items: center;
//   }
// `;

const MoreButtonContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    /* Mobile size styles */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
  }
`;

const StyledButton = styled(Button)`
  && {
    @media (max-width: 768px) {
      /* Mobile size styles */
      width: 200px;
      height: 40px;
      align-items: center;
      justify-content: center;
      background-color: #1677ff;
      color: white;
      border: none;
      cursor: pointer;
      margin: 10px 0px;
      border-radius: 20px;
    }
  }
`;

const BackgroundContainer = styled.div`
  background-color: white;

  @media (max-width: 768px) {
    background-color: ${(props: { showAllIcons: boolean }) =>
      props.showAllIcons ? 'white' : 'transparent'};
  }
`;

const categoriesData = [
  { icon: 'category-icon1.png', text: 'Fast Food' },
  { icon: 'category-icon2.png', text: 'Restaurant' },
  { icon: 'category-icon3.png', text: 'Real Estate' },
  { icon: 'category-icon4.png', text: 'Sim Card & Mobile' },
  { icon: 'category-icon5.png', text: 'Market' },
  { icon: 'category-icon6.png', text: 'Beauty Salon' },
  { icon: 'category-icon7.png', text: 'Hookah Lounge' },
  { icon: 'category-icon8.png', text: 'Dentist' },
  { icon: 'category-icon9.png', text: 'Pharmacy' },
  { icon: 'category-icon10.png', text: 'Bakery' },
  { icon: 'category-icon11.png', text: 'Daycare' },
  { icon: 'category-icon12.png', text: 'Lawyer' },
  { icon: 'category-icon13.png', text: 'Electrician' },
  { icon: 'category-icon14.png', text: 'Plumber' },
  { icon: 'category-icon15.png', text: 'Cleaning' },
  { icon: 'category-icon16.png', text: 'Painting' },
  { icon: 'category-icon17.png', text: 'Trainer' },
];

const CategoriesBox: React.FC = () => {
  const [showAllIcons, setShowAllIcons] = useState(false);
  const [moreButtonText, setMoreButtonText] = useState('More');
  const [categoryBoxHeight, setCategoryBoxHeight] = useState(427);

  const handleMoreClick = () => {
    setShowAllIcons(!showAllIcons);
    setMoreButtonText(showAllIcons ? 'More' : 'Less');
    setCategoryBoxHeight(showAllIcons ? 427 : 850);
  };

  return (
    <BackgroundContainer showAllIcons={showAllIcons}>
      <CategoriesBoxContainer style={{ height: categoryBoxHeight + 'px' }}>
        <TextTopBox>Categories</TextTopBox>
        <CategoriesContainerMobile>
          {categoriesData.slice(0, showAllIcons ? categoriesData.length : 6).map((data, index) => (
            <Category key={index} index={index} icon={data.icon} text={data.text} />
          ))}
        </CategoriesContainerMobile>
        <MoreButtonContainer>
          <StyledButton type="primary" size="large" onClick={handleMoreClick}>
            {moreButtonText}
          </StyledButton>
        </MoreButtonContainer>
        <CategoriesContainer>
          {categoriesData.map((data, index) => (
            <Category key={index} index={index} icon={data.icon} text={data.text} />
          ))}
        </CategoriesContainer>
      </CategoriesBoxContainer>
    </BackgroundContainer>
  );
};

export default CategoriesBox;