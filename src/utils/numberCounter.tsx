import { useSpring, animated } from "react-spring";


export default function NumberCounter({n}: {n: number}) {
    const { number } = useSpring({
        from: {number: 0},
        number: n,
        delay: 200,
        config: {
            mass: 1,
            friction: 10,
            tension: 20,
        }
    });

    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}