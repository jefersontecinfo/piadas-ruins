import { useState } from "react";
import styles from "./../styles/components/Header.module.css";
import { Tooltip } from "@material-ui/core";

export default function Header() {
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img className={styles.logoOutline} src="./logo-outline.png" />
          <img className={styles.logoText} src="./logo-text.png" />
        </div>
        <div className={styles.buttonShare}>
          <Tooltip
            open={tooltipIsOpen}
            onOpen={() => setTooltipIsOpen(true)}
            onClose={() => setTooltipIsOpen(false)}
            title="Função indisponível"
          >
            <button
              className={styles.buttonShareStyle}
              onClick={() => setTooltipIsOpen(!tooltipIsOpen)}
            >
              <span className={styles.textShare}>Compartilhar</span>
              <i className="fas fa-share-alt fa-lg"></i>
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
