import "./UploadFiles.css";

const UploadFiles = ({ onUploadedFile }) => {
  return (
    <div className="oneSpec">
      <label className="specName">Upload XSF File</label>
      <input
        className="upFile"
        type="file"
        multiple
        onChange={onUploadedFile}
      />
    </div>
  );
};

export default UploadFiles;
