import type { Metadata } from "next";
import styles from "./page.module.css";
import SidebarLayout from "./sidebar/layout";

export const metadata: Metadata = {
  title: "Sohail's Sauron Pitch",
  description: "Sohail's Sauron Pitch",
};
export default function RootLayout() {
  return (
    <html lang="en">
      <body className={styles.background}>
        <SidebarLayout />
      </body>
    </html>
  );
}
