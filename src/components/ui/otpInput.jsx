import React, { useState, useRef } from 'react';

const OTPInput = ({ length = 6, onChange }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) { // only allow digits
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      onChange && onChange(newOtp.join(''));

      // focus next input
      if (value && index < length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={el => inputsRef.current[index] = el}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          placeholder='-'
          style={{
            width: '2.7rem',
            height: '2.7rem',
            textAlign: 'center',
            fontSize: '1.5rem',
            borderRadius: '0.5rem',
            border: '1px solid #000',
            backgroundColor: '#1e1e1e',
            color: '#fff'
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
