
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import { HalomotButton } from "./halomot-button";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  link?: string;
};

type ProjectShowcaseProps = {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: { name?: string; position?: string; testimony?: string };
  fontSizes?: { name?: string; position?: string; testimony?: string };
  spacing?: {
    top?: string;
    bottom?: string;
    lineHeight?: string;
    nameTop?: string;
    nameBottom?: string;
    positionTop?: string;
    positionBottom?: string;
    testimonyTop?: string;
    testimonyBottom?: string;
  };
  desktopVersionBottomThreshold?: number;
  maxImageWidth?: number;
  imageWidthPercentage?: number;
  mobile?: {
    fontSizes?: { name?: string; position?: string; testimony?: string };
    spacing?: {
      top?: string;
      bottom?: string;
      lineHeight?: string;
      nameTop?: string;
      nameBottom?: string;
      positionTop?: string;
      positionBottom?: string;
      testimonyTop?: string;
      testimonyBottom?: string;
    };
  };
  imageAspectRatio?: number;
  isRTL?: boolean;
  onItemClick?: (link: string) => void;
  outerRounding?: string;
  innerRounding?: string;
  outlineColor?: string;
  hoverOutlineColor?: string;
  buttonInscriptions?: {
    previousButton: string;
    nextButton: string;
    openWebAppButton: string;
  };
  halomotButtonGradient?: string;
  halomotButtonBackground?: string;
  halomotButtonTextColor?: string;
  halomotButtonOuterBorderRadius?: string;
  halomotButtonInnerBorderRadius?: string;
  halomotButtonHoverTextColor?: string;
};

export const ProjectShowcase = ({
  testimonials,
  autoplay = false,
  colors = { name: "#fff", position: "gray-500", testimony: "gray-500" },
  fontSizes = { name: "2xl", position: "sm", testimony: "lg" },
  spacing = {
    top: "20",
    bottom: "20",
    lineHeight: "1.5",
    nameTop: "0",
    nameBottom: "0.5em",
    positionTop: "0",
    positionBottom: "0.25em",
    testimonyTop: "1em",
    testimonyBottom: "1em"
  },
  desktopVersionBottomThreshold = 768,
  mobile = {},
  imageAspectRatio = 1.37,
  isRTL = false,
  onItemClick,
  outerRounding = "18.2px",
  innerRounding = "18px",
  outlineColor = "#33313d",
  hoverOutlineColor = "#403d4d",
  buttonInscriptions = {
    previousButton: "Previous",
    nextButton: "Next",
    openWebAppButton: "Open Web App"
  },
  halomotButtonGradient = "linear-gradient(to right, #a123f4, #603dec)",
  halomotButtonBackground = "#111014",
  halomotButtonTextColor = "#fff",
  halomotButtonOuterBorderRadius = "6.34px",
  halomotButtonInnerBorderRadius = "6px",
  halomotButtonHoverTextColor
}: ProjectShowcaseProps) => {
  const [active, setActive] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [componentWidth, setComponentWidth] = useState(0);
  const componentRef = useRef<HTMLDivElement>(null);

  // Use Mobile Config (with defaults)
  const currentFontSizes =
    isMobileView && mobile.fontSizes ? mobile.fontSizes : fontSizes;
  const currentSpacing = {
    ...spacing,
    ...(isMobileView && mobile.spacing ? mobile.spacing : {})
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const handleResize = useCallback(() => {
    if (componentRef.current) {
      setComponentWidth(componentRef.current.offsetWidth);
      setIsMobileView(
        componentRef.current.offsetWidth < desktopVersionBottomThreshold
      );
    }
  }, [desktopVersionBottomThreshold]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize);
    if (componentRef.current) {
      resizeObserver.observe(componentRef.current);
    }
    handleResize(); // Initial check
    return () => {
      if (componentRef.current) {
        resizeObserver.unobserve(componentRef.current);
      }
    };
  }, [handleResize]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  const calculateGap = (width: number) => {
    const minWidth = 1024;
    const maxWidth = 1456;
    const minGap = 60;
    const maxGap = 86;
    if (width <= minWidth) return minGap;
    if (width >= maxWidth)
      return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
    return (
      minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
    );
  };

  return (
    <div
      ref={componentRef}
      className={`w-full mx-auto antialiased font-sans py-2 sm:py-4 md:py-6 lg:py-8 pb-2 sm:pb-4 md:pb-6 lg:pb-8`}
      style={{
        lineHeight: currentSpacing.lineHeight,
        backgroundColor: "transparent",
        direction: isRTL ? "rtl" : "ltr"
      }}
    >
      <div
        className="relative"
        style={{
          display: "grid",
          gridTemplateColumns: isMobileView
            ? "1fr"
            : isRTL
            ? "1fr 1fr"
            : "1fr 1fr",
          gap: isMobileView ? "16px" : `${calculateGap(componentWidth)}px`
        }}
      >
        <div className="w-full px-1 sm:px-0">
          <div
            className="relative"
            style={{ 
              paddingTop: isMobileView 
                ? `${(1 / 1.2) * 100}%` 
                : `${(1 / imageAspectRatio) * 100}%` 
            }}
          >
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY()
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY()
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <ImageContainer
                    src={testimonial.src}
                    alt={testimonial.name}
                    outerRounding={isMobileView ? "6px" : outerRounding}
                    innerRounding={isMobileView ? "4px" : innerRounding}
                    outlineColor={outlineColor}
                    hoverOutlineColor={hoverOutlineColor}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-2 sm:py-4 w-full px-1 sm:px-0">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="mb-4 sm:mb-6"
          >
            <h3
              className={`font-bold`}
              style={{
                fontSize: currentFontSizes.name,
                color: colors.name,
                marginTop: currentSpacing.nameTop,
                marginBottom: currentSpacing.nameBottom
              }}
            >
              {testimonials[active].name}
            </h3>
            <p
              style={{
                fontSize: currentFontSizes.position,
                color: colors.position,
                marginTop: currentSpacing.positionTop,
                marginBottom: currentSpacing.positionBottom
              }}
            >
              {testimonials[active].designation}
            </p>
            <motion.p
              style={{
                fontSize: currentFontSizes.testimony,
                color: colors.testimony,
                marginTop: currentSpacing.testimonyTop,
                marginBottom: currentSpacing.testimonyBottom
              }}
            >
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div
            className={`flex gap-2 sm:gap-3 md:gap-4 w-full`}
          >
            <HalomotButton
              inscription={buttonInscriptions.previousButton}
              onClick={handlePrev}
              fixedWidth={isMobileView ? "120px" : "140px"}
              gradient="linear-gradient(135deg, #4a5568, #2d3748)"
              backgroundColor="#000000"
              textColor="#ffffff"
              innerBorderRadius={halomotButtonInnerBorderRadius}
              outerBorderRadius={halomotButtonOuterBorderRadius}
              hoverTextColor="#ffffff"
            />
            <HalomotButton
              inscription={buttonInscriptions.nextButton}
              onClick={handleNext}
              fixedWidth={isMobileView ? "120px" : "140px"}
              gradient="linear-gradient(135deg, #4a5568, #2d3748)"
              backgroundColor="#000000"
              textColor="#ffffff"
              innerBorderRadius={halomotButtonInnerBorderRadius}
              outerBorderRadius={halomotButtonOuterBorderRadius}
              hoverTextColor="#ffffff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

type ImageContainerProps = {
  src: string;
  alt: string;
  outerRounding: string;
  innerRounding: string;
  outlineColor: string;
  hoverOutlineColor: string;
};

const ImageContainer = ({
  src,
  alt,
  outerRounding,
  innerRounding,
  outlineColor,
  hoverOutlineColor
}: ImageContainerProps) => (
  <div
    className="relative h-full w-full project-showcase-image-container hover:shadow-lg transition-all duration-300"
    style={{
      borderRadius: outerRounding,
      padding: "1px",
      backgroundColor: outlineColor,
      transition: "background-color 0.3s ease-in-out"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = hoverOutlineColor;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = outlineColor;
    }}
  >
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        borderRadius: innerRounding
      }}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="h-full w-full object-cover object-center"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  </div>
);
