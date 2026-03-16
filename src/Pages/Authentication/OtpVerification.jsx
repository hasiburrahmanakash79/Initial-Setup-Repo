import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import { FaLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";

const OtpVerification = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [timer, setTimer] = useState(60);
  const [resendEnabled, setResendEnabled] = useState(false);
  // const [apiError, setApiError] = useState(null);
  const navigate = useNavigate();
  // const location = useLocation();
  // const user_id = location.state?.user_id || '';
  // const email = location.state?.email || '';
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const onSubmit = async (data) => {
    console.log(data);
    navigate("/reset-password");
    // const otp = `${data.otp0}${data.otp1}${data.otp2}${data.otp3}`;
    // setApiError(null);
    // try {
    //   const response = await apiClient.post("/auth/verify-reset-code", {
    //     user_id: user_id,
    //     verification_code: otp,
    //   });
    //   // On success, navigate to reset password page
    //   navigate("/reset-password", { state: { user_id, secret_key: response.data.secret_key } });
    // } catch (error) {
    //   console.error("OTP Verification Error:", error);
    //   const errorMessage =
    //     error.response?.data?.message ||
    //     "OTP verification failed. Please try again.";
    //   setApiError(errorMessage);
    // }
  };

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else {
      setResendEnabled(true);
    }
  }, [timer]);

  const handleResendOtp = async () => {
    // if (resendEnabled) {
    //   setTimer(60);
    //   setResendEnabled(false);
    //   setApiError(null);
    //   try {
    //     await apiClient.post("/auth/forgot-password", {
    //       email_address: email,
    //     });
    //   } catch (error) {
    //     console.error("Resend OTP Error:", error);
    //     const errorMessage =
    //       error.response?.data?.message ||
    //       "Failed to resend OTP. Please try again.";
    //     setApiError(errorMessage);
    //   }
    // }
  };

  const handleInputChange = (formOnChange) => (e, index) => {
    const { value } = e.target;
    if (!/^\d*$/.test(value)) return; // Allow only digits
    formOnChange(e);
    if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <div className="min-h-screen place-content-center bg-[#DAECFF] p-5">
      {/* Right Side */}
      <div className="flex items-center justify-center p-8">
        <div className="max-w-lg w-full bg-white rounded-3xl shadow-md p-10">
          <div className="flex items-center justify-center mb-3">
                    <img
                      src={logo}
                      alt=""
                      className="w-1/3 select-none pointer-events-none"
                    />
                  </div>
          <h2 className="text-2xl font-bold text-center">
            Check your email
          </h2>
          <p className="text-center text-sm my-2 text-gray-500">
            We have sent a 6-digit verification code to your email.
          </p>
          <p className="text-center text-sm mb-6">
            example@gmail.com
          </p>

          {/* Display API error if any */}
          {/* {apiError && (
            <p className="text-red-500 text-sm text-center mb-4">{apiError}</p>
          )} */}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex space-x-4 justify-center">
              {[0, 1, 2, 3].map((index) => {
                const { onChange: formOnChange, ref: formRef, ...rest } = register(`otp${index}`, { required: true, maxLength: 1 });
                return (
                  <input
                    key={index}
                    {...rest}
                    ref={(el) => {
                      formRef(el);
                      inputRefs[index].current = el;
                    }}
                    type="text"
                    maxLength="1"
                    onChange={(e) => handleInputChange(formOnChange)(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-14 h-14 text-center border border-gray-300 rounded-full outline-none text-lg"
                  />
                );
              })}
            </div>
            {Object.keys(errors).length > 0 && (
              <p className="text-red-500 text-sm text-center">
                Please fill all OTP fields
              </p>
            )}

            {/* Resend OTP with Timer */}
            <p className="text-center text-sm mt-6">
              {resendEnabled ? (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className="text-[#0C4E96] hover:underline"
                >
                  Resend OTP
                </button>
              ) : (
                <span className="text-gray-500">Resend OTP in {timer}s</span>
              )}
            </p>

            <button
              type="submit"
              className="w-full bg-[#0C4E96] text-white py-2 rounded-full font-medium hover:shadow-lg transition-shadow"
            >
              Verify OTP
            </button>
          </form>
          {/* Back Button */}
          <div className="flex items-center justify-center text-[#0C4E96] mt-4 hover:underline">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center"
            >
              <FaLeftLong className="mr-2" />
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;