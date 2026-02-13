"use client";

import React, { useEffect, useRef } from "react";

export type CardContent = {
  id: string | number;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  bgClass?: string;
};

type SlidingCardsProps = {
  cards: CardContent[];
  className?: string;
  cardWidth?: string;
  onCardClick?: (index: number) => void;
};

// GoToGreen themed gradient mapping for cards
const gradientStyles: Record<string, React.CSSProperties> = {
  'bg-gradient-to-br from-green-400 to-emerald-600': {
    background: 'linear-gradient(135deg, #0F3D23 0%, #6EA843 100%)'  // Primary to Accent
  },
  'bg-gradient-to-br from-blue-400 to-indigo-600': {
    background: 'linear-gradient(135deg, #1a5c3a 0%, #3d8b5f 100%)'  // Forest green variant
  },
  'bg-gradient-to-br from-teal-400 to-cyan-500': {
    background: 'linear-gradient(135deg, #2d6a4f 0%, #52b788 100%)'  // Teal green variant
  },
  'bg-gradient-to-br from-purple-400 to-pink-500': {
    background: 'linear-gradient(135deg, #40916c 0%, #74c69d 100%)'  // Light green variant
  },
};
   
const SlidingCards: React.FC<SlidingCardsProps> = ({
  cards,
  className = "",
  onCardClick,
}) => {
  const cardStackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const cardStack = cardStackRef.current;
    if (!cardStack) return;
    cardsRef.current = Array.from(cardStack.querySelectorAll(".card"));

    let isSwiping = false;
    let startX = 0;
    let currentX = 0;
    let animationFrameId: number | null = null;
    let autoSlideTimer: NodeJS.Timeout | null = null;
    let pendingAnimationTimeouts: NodeJS.Timeout[] = [];

    const getDuration = () => 300;

    const getActiveCard = () => cardsRef.current[0];

    const clearPendingAnimations = () => {
      pendingAnimationTimeouts.forEach(timer => clearTimeout(timer));
      pendingAnimationTimeouts = [];
    };

    const updatePositions = () => {
      cardsRef.current.forEach((card, i) => {
        const offset = i + 1;
        card.style.zIndex = `${100 - offset}`;
        card.style.transform = `perspective(700px) translateZ(${-12 * offset}px) translateY(${7 * offset}px) translateX(0px) rotateY(0deg) rotateZ(${i === 0 ? 2 : 0}deg)`;
        card.style.opacity = `1`;
      });
    };

    const resetAutoSlideTimer = () => {
      if (autoSlideTimer) clearTimeout(autoSlideTimer);
      autoSlideTimer = setTimeout(() => {
        triggerAutoSlide();
      }, 2500);
    };

    const triggerAutoSlide = () => {
      if (isSwiping) return;
      const card = getActiveCard();
      if (!card) return;

      const duration = getDuration();
      card.style.transition = `transform ${duration}ms ease, opacity ${duration}ms ease`;
      card.style.transform = `perspective(700px) translateZ(-12px) translateY(7px) translateX(-300px) rotateY(-20deg) rotateZ(2deg)`;
      card.style.opacity = '0.25';

      const timeout1 = setTimeout(() => {
        if (isSwiping) return;
        const currentCard = getActiveCard();
        if (currentCard === card) {
          currentCard.style.transform = `perspective(700px) translateZ(-12px) translateY(7px) translateX(-300px) rotateY(20deg) rotateZ(2deg)`;
        }
      }, duration / 2);

      const timeout2 = setTimeout(() => {
        if (isSwiping) return;
        const currentCard = getActiveCard();
        if (currentCard === card) {
          cardsRef.current = [...cardsRef.current.slice(1), card];
          updatePositions();
        }
        pendingAnimationTimeouts = pendingAnimationTimeouts.filter(t => t !== timeout1 && t !== timeout2);
        resetAutoSlideTimer();
      }, duration);

      pendingAnimationTimeouts.push(timeout1, timeout2);
    };

    const applySwipeStyles = (deltaX: number) => {
      const card = getActiveCard();
      if (!card) return;
      const rotate = deltaX * 0.2;
      const opacity = 1 - Math.min(Math.abs(deltaX) / 100, 1) * 0.75;
      card.style.transform = `perspective(700px) translateZ(-12px) translateY(7px) translateX(${deltaX}px) rotateY(${rotate}deg) rotateZ(2deg)`;
      card.style.opacity = `${opacity}`;
    };

    const handleStart = (clientX: number) => {
      if (isSwiping) return;
      clearPendingAnimations();
      if (autoSlideTimer) clearTimeout(autoSlideTimer);
      isSwiping = true;
      startX = currentX = clientX;
      const card = getActiveCard();
      if (card) {
        card.style.transition = "none";
      }
    };

    const handleMove = (clientX: number) => {
      if (!isSwiping) return;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        currentX = clientX;
        const deltaX = currentX - startX;
        applySwipeStyles(deltaX);
        if (Math.abs(deltaX) > 50) handleEnd();
      });
    };

    const handleEnd = () => {
      if (!isSwiping) return;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      const deltaX = currentX - startX;
      const threshold = 50;
      const duration = getDuration();
      const card = getActiveCard();

      if (card) {
        card.style.transition = `transform ${duration}ms ease, opacity ${duration}ms ease`;

        if (Math.abs(deltaX) > threshold) {
          const direction = Math.sign(deltaX);
          card.style.transform = `perspective(700px) translateZ(-12px) translateY(7px) translateX(${direction * 300}px) rotateY(${direction * 20}deg) rotateZ(2deg)`;

          const timeout1 = setTimeout(() => {
            const currentCard = getActiveCard();
            if (currentCard === card) {
              currentCard.style.transform = `perspective(700px) translateZ(-12px) translateY(7px) translateX(${direction * 300}px) rotateY(${-direction * 20}deg) rotateZ(2deg)`;
            }
          }, duration / 2);

          const timeout2 = setTimeout(() => {
            const currentCard = getActiveCard();
            if (currentCard === card) {
              cardsRef.current = [...cardsRef.current.slice(1), card];
              updatePositions();
            }
            isSwiping = false;
            startX = currentX = 0;
            pendingAnimationTimeouts = pendingAnimationTimeouts.filter(t => t !== timeout1 && t !== timeout2);
            resetAutoSlideTimer();
          }, duration);

          pendingAnimationTimeouts.push(timeout1, timeout2);
        } else {
          applySwipeStyles(0);
          isSwiping = false;
          startX = currentX = 0;
          resetAutoSlideTimer();
        }
      } else {
        isSwiping = false;
        startX = currentX = 0;
      }
    };

    cardStack.addEventListener("pointerdown", (e) => handleStart(e.clientX));
    cardStack.addEventListener("pointermove", (e) => handleMove(e.clientX));
    cardStack.addEventListener("pointerup", handleEnd);
    cardStack.addEventListener("pointercancel", handleEnd);

    updatePositions();
    resetAutoSlideTimer();

    return () => {
      if (autoSlideTimer) clearTimeout(autoSlideTimer);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      clearPendingAnimations();
      cardStack.removeEventListener("pointerdown", (e) => handleStart(e.clientX));
      cardStack.removeEventListener("pointermove", (e) => handleMove(e.clientX));
      cardStack.removeEventListener("pointerup", handleEnd);
      cardStack.removeEventListener("pointercancel", handleEnd);
    };
  }, []);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '320px',
    height: '384px',
    display: 'grid',
    placeContent: 'center',
    touchAction: 'none',
    userSelect: 'none',
  };

  const cardStyle = (bgClass?: string): React.CSSProperties => ({
    position: 'absolute',
    inset: 0,
    borderRadius: '16px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    cursor: 'grab',
    transition: 'transform 0.3s ease-in-out',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
    ...(bgClass && gradientStyles[bgClass] ? gradientStyles[bgClass] : { background: 'linear-gradient(to bottom right, #f9a8d4, #fdba74)' }),
  });

  const iconContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
  };

  const iconBoxStyle: React.CSSProperties = {
    width: '56px',
    height: '56px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    display: 'grid',
    placeContent: 'center',
    backdropFilter: 'blur(4px)',
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: 'white',
    textShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    lineHeight: 1.3,
    margin: 0,
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.9)',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    lineHeight: 1.6,
    margin: 0,
  };

  return (
    <section
      ref={cardStackRef}
      className={className}
      style={containerStyle}
    >
      {cards.map(({ id, title, description, icon, bgClass }, index) => (
        <article
          key={id}
          onClick={() => onCardClick?.(index)}
          className="card"
          style={cardStyle(bgClass)}
        >
          {/* Top Icon */}
          <div style={iconContainerStyle}>
            <div style={iconBoxStyle}>
              {icon}
            </div>
          </div>

          {/* Bottom Content */}
          <div style={contentStyle}>
            <h3 style={titleStyle}>
              {title || "Feature"}
            </h3>
            <p style={descriptionStyle}>
              {description || "Description"}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default SlidingCards;
