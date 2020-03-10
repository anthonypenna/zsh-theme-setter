#!/usr/bin/env node
import { readFileSync, writeFileSync } from "fs";
import { getZshrcPath } from "./util";

main(process.argv.slice(2, 3)[0]);

function main(arg: string): void {
  if (arg) {
    /* get .zshrc file contents */
    const zshrc = readFileSync(getZshrcPath(), "utf8");

    /* split file content by newlines */
    const newLines = zshrc.split(/(\r\n|\n)/g);

    /* find the line where the shell theme is set  */
    const themeLine = newLines.find(line => line.includes("ZSH_THEME"));

    /* get the currently set theme */
    const currentTheme = themeLine?.split('"')[1];

    /* if the selected theme has already been set */
    if (currentTheme === arg) {
      console.warn(`Theme "${arg}" already set.`);
    } else {
      /* replace the current theme with the newly selected one */
      const newZshrc = zshrc.replace(
        `ZSH_THEME="${currentTheme}"`,
        `ZSH_THEME="${arg}"`
      );

      /* write to the .zshrc file */
      writeFileSync(getZshrcPath(), newZshrc);
      console.log(`Successfully set theme "${arg}".`);
    }
  } else {
    console.warn("No theme specified.");
  }

  /* exit */
  process.exit(0);
}
