import { Animated } from "react-native";
import { Coordinate } from "../types";
import { Colors, colors } from "../styles/theme";
import {
    BORDER,
    BORDER_RADIUS,
    GAP,
    HEADER_HEIGHT,
    PIXEL,
    SPEED,
} from "../consts";

const Snake = ({ snake, top}) => {
    return (
        <>
        {snake.map((node, index) => {
            const nodeStyle = {
                with: PIXEL,
                height: PIXEL,
                borderWidth: GAP,
                borderColor: color.p6,
                borderRadius: BORDER_RADIUS,
                top: node.y * PIXEL + top + HEADER_HEIGHT,
                left: node.x * PIXEL + BORDER,
                backgroudColor: index === 0 ? 99 : 1,
            };
        })}
        </>
    )
}