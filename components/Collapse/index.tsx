"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./styles.module.css";

//! change duration here in MS
const transitionTime = 0.2;

declare global {
  interface Window {
    intervalChangeHeight: NodeJS.Timeout;
  }
}

interface ICollapse {
  children: React.ReactNode;
  // classes?: string;
  isOpen: boolean;
  style?: React.CSSProperties;
}

interface IChangingHeight {
  time: number;
  elementHeight: number;
  direction?: "up";
}

export default function Collapse({
  children,
  isOpen = false,
  style,
}: ICollapse) {
  const [height, setHeight] = useState<number | string>(0);
  const [collapseBodyHeight, setCollapseBodyHeight] = useState(0);

  const collapseBodyRef = useRef<null | HTMLDivElement>(null);
  const expanded = useRef(false);
  const intervalStarted = useRef<null | boolean>(false);

  const stopChangeHeight = () => {
    clearInterval(window.intervalChangeHeight as NodeJS.Timeout);
    intervalStarted.current = false;
  };
  const startChangeHeight = (objArgs: IChangingHeight) => {
    const { time, elementHeight, direction = "down" } = objArgs;
    const milisecTime = time * 1000;
    const interval = 15;
    const stepsAmount = milisecTime / interval;

    stopChangeHeight();
    if (direction === "up") {
      const oneStep = Math.round(collapseBodyHeight / stepsAmount);
      let counter = collapseBodyHeight;
      window.intervalChangeHeight = setInterval(() => {
        counter -= oneStep;
        const settedValue = counter < 0 ? 0 : counter;
        setHeight(settedValue);
      }, interval);

      return;
    }

    const oneStep = Math.round(elementHeight / stepsAmount);
    let counter = 0;
    window.intervalChangeHeight = setInterval(() => {
      counter += oneStep;
      const settedValue =
        counter > collapseBodyHeight ? collapseBodyHeight : counter;
      setHeight(settedValue);
    }, interval);
  };
  useEffect(() => {
    const elemeltHeight = collapseBodyRef.current?.offsetHeight as number;
    const getChildMargins = () => {
      const checker =
        (collapseBodyRef.current?.childNodes.length as number) > 0;
      if (!checker) return 0;
      const childStyles = window.getComputedStyle(
        collapseBodyRef.current?.childNodes[0] as HTMLDivElement
      );
      const margins =
        parseFloat(childStyles.marginTop) +
        parseFloat(childStyles.marginBottom);
      return margins;
    };

    setCollapseBodyHeight(elemeltHeight + getChildMargins());
    if (isOpen) {
      startChangeHeight({
        elementHeight: collapseBodyHeight as number,
        time: transitionTime,
      });
      intervalStarted.current = true;
      return;
    }
    if (!isOpen && expanded.current) {
      startChangeHeight({
        elementHeight: 0,
        time: transitionTime,
        direction: "up",
      });
      intervalStarted.current = true;
      return;
    }
    stopChangeHeight();
    setHeight(0);
  }, [isOpen]);

  if (
    isOpen &&
    intervalStarted.current &&
    (height as number) >= collapseBodyHeight
  ) {
    stopChangeHeight();
    expanded.current = true;
    // console.log('collapse opened')
    setTimeout(() => setHeight("auto"), 0);
  }

  if (!isOpen && intervalStarted.current && (height as number) <= 0) {
    stopChangeHeight();
    expanded.current = false;
    // console.log('collapse closed')
  }

  return (
    <div style={{ height, ...style }} className={styles.collapseContainter}>
      <div
        style={{
          top: isOpen ? 0 : -collapseBodyHeight,
          transitionDuration: `${transitionTime}s`,
        }}
        className={styles.collapseBody}
        ref={collapseBodyRef}
      >
        {children}
      </div>
    </div>
  );
}
