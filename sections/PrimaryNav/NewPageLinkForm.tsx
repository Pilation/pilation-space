"use client";

import { useRef, useState } from "react";

import { TRelationship } from "../../app/api/pages";
import styles from "./styles/NewPageLinkForm.module.css";

interface INewPageLinkForm {
  pagesList: { id: string; name: string }[];
  handleAddLink: (pageTo: string, relatesAs: TRelationship) => void;
  // css?: React.CSSProperties;
}

const pagesRelationshipTypes = [
  "parent",
  "child",
  "interactsWith",
  "encapsulates",
];

export default function NewPageLinkForm({
  pagesList,
  handleAddLink,
}: INewPageLinkForm) {
  const [pageTo, setPageTo] = useState<string>("relatesto");
  const [relatesAs, setRelatesAs] = useState<TRelationship | "relationships">(
    "relationships"
  );
  const [optionsAreSelected, setOptionsAreSelected] = useState({
    pageTo: false,
    relatesAs: false,
  });
  const handlePageTo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPageTo(event.target.value);
    if (!optionsAreSelected.pageTo)
      setOptionsAreSelected({ ...optionsAreSelected, pageTo: true });
  };
  const handleRelatesAs = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRelatesAs(event.target.value as TRelationship);
    if (!optionsAreSelected.relatesAs)
      setOptionsAreSelected({ ...optionsAreSelected, relatesAs: true });
  };

  const selectPage = useRef<null | HTMLSelectElement>(null);
  const selectRelationShips = useRef<null | HTMLSelectElement>(null);

  const handleClick = () => {
    setPageTo("relatesto");
    setRelatesAs("relationships");
    handleAddLink(pageTo, relatesAs as TRelationship);
    setOptionsAreSelected({
      pageTo: false,
      relatesAs: false,
    });
  };
  const onFocusSelect = () => {
    if (!optionsAreSelected.pageTo) {
      selectPage.current?.focus();
      return;
    }
    selectRelationShips.current?.focus();
  };

  const optionsAreSelectedChecker = Object.values(optionsAreSelected).every(
    (e) => e === true
  );
  return (
    <div className={styles.newPageLinkForm}>
      <select
        className={styles.newPageLinkValueSelect}
        ref={selectPage}
        value={pageTo}
        onChange={handlePageTo}
      >
        <option value="relatesto" disabled style={{ display: "none" }}>
          Relates To
        </option>
        {pagesList.map((page, index) => (
          <option key={page.id} value={`${page.id},${index}`}>
            {page.name}
          </option>
        ))}
      </select>
      <select
        className={styles.newPageLinkValueSelect}
        ref={selectRelationShips}
        value={relatesAs}
        onChange={handleRelatesAs}
      >
        <option value="relationships" disabled style={{ display: "none" }}>
          Relationships
        </option>
        {pagesRelationshipTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      {!optionsAreSelectedChecker ? (
        <button
          type="button"
          className={`${styles.newPageSubmitButton} button-disabled`}
          onClick={onFocusSelect}
        >
          Please fill links data
        </button>
      ) : (
        <button
          type="button"
          className={styles.newPageSubmitButton}
          onClick={handleClick}
        >
          Add link
        </button>
      )}
    </div>
  );
}
