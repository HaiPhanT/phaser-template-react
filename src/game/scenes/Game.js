import { EventBus } from "../EventBus";
import { Scene } from "phaser";

export class Game extends Scene {
    hr;
    hrTween;

    dev;
    devTween;

    constructor() {
        super("Game");
    }

    create() {
        // this.cameras.main.setBackgroundColor(0x00ff00);

        this.add.image(239, 315, "background");

        this.hr = this.add.image(175, 50, "hr");
        this.dev = this.add.image(175, 580, "dev");

        // this.add.text(512, 384, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
        //     fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
        //     stroke: '#000000', strokeThickness: 8,
        //     align: 'center'
        // }).setOrigin(0.5).setDepth(100);

        EventBus.emit("current-scene-ready", this);
    }

    changeScene() {}

    goUp(reactCallback) {
        const newY = this.dev.y - 10 > 0 ? this.dev.y - 10 : 0;

        this.devTween = this.tweens.add({
            targets: this.dev,
            y: newY,
            duration: 300,
            ease: "Power2",
            onUpdate: () => {
                if (reactCallback) {
                    reactCallback({
                        x: Math.floor(this.dev.x),
                        y: Math.floor(this.dev.y),
                    });
                }
            },
        });
    }

    goDown(reactCallback) {
        const newY = this.dev.y + 10 < 630 ? this.dev.y + 10 : 630;

        this.devTween = this.tweens.add({
            targets: this.dev,
            y: newY,
            duration: 300,
            ease: "Power2",
            onUpdate: () => {
                if (reactCallback) {
                    reactCallback({
                        x: Math.floor(this.dev.x),
                        y: Math.floor(this.dev.y),
                    });
                }
            },
        });
    }

    goLeft(reactCallback) {
        const newX = this.dev.x - 10 > 0 ? this.dev.x - 10 : 0;

        this.devTween = this.tweens.add({
            targets: this.dev,
            x: newX,
            duration: 300,
            ease: "Power2",
            onUpdate: () => {
                if (reactCallback) {
                    reactCallback({
                        x: Math.floor(this.dev.x),
                        y: Math.floor(this.dev.y),
                    });
                }
            },
        });
    }

    goRight(reactCallback) {
        const newX = this.dev.x + 10 < 478 ? this.dev.x + 10 : 478;

        this.devTween = this.tweens.add({
            targets: this.dev,
            x: newX,
            duration: 300,
            ease: "Power2",
            onUpdate: () => {
                if (reactCallback) {
                    reactCallback({
                        x: Math.floor(this.dev.x),
                        y: Math.floor(this.dev.y),
                    });
                }
            },
        });
    }
}
