export default function NewAttorneyNameForm({ attorney, setAttorney }) {
  return (
    <label htmlFor="attorney-name">
      <h3>
        <strong> Welcome to the firm! Please enter your name</strong>
      </h3>
      <input
        type="text"
        name="attorney-name"
        id="attorney-name"
        className="d-block p-2 mb-5 w-50"
        placeholder="Enter full name"
        value={attorney}
        onChange={(e) => setAttorney(e.target.value)}
      />
    </label>
  );
}
