import type { Metadata } from "next";
import styles from "./page.module.css";
import SidebarLayout from "./sidebar/layout";
import ModelLayout from "./model/layout";
import React from "react";

export const metadata: Metadata = {
  title: "Sohail's Sauron Pitch",
  description: "Sohail's Sauron Pitch",
};
export default function RootLayout() {
  return (
    <html lang="en">
      <body className={styles.background}>
        <SidebarLayout />
        <ModelLayout />
      </body>
    </html>
  );
}
