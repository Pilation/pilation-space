"use client";

import {
  faChevronDown,
  faFolder,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import Collapse from "../../components/Collapse/index";
import { TRelationship } from "../../app/api/pages";
import styles from "./styles/Element.module.css";

export interface IPagesForMenuLink {
  target: string;
  value: TRelationship;
}

export interface IPagesForMenu {
  id: string;
  name: string;
  links?: IPagesForMenuLink[];
}

interface IElement {
  page: IPagesForMenu;
  // css?: React.CSSProperties;
  active: boolean;
  handleClick: () => void;
  handleDelete: () => void;
}

export default function Element({
  page,
  // css,
  handleClick,
  handleDelete,
  active,
}: IElement) {
  const [isOpened, setIsOpened] = useState(false);
  const toggleCollapse = () => {
    setIsOpened(!isOpened);
    handleClick();
  };

  return (
    <li className={styles.wrapper}>
      <button
        type="button"
        className={styles.page + (active ? ` ${styles.current}` : "")}
        onClick={toggleCollapse}
      >
        <FontAwesomeIcon icon={faFolder} className={styles.folderIcon} />
        <p>{page.name}</p>
        {page.links && (
          <FontAwesomeIcon
            icon={faChevronDown}
            className={
              styles.arrowIcon + (isOpened ? ` ${styles.rotated}` : "")
            }
          />
        )}
      </button>
      <div className={styles.config}>
        <button
          type="button"
          className={styles.deleteButton}
          onClick={handleDelete}
        >
          <FontAwesomeIcon icon={faTrash} className={styles.deleteIcon} />
        </button>
      </div>
      <Collapse isOpen={isOpened} style={{ flex: "1 1 100%" }}>
        {page.links &&
          page.links.map((link, index) => (
            <div className={styles.link} key={index}>
              <p>
                <span>target:</span>
                <span>{link.target}</span>
              </p>
              <p>
                <span>relatinship:</span>
                <span>{link.value}</span>
              </p>
            </div>
          ))}
      </Collapse>
    </li>
  );
}
