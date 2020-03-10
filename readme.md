# ZSH Theme Setter

Easily set your zsh theme.

## Setup

Make sure you have Node and Oh my ZSH installed.

Then run:
```sh
$ npm install -g zsh-theme-setter
```

The script assumes that:
- you are not using Windows
- your `.zshrc` is located in your home path (/Users/\<user>)

## Usage

```sh
$ zsh-theme <theme-name>
```

Then run `exec zsh` to spawn a shell with the newly set theme.

Example:
```sh
$ zsh-theme obraun
$ exec zsh
```