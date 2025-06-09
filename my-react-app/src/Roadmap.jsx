import React from 'react';
import './Roadmap.css';
import { useCache } from './hooks/useLocalStorage';

function Roadmap() {
  const [checklist, setChecklist] = useCache('roadmap-checklist', {
    // Backend Authentication
    setupExpress: false,
    jwtAuth: false,
    userModel: false,
    passwordHash: false,
    authEndpoints: false,

    // Error Handling
    formValidation: false,
    errorBoundary: false,
    toastNotifications: false,
    errorMiddleware: false,

    // Auth State Management
    reduxSetup: false,
    tokenStorage: false,
    tokenRefresh: false,
    authPersistence: false,

    // Logout Function
    clientLogout: false,
    clearStorage: false,
    invalidateToken: false,
    autoLogout: false,

    // Security Enhancements
    secureClientLogout: false,
    secureClearStorage: false,
    secureInvalidateToken: false,
    secureAutoLogout: false,

    // Form Validation
    frontendValidation: false,
    passwordStrength: false,
    emailValidation: false,
    validationSchemas: false,

    // Security Features
    httpsSetup: false,
    csrfProtection: false,
    rateLimiting: false,
    securePasswordHash: false,
    xssProtection: false
  });

  const handleCheckboxChange = (key) => {
    setChecklist(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="roadmap-container">
      <h1>Authentication System Roadmap</h1>
      <section>
        <h2>Backend Authentication</h2>
        <ul className="no-bullets">
          <li>
            <input type="checkbox" 
              checked={checklist.setupExpress}
              onChange={() => handleCheckboxChange('setupExpress')}
            /> Set up Express.js server
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.jwtAuth}
              onChange={() => handleCheckboxChange('jwtAuth')}
            /> Implement JWT authentication
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.userModel}
              onChange={() => handleCheckboxChange('userModel')}
            /> Create user model with MongoDB/PostgreSQL
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.passwordHash}
              onChange={() => handleCheckboxChange('passwordHash')}
            /> Add password hashing with bcrypt
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.authEndpoints}
              onChange={() => handleCheckboxChange('authEndpoints')}
            /> Create login/register endpoints
          </li>
        </ul>

        <h2>Error Handling</h2>
        <ul className="no-bullets">
          <li>
            <input type="checkbox" 
              checked={checklist.formValidation}
              onChange={() => handleCheckboxChange('formValidation')}
            /> Add form validation
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.errorBoundary}
              onChange={() => handleCheckboxChange('errorBoundary')}
            /> Implement error boundary components
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.toastNotifications}
              onChange={() => handleCheckboxChange('toastNotifications')}
            /> Create toast notifications for errors
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.errorMiddleware}
              onChange={() => handleCheckboxChange('errorMiddleware')}
            /> Add API error handling middleware
          </li>
        </ul>

        <h2>Authentication State Management</h2>
        <ul className="no-bullets">
          <li>
            <input type="checkbox" 
              checked={checklist.reduxSetup}
              onChange={() => handleCheckboxChange('reduxSetup')}
            /> Set up Redux/Context for auth state
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.tokenStorage}
              onChange={() => handleCheckboxChange('tokenStorage')}
            /> Implement token storage in localStorage
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.tokenRefresh}
              onChange={() => handleCheckboxChange('tokenRefresh')}
            /> Add token refresh mechanism
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.authPersistence}
              onChange={() => handleCheckboxChange('authPersistence')}
            /> Create auth persistence layer
          </li>
        </ul>

        <h2>Logout Function</h2>
        <ul className="no-bullets">
          <li>
            <input type="checkbox" 
              checked={checklist.clientLogout}
              onChange={() => handleCheckboxChange('clientLogout')}
            /> Add client-side logout
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.clearStorage}
              onChange={() => handleCheckboxChange('clearStorage')}
            /> Clear local storage
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.invalidateToken}
              onChange={() => handleCheckboxChange('invalidateToken')}
            /> Invalidate token on backend
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.autoLogout}
              onChange={() => handleCheckboxChange('autoLogout')}
            /> Add auto-logout on token expiry
          </li>
        </ul>

        <h2>Security Enhancements</h2>
        <ul className="no-bullets">
          <li>
            <input type="checkbox" 
              checked={checklist.secureClientLogout}
              onChange={() => handleCheckboxChange('secureClientLogout')}
            /> Add client-side logout
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.secureClearStorage}
              onChange={() => handleCheckboxChange('secureClearStorage')}
            /> Clear local storage
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.secureInvalidateToken}
              onChange={() => handleCheckboxChange('secureInvalidateToken')}
            /> Invalidate token on backend
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.secureAutoLogout}
              onChange={() => handleCheckboxChange('secureAutoLogout')}
            /> Add auto-logout on token expiry
          </li>
        </ul>

        <h2>Form Validation</h2>
        <ul className="no-bullets">
          <li>
            <input type="checkbox" 
              checked={checklist.frontendValidation}
              onChange={() => handleCheckboxChange('frontendValidation')}
            /> Add frontend validation using Formik/React Hook Form
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.passwordStrength}
              onChange={() => handleCheckboxChange('passwordStrength')}
            /> Implement password strength requirements
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.emailValidation}
              onChange={() => handleCheckboxChange('emailValidation')}
            /> Add email validation
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.validationSchemas}
              onChange={() => handleCheckboxChange('validationSchemas')}
            /> Create reusable validation schemas
          </li>
        </ul>

        <h2>Security Features</h2>
        <ul className="no-bullets">
          <li>
            <input type="checkbox" 
              checked={checklist.httpsSetup}
              onChange={() => handleCheckboxChange('httpsSetup')}
            /> HTTPS Setup
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.csrfProtection}
              onChange={() => handleCheckboxChange('csrfProtection')}
            /> CSRF protection
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.rateLimiting}
              onChange={() => handleCheckboxChange('rateLimiting')}
            /> Rate limiting
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.securePasswordHash}
              onChange={() => handleCheckboxChange('securePasswordHash')}
            /> Password hashing
          </li>
          <li>
            <input type="checkbox" 
              checked={checklist.xssProtection}
              onChange={() => handleCheckboxChange('xssProtection')}
            /> XSS protection
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Roadmap;