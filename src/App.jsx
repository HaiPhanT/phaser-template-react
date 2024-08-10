import { useRef, useState } from "react";

import Phaser from "phaser";
import { PhaserGame } from "./game/PhaserGame";

function App() {
    // The sprite can only be moved in the MainMenu Scene
    const [canMoveSprite, setCanMoveSprite] = useState(true);

    //  References to the PhaserGame component (game and scene are exposed)
    const phaserRef = useRef();
    const [spritePosition, setSpritePosition] = useState({ x: 0, y: 0 });

    // Event emitted from the PhaserGame component
    const currentScene = (scene) => {
        setCanMoveSprite(scene.scene.key !== "MainMenu");
    };

    const goUp = () => {
        const scene = phaserRef.current.scene;

        if (scene) {
            scene.goUp(({ x, y }) => {
                setSpritePosition({ x, y });
            });
        }
    };

    const goDown = () => {
        const scene = phaserRef.current.scene;

        if (scene) {
            scene.goDown(({ x, y }) => {
                setSpritePosition({ x, y });
            });
        }
    };

    const goLeft = () => {
        const scene = phaserRef.current.scene;

        if (scene) {
            scene.goLeft(({ x, y }) => {
                setSpritePosition({ x, y });
            });
        }
    };

    const goRight = () => {
        const scene = phaserRef.current.scene;

        if (scene) {
            scene.goRight(({ x, y }) => {
                setSpritePosition({ x, y });
            });
        }
    };

    return (
        <div id="app">
            <PhaserGame ref={phaserRef} currentActiveScene={currentScene} />
            <div>
                <div className="button-container">
                    <button className="button" onClick={goUp}>
                        Up
                    </button>
                    <button className="button" onClick={goDown}>
                        Down
                    </button>
                    <button className="button" onClick={goLeft}>
                        Left
                    </button>
                    <button className="button" onClick={goRight}>
                        Right
                    </button>
                </div>
                <div className="spritePosition">
                    Sprite Position:
                    <pre>{`{\n  x: ${spritePosition.x}\n  y: ${spritePosition.y}\n}`}</pre>
                </div>
            </div>
        </div>
    );
}

export default App;
