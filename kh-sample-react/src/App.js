import React, { Component } from "react";

class NameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameCard: {
        name: "",
        position: "",
        company: "",
        addr: "",
        email: "",
        phone: "",
      },
      submit: false,
    };
  }

  onChange = (key, value) => {
    this.setState({
      nameCard: {
        ...this.state.nameCard,
        [key]: value,
      },
    });
  };

  onSubmit = () => {
    this.setState({ submit: true });
  };

  render() {
    const { nameCard, submit } = this.state;

    return (
      <>
        <h1>회원 정보 가입</h1>
        <input
          type="text"
          placeholder="이름 입력"
          value={nameCard.name}
          onChange={(e) => this.onChange("name", e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="직책 입력"
          value={nameCard.position}
          onChange={(e) => this.onChange("position", e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="회사 입력"
          value={nameCard.company}
          onChange={(e) => this.onChange("company", e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="주소 입력"
          value={nameCard.addr}
          onChange={(e) => this.onChange("addr", e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="메일 입력"
          value={nameCard.email}
          onChange={(e) => this.onChange("email", e.target.value)}
        />
        <br />
        <input
          type="tel"
          placeholder="폰 입력"
          value={nameCard.phone}
          onChange={(e) => this.onChange("phone", e.target.value)}
        />
        <br />
        <button onClick={this.onSubmit}>제출</button>
        {submit && <NameCardPrn nameCard={nameCard} />}
      </>
    );
  }
}

const NameCardPrn = ({ nameCard }) => {
  return (
    <>
      <h3>명함 정보 출력</h3>
      <p>이름 : {nameCard.name}</p>
      <p>직책 : {nameCard.position}</p>
      <p>회사 : {nameCard.company}</p>
      <p>주소 : {nameCard.addr}</p>
      <p>메일 : {nameCard.email}</p>
      <p>전화 : {nameCard.phone}</p>
    </>
  );
};

export default NameCard;
