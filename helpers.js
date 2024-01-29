import { SingleBar, Presets } from "cli-progress";
import chalk from "chalk"
const c = chalk;

async function sleep(sec, reason = "Sleep") {
    let bar = new SingleBar(
        {
            format: `${reason} | ${chalk.gray(
                "{bar}",
            )} | {percentage}% | {value}/{total} sec`,
        },
        Presets.shades_classic,
    );
    bar.start(sec, 0);
    for (let i = 0; i < sec; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        bar.increment();
    }
    bar.stop();
}
async function defaultSleep(sec, needProgress = true) {
    if (needProgress) {
        let newpaste = ["-", `\\`, `|`, `/`];
        for (let i = 0; i < sec * 2; i++) {
            process.stdout.clearLine(); // clear current text
            process.stdout.cursorTo(0);
            process.stdout.write(`${newpaste[i % 4]}`);
            await await new Promise((resolve) => setTimeout(resolve, 500));
        }
        process.stdout.clearLine(); // clear current text
        process.stdout.cursorTo(0);
        return;
    }
    return await new Promise((resolve) => setTimeout(resolve, sec * 1000));
}
function getRandomIntFromTo(min, max) {
    let delta = max - min;
    return Math.round(min + Math.random() * delta);
}
export { c, sleep, defaultSleep, getRandomIntFromTo }