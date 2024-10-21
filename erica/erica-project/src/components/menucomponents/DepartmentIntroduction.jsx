import React from "react";
import styled from "styled-components";
import InfoImg from "../../image/department.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 1024px;
  margin-top: 20px;
`;

const Img = styled.img`
  width: 424px;
  height: 424px;
  flex-shrink: 0;
`;

const Titleinner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const PointTitle = styled.div`
  color: #ff8000;
  font-size: 18px;
  font-weight: bold;
  margin-top: 18px;
`;

const InfoInner = styled.div`
  margin-top: 20px;
  width: 516px;
  height: 319px;
  flex-shrink: 0;
  background: #e6e6e6;
  padding: 20px;
  border-radius: 10px;
`;

const InfoInner2 = styled.div`
  display: flex;
  width: 973px;
  flex-shrink: 0;
  height: auto;
  background: #e6e6e6;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
`;

const Info1 = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 119.276%; /* 21.47px */
  letter-spacing: -1.08px;
`;
const Info = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 119.521%; /* 16.733px */
  letter-spacing: 0.42px;
`;

const DepartmentIntroduction = () => {
  return (
    <Wrapper>
      <Container>
        <Titleinner>
          <Title>미술치료학과</Title>
          <SubTitle>DEPARTMENT OF ART THERAPY</SubTitle>
        </Titleinner>
        <PointTitle>미술 치료 학과소개</PointTitle>
        <ImgContainer>
          <InfoInner>
            <Info1>
              미술치료학과는 미술을 활용한 심리치료 전문가를 양성하는 학과이다.
              이미지와 창조 활동을 통해 인격의 통합과 재통합을 돕는 것을 목표로
              하며, 다양한 대상에게 미술치료를 적용할 수 있는 능력을 배양한다.
              교육 목표 및 내용 이론과 임상 실습의 조화를 통해 아동, 청소년,
              성인, 노인, 부부, 가족 등 다양한 대상에게 미술치료를 적용 상담
              이론, 정신병리, 투사검사 등의 진단법과 치료 기법을 익히는 과정
              제공 현장 실습과 워크숍을 통해 치료 경험을 쌓고 실무 역량 강화
              학과 특징 심리치료와 상담 관련 기초 교과목 필수 이수 임상 및 교육
              현장 실습을 체계적으로 운영해 졸업과 동시에 전문가로 활동 가능
              국제 교류 프로그램을 통해 워크숍과 세미나 참여 기회 제공
              미술치료학과는 이처럼 미술과 심리치료를 통합한 전문 교육을 통해,
              인간의 성장과 삶의 질 향상에 기여할 전문가를 양성하는 것을 목표로
              한다.
            </Info1>
          </InfoInner>
          <Img src={InfoImg} />
        </ImgContainer>
        <PointTitle>미술치료학과는 무엇을 배우나요?</PointTitle>
        <InfoInner2>
          <Info>
            미술치료학과에서는 미술과 심리학을 융합한 다양한 이론과 실무를
            배우게 된다. 주요 학습 내용은 다음과 같다: 심리학 기초: 상담 이론,
            정신병리학, 발달 심리 미술치료 기법: 색채와 도형을 통한 심리 표현,
            투사검사 기법 임상 실습: 병원, 복지기관, 학교 등 현장에서 실습을
            통해 실무 능력 강화 심리진단 도구: 그림을 활용한 심리 평가와 분석
            방법 워크숍 및 세미나: 국내외 미술치료 전문가와의 교류 프로그램 이
            과정에서 학생들은 다양한 연령층(아동, 청소년, 성인, 노인)을 대상으로
            미술치료를 적용하는 능력을 키우며, 이론과 실습의 균형을 맞춘 교육을
            받는다.
          </Info>
        </InfoInner2>
        <PointTitle>미술치료학과를 졸업하면 무엇을 할 수 있나요?</PointTitle>
        <InfoInner2>
          <Info>
            졸업생은 다양한 분야에서 미술치료 전문가로 활동할 수 있으며, 다음과
            같은 진로가 열려 있다: 병원 및 심리상담센터: 정신과 병동,
            심리상담소에서 미술치료사로 활동 학교 및 복지기관: 초·중·고등학교
            상담 교사, 복지관 치료 프로그램 운영 연구 및 강의 활동: 미술치료
            연구소 연구원, 대학 강사 및 교육자 자격증 취득 후 활동:
            미술심리상담사, 임상심리사, 상담사 자격증 취득 가능 개인 클리닉
            운영: 프리랜서로 미술치료 클리닉 개설 졸업과 동시에 전문 자격증을
            취득하거나 실습 경험을 기반으로 취업할 수 있어, 의료, 교육, 복지 등
            다양한 분야에서 성장할 기회를 가진다.
          </Info>
        </InfoInner2>
      </Container>
    </Wrapper>
  );
};

export default DepartmentIntroduction;
