import { memo } from "react";
import styles from './DataGrid.module.css'

function GridRow({ user }) {
  return (
    <div className={styles.userContainer}>
      <div>{user.firstName}</div>
      <div>{user.lastName}</div>
      <div>{user.age}</div>
      <div>{user.email}</div>
    </div>
  );
}

export default memo(GridRow);
