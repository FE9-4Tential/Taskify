import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import FaEye from "../../public/icons/FaEye.svg";
import FaEyeSlash from "../../public/icons/FaEyeSlash.svg";
import largeLogo from "../../public/logo/largeLogo.svg";
import Image from "next/image";
import { signUp } from "@/libs/api/Users";

const Signup = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPasswords, setShowPasswords] = useState(false);

  const validateNickname = () => {
    if (!values.nickname) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nickname: "닉네임을 입력하세요.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nickname: "",
      }));
    }
  };

  const validatePassword = () => {
    if (!values.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "비밀번호를 입력하세요.",
      }));
    } else if (values.password.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "비밀번호는 8자 이상이어야 합니다.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
      }));
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "이메일 형식으로 작성해 주세요.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };

  const validateConfirmPassword = () => {
    if (values.password !== values.confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "비밀번호가 일치하지 않습니다.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "",
      }));
    }
  };

  const isFormValid = () => {
    return (
      values.nickname &&
      values.email &&
      values.password &&
      values.confirmPassword &&
      !errors.nickname &&
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword &&
      termsAccepted
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const registerData = {
      nickname: values.nickname,
      email: values.email,
      password: values.password,
    };
    try {
      const response = await signUp(registerData);

      if (response.status === 201) {
        alert("회원가입이 성공적으로 완료되었습니다.");
        router.push("/login");
      } else {
        alert(response.error || "회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
      alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="margincenter flex w-[520px] flex-col gap-9 py-28">
      <div className="flex flex-col items-center justify-center gap-3">
        <button onClick={() => router.push("/")}>
          <Image src={largeLogo} alt="로고" />
        </button>
        <p className="text- black-200 text-[20px]">첫 방문을 환영합니다!</p>
      </div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label>닉네임</label>
            <input
              className="border-2 border-gray-300"
              placeholder="닉네임을 입력해주세요."
              type="text"
              value={values.nickname}
              onChange={(e) =>
                setValues({ ...values, nickname: e.target.value })
              }
              onBlur={validateNickname}
              style={{ borderColor: errors.nickname ? "red" : "black" }}
            />
            {errors.nickname && (
              <p style={{ color: "red" }}>{errors.nickname}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label>이메일</label>
            <input
              className="border-2 border-gray-300"
              type="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              onBlur={validateEmail}
              style={{ borderColor: errors.email ? "red" : "black" }}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div className="flex flex-col">
            <label>비밀번호</label>
            <div className="relative">
              <input
                className="w-full border-2 border-gray-300 pr-10"
                type={showPasswords ? "text" : "password"}
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                onBlur={validatePassword}
                style={{ borderColor: errors.password ? "red" : "black" }}
              />
              <span
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
                onClick={() => setShowPasswords(!showPasswords)}
              >
                {showPasswords ? (
                  <div>
                    <Image src={FaEyeSlash} alt="비밀번호 보기" />
                  </div>
                ) : (
                  <div>
                    <Image src={FaEye} alt="비밀번호 보기" />
                  </div>
                )}
              </span>
            </div>
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label>비밀번호 확인</label>
            <div className="relative">
              <input
                className="w-full border-2 border-gray-300 pr-10"
                type={showPasswords ? "text" : "password"}
                value={values.confirmPassword}
                onChange={(e) =>
                  setValues({ ...values, confirmPassword: e.target.value })
                }
                onBlur={validateConfirmPassword}
                style={{
                  borderColor: errors.confirmPassword ? "red" : "black",
                }}
              />
              <span
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
                onClick={() => setShowPasswords(!showPasswords)}
              >
                {showPasswords ? (
                  <div>
                    <Image src={FaEyeSlash} alt="비밀번호 보기" />
                  </div>
                ) : (
                  <div>
                    <Image src={FaEye} alt="비밀번호 보기" />
                  </div>
                )}
              </span>
            </div>
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>{errors.confirmPassword}</p>
            )}
          </div>
          <div>
            <label>
              <input
                className="border-2 border-gray-300"
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              이용약관에 동의합니다
            </label>
          </div>
        </div>
        <button className="" type="submit" disabled={!isFormValid()}>
          가입하기
        </button>
      </form>
      <div className="text-center">
        이미 회원이신가요?
        <Link href={"/login"}>로그인하기</Link>
      </div>
    </div>
  );
};

export default Signup;
