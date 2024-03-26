import { test, expect } from "@playwright/test";
import checker from "../support/pageOBjectModel/checker.page"
test.describe('CheckGame',() => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        
    });

    test('Checker Game', async ({page}) => {
        const button = await page.$('a[href="/game/checkers/"]:has-text("Checkers")');
        button ? await button.click() : console.error('Button not found');

        test.slow()
        const checkerPage = new checker(page);
        await checkerPage.goto();
        await checkerPage.checkerGameMoves();
        await checkerPage.assertionsOfGameEnd();
    });

    test("Verify We Can't Move a Piece Over Another Piece", async ({page}) => {
        const button = await page.$('a[href="/game/checkers/"]:has-text("Checkers")');
        button ? await button.click() : console.error('Button not found');

        const checkerPage = new checker(page);
        await checkerPage.goto();
        await checkerPage.checkPiecesMovesOverlap();
        await checkerPage.verifyPositionOfPiece();
    });

    test("Verify if the Piece Moves Then The Previous Piece placed Empty", async ({page}) => {
        const button = await page.$('a[href="/game/checkers/"]:has-text("Checkers")');
        button ? await button.click() : console.error('Button not found');

        const checkerPage = new checker(page);
        await checkerPage.goto();
        await checkerPage.checkPiecesMovesEmptyBox();
        await checkerPage.verifyPositionOfPieceIsMoved();
    });

    test("Verify if Orange Piece moves then in response Blue Piece Must move", async ({page}) => {
        const button = await page.$('a[href="/game/checkers/"]:has-text("Checkers")');
        button ? await button.click() : console.error('Button not found');

        const checkerPage = new checker(page);
        await checkerPage.goto();
        await checkerPage.Orange_BluePiecesMovement();
        await checkerPage.orangeColorPieceMove();
    });
});