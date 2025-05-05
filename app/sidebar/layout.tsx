import Profile from "./Profile";
import styles from "./sidebar.module.css";
import Stream from "./Stream";

export default function SidebarLayout() {
  return (
    <div className={styles.background}>
        <Stream />
        <Profile />
    </div>
  );
}
