import styled from "styled-components"

// the banner on top of the navbar
const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
        Super Massive Deal! Free Shipping on Orders Over R300.
    </Container>
  )
}

export default Announcement;
