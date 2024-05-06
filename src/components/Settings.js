import React, { useState, useEffect } from 'react';

function Settings({ onChange }) {
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(4);

  useEffect(() => {
    // Whenever rows or columns change, update the parent component's state.
    if ((rows * cols) % 2 === 0) { // Ensure total cards are even
      onChange({ rows, cols });
    }
  }, [rows, cols, onChange]);

  return (
    <div>
      <div>
        <label htmlFor="rows">Rows (3-5):</label>
        <select id="rows" value={rows} onChange={e => setRows(parseInt(e.target.value, 10))}>
          {[3, 4, 5].map(row => (
            <option key={row} value={row}>{row}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="cols">Columns (3-5):</label>
        <select id="cols" value={cols} onChange={e => setCols(parseInt(e.target.value, 10))}>
          {[3, 4, 5].map(col => (
            <option key={col} value={col}>{col}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Settings;
