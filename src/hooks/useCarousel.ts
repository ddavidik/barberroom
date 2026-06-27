import { useState, useCallback, useRef } from "react";

export type Direction = "left" | "right" | null;

export const useCarousel = (count: number, initialIndex = 0) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [direction, setDirection] = useState<Direction>(null);
  const dragStart = useRef<number | null>(null);

  const mod = (n: number) => ((n % count) + count) % count;

  const prev = useCallback(() => {
    setDirection("left");
    setActiveIndex((i) => mod(i - 1));
  }, [count]);

  const next = useCallback(() => {
    setDirection("right");
    setActiveIndex((i) => mod(i + 1));
  }, [count]);

  const goTo = useCallback(
    (index: number) => {
      const target = mod(index);
      setDirection(target > activeIndex ? "right" : "left");
      setActiveIndex(target);
    },
    [activeIndex, count],
  );

  // Returns the visual position of a card: "center" | "left" | "right" | "hidden"
  const getPosition = useCallback(
    (cardIndex: number): "center" | "left" | "right" => {
      const leftIndex = mod(activeIndex - 1);
      if (cardIndex === activeIndex) return "center";
      if (cardIndex === leftIndex) return "left";
      return "right";
    },
    [activeIndex, count],
  );

  // Touch / drag handlers
  const onDragStart = useCallback((clientX: number) => {
    dragStart.current = clientX;
  }, []);

  const onDragEnd = useCallback(
    (clientX: number) => {
      if (dragStart.current === null) return;
      const delta = dragStart.current - clientX;
      dragStart.current = null;
      if (Math.abs(delta) < 40) return;
      if (delta > 0) next();
      else prev();
    },
    [next, prev],
  );

  return {
    activeIndex,
    direction,
    prev,
    next,
    goTo,
    getPosition,
    onDragStart,
    onDragEnd,
  };
};
