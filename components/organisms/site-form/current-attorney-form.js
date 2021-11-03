export default function CurrentAttorneyNameForm({ attorney, setAttorney, attorneys }) {
  return (
    <label htmlFor="attorney-selected">
      <h3>
        <strong>1. Please select your name?</strong>
      </h3>

      <select
        id="attorney-selected"
        onChange={(e) => setAttorney(e.target.value)}
        name="attorney-selected"
        className={attorney ? 'd-block p-2 mb-3' : 'd-block p-2 mb-5'}
        style={{ minWidth: '350px', borderRadius: '6px' }}
      >
        <option value="">Select attorney</option>
        <option value=" ">Name not listed</option>
        {attorneys.map((a) => (
          <option key={a.name} value={a.name}>
            {a.name}
          </option>
        ))}
      </select>
    </label>
  );
}
