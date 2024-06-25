import { useAnimate } from "framer-motion";

const BallAnimation = () => {
  const [scope, animate] = useAnimate();

  const startAnimation = async () => {
    // Decrease the radius of the pink circle to 0
    await animate("#pink-circle", { r: 0 }, { duration: 2 });

    // Increase the radius of the pink circle to 22.5
    await animate("#pink-circle", { r: 22.5 }, { duration: 0.5 });

    // Move the pink circle horizontally to x-coordinate 400
    await animate("#pink-circle", { cx: 400 }, { duration: 0.2 });

    // Move the pink circle vertically to y-coordinate 400
    await animate("#pink-circle", { cy: 400 }, { duration: 0.5 });

    // Move the pink circle horizontally to x-coordinate 50
    await animate("#pink-circle", { cx: 50 }, { duration: 0.5 });

    // Move the pink circle vertically to y-coordinate 250
    await animate("#pink-circle", { cy: 250 }, { duration: 0.5 });

    // Move the pink circle horizontally to x-coordinate 250
    await animate("#pink-circle", { cx: 250 }, { duration: 0.5 });

    // Increase the radius of the pink circle to 50
    await animate("#pink-circle", { r: 50 }, { duration: 0.5 });

    // Combine one or more animations
    // Simultaneously move the pink circle vertically and change its radius
    const animation1 = animate("#pink-circle", { cy: 200 }, { duration: 0.5 });
    const animation2 = animate("#pink-circle", { r: 40 }, { duration: 0.5 });
    await Promise.all([animation1, animation2]); // Execute both animations at the same time

    // Another set of animations after the first set completes
    // Move the pink circle back down and increase its radius
    await animate("#pink-circle", { fill: "transparent" }, { duration: 1 });
    await animate("#pink-circle", { fill: "#F3B7B7" }, { duration: 0.5 });
  };

  return (
    <div>
      <p className="mt-10 "> Hover on the box below</p>
      <div
        ref={scope}
        className="flex flex-col items-center justify-center h-screen mt-10 bg-transparent border-2 rounded-lg border-cyan-400"
        onMouseEnter={startAnimation}
      >
        <svg
          width="500"
          height="500"
          viewBox="0  0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle id="pink-circle" cx="250" cy="250" r="50" fill="#F3B7B7" />
        </svg>
      </div>
    </div>
  );
};

export default BallAnimation;
