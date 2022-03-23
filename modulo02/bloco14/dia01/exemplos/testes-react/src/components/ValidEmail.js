import React from 'react';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const {
    email,
    saveemail
   } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {
        (saveemail) &&
          (verifyEmail(email)
            ? <h3 style={{ color: 'green' }} >Email Válido
            </h3>
            : <h3 style={{ color: 'red' }}>Email Inválido
            </h3>
          )
      }
    </div>
  );
};

export default ValidEmail;
