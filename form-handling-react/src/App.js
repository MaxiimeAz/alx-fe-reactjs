import React from 'react';
import RegistrationForm from './components/RegistrationForm';  // Controlled form
import FormikForm from './components/FormikForm';  // Formik form

function App() {
  return (
    <div>
      <h1>User Registration</h1>
      {/* You can switch between the forms */}
      <FormikForm />
      {/* Or use the controlled form */}
      {/* <RegistrationForm /> */}
    </div>
  );
}

export default App;
