import styles from "./sidebar.module.css";
import localFont from "next/font/local";

const sonomaReg = localFont({ src: "../fonts/BRSonoma-Regular.otf" });
const sonomaMed = localFont({ src: "../fonts/BRSonoma-Medium.otf" });

const Profile = ({}) => {
  return (
    <div className={styles.profile}>
        <div className={styles.profileSection}>
            <p className={`${sonomaReg.className}`} style={{ fontSize: '14px'}}>Access Granted</p>
            <div className={styles.profileImgDiv}>
                <img className={styles.profileImg} src={'/headshot.jpeg'}/>
            </div>
            <p className={`${sonomaMed.className}`} style={{ fontSize: '30px', margin: '0', paddingTop: '20px'}}>Sohail</p>
            <p className={`${sonomaReg.className}`} style={{ fontSize: '15px', marginTop: '0' }}>Goated Intern 🐐</p>
            <div style={{display: "flex"}}>
                <img src={'/telephone.png'} style={{ height: '20px', marginRight: '30px', opacity: 0.6}}/>
                <img src={'/speech-bubble.png'} style={{ height: '20px', marginLeft: '30px', opacity: 0.6}}/>
            </div>  
        </div>
        <div className={styles.propertAccess}> 
            <img src={'/edit-text.png'} style={{ height: '15px', marginRight: '5px', opacity: 0.8}}/>
            <p className={`${sonomaReg.className}`} style={{ fontSize: '15px', marginTop: '0'}}>Edit Property Access</p>
        </div>
    </div>
  );
}

export default Profile;
