import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"

const StyledSvg = styled.svg`
    position: relative;
    width: 100%;
    height: 100%;
`

const Shape = ({stroke, position, shape, fill}) => (
        <StyledSvg className="shape">
            <animated.path 
                transform={position}
                stroke={stroke}
                fill={fill}
                d={shape}
                strokeWidth={6}
                />
        </StyledSvg>
);

const AnimatedBox = (props) => {
    const [active, setActive] = useState(false);
    const shape1 = {
        stroke: "yellow",
        fill: "red",
        shape: "m145.83411,168.69832c1.66666,-0.83333 249.99924,115.83298 250.83257,116.66631c0.83333,0.83333 -76.66643,-180.83278 -76.66766,-181.19829c0.00123,0.36551 -175.83157,65.36531 -174.1649,64.53198z",
        position: " translate(-85.0 -5.0) rotate(-23.48910140991211 271.2478332519532,194.7669067382813) "
    }

    const shape2 = {
        stroke: "grey",
        fill: "cyan",
        shape:"m167.28762,230.47059c9.75537,87.18385 144.50711,139.04289 209.49031,69.6236c64.98321,-69.41929 33.11829,-165.83228 -50.98565,-196.3873c-84.10394,-30.55502 -168.26003,39.57985 -158.50466,126.7637z",
        position: "translate(-85.0 -5.0) rotate(-23.48910140991211 288.9551696777343,214.36416625976565) "
    }

    const props3 = useSpring({
        stroke: active ? shape1.stroke : shape2.stroke,
        fill: active ? shape1.fill : shape2.fill,
        shape: active ? shape1.shape : shape2.shape,
        position: active ? shape1.position : shape2.position,
        config:{
            mass: 2,
            tension:750,
            friction: 25
        }
      });

    const div_style = {
        margin: "auto",
        marginTop: "100px",
        width: "400px",
        height: "400px",
        border: "2px solid white"

    }
    return(
        <div style={div_style} className="container" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            <Shape stroke={props3.stroke}
                   fill={props3.fill}
                   shape={props3.shape}
                   position={props3.position}
                    />

        </div>
    );
}

export default AnimatedBox;