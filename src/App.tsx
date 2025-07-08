// import { useState } from 'react';

import { useState } from "react";
import LabelWithInput from "./assets/LabelWithInput";
import Button from "./Button";

function App() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordCheckValue, setPasswordCheckValue] = useState("");

  function printInput({
    nameValue,
    emailValue,
    passwordValue,
    passwordCheckValue,
  }: {
    nameValue: string;
    emailValue: string;
    passwordValue: string;
    passwordCheckValue: string;
  }) {
    console.log(
      "이름 : " +
        nameValue +
        `\n` +
        "이메일 : " +
        emailValue +
        `\n` +
        "비밀번호 : " +
        passwordValue +
        `\n` +
        "비밀번호 확인 : " +
        passwordCheckValue
    );
  }

  const inputLabelStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
  };

  return (
    <div
      style={{
        height: "100%",
        margin: "0",
        padding: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "cente",
      }}
    >
      <div
        id="box"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          width: "fit-content",
          position: "relative",
          padding: "3rem 2rem 1.5rem 2rem",
          borderRadius: "0.875rem",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 0.625rem 0 rgba(0, 0, 0, 0.1)",
          border: "0.063rem solid #e03f3f96",
          backgroundColor: "#f1d1f20f",
        }}
      >
        {/* <p id="hyoeun">가입 중!</p> */}

        <a className="back" href="/"></a>

        <div className="form-group" id="input">
          <div className="input-label" style={inputLabelStyle}>
            <LabelWithInput
              htmlFor="text"
              label="이름"
              type="text"
              name="name"
              placeholder="이름을 입력하세요"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />
          </div>
          <div id="nameError" className="error-message"></div>
          <div className="input-label" style={inputLabelStyle}>
            <LabelWithInput
              htmlFor="email"
              label="이메일"
              type="email"
              name="emil"
              placeholder="이메일을 입력하세요"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </div>

          <div id="emailError" className="error-message"></div>
          <div className="input-label">
            <LabelWithInput
              htmlFor="text"
              label="비밀번호"
              type="text"
              name="password"
              placeholder="비밀번호를 입력하세요"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
          </div>
          <div id="passwordError" className="error-message"></div>
          <div className="input-label" style={inputLabelStyle}>
            <LabelWithInput
              htmlFor="password"
              label="비밀번호 확인"
              type="password"
              name="passwordCheck"
              placeholder="비밀번호를 입력하세요"
              value={passwordCheckValue}
              onChange={(e) => setPasswordCheckValue(e.target.value)}
            />
          </div>
          <div id="passwordConfirmError" className="error-message"></div>
        </div>
        <Button
          id="reguster"
          value="등록하기🏮"
          onClick={() =>
            printInput({
              nameValue,
              emailValue,
              passwordValue,
              passwordCheckValue,
            })
          }
        />
      </div>
    </div>
  );
}

export default App;
