import { useState } from "react";
import { NumericFormat } from "react-number-format";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [hasInputChanged, setHasInputChanged] = useState<boolean>(false);

  const currentReactState = (() => {
    if (inputValue === null) {
      return <span style={{ color: "red" }}>(null)</span>
    } else if (inputValue === "") {
      return <span style={{ color: "yellow" }}>(empty string)</span>
    } else {
      return <span style={{ border: "1px solid red", padding: "0.2em" }}>{inputValue}</span>
    }
  })();

	return (
    <div className="App">
      <p>The default value of the React state behind the numeric input below is <code>null</code>. If you type numbers into the field, you will see the current React state update.</p>
      <ol style={{ textAlign: "left" }}>
        <li>Enter a value into the numeric input field.</li>
        <li>Note how the <strong>Current React state</strong> value changes with it.</li>
        <li>Click the <strong>Reset to <code>null</code></strong> button.</li>
        <li>Note how the <strong>Current React state</strong> value has reset back to <code>null</code>.</li>
        <li>Note how the numeric input still shows the value you entered prior to clicking the reset button.</li>
        <li>Click the <strong>Reset to <code>""</code> (empty string)</strong> button.</li>
        <li>Note how the numeric input is now rendered with no value.</li>
      </ol>

      <div style={{ margin: "0.5em" }}>
        <strong>Current React state:</strong> {currentReactState}
      </div>

      <NumericFormat
        inputMode={"numeric"}
        onChange={(ev) => {
          if (!hasInputChanged) {
            setHasInputChanged(true);
          }

          setInputValue(ev.currentTarget.value)
        }}
        value={inputValue}
        autoFocus
      />

      <button type="button" onClick={() => setInputValue(null)} disabled={!hasInputChanged}>
        Reset to <code>null</code>
      </button>

      <button type="button" onClick={() => setInputValue("")} disabled={!hasInputChanged}>
        Reset to <code>""</code> (empty string)
      </button>
		</div>
	);
}

export default App;
