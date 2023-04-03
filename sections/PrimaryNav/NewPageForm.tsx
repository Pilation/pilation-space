"use client";

import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import Collapse from "../../components/Collapse/index";
import CreateButton from "../../components/CreateButton";
import Divider from "../../components/Divider";
import { IPage, TLink, TRelationship } from "../../app/api/pages";
// styles
import styles from "../../styles/sections/PrimaryNav/NewPageForm.module.css";
import NewPageLink from "./NewPageLink";
import NewPageLinkForm from "./NewPageLinkForm";

export interface IPagesForSelect {
  id: string;
  name: string;
}

type Inputs = {
  pageName: string;
};

interface INewPageForm {
  pagesForSelect: IPage[];
  submitAction: (newPage: IPage) => void;
  css?: React.CSSProperties;
}

interface INewLink {
  displaying: {
    to: string;
    relatesAs: string;
  };
  data: {
    source: string;
    target: string;
    value: string;
  };
}

export default function NewPageForm({
  pagesForSelect,
  submitAction,
}: INewPageForm) {
  const [createPageIsActive, setCreatePageIsActive] = useState(false);
  const [createPagelinks, setCreatePageLinks] = useState<INewLink[] | []>([]);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState,
    formState: { errors, isDirty, isSubmitSuccessful },
  } = useForm<Inputs>();

  const newPageUuid = useRef("");
  const { ref, ...rest } = register("pageName", { required: true });
  const inputRef = useRef<null | HTMLInputElement>(null);

  const currentPageName = watch("pageName", "");

  const nameFilledChecker = () => {
    if (currentPageName && currentPageName.length > 0) return true;
    return false;
  };

  const onClickCreateButton = () => {
    setCreatePageIsActive(!createPageIsActive);
  };
  useEffect(() => {
    newPageUuid.current = uuidv4();
  }, []);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      setCreatePageLinks([]);
      reset();
    }
  }, [formState, isSubmitSuccessful, reset]);

  const onAddLink = (pageTo: string, relatesAs: TRelationship) => {
    const pageIndex = parseInt(pageTo.slice(pageTo.indexOf(",") + 1), 10);
    const pageToUuid = pageTo.slice(0, pageTo.indexOf(","));
    const targetPageName = pagesForSelect[pageIndex].name;

    const newLink = {
      displaying: {
        to: targetPageName as string,
        relatesAs,
      },
      data: {
        source: newPageUuid.current,
        target: pageToUuid,
        value: relatesAs,
      },
    };
    setCreatePageLinks([...createPagelinks, newLink as INewLink]);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newPageLinks =
      createPagelinks.length > 0
        ? createPagelinks.map((link) => link.data)
        : [];
    const newPage = {
      id: newPageUuid.current,
      name: data.pageName,
      links: newPageLinks,
    };
    submitAction(newPage);
    console.log(newPage);
  };
  const onFocusInput = () => {
    inputRef.current?.focus();
  };
  return (
    <form className={styles.newPageForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...rest}
        name="pageName"
        className={styles.newPageName}
        type="text"
        placeholder="Page name"
        ref={(e) => {
          ref(e);
          inputRef.current = e; // you can still assign to ref
        }}
      />

      {/* {errors.pageName && <span className={styles.newPageNameErrorText}>This field is required</span>} */}

      <div className={styles.newPageLinkContainer}>
        <ul className={styles.newPageList}>
          {createPagelinks.map((link, index) => (
            <NewPageLink
              key={index}
              to={link.displaying.to}
              relationship={link.displaying.relatesAs as "parent" | "child"}
            />
          ))}
        </ul>
        <div className={styles.newPageAddLinkContainer}>
          <Divider />
          <CreateButton handleClick={onClickCreateButton} />
          <Divider />
        </div>

        <Collapse isOpen={createPageIsActive}>
          <NewPageLinkForm
            pagesList={pagesForSelect}
            handleAddLink={onAddLink}
          />
          <Divider />
        </Collapse>
      </div>
      {nameFilledChecker() ? (
        <button type="button" className={styles.newPageSubmitButton}>
          Save page
        </button>
      ) : (
        <button
          type="button"
          className={`${styles.newPageSubmitButton} button-disabled`}
          onClick={onFocusInput}
        >
          Please add page name
        </button>
      )}
    </form>
  );
}
