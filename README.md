# franbac 🥓

helps encode/decode strings that use two different characters to represent A's and B's. more info about the bacon cipher [here](https://en.wikipedia.org/wiki/Bacon%27s_cipher)

it will try to decode with letter 1 = A and letter 2 = A. if one of those decoded texts results in an invalid plaintext, it will discard it. it will try with the default alphabet and the alternate alphabet (both are in that wikipedia page).

## install + use
easist to use `npx` to run on-demand

### decode
`franbac decode <ciphertext>`

```bash
$ npx franbac decode aaaaaaaaabaaaba
ABC
```

decode emojis
```bash
$ npx franbac decode 🌸🌿🌸🌿🌿🌿🌸🌿🌿🌸🌿🌸🌸🌸🌿🌿🌸🌸🌿🌿🌸🌿🌿🌸🌸🌸🌸🌸🌸🌸🌸🌿🌿🌸🌸🌸🌸🌸🌿🌿🌿🌸🌸🌸🌿🌿🌸🌸🌿🌸🌸🌸🌸🌸🌸🌿🌸🌸🌸🌸🌿🌸🌸🌸🌿
MYSVNANDSTARS
```

### encode
`franbac <encode> <a> <b> <plaintext>`

```bash
$ npx franbac encode t s hello world
ttsssttstttststtststtsstsststttsstsstttttststtttss
```

encode emojis
```bash
$ npx franbac encode 🥓 🎉 hello world
🥓🥓🎉🎉🎉🥓🥓🎉🥓🥓🥓🎉🥓🎉🥓🥓🎉🥓🎉🥓🥓🎉🎉🥓🎉🎉🥓🎉🥓🥓🥓🎉🎉🥓🎉🎉🥓🥓🥓🥓🥓🎉🥓🎉🥓🥓🥓🥓🎉🎉
```

## roadmap
- [x] support decoding
- [x] support encoding given A and B substitutions
- [ ] support encoding/decoding a file

## license
MIT
