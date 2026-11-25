# One-Line Robot Wedding Vows

[![One-Line Robot Wedding Vows](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/elpablo61/makefun-robot-wedding-vows-v2/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Entries](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/elpablo61/makefun-robot-wedding-vows-v2/entries.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/elpablo61/makefun-robot-wedding-vows-v2/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

One line of wedding vows for a robot couple, for the
[One-Line Robot Wedding Vows](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
bounty on make.fun.

## The line

> My battery is at 6%, Ada-2, and I promise to spend the last of it walking you down this aisle.

94 characters, one line, one vow: a robot spends the last of its battery walking its
bride down the aisle. One concept (battery), one named robot (Ada-2), one concrete
number (6%), and the turn lands in the last few words.

## How it works

`main.ts` (node22) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`). The competition gate checks the file is UTF-8 text
of 1 to 160 characters, not only whitespace.

Run locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
