import React from 'react';
import MainLayout from "../layouts/main-layout";


const UnderConstruction = () => {

  const [isPreload, setIsPreload] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsPreload(false);
    }, 1000);
  }, []);

  return (
    <MainLayout>
      <div className="landing main-body">
        <div className={`page-wrapper ${isPreload ? 'preload' : ''}`}>
          <div className="banner">
            <div className="inner">
              <h2>
                สินสวัสดิ์
              </h2>
              <p>เรากำลังปรับเปลี่ยนเว็บไซต์</p>
              <p>ไปยัง <a href="https://www.rubbertubesinsawad.com/">Yellow Pages</a></p>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UnderConstruction;