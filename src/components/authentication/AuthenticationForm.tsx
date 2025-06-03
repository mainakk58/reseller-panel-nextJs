"use client";

import {useState} from "react";
import {toast} from "react-toastify";

interface FormErrors {
  email?: string;
  phone?: string;
  emailOtp?: string;
  phoneOtp?: string;
  name?: string;
  title?: string;
  username?: string;
}

const AuthenticationForm = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [phoneOtp, setPhoneOtp] = useState("");
  const [showEmailOtp, setShowEmailOtp] = useState(false);
  const [showPhoneOtp, setShowPhoneOtp] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateEmail = (email: string) => {
    if (!email) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email";
    return null;
  };

  const validatePhone = (phone: string) => {
    if (!phone) return "Phone number is required";
    if (!/^\d{10}$/.test(phone)) return "Phone number must be 10 digits";
    return null;
  };

  const handleEmailVerification = () => {
    const emailError = validateEmail(email);
    if (emailError) {
      setErrors({email: emailError});
      return;
    }

    // freeze button for verify button
    toast.success("OTP sent to your email!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setShowEmailOtp(true);
    setErrors({});
  };

  const handleEmailOtpSubmit = () => {
    if (!emailOtp) {
      setErrors({emailOtp: "Please enter OTP"});
      return;
    }

    if (emailOtp === "12") {
      toast.success("Email verified successfully!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setStep(2);
      setErrors({});
    } else {
      setErrors({emailOtp: "Invalid OTP"});
    }
  };

  const handlePhoneVerification = () => {
    const phoneError = validatePhone(phone);
    if (phoneError) {
      setErrors({phone: phoneError});
      return;
    }

    // freeze button for verify button

    console.log("Sending OTP to phone:", phone);
    toast.success("OTP sent to your phone!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setShowPhoneOtp(true);
    setErrors({});
  };

  const handlePhoneOtpSubmit = () => {
    if (!phoneOtp) {
      setErrors({phoneOtp: "Please enter OTP"});
      return;
    }

    if (phoneOtp === "12") {
      toast.success("Phone verified successfully!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // alert("Phone verified successfully!");
      setStep(3);
      setErrors({});
    } else {
      setErrors({phoneOtp: "Invalid OTP"});
    }
  };

  const handleFinalSubmit = () => {
    if (!name || !title || !username) {
      setErrors({
        name: !name ? "Name is required" : "",
        title: !title ? "Title is required" : "",
        username: !username ? "Username is required" : "",
      });
      return;
    }

    const formData = {
      email,
      phone,
      name,
      title,
      username,
    };

    console.log("Final form data:", formData);
    // toast notify
    alert("Form submitted successfully! Check console for data.");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full flex flex-col items-center">
        {/* Step 1 & 2 Container */}
        {(step === 1 || step === 2) && (
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            {step === 1 && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Email Verification
                </h2>
                {!showEmailOtp ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={handleEmailVerification}
                      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                      Send OTP
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Enter OTP
                      </label>
                      <input
                        type="text"
                        value={emailOtp}
                        onChange={(e) => setEmailOtp(e.target.value)}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter 6-digit OTP"
                      />
                      {errors.emailOtp && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.emailOtp}
                        </p>
                      )}
                      <p className="text-sm text-gray-600 mt-1">
                        OTP sent to: {email}
                      </p>
                    </div>
                    <button
                      onClick={handleEmailOtpSubmit}
                      className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                    >
                      Verify Email
                    </button>
                  </div>
                )}
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Phone Verification
                </h2>
                {!showPhoneOtp ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter 10-digit phone number"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={handlePhoneVerification}
                      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                      Send OTP
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Enter OTP
                      </label>
                      <input
                        type="text"
                        value={phoneOtp}
                        onChange={(e) => setPhoneOtp(e.target.value)}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter 6-digit OTP"
                      />
                      {errors.phoneOtp && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phoneOtp}
                        </p>
                      )}
                      <p className="text-sm text-gray-600 mt-1">
                        OTP sent to: {phone}
                      </p>
                    </div>
                    <button
                      onClick={handlePhoneOtpSubmit}
                      className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                    >
                      Verify Phone
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-xl">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
              Complete Your Profile
            </h2>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-1">
                  Email (Verified)
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    disabled
                    className="w-full px-4 py-2 pr-10 bg-gray-100 text-gray-500 border border-gray-300 rounded-lg cursor-not-allowed"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 text-xl">
                    ✓
                  </span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600 block mb-1">
                  Phone (Verified)
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={phone}
                    disabled
                    className="w-full px-4 py-2 pr-10 bg-gray-100 text-gray-500 border border-gray-300 rounded-lg cursor-not-allowed"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 text-xl">
                    ✓
                  </span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Web Developer"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                )}
              </div>

              {/* Username */}
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john123"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                )}
              </div>

              {/* Submit */}
              <button
                onClick={handleFinalSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Submit Profile
              </button>
            </div>
          </div>
        )}

        {/* Step Indicator */}
        <div className="mt-6 flex justify-center space-x-2">
          {[1, 2, 3].map((stepNum) => (
            <div
              key={stepNum}
              className={`w-3 h-3 rounded-full ${
                step >= stepNum ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthenticationForm;
