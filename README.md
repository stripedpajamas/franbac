# franbac

helps decode strings that use two different characters to represent A's and B's. more info about the bacon cipher [here](https://en.wikipedia.org/wiki/Bacon%27s_cipher)

it will try to decode with letter 1 = A and letter 2 = A. if one of those decoded texts results in an invalid plaintext, it will discard it

## install + use
easist to use `npx` to run on-demand
```bash
$ npx franbac aaaaaaaaabaaaba
ABC
```

supports emojis
```bash
$ npx franbac 🌸🌿🌸🌿🌿🌿🌸🌿🌿🌸🌿🌸🌸🌸🌿🌿🌸🌸🌿🌿🌸🌿🌿🌸🌸🌸🌸🌸🌸🌸🌸🌿🌿🌸🌸🌸🌸🌸🌿🌿🌿🌸🌸🌸🌿🌿🌸🌸🌿🌸🌸🌸🌸🌸🌸🌿🌸🌸🌸🌸🌿🌸🌸🌸🌿
MYSVNANDSTARS
```

## license
MIT
