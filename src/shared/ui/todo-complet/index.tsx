import { memo } from "react";
// import completImg from "../../svg/complet.png";
import style from "./styles.module.scss";

export const TodoComplet = memo(
  ({
    complet,
    id,
    handleToggleStatus,
  }: {
    complet: boolean;
    handleToggleStatus: Function;
    id: string;
  }) => {
    return (
      <div onClick={() => handleToggleStatus(id)} className={style.round}>
        {complet ? <img src="" alt="" /> : null}
      </div>
    );
  }
);
