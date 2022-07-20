import './new.scss';
import { FC, useState } from 'react';

import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New: FC<any> = props => {
  const { inputs, title } = props;
  const [file, setFile] = useState<any>('');
  const ZERO = 0;
  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file as any)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  onChange={e =>
                    // @ts-ignore
                    setFile(e.target.files[ZERO])
                  }
                  type="file"
                  id="file"
                  style={{ display: 'none' }}
                />
              </div>

              {inputs.map((input: any) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              {/* <button>Send</button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
