import { useState } from "react";
import { Link } from "react-router-dom";
import EricaLogo from "../image/ericalogo.png";
import styled, { keyframes } from "styled-components";

// Keyframes 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// 스타일링된 컴포넌트 생성
const Nav = styled.nav`
  background-color: #f57c00;
  padding: 10px;
  position: relative;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: #fff;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #181818;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    color: #fff;
  }
  &:focus {
    color: #fff;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`;

const SubMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  position: absolute;
  top: 200%;
  left: -40px;
  z-index: 10;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease;
`;

const SubMenuItem = styled.li`
  display: block;
  padding: 10px 15px;
  color: #181818;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: #f57c00;
    font-weight: bold;
  }
  animation: ${slideIn} 0.5s ease forwards;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
`;

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <Nav>
      <NavList>
        <NavItem>
          <StyledLink to="/">
            <Logo src={EricaLogo} alt="Erica Logo" />
            <Title>한양대학교 미술치료학과</Title>
          </StyledLink>
        </NavItem>
        <MenuContainer>
          <NavItem onClick={() => toggleMenu("overview")}>
            <Link
              to="/department"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              학과개요
            </Link>
            {openMenu === "overview" && (
              <SubMenu isOpen={true}>
                <SubMenuItem>
                  <Link
                    to="/department/introduction"
                    style={{ textDecoration: "none" }}
                  >
                    학과소개
                  </Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link
                    to="/department/roadmap"
                    style={{ textDecoration: "none" }}
                  >
                    학위취득 로드맵
                  </Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link
                    to="/department/faculty"
                    style={{ textDecoration: "none" }}
                  >
                    교수진 소개
                  </Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link
                    to="/department/curriculum"
                    style={{ textDecoration: "none" }}
                  >
                    교육과정
                  </Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link
                    to="/department/directions"
                    style={{ textDecoration: "none" }}
                  >
                    오시는 길
                  </Link>
                </SubMenuItem>
              </SubMenu>
            )}
          </NavItem>
          <NavItem onClick={() => toggleMenu("notices")}>
            <Link
              to="/notices"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              공지사항
            </Link>
            {openMenu === "notices" && (
              <SubMenu isOpen={true}>
                <SubMenuItem>
                  <Link
                    to="/notices/admissions"
                    style={{ textDecoration: "none" }}
                  >
                    신입생 모집
                  </Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link
                    to="/notices/department"
                    style={{ textDecoration: "none" }}
                  >
                    학과 공지
                  </Link>
                </SubMenuItem>
              </SubMenu>
            )}
          </NavItem>
          <NavItem onClick={() => toggleMenu("clinicalPartners")}>
            <Link
              to="/clinical-partners"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              임상협력기관
            </Link>
            {openMenu === "clinicalPartners" && (
              <SubMenu isOpen={true}>
                <SubMenuItem>
                  <Link
                    to="/clinical-partners/art-rehabilitation"
                    style={{ textDecoration: "none" }}
                  >
                    미술재활현장실습기관
                  </Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link
                    to="/clinical-partners/other"
                    style={{ textDecoration: "none" }}
                  >
                    기타 협력기관
                  </Link>
                </SubMenuItem>
              </SubMenu>
            )}
          </NavItem>
          <NavItem onClick={() => toggleMenu("qualifications")}>
            <Link
              to="/qualifications"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              자격취득
            </Link>
            {openMenu === "qualifications" && (
              <SubMenu isOpen={true}>
                <SubMenuItem>
                  <Link
                    to="/qualifications/art-psychotherapist"
                    style={{ textDecoration: "none" }}
                  >
                    미술심리재활사
                  </Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link
                    to="/qualifications/art-psychological-counselor"
                    style={{ textDecoration: "none" }}
                  >
                    미술심리상담사
                  </Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link
                    to="/qualifications/art-counselor"
                    style={{ textDecoration: "none" }}
                  >
                    예술심리상담사
                  </Link>
                </SubMenuItem>
              </SubMenu>
            )}
          </NavItem>
          <NavItem onClick={() => toggleMenu("researchGroup")}>
            <Link
              to="/research-group"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              미술치료연구반
            </Link>
            {openMenu === "researchGroup" && (
              <SubMenu isOpen={true}>
                <SubMenuItem>
                  <Link
                    to="/research-group/introduction"
                    style={{ textDecoration: "none" }}
                  >
                    연구반소개
                  </Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link
                    to="/research-group/artwork-activities"
                    style={{ textDecoration: "none" }}
                  >
                    미술작품 제작활동
                  </Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link
                    to="/research-group/thesis"
                    style={{ textDecoration: "none" }}
                  >
                    학위 및 학술지 논문 활동
                  </Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link
                    to="/research-group/study"
                    style={{ textDecoration: "none" }}
                  >
                    스터디 활동
                  </Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link
                    to="/research-group/supervision"
                    style={{ textDecoration: "none" }}
                  >
                    수퍼비전 활동
                  </Link>
                </SubMenuItem>
              </SubMenu>
            )}
          </NavItem>
          <NavItem onClick={() => toggleMenu("galleryTherapy")}>
            <Link
              to="/gallery-therapy"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              갤러리 치료
            </Link>
            {openMenu === "galleryTherapy" && (
              <SubMenu isOpen={true}>
                <SubMenuItem>
                  <Link
                    to="/gallery-therapy/overview"
                    style={{ textDecoration: "none" }}
                  >
                    갤러리 치료 소개
                  </Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link
                    to="/gallery-therapy/activities"
                    style={{ textDecoration: "none" }}
                  >
                    활동사진
                  </Link>
                </SubMenuItem>
              </SubMenu>
            )}
          </NavItem>
        </MenuContainer>
      </NavList>
    </Nav>
  );
};

export default Navbar;
