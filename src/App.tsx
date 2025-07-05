// import { useState } from 'react';

function App() {

  const inputLabelStyle = {
    display: "flex",
    // flexDirection: "column",
    gap: "1rem",
    alignItems: "center"
  };

  const inputLabelLabelStyle = {
    display: "inline-block",
    fontSize: "0.9rem",
    width: "5rem",
    // textAlign: "right",
    color: "#e66f80"
  };


  const buttenStyle = {
    backgroundColor: "#f82a498b",
            fontSize: "0.6rem",
            color: "white",
            border: "none",
            borderRadius: "0.25rem",
            padding: "0.5rem 1rem",
            transition: "backgroundColor 0.5s"
  };

  return  <body style= {{
    height: "100%",
    margin: "0",
    padding: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "cente"
  }}> 
  <div id="box" 
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
  }}>
  {/* <p id="hyoeun">가입 중!</p> */}

  <a className="back" href="/"></a>

  <div className="form-group" id="input">
      <div className="input-label" style={inputLabelStyle}>
          <label htmlFor="name" style={inputLabelLabelStyle}>이름</label>
          <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="이름을 입력하세요." 

          />
      </div>
      <div id="nameError" className="error-message"></div>
      <div className="input-label" style={inputLabelStyle}>
          <label htmlFor="email" style={inputLabelLabelStyle}>이메일</label>
          <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="이메일을 입력하세요."
          />
      </div>

      <div id="emailError" className="error-message"></div>
      <div className="input-label">
          <label htmlFor="password" style={inputLabelLabelStyle}>비밀번호</label>
          <input
                  type="text"
                  className="input"
                  id="password"
                  name="password"
                  placeholder="비밀번호을 입력하세요."
          />
      </div>
      <div id="passwordError" className="error-message"></div>
      <div className="input-label" style={inputLabelStyle}>
          <label htmlFor="passwordConfirm" style={inputLabelLabelStyle}>비밀번호 확인</label>
          <input
                  // style={{"font-family: normal,serif"}}
                  type="password"
                  id="passwordConfirm"
                  placeholder="비밀번호을 입력하세요."
          />
      </div>
      <div id="passwordConfirmError" className="error-message"></div>
  </div>
  <button id="register" style={buttenStyle}>등록하기🏮</button>
</div>
</body>
}

export default App
    