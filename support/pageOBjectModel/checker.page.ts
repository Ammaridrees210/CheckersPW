import {expect, Page} from "@playwright/test"

export default class checker{
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    public async goto(){
        await this.page.goto("https://www.gamesforthebrain.com/game/checkers/");
    }

    // Locator functions to Pass Random Selector Moves Number
    async checkerGamePiecesMove(position: string) {
        return this.page.$(`[name="space${position}"]`);
    }
    //Assertion
    youHaveWon = () => this.page.getByText("You have won!")
    //First Test Assertion
    positionStayFilled = () => this.page.locator('[name="space71"]').waitFor();
    //Second Test Assertion
    positionEmpty = () => this.page.locator('[name="space62"],[src="https://www.gamesforthebrain.com/game/checkers/gray.gif"]').all();

    positionOfOrangeColorPiece = () => this.page.locator('[name ="space04"]').waitFor();

    //Action
    public async checkerGameMoves(){
        await this.checkerGamePiecesMove('02')?.then(element => element?.click());
        await this.checkerGamePiecesMove('13')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('11')?.then(element => element?.click());
        await this.checkerGamePiecesMove('02')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('00')?.then(element => element?.click());
        await this.checkerGamePiecesMove('11')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('42')?.then(element => element?.click());
        await this.checkerGamePiecesMove('24')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('31')?.then(element => element?.click());
        await this.checkerGamePiecesMove('42')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('42')?.then(element => element?.click());
        await this.checkerGamePiecesMove('53')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('22')?.then(element => element?.click());
        await this.checkerGamePiecesMove('44')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('24')?.then(element => element?.click());
        await this.checkerGamePiecesMove('35')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('13')?.then(element => element?.click());
        await this.checkerGamePiecesMove('35')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('11')?.then(element => element?.click());
        await this.checkerGamePiecesMove('22')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('20')?.then(element => element?.click());
        await this.checkerGamePiecesMove('11')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('40')?.then(element => element?.click());
        await this.checkerGamePiecesMove('31')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('22')?.then(element => element?.click());
        await this.checkerGamePiecesMove('13')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('13')?.then(element => element?.click());
        await this.checkerGamePiecesMove('04')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('35')?.then(element => element?.click());
        await this.checkerGamePiecesMove('26')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('26')?.then(element => element?.click());
        await this.checkerGamePiecesMove('17')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('04')?.then(element => element?.click());
        await this.checkerGamePiecesMove('26')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('31')?.then(element => element?.click());
        await this.checkerGamePiecesMove('42')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('36')?.then(element => element?.click());
        await this.checkerGamePiecesMove('37')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('37')?.then(element => element?.click());
        await this.checkerGamePiecesMove('46')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
        await this.checkerGamePiecesMove('26')?.then(element => element?.click());
        await this.checkerGamePiecesMove('37')?.then(element => element?.click()).then(() => this.page.waitForTimeout(1000));
        await this.checkerGamePiecesMove('37')?.then(element => element?.click());
        await this.checkerGamePiecesMove('46')?.then(element => element?.click()).then(() => this.page.waitForTimeout(1000));
        await this.checkerGamePiecesMove('02')?.then(element => element?.click());
        await this.checkerGamePiecesMove('24')?.then(element => element?.click()).then(() => this.page.waitForTimeout(1000));
        await this.checkerGamePiecesMove('11')?.then(element => element?.click());
        await this.checkerGamePiecesMove('33')?.then(element => element?.click()).then(() => this.page.waitForTimeout(1000));
    }
    public async assertionsOfGameEnd(){
        await expect(this.youHaveWon()).toBeVisible();
    }

    public async checkPiecesMovesOverlap(){
        await this.checkerGamePiecesMove('71')?.then(element => element?.click());
        await this.checkerGamePiecesMove('62')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
    }
    public async verifyPositionOfPiece(){
        await this.positionStayFilled();
    }

    public async checkPiecesMovesEmptyBox(){
        await this.checkerGamePiecesMove('62')?.then(element => element?.click());
        await this.checkerGamePiecesMove('53')?.then(element => element?.click()).then(() => this.page.waitForTimeout(2000));
    }
    public async verifyPositionOfPieceIsMoved(){
        await this.positionEmpty();
    }

    public async Orange_BluePiecesMovement(){
        await this.checkerGamePiecesMove('22')?.then(element => element?.click());
        await this.checkerGamePiecesMove('33')?.then(element => element?.click());
    }
    public async orangeColorPieceMove(){
        await this.positionOfOrangeColorPiece();
    }
}