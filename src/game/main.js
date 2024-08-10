import { Boot } from "./scenes/Boot";
import { Game } from "./scenes/Game";
import Phaser from "phaser";
import { Preloader } from "./scenes/Preloader";

// Find out more information about the Game Config at:
// https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 478,
    height: 630,
    parent: "game-container",
    backgroundColor: "#028af8",
    scene: [Boot, Preloader, Game],
};

const StartGame = (parent) => {
    return new Phaser.Game({ ...config, parent });
};

export default StartGame;
