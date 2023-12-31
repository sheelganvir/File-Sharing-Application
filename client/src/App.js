import { useRef, useState, useEffect } from 'react';
import { uploadFile } from './services/api';
import './App.css';

function App() {

  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }
  

  return (
    <div className = 'container'>
      <img src="./uploads/logo.png" alt="logo" />
      <div className="wrapper">
        <h1>Simple File Sharing!</h1>
        <p>Upload and share the download link</p>

        <button className='btn btn-300' onClick={() => onUploadClick()}>Upload ▼</button>
        <input type="file" 
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <a href={result} target="_blank">{result}</a>
      </div>
      

      <footer>
        Copywrite © 2024 SheelGanvir
      </footer>
    </div>
  );
}

export default App;
