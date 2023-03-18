import usePostalCode from "../hooks/usePostalCode";

function PostalCodeInput() {
  const [code, setCode] = usePostalCode();

  return (
    <div>
      <input
        type="text"
        placeholder="12-345"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
    </div>
  );
}

export default PostalCodeInput;
