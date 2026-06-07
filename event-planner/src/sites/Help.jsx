// All references made can be found in the reading material for this Level, unless stated otherwise.
import "../App.css";

export default function Help() {
  return (
    <div className="help">
      <h1>Help</h1>

      <div className="section">
        <h2>1. Navigation</h2>
        <p>
          Use the top navigation bar to move between Dashboard, Add Event, and
          Help.
        </p>
      </div>

      <div className="section">
        <h2>2. Registering an Account</h2>
        <p>Go to the Register page and fill in:</p>
        <ul>
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Username</li>
          <li>Password</li>
        </ul>

        <p>Password must contain:</p>
        <ul>
          <li>At least 8 characters</li>
          <li>One uppercase letter</li>
          <li>One lowercase</li>
          <li>One number</li>
          <li>One special character</li>
        </ul>
      </div>

      <div className="section">
        <h2>3. Logging In</h2>
        <p>Enter your username and password to access your dashboard.</p>
      </div>

      <div className="section">
        <h2>4. Creating Events</h2>
        <p>Go to "Add Event" and fill in:</p>
        <ul>
          <li>Event Name</li>
          <li>Date</li>
          <li>Time</li>
          <li>Location</li>
          <li>Description</li>
        </ul>
      </div>

      <div className="section">
        <h2>5. Editing Events</h2>
        <p>
          Click the "Edit" button to any event. The form will open with existing
          details pre-filled.
        </p>
      </div>

      <div className="section">
        <h2>6. Deleting Events</h2>
        <p>CLick the "Delete" button to remove an event.</p>
      </div>

      <div className="section">
        <h2>7. Tips for Organisation</h2>
        <ul>
          <li>Keep event names short and clear</li>
          <li>Use accurate dates and times</li>
          <li>Review upcoming events daily</li>
          <li>Delete completed events regularly</li>
        </ul>
      </div>
    </div>
  );
}
